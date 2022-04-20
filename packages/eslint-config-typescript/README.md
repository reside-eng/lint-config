# @side/eslint-config-typescript

An ESLint configuration which extends the following:

- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/)

## Installation

Install this package and its peer dependencies.

`yarn info @side/eslint-config-typescript peerDependencies`

`yarn add -D @side/eslint-config-typescript`

## Usage

Once all peer dependencies have been added to your project, add this configuration to your project's ESLint configuration.

```jsonc
// .eslintrc
{
  "extends": ["@side/typescript"]
}
```

### Omitting Strong Type Checks

Many of the recommended [rules](https://typescript-eslint.io/rules/) provided by `@typescript-eslint` require access to the type information produced by the TypeScript compiler in order to be recognized by ESLint. This does add a delay to the linting process, but it is necessary in order to support many of the recommended rules.

> See [Linting with Type Information](https://typescript-eslint.io/docs/linting/type-linting) to learn more.

If you wish to disable the strong type checks (which will turn off many of the recommended rules), you can update your ESLint configuration as such:

```jsonc
{
  "extends": ["@side/typescript/without-type-checks"]
}
```

## Troubleshooting

### Multiple `tsconfig.json` Files

You may encounter errors like this if your project has multiple `tsconfig.json` files:

> Parsing error: `parserOptions.project` has been set for @typescript-eslint/parser.
> The file does not match your project config: `some/file/path.ts`
> The file must be included in at least one of the projects provided.

This issue occurs when ESLint tries to parse a file that is excluded within the default TypeScript config file (located at `<rootDir>/tsconfig.json`).

To resolve this issue, you will need to configure separate `parserOptions` in ESLint for each additional `tsconfig.json`.

For example: if your `e2e` directory has its own `tsconfig.json`, you could add this override to your ESLint configuration:

```json
{
  "overrides": [
    {
      "files": ["e2e/**/*"],
      "parserOptions": {
        "project": "e2e/tsconfig.json"
      }
    }
  ]
}
```

### Adding Parser Overrides to this Package

If a parser options override is used between more than one project (cypress is a good example of this), consider adding it directly to this package.

1. Create a new file in [`parser-overrides/`](./parser-overrides/).
2. Add the necessary glob paths and `parserOptions` to the file.
3. Within [`index.js`](./index.js), include the path to your file in the `parserOverrides` array.

## Resources

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring).
