# @side/eslint-config-next

An ESLint configuration which enables lint rules for Next.js projects. It contains all necessary `@side` lint configurations out of the box, including React, TypeScript, Cypress, Jest, and our base rules.

## Installation

Install this package and its peer dependencies.

`yarn info @side/eslint-config-next peerDependencies`

`yarn add -D @side/eslint-config-next`

## Usage

Once all peer dependencies have been added to your project, add this configuration to your project's ESLint configuration.

```jsonc
// .eslintrc
{
  "extends": ["@side/next"]
}
```

## Resources

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring).
