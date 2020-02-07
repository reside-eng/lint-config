# eslint-config-react

An ESLint configuration which extends Airbnb's [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), as well as our own [eslint-config-base](https://github.com/reside-eng/lint-config/tree/master/packages/eslint-config-base)

## Installation

Install this package, and ensure to have installed its peer dependencies.

`yarn info @side-eng/eslint-config-react peerDependencies`

`yarn add @side-eng/eslint-config-react`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

```javascript
module.exports = {
  extends: ['@side-eng/react'],
};
```

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring)
