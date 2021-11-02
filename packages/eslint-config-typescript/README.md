# @side/eslint-config-typescript

An ESLint configuration which extends the following:

- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [@side/eslint-config-base](https://github.com/reside-eng/lint-config/tree/master/packages/eslint-config-base)
- [@side/eslint-config-prettier](https://github.com/reside-eng/lint-config/tree/master/packages/eslint-config-prettier)

## Installation

Install this package, and ensure to have installed its peer dependencies.

`yarn info @side/eslint-config-typescript peerDependencies`

`yarn add -D @side/eslint-config-typescript`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

**.eslintrc.js**

```js
module.exports = {
  extends: ['@side/typescript'],
};
```

## Resources

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring)