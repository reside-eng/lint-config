# @side/eslint-config-typescript

An ESLint configuration which extends the following:

- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/)

## Installation

Install this package and its peer dependencies.

`yarn info @side/eslint-config-typescript peerDependencies`

`yarn add -D @side/eslint-config-typescript`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

```js
// .eslintrc.js
module.exports = {
  extends: ['@side/typescript'],
};
```

### Omitting Strong Type Checks

Many of the recommended [rules](https://typescript-eslint.io/rules/) provided by `@typescript-eslint` require access to the type information produced by the TypeScript compiler in order to be recognized by ESLint. This does add a delay to the linting process, but it is necessary in order to support many of the recommended rules.

> See [Linting with Type Information](https://typescript-eslint.io/docs/linting/type-linting) to learn more.

If you wish to disable the strong type checks (which will turn off many of the recommended rules), you can update your `.eslintrc.js` configuration as such:

```js
// .eslintrc.js
module.exports = {
  extends: ['@side/typescript/without-type-checks'],
};
```

## Resources

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring)
