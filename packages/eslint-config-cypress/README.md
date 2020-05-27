# @side/eslint-config-cypress

An ESLint configuration which enables lint rules for Cypress tests.

## Installation

Install this package, and ensure you have installed its peer dependencies.

`yarn info @side/eslint-config-cypress peerDependencies`

`yarn add -D @side/eslint-config-cypress`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

**.eslintrc.js**

```js
module.exports = {
  overrides: [
    {
      files: ['**/cypress/**/*.js'],
      extends: ['@side/cypress'],
    },
  ],
};
```

**Note**: Make sure to extend this as an override so you can specify the exact Cypress test files you want these rules to be run against. Please reference the [eslint-config-cypress](https://github.com/cypress/eslint-config-cypress/blob/master/README.md#installation) documentation for more details.

## Notes

- Cypress is not a `peerDependency` since this lint config can be used at a different level than Cypress is being used. For example in Side repos which contain apps, the lint config is at the top level and Cypress is currently installed at the package level.
