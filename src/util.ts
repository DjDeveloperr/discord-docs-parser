export const strdist = (str1 = "", str2 = "") => {
  const track = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));
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
        track[j - 1][i - 1] + indicator
      );
    }
  }
  return track[str2.length][str1.length];
};

export function snakeToName(i: string) {
  let res: string[] = [];
  for (let part of i.split("_")) {
    let str = part[0].toUpperCase() + part.slice(1);
    if (str == "And") str = "and";
    if (str == "Sdk") str = "SDK";
    res.push(str);
  }
  return res.join(" ");
}

export function pascalCase(i: string) {
  let res: string[] = [];
  for (let part of i
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replaceAll(/ +/g, " ")
    .split(" ")) {
    if (part == "") continue;
    res.push(part[0].toUpperCase() + part.slice(1));
  }
  return res.join("");
}

export function camelCase(i: string) {
  let r = pascalCase(i);
  return r[0].toLowerCase() + r.slice(1);
}

export function stripBold(i: string) {
  while (i.startsWith("*")) i = i.slice(1);
  while (i.endsWith("*")) i = i.substr(1, i.length - 1);
  return i;
}

export function stripPartial(i: string) {
  if (i.startsWith("Partial")) i = i.slice(7).trim();
  return i;
}

export function trimObjectName(i: string) {
  return i
    .replaceAll("#", "")
    .replaceAll(" ", "")
    .trim()
    .replaceAll("Object", "Payload")
    .replaceAll("Structure", "Payload")
    .replaceAll("PayloadPayload", "")
    .trim();
}

export const PRIMARY_TYPES = [
  "integer",
  "boolean",
  "string",
  "snowflake",
  "timestamp",
  "any",
  "float",
  "null",
];

export function fixType(i: string, names: string[]) {
  let links = i.match(/\[[\S\s]*\]\([\S\s]*\)/g);
  if (links) {
    links.forEach((link) => {
      let name = (link.split("]").shift() as string).split("[")[1];
      i = i.replace(link, name);
    });
  }
  i = i
    .split(" or ")
    .map((e) => {
      e = e
        .replaceAll("objects", "")
        .replaceAll("object", "")
        .replaceAll(/ +/g, " ")
        .trim()
        .split("(")[0]
        .replaceAll("\\", "")
        .replaceAll("*", "");
      if (e == "ISO8601 timestamp") return "timestamp";
      if (e.toLowerCase() == "string") return "string";
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
      if (!PRIMARY_TYPES.includes(e.toLowerCase().trim())) {
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
        if (e.includes("MessageReference")) return "MessageReferencePayload";
        let f1 =
          e == "string" ? undefined : names.find((n) => e + "Payload" == n);
        if (f1) e = f1;
        else if (e != "string") {
          let find = names
            .map((n) => ({ name: n, dist: strdist(n, e) }))
            .sort((b, a) => b.dist - a.dist)[0];
          if (find.dist < 7) e = find.name;
        }
      } else e = e.toLowerCase();
      e = e.trim() + (isarr ? "[]" : "");
      if (e == "TwoInteger[]") e = "integer[]";
      if (e == "Array[]") e = "[]";
      return e;
    })
    .filter((e) => e != "")
    .join(" | ");
  return i;
}
