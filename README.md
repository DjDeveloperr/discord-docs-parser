# Discord Docs Parser

Parses [Discord API Docs](https://github.com/discord/discord-api/docs)' MD files to generate JSON for all the Payloads/Structures, Enumerated Values, and Endpoints.

## Usage

- Clone this repo.
- Clone [discord-api-docs](https://github.com/discord/discord-api/docs) repo to `repo` folder.
- Run `deno run --allow-read --allow-write plugins/json.ts`
  - This will generate a `docs.json`.
  - For TypeScript types, use `plugins/typescript.ts` instead.
  - You can optionally tell script the filename (in args) to write output to.

## TODO/Ideas

- Write more language plugins to create typings for various other languages.
- Look for anything missing from typings generated.

## Contributing

You're always welcome to contribute!

Please use `deno fmt` for formatting.

## License

Check [LICENSE](LICENSE) for more info.

Copyright 2021 @ DjDeveloperr