# Discord Docs Parser

Parses [Discord API Docs](https://github.com/discord/discord-api/docs)' MD files to generate JSON for all the Payloads/Structures, Enumerated Values, and Endpoints.

## Usage

- Clone this repo.
- Clone [discord-api-docs](https://github.com/discord/discord-api/docs) repo to `repo` folder.
- Run `deno run --allow-read --allow-write mod.ts`.
  - `docs.ts` and `docs.json` will appear in same directory.

## TODO/Ideas

- Write "language plugins" to create typings for various other languages.

## Contributing

You're always welcome to contribute!

## License

Check [LICENSE](LICENSE) for more info.

Copyright 2021 @ DjDeveloperr