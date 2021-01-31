import { DataStructure } from "../src/common.ts";
import { ParsedDocs, parseDocs } from "../src/parser.ts";
import { camelCase, PRIMARY_TYPES } from "../src/util.ts";

function sortStructs(
  structs: DataStructure[],
  enums: string[]
): DataStructure[] {
  let names: string[] = [];
  let required: { [name: string]: string[] } = {};
  structs.forEach((e) => {
    let types: string[] = [];
    e.fields.forEach((s) => {
      let nms = s.type
        .replaceAll("[", "")
        .replaceAll("]", "")
        .split("|")
        .map((e) => e.trim());
      nms.forEach((nm, i) => {
        if (
          !enums.includes(nm) &&
          !PRIMARY_TYPES.includes(nm) &&
          !types.includes(nm) &&
          nm != ""
        ) {
          if (nm == e.name) {
            return;
          }
          types.push(nm);
        }
      });
    });
    if (types.length == 0) return;
    required[e.name] = types;
  });
  const fn = (e: DataStructure) => {
    e.fields.forEach((f, i) => {
      let types = f.type.split("|").map((e) => e.trim());
      types.forEach((t, i) => {
        if (t.replaceAll("[", "").replaceAll("]", "") == e.name)
          types[i] = "Any";
      });
      f.type = types.join("|");
    });
    let sn = e.name;
    if (!required[e.name]) {
      return names.push(e.name);
    } else {
      let req = required[e.name];
      let np = req.filter((e) => e != sn && !names.includes(e));
      if (np.length == 0) return names.push(e.name);
      else {
        np.forEach((n) => {
          let fi = structs.findIndex((e) => e.name == n);
          if (fi < 0) return;
          fn(structs[fi]);
        });
        names.push(e.name);
      }
    }
  };
  structs.forEach(fn);
  return [...new Set(names)].map(
    (n) => structs.find((e) => e.name == n) as DataStructure
  );
}

export default function parse({ structs, endpoints, enums }: ParsedDocs) {
  const lines: string[] = [];
  lines.push("from __future__ import annotations");
  lines.push("");
  lines.push("from typing import TypedDict, Union, List, Optional, Any");
  lines.push("from enum import Enum");
  lines.push("");

  structs = sortStructs(
    structs,
    enums.map((e) => e.name)
  );

  const IDENT = "\t";
  for (const e of enums) {
    if (e.description) lines.push(`""" ${e.description.trim()} """`);
    lines.push(`class ${e.name}(Enum):`);
    for (const i in e.fields) {
      let f = e.fields[i];
      if (f.description) lines.push(`${IDENT}""" ${f.description.trim()} """`);
      lines.push(`${IDENT}${f.name == "None" ? "NONE" : f.name} = ${f.value}`);
    }
    lines.push("\n");
  }

  lines.push("");
  for (const e of structs) {
    if (e.description) lines.push(`""" ${e.description.trim()} """`);
    lines.push(`${e.name} = TypedDict(\n${IDENT}'${e.name}',\n${IDENT}{`);
    for (const i in e.fields) {
      let f = e.fields[i];
      // if (f.description)
      //   lines.push(`${IDENT}${IDENT}""" ${f.description.trim()} """`);
      let types = f.type.split("|").map((e) => e.trim());
      for (let i = 0; i < types.length; i++) {
        let type = types[i];
        let isarr = type.endsWith("[]");
        if (isarr) type = type.substr(0, type.length - 2);
        if (type == "snowflake") type = "str";
        if (type == "integer") type = "int";
        if (type == "string") type = "str";
        if (type == "Date" || type == "timestamp") type = "str";
        if (type == "boolean") type = "bool";
        if (type == "null") type = "None";
        types[i] = isarr ? `List[${type}]` : type;
        if (types[i] == "List[]") types[i] = "list";
      }
      types = types.map((e) => (e == "any" ? "Any" : e));
      let tp = types.length == 1 ? types[0] : `Union[${types.join(", ")}]`;
      if (f.nullable || f.optional) tp = `Optional[${tp}]`;
      lines.push(
        `${IDENT}${IDENT}${`"${f.name}"`}: ${tp}${
          e.fields[Number(i) + 1] ? "," : ""
        }`
      );
    }
    lines.push(`${IDENT}}`);
    lines.push(")\n");
  }

  lines.push("");
  lines.push("DISCORD_API_VERSION = 8");
  lines.push('DISCORD_API_BASE = "https://discord.com/api"');
  lines.push("");
  for (const e of endpoints) {
    if (e.description) lines.push(`""" ${e.description.trim()}  """`);
    let params = e.path.match(/({)((?:(?:(?!\1).))*)}/gm);
    if (params == null) params = [];
    else params = params.map((e) => e.slice(1));
    lines.push(
      `def ${e.name
        .replaceAll(/ +/g, "_")
        .replaceAll("-", "_")
        .toLowerCase()
        .split("_")
        .map((e) => e.split("/")[0])
        .join("_")}(${params
        .map((e) => `${camelCase(e.split("#")[0].replaceAll(".", " "))}: str`)
        .join(", ")}):`
    );
    let path = e.path;
    for (let p of params) {
      path = path.replace(
        "{" + p,
        `{${camelCase(p.split("#")[0].replaceAll(".", " "))}}`
      );
    }
    lines.push(
      `${IDENT}return f"\{DISCORD_API_BASE\}/v\{DISCORD_API_VERSION\}${path}"`
    );
    lines.push("");
  }

  return lines.join("\n");
}

if (import.meta.main) {
  const docs = parseDocs();
  const ts = parse(docs);

  const file = Deno.args[0] || "docs.py";
  Deno.writeTextFileSync(file, ts);
  console.log(`Written to ${file}.`);
}
