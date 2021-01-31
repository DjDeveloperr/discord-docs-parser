import { ParsedDocs, parseDocs } from "../src/parser.ts";

export default function parse(docs: ParsedDocs) {
  return JSON.stringify(docs, undefined, 2);
}

if (import.meta.main) {
  const docs = parseDocs();
  const ts = parse(docs);

  const file = Deno.args[0] || "docs.json";
  Deno.writeTextFileSync(file, ts);
  console.log(`Written to ${file}.`);
}
