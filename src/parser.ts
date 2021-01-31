import {
  DataEndpoint,
  DataEnum,
  DataEnumField,
  DataField,
  DataStructure,
  RequestMethod,
} from "./common.ts";
import {
  fixType,
  pascalCase,
  snakeToName,
  stripBold,
  trimObjectName,
} from "./util.ts";

export const doc_path = "./repo/docs";

export type FileTree = {
  [name: string]: Array<{ file: string; contents: string }>;
};
export const getFileTree = () => {
  const repo = [...Deno.readDirSync(doc_path)];
  const navlist = repo.filter((e) => e.isDirectory === true).map((e) => e.name);

  const list: FileTree = {};
  for (let nav of navlist) {
    const files = Deno.readDirSync(doc_path + "/" + nav);
    const name = snakeToName(nav);
    list[name] = [];
    for (let file of files) {
      if (!file.isFile) continue;
      const contents = Deno.readTextFileSync(
        doc_path + "/" + nav + "/" + file.name
      );
      list[name].push({ file: file.name.replaceAll("_", " "), contents });
    }
  }

  return list;
};

export interface ParsedDocs {
  structs: DataStructure[];
  enums: DataEnum[];
  endpoints: DataEndpoint[];
}

export const parseFileTree = (list: FileTree): ParsedDocs => {
  let structs: DataStructure[] = [];
  let enums: DataEnum[] = [];
  let endpoints: DataEndpoint[] = [];

  for (let [_head, nav] of Object.entries(list)) {
    for (let { contents } of nav) {
      const lines = contents.replaceAll("\r\n", "\n").split("\n");
      for (let index in lines) {
        let idx = Number(index);
        let line = lines[idx].trim();
        let predict: string | undefined = lines[idx + 2];
        let counter = 0;
        while (counter < 5) {
          predict = lines[idx + 2 + counter];
          if (!predict && predict != "") break;
          if (predict.startsWith("|")) break;
          counter++;
        }
        if (line.startsWith("## ") && line.includes(" % ")) {
          let spl = line
            .slice(2)
            .trim()
            .split("%")
            .map((e) => e.trim());
          if (spl.length != 2) continue;
          let desc = "";
          for (let i = 1; i <= 4; i++) {
            let ln = lines[idx + i];
            if (
              (!ln && ln != "") ||
              ln.startsWith("#") ||
              ln.startsWith(">") ||
              ln.startsWith("|")
            )
              break;
            if (desc != "") ln = "\n" + ln;
            desc += ln;
          }
          let [method, path] = spl[1].split(" ").map((e) => e.trim());
          endpoints.push({
            name: spl[0],
            description: desc,
            method: method as RequestMethod,
            path,
          });
        } else if (
          line.startsWith("#") &&
          (line.endsWith("Structure") ||
            line.endsWith("Object") ||
            line.endsWith("Payload") ||
            line.endsWith("Interaction") ||
            line.endsWith("Audit Entry Info") ||
            line.endsWith("Interaction Response") ||
            line.endsWith("CallbackData") ||
            line.endsWith("Event Fields") ||
            line.endsWith("Properties") ||
            line.endsWith("Party") ||
            line.includes("ApplicationCommand")) &&
          // || line.endsWith("Params") // broken
          !line.includes("# Example") &&
          !line.endsWith("Return Object") &&
          predict &&
          (predict
            .replaceAll(/ +/g, " ")
            .toLowerCase()
            .includes("field | type | description") ||
            predict
              .replaceAll(/ +/g, " ")
              .toLowerCase()
              .includes("name | value | description"))
        ) {
          let name = trimObjectName(line);
          if (name == "") continue;
          if (name == "ClientStatus") console.log(name);
          if (!name.endsWith("Object") && !name.endsWith("Payload"))
            name += "Payload";
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
          let table: string[][] = [];
          for (let i = 0; i <= tbend - tbstart; i++) {
            let idx = tbstart + i;
            let ln = lines[idx].trim();
            if (i == 0 && ln != "| Field | Type | Description |") continue;
            if (i == 0) continue;
            if (ln.replaceAll(" ", "").startsWith("|-")) continue;
            let tln = ln
              .replaceAll(/ +/g, " ")
              .replaceAll(/-+/g, "-")
              .slice(2)
              .trim()
              .split("|")
              .map((e) => e.trim())
              .filter((e) => e != "");
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
            if (struc == "IdentifyPayload" && name == "properties")
              type = "IdentifyConnectionPropertiesPayload";
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
              notes,
            });
          }
          let notes: undefined | string[] = undefined;
          if (ntf.length != 0) {
            notes = [];
            let ntc = 0;
            while (ntc < 10) {
              let num = tbend + ntc + 1;
              let ln = lines[num];
              if (ln.startsWith("**") || ln.startsWith("\\*"))
                notes.push(stripBold(ln));
              ntc++;
            }
          }
          if (name == "PresenceUpdateEventFieldsPayload")
            name = "PresenceUpdatePayload";
          structs.push({
            name,
            description: desc,
            fields,
            notes: notes?.filter((e) => e != ""),
          });
        } else if (
          line.startsWith("#") &&
          (line.endsWith("Type") ||
            line.endsWith("Types") ||
            line.endsWith("Level") ||
            line.endsWith("Tier") ||
            line.endsWith("Flags") ||
            line.endsWith("Log Events") ||
            line.endsWith("Features") ||
            line.endsWith("Behaviors") ||
            line.endsWith("Enum") ||
            line.endsWith("Scopes")) &&
          predict &&
          (predict.replaceAll(/ +/g, " ").startsWith("| Flag |") ||
            predict.replaceAll(/ +/g, " ").startsWith("| Level |") ||
            predict.replaceAll(/ +/g, " ").startsWith("| Type |") ||
            predict.replaceAll(/ +/g, " ").startsWith("| Key |") ||
            predict.replaceAll(/ +/g, " ").startsWith("| Name |") ||
            predict.replaceAll(/ +/g, " ").startsWith("| Value |") ||
            predict.replaceAll(/ +/g, " ").startsWith("| Event |") ||
            predict.replaceAll(/ +/g, " ").startsWith("| Feature |"))
        ) {
          let name = trimObjectName(line).replaceAll(" ", "").trim();
          if (name == "") continue;
          if (enums.some((e) => e.name == name)) continue;
          let _data = predict.replaceAll(/ +/g, " ").trim();
          let data = _data
            .substr(1, _data.length - 2)
            .split("|")
            .map((e) => e.trim());
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
          for (let i = 0; i <= tbend - tbstart; i++) {
            let idx = tbstart + i;
            let ln = lines[idx].trim();
            if (i == 0) continue;
            if (ln.replaceAll(" ", "").startsWith("|-")) continue;
            let tln = ln
              .replaceAll(/ +/g, " ")
              .replaceAll(/-+/g, "-")
              .slice(2)
              .trim()
              .split("|")
              .map((e) => e.trim())
              .filter((e) => e != "");
            if (data[0] == "Value") {
              let tmp = tln[0];
              tln[0] = tln[1];
              tln[1] = tmp;
            }
            if (name == "MembershipScreeningFieldTypes")
              tln[1] = '"' + tln[1] + '"';
            let field: DataEnumField = {
              name: pascalCase(
                tln[0]
                  .toLowerCase()
                  .replaceAll(" ", " ")
                  .trim()
                  .replaceAll(".", " ")
              ),
              value:
                name == "GuildFeatures" ||
                name == "EmbedTypes" ||
                name == "OAuth2Scopes"
                  ? `"${tln[0].replaceAll(" ", "").trim()}"`
                  : tln[1],
              description:
                name == "GuildFeatures" ||
                name == "EmbedTypes" ||
                name == "OAuth2Scopes"
                  ? tln[1]
                  : tln[2],
            };
            fields.push(field);
          }
          if (fields.length == 0) continue;
          enums.push({
            name,
            description: desc,
            fields,
          });
        }
      }
    }
  }

  structs = structs.map((e) => {
    e.fields = e.fields.map((e) => {
      e.type = fixType(
        e.type,
        [...structs, ...enums].map((e) => e.name)
      );
      return e;
    });
    return e;
  });

  return { structs, enums, endpoints };
};

export const parseDocs = () => {
  const tree = getFileTree();
  return parseFileTree(tree);
};
