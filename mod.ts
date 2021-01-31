const strdist = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1,
                track[j - 1][i] + 1,
                track[j - 1][i - 1] + indicator,
            );
        }
    }
    return track[str2.length][str1.length];
};

function snakeToName(i: string) {
    let res: string[] = [];
    for (let part of i.split('_')) {
        let str = part[0].toUpperCase() + part.slice(1);
        if (str == "And") str = "and";
        if (str == "Sdk") str = "SDK";
        res.push(str);
    }
    return res.join(' ');
}

function pascalCase(i: string) {
    let res: string[] = [];
    for (let part of i.replaceAll("_", " ").replaceAll("-", " ").replaceAll(/ +/g, " ").split(" ")) {
        if (part == "") continue;
        res.push(part[0].toUpperCase() + part.slice(1));
    }
    return res.join("");
}

function camelCase(i: string) {
    let r = pascalCase(i);
    return r[0].toLowerCase() + r.slice(1);
}

function stripBold(i: string) {
    while (i.startsWith("*")) i = i.slice(1);
    while (i.endsWith("*")) i = i.substr(1, i.length - 1);
    return i;
}

function stripPartial(i: string) {
    if (i.startsWith("Partial")) i = i.slice(7).trim();
    return i;
}

function trimObjectName(i: string) {
    return i.replaceAll("#", "").replaceAll(" ", "").trim().replaceAll("Object", "Payload").replaceAll("Structure", "Payload").replaceAll("PayloadPayload", "").trim();
}

const PRIMARY_TYPES = ["integer", "boolean", "string", "snowflake", "timestamp", "any", "float", "null"];

function fixType(i: string, names: string[]) {
    let links = i.match(/\[[\S\s]*\]\([\S\s]*\)/g);
    if (links) {
        links.forEach(link => {
            let name = (link.split("]").shift() as string).split("[")[1];
            i = i.replace(link, name);
        });
    }
    i = i.split(" or ").map(e => {
        e = e.replaceAll("objects", "").replaceAll("object", "").replaceAll(/ +/g, " ").trim().split("(")[0].replaceAll("\\", "").replaceAll("*", "");
        if (e == "ISO8601 timestamp") return "timestamp";
        let isarr = false;
        if (e.startsWith("array")) {
            e = e.replaceAll("array of", "").replaceAll("array ", "").trim();
            isarr = true;
        }
        if (e.startsWith("list of")) {
            e = e.replaceAll("list of", "").trim();
            isarr = true;
        }
        if (e == "mixed") e = "any";
        if (e == "int") e = "integer";
        if (e.endsWith("s")) e = e.substr(0, e.length - 1);
        if (!PRIMARY_TYPES.includes(e.toLowerCase())) {
            e = stripPartial(pascalCase(e));
            if (e == "Account") e = "IntegrationAccount";
            if (e == "Sticker") e = "MessageSticker";
            if (e == "UpdateStatu" || e == "Presence") e = "PresenceUpdate";
            if (e == "UnavailableGuild") e = "Guild";
            if (e == "Party") e = "ActivityParty";
            if (e == "RpcServerConfiguration") e = "RpcServerConfigurationPayload";
            // if (e == "OAuth2Scope") e = "string";
            if (e == "TeamMember") e = "TeamMembers";
            if (e == "APartialEmoji") e = "Emoji";
            if (e == "ClientStatu") e = "ClientStatus";
            let f1 = e == "string" ? undefined : names.find(n => (e + "Payload") == n);
            if (f1) e = f1;
            else if (e != "string") {
                let find = names.map(n => ({ name: n, dist: strdist(n, e) })).sort((b, a) => b.dist - a.dist)[0];
                if (find.dist < 7) e = find.name;
            }
        } else e = e.toLowerCase();
        e = e.trim() + (isarr ? "[]" : "");
        if (e == "TwoInteger[]") e = "integer[]";
        if (e == "Array[]") e = "[]";
        return e;
    }).filter(e => e != "").join(" | ");
    return i;
}

const doc_path = "./repo/docs";
export const repo = [...Deno.readDirSync(doc_path)];
export const navlist = repo.filter(e => e.isDirectory === true).map(e => e.name);

const list: { [name: string]: Array<{ file: string, contents: string }> } = {};
for (let nav of navlist) {
    const files = Deno.readDirSync(doc_path + "/" + nav);
    const name = snakeToName(nav);
    list[name] = [];
    for (let file of files) {
        if (!file.isFile) continue;
        const contents = Deno.readTextFileSync(doc_path + "/" + nav + "/" + file.name);
        list[name].push({ file: file.name.replaceAll("_", " "), contents });
    }
}

export interface DataField {
    name: string
    description: string
    type: string
    optional: boolean
    nullable: boolean
    notes?: number
}

export interface DataStructure {
    name: string
    description?: string
    fields: DataField[]
    notes?: string[]
}

export interface DataEnumField {
    name: string
    value: string
    description?: string
}

export interface DataEnum {
    name: string
    description?: string
    fields: DataEnumField[]
}

export type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'HEAD' | 'DELETE';

export interface DataEndpoint {
    name: string
    description?: string
    method: RequestMethod
    path: string
}

let structs: DataStructure[] = [];
let enums: DataEnum[] = [];
let endpoints: DataEndpoint[] = [];

console.log("Starting doc analysis...");
for (let [_head, nav] of Object.entries(list)) {
    for (let { file, contents } of nav) {
        const lines = contents.replaceAll("\r\n", "\n").split("\n");
        for (let index in lines) {
            let idx = Number(index);
            let line = lines[idx].trim();
            let predict: string | undefined = lines[idx + 2];
            let counter = 0;
            while (counter < 5) {
                predict = lines[idx + 2 + counter];
                if (!predict && predict != '') break;
                if (predict.startsWith("|")) break;
                counter++;
            }
            if (line.startsWith("## ") && line.includes(" % ")) {
                let spl = line.slice(2).trim().split("%").map(e => e.trim());
                if (spl.length != 2) continue;
                let desc = "";
                for (let i = 1; i <= 4; i++) {
                    let ln = lines[idx + i];
                    if ((!ln && ln != '') || ln.startsWith("#") || ln.startsWith(">") || ln.startsWith("|")) break;
                    if (desc != "") ln = "\n" + ln;
                    desc += ln;
                }
                let [method,path] = spl[1].split(" ").map(e => e.trim());
                endpoints.push({
                    name: spl[0],
                    description: desc,
                    method: method as RequestMethod,
                    path,
                });
            } else if (
                line.startsWith("#")
                && (
                    line.endsWith("Structure")
                    || line.endsWith("Object")
                    || line.endsWith("Payload")
                    || line.endsWith("Interaction")
                    || line.endsWith("Audit Entry Info")
                    || line.endsWith("Interaction Response")
                    || line.endsWith("CallbackData")
                    || line.endsWith("Event Fields")
                    || line.endsWith("Properties")
                    || line.endsWith("Party")
                    || line.includes("ApplicationCommand")
                    // || line.endsWith("Params") // broken
                )
                && !line.includes("# Example")
                && !line.endsWith("Return Object")
                && predict 
                && (
                    predict.replaceAll(/ +/g, " ").toLowerCase().includes("field | type | description")
                    || predict.replaceAll(/ +/g, " ").toLowerCase().includes("name | value | description")
                )
            ) {
                let name = trimObjectName(line);
                if (name == "") continue;
                if (name == "ClientStatus") console.log(name);
                if (!name.endsWith("Object") && !name.endsWith("Payload")) name += "Payload";
                let tbstart = idx + 2 + counter;
                let tbend = tbstart;
                while (lines[tbend + 1] && lines[tbend + 1].startsWith("|")) tbend++;
                if (tbstart == tbend) continue;
                let desc = "";
                for (let i = 0; i <= counter; i++) {
                    let ln = lines[idx + i];
                    if (!ln || ln.startsWith("#")) continue;
                    if (desc != "") ln = "\n" + ln;
                    desc += ln;
                }
                let table: (string[])[] = [];
                for (let i = 0; i <= (tbend - tbstart); i++) {
                    let idx = tbstart + i;
                    let ln = lines[idx].trim();
                    if (i == 0 && ln != "| Field | Type | Description |") continue;
                    if (i == 0) continue;
                    if (ln.replaceAll(" ", "").startsWith("|-")) continue;
                    let tln = ln.replaceAll(/ +/g, " ").replaceAll(/-+/g, "-").slice(2).trim().split("|").map(e => e.trim()).filter(e => e != "");
                    table.push(tln);
                }
                if (table.length == 0) continue;
                let fields: DataField[] = [];
                let ntf: number[] = [];
                let struc = name;
                for (let tb of table) {
                    let name = tb[0];
                    if (!name) continue;
                    let type = tb[1];
                    if (!type) continue;
                    let description = tb[2];
                    if (!description) continue;
                    let optional = false;
                    let nullable = false;
                    let nt = name.match(/\\\*/g);
                    if (nt) {
                        ntf.push(nt.length);
                    }
                    let notes: number | undefined = undefined;
                    while (name.includes("\\*")) {
                        if (notes == undefined) notes = 0;
                        notes++;
                        name = name.replace("\\*", "");
                    }
                    name = name.trim();
                    while (name.endsWith("?")) {
                        name = name.substr(0, name.length - 1);
                        optional = true;
                    }
                    while (type.startsWith("?")) {
                        type = type.substr(1, type.length - 1);
                        nullable = true;
                    }
                    name = name.replaceAll("\\", "");
                    if (struc == "IdentifyPayload" && name == "properties") type = "IdentifyConnectionPropertiesPayload";
                    if (struc == "GatewayPayload" && name == "d") {
                        type = "any";
                        nullable = true;
                    }
                    if (struc == "GatewayPayload" && name == "s") {
                        type = "integer";
                        nullable = true;
                    }
                    if (struc == "GatewayPayload" && name == "e") {
                        type = "string";
                        nullable = true;
                    }
                    fields.push({
                        name,
                        description,
                        type,
                        nullable,
                        optional,
                        notes
                    });
                }
                let notes: undefined | string[] = undefined;
                if (ntf.length != 0) {
                    notes = [];
                    let ntc = 0;
                    while (ntc < 10) {
                        let num = tbend + ntc + 1;
                        let ln = lines[num];
                        if (ln.startsWith("**") || ln.startsWith("\\*")) notes.push(stripBold(ln));
                        ntc++;
                    }
                }
                if (name == "PresenceUpdateEventFieldsPayload") name = "PresenceUpdatePayload";
                structs.push({
                    name,
                    description: desc,
                    fields,
                    notes: notes?.filter(e => e != "")
                });
            } else if (
                line.startsWith("#")
                && (
                    line.endsWith("Type")
                    || line.endsWith("Types")
                    || line.endsWith("Level")
                    || line.endsWith("Tier")
                    || line.endsWith("Flags")
                    || line.endsWith("Log Events")
                    || line.endsWith("Features")
                    || line.endsWith("Behaviors")
                    || line.endsWith("Enum")
                    || line.endsWith("Scopes")
                )
                && predict
                && (
                    predict.replaceAll(/ +/g, " ").startsWith("| Flag |")
                    || predict.replaceAll(/ +/g, " ").startsWith("| Level |")
                    || predict.replaceAll(/ +/g, " ").startsWith("| Type |")
                    || predict.replaceAll(/ +/g, " ").startsWith("| Key |")
                    || predict.replaceAll(/ +/g, " ").startsWith("| Name |")
                    || predict.replaceAll(/ +/g, " ").startsWith("| Value |")
                    || predict.replaceAll(/ +/g, " ").startsWith("| Event |")
                    || predict.replaceAll(/ +/g, " ").startsWith("| Feature |")
                )
            ) {
                let name = trimObjectName(line).replaceAll(" ", "").trim();
                if (name == "") continue;
                if (enums.some(e => e.name == name)) continue;
                let _data = predict.replaceAll(/ +/g, " ").trim();
                let data = _data.substr(1, _data.length - 2).split("|").map(e => e.trim());
                let fields: DataEnumField[] = [];
                let tbstart = idx + 2 + counter;
                let tbend = tbstart;
                while (lines[tbend + 1] && lines[tbend + 1].startsWith("|")) tbend++;
                if (tbstart == tbend) continue;
                let desc = "";
                for (let i = 0; i <= counter; i++) {
                    let ln = lines[idx + i];
                    if (!ln || ln.startsWith("#")) continue;
                    if (desc != "") ln = "\n" + ln;
                    desc += ln;
                }
                for (let i = 0; i <= (tbend - tbstart); i++) {
                    let idx = tbstart + i;
                    let ln = lines[idx].trim();
                    if (i == 0) continue;
                    if (ln.replaceAll(" ", "").startsWith("|-")) continue;
                    let tln = ln.replaceAll(/ +/g, " ").replaceAll(/-+/g, "-").slice(2).trim().split("|").map(e => e.trim()).filter(e => e != "");
                    if (data[0] == "Value") {
                        let tmp = tln[0];
                        tln[0] = tln[1];
                        tln[1] = tmp;
                    }
                    if (name == "MembershipScreeningFieldTypes") tln[1] = "\"" + tln[1] + "\"";
                    let field: DataEnumField = {
                        name: pascalCase(tln[0].toLowerCase().replaceAll(" ", " ").trim().replaceAll(".", " ")),
                        value: name == "GuildFeatures" || name == "EmbedTypes" || name == "OAuth2Scopes" ? `"${tln[0].replaceAll(" ", "").trim()}"` : tln[1],
                        description: name == "GuildFeatures" || name == "EmbedTypes" || name == "OAuth2Scopes" ? tln[1] : tln[2],
                    };
                    fields.push(field);
                }
                if (fields.length == 0) continue;
                enums.push({
                    name,
                    description: desc,
                    fields
                });
            }
        }
    }
}

