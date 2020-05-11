# @side-eng/eslint-config-react

An ESLint configuration which extends the following:

- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) _(Optional)_
- [@side-eng/eslint-config-base](https://github.com/reside-eng/lint-config/tree/master/packages/eslint-config-base)
- [@side-eng/eslint-config-prettier](https://github.com/reside-eng/lint-config/tree/master/packages/eslint-config-prettier)

## Installation

Install this package, and ensure to have installed its peer dependencies.

`yarn info @side-eng/eslint-config-react peerDependencies`

`yarn add -D @side-eng/eslint-config-react`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

**.eslintrc.js**

```js
module.exports = {
  extends: ['@side-eng/react'],
};
```

### @side-eng/eslint-config-react/hooks

This entry point enables the linting rules for React hooks (requires v16.8+). To use, add the following to your `.eslintrc.js` file:

**.eslintrc.js**

```js
module.exports = {
  extends: ['@side-eng/react', '@side-eng/react/hooks],
};
```

**NOTE:** If you are using Create React App (CRA), this is not needed since they provide that for you already.

## Resources

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring)
