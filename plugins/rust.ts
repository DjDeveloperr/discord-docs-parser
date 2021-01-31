// This plugin is broken!
import { ParsedDocs, parseDocs } from "../src/parser.ts";
import { camelCase } from "../src/util.ts";

export default function parse({ structs, endpoints, enums }: ParsedDocs) {
  const lines: string[] = [];

  const IDENT = "  ";
  const doc = (data: string, ident: string = IDENT) => {
    const lns = data
      .replaceAll("\r\n", "\n")
      .split("\n")
      .map((e) => `${ident}/// ${e.trim()}`);
    lns.forEach((ln) => lines.push(ln));
  };
  for (const e of enums) {
    if (e.description) doc(e.description);
    lines.push(`pub enum ${e.name} {`);
    for (const f of e.fields) {
      if (f.description) doc(f.description, IDENT);
      lines.push(`${IDENT}${f.name},`); // (${f.value})
    }
    lines.push("}\n");
  }

  lines.push("");
  for (const e of structs) {
    if (e.description) doc(e.description);
    lines.push(`pub struct ${e.name} {`);
    for (const f of e.fields) {
      if (f.description) doc(f.description, IDENT);
      let types = f.type.split("|").map((e) => e.trim());
      for (let i = 0; i < types.length; i++) {
        let type = types[i];
        let isarr = type.endsWith("[]");
        if (isarr) type = type.substr(0, type.length - 2);
        if (type == "snowflake" || type == "string") type = "String";
        if (type == "integer") type = "i32";
        if (type == "float") type = "f32";
        if (type == "boolean") type = "bool";
        if (type == "timestamp") type = "String";
        types[i] = isarr ? `Vec<${type}>` : type;
        if (types[i] == "Vec<>") types[i] = "Vec<u8>";
      }
      lines.push(
        `${IDENT}pub ${["type"].includes(f.name) ? "r#" : ""}${
          f.name
        }: ${types.join(" | ")}${f.nullable ? "" : ""},`
      );
    }
    lines.push("}\n");
  }

  lines.push("");
  lines.push("static DISCORD_API_VERSION: u8 = 8;");
  lines.push('static DISCORD_API_BASE: &str = "https://discord.com/api";');
  lines.push("");
  for (const e of endpoints) {
    if (e.description) doc(e.description);
    let params = e.path.match(/({)((?:(?:(?!\1).))*)}/gm);
    if (params == null) params = [];
    else params = params.map((e) => e.slice(1));
    lines.push(
      `pub fn ${e.name
        .split(/ +/)
        .map((e) => e.split("/")[0])
        .join("_")
        .toLowerCase()
        .replaceAll("-", "_")}(${params
        .map(
          (e) => `${camelCase(e.split("#")[0].replaceAll(".", " "))}: String`
        )
        .join(", ")}) -> String {`
    );
    let path = e.path;
    let dat: string[] = [];
    for (let p of params) {
      path = path.replace("{" + p, `{}`);
      dat.push(camelCase(p.split("#")[0].replaceAll(".", " ")));
    }
    lines.push(
      `${IDENT}format!("{}/v{}${path}", DISCORD_API_BASE, DISCORD_API_VERSION, ${dat.join(
        ", "
      )})`
    );
    lines.push("}\n");
  }

  return lines.join("\n");
}

if (import.meta.main) {
  const docs = parseDocs();
  const ts = parse(docs);

  const file = Deno.args[0] || "docs.rs";
  Deno.writeTextFileSync(file, ts);
  console.log(`Written to ${file}.`);
}
