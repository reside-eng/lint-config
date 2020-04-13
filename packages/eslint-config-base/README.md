# @side-eng/eslint-config-base

A base ESLint configuration which extends Airbnb's [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

In addition to eslint-config-airbnb-base, this package provides any specific rules that meet Side's needs.

## Installation

Install this package, and ensure you have installed its peer dependencies.

`yarn info @side-eng/eslint-config-base peerDependencies`

`yarn add @side-eng/eslint-config-base`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

```javascript
module.exports = {
  extends: ['@side-eng/base'],
};
```

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring)
