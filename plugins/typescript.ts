import { ParsedDocs, parseDocs } from "../src/parser.ts";
import { camelCase } from "../src/util.ts";

export default function parse({ structs, endpoints, enums }: ParsedDocs) {
  const lines: string[] = [];

  const IDENT = "  ";
  for (const e of enums) {
    if (e.description) lines.push(`/** ${e.description} */`);
    lines.push(`export enum ${e.name} {`);
    for (const f of e.fields) {
      if (f.description) lines.push(`${IDENT} /** ${f.description} */`);
      lines.push(`${IDENT}${f.name} = ${f.value},`);
    }
    lines.push("}\n");
  }

  lines.push("");
  for (const e of structs) {
    if (e.description) lines.push(`/** ${e.description} */`);
    lines.push(`export interface ${e.name} {`);
    for (const f of e.fields) {
      if (f.description) lines.push(`${IDENT} /** ${f.description} */`);
      let types = f.type.split("|").map((e) => e.trim());
      for (let i = 0; i < types.length; i++) {
        let type = types[i];
        let isarr = type.endsWith("[]");
        if (isarr) type = type.substr(0, type.length - 2);
        if (type == "snowflake") type = "string";
        if (type == "integer" || type == "float") type = "number";
        if (type == "timestamp") type = "Date";
        types[i] = type + (isarr ? "[]" : "");
      }
      lines.push(
        `${IDENT}${f.name}${f.optional ? "?" : ""}: ${types.join(" | ")}${
          f.nullable ? " | null" : ""
        };`
      );
    }
    lines.push("}\n");
  }

  lines.push("");
  lines.push("export const DISCORD_API_VERSION = 8;");
  lines.push('export const DISCORD_API_BASE = "https://discord.com/api";');
  lines.push("");
  for (const e of endpoints) {
    if (e.description) lines.push(`/**\n  * ${e.description}  */`);
    let params = e.path.match(/({)((?:(?:(?!\1).))*)}/gm);
    if (params == null) params = [];
    else params = params.map((e) => e.slice(1));
    lines.push(
      `export function ${camelCase(
        e.name
          .split(/ +/)
          .map((e) => e.split("/")[0])
          .join(" ")
      )}(${params
        .map(
          (e) => `${camelCase(e.split("#")[0].replaceAll(".", " "))}: string`
        )
        .join(", ")}) {`
    );
    let path = e.path;
    for (let p of params) {
      path = path.replace(
        "{" + p,
        `$\{${camelCase(p.split("#")[0].replaceAll(".", " "))}}`
      );
    }
    lines.push(
      `${IDENT}return \`$\{DISCORD_API_BASE\}/v$\{DISCORD_API_VERSION\}${path}\``
    );
    lines.push("}\n");
  }

  return lines.join("\n");
}

if (import.meta.main) {
  const docs = parseDocs();
  const ts = parse(docs);

  const file = Deno.args[0] || "docs.ts";
  Deno.writeTextFileSync(file, ts);
  console.log(`Written to ${file}.`);
}
