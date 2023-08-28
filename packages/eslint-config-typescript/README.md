# @side/eslint-config-typescript

An ESLint configuration which extends the following:

- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/)

## Installation

Install this package and its peer dependencies.

`yarn add -D @side/eslint-config-typescript`

## Usage

Once all peer dependencies have been added to your project, add this configuration to your project's ESLint configuration.

```jsonc
// .eslintrc
{
  "extends": ["@side/typescript"]
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

## Resources

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring).