structs = structs.map(e => {
    e.fields = e.fields.map(e => {
        e.type = fixType(e.type, [...structs, ...enums].map(e => e.name));
        return e;
    })
    return e;
});

// let r = /(\()((?:(?:(?!\1).))*)\)/gm;
// const repl = (m: string = '') => {
//     if (!m.includes("#")) return m;
//     let nl = `(https://discord.com/developers/docs/${m.split("#")[1].split("/")[0].slice(5).replaceAll("_", "/").toLowerCase()}/#${m.split("#")[1].split("/")[1]})`;
//     return nl;
// };

// let sstr = JSON.stringify(structs);
// let m1 = sstr.match(r) || [];
// m1.forEach((m) => { sstr = sstr.replaceAll(m, repl(m)); });
// structs = JSON.parse(sstr);

// let sstr2 = JSON.stringify(enums);
// let m2 = sstr.match(r) || [];
// m2.forEach((m) => { sstr2 = sstr2.replaceAll(m, repl(m)); });
// enums = JSON.parse(sstr2);

// let sstr3 = JSON.stringify(endpoints);
// let m3 = sstr.match(r) || [];
// m3.forEach((m) => { sstr3 = sstr3.replaceAll(m, repl(m)); });
// endpoints = JSON.parse(sstr3);

Deno.writeTextFileSync("./docs.json", JSON.stringify({ structs, enums, endpoints }, undefined, 2));
console.log(`Written ${structs.length} structures, ${enums.length} enums, ${endpoints.length} endpoints to docs.json`);

console.log("Starting TS conversion...");
const lines: string[] = [];

const IDENT = '    ';
for (const e of enums) {
    if (e.description) lines.push(`/** ${e.description} */`);
    lines.push(`export enum ${e.name} {`);
    for (const f of e.fields) {
        if (f.description) lines.push(`${IDENT} /** ${f.description} */`);
        lines.push(`${IDENT}${f.name} = ${f.value},`);
    }
    lines.push('}\n');
}

lines.push('');
for (const e of structs) {
    if (e.description) lines.push(`/** ${e.description} */`);
    lines.push(`export interface ${e.name} {`);
    for (const f of e.fields) {
        if (f.description) lines.push(`${IDENT} /** ${f.description} */`);
        let types = f.type.split("|").map(e => e.trim());
        for (let i = 0; i < types.length; i++) {
            let type = types[i];
            let isarr = type.endsWith("[]");
            if (isarr) type = type.substr(0, type.length - 2);
            if (type == "snowflake") type = "string";
            if (type == "integer" || type == "float") type = "number";
            if (type == "timestamp") type = "Date";
            types[i] = type + (isarr ? '[]' : '');
        }
        lines.push(`${IDENT}${f.name}${f.optional ? '?' : ''}: ${types.join(" | ")}${f.nullable ? ' | null' : ''};`);
    }
    lines.push('}\n');
}

lines.push('');
lines.push('export const DISCORD_API_VERSION = 8;');
lines.push('export const DISCORD_API_BASE = "https://discord.com/api";');
lines.push('');
for (const e of endpoints) {
    if (e.description) lines.push(`/**\n  * ${e.description}  */`);
    let params = e.path.match(/({)((?:(?:(?!\1).))*)}/gm);
    if (params == null) params = [];
    else params = params.map(e=>e.slice(1));
    lines.push(`export function ${camelCase(e.name.split(/ +/).map(e => e.split("/")[0]).join(" "))}(${params.map(e => `${camelCase(e.split("#")[0].replaceAll(".", " "))}: string`).join(", ")}) {`);
    let path = e.path;
    for (let p of params) {
        path = path.replace("{" + p, `$\{${camelCase(p.split("#")[0].replaceAll(".", " "))}}`)
    }
    lines.push(`${IDENT}return \`$\{DISCORD_API_BASE\}/v$\{DISCORD_API_VERSION\}${path}\``);
    lines.push('}\n');
}

Deno.writeTextFileSync("./docs.ts", lines.join("\n"));
console.log("Written to docs.ts");