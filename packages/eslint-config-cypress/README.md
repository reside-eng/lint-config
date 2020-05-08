# @side-eng/eslint-config-cypress

An ESLint configuration which enables lint rules for Cypress tests.

## Installation

Install this package, and ensure you have installed its peer dependencies.

`yarn info @side-eng/eslint-config-cypress peerDependencies`

`yarn add @side-eng/eslint-config-cypress`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

**Note**: Make sure to put it last, so it gets the chance to override other configs. Please reference the [eslint-config-cypress](https://github.com/cypress/eslint-config-cypress/blob/master/README.md#installation) documentation for more details.

For example:

```javascript
module.exports = {
  extends: ['@side-eng/base', '@side-eng/cypress'],
};
```

## Notes
* Cypress is not a `peerDependency` since this lint config can be used at a different level than Cypress is being used. For example in Side repos which contain apps, the lint config is at the top level and Cypress is currently installed at the package level