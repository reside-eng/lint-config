# @side-eng/eslint-config-prettier

An ESLint configuration which runs [Prettier](https://github.com/prettier/prettier) as an ESLint rule, and disables other ESLint rules that conflict with Prettier's.

This ESLint configuration also configures Prettier itself, so it is unnecessary to add a `.prettierrc.js` to your project.

For more details, please refer to the [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) documentation.

## When Should You Use?

If you are not using any of Side's defined ESLint rules within lint-config, then you can use this library. Otherwise, all the other libraries include this already so it's not needed to install manually.

## Installation

Install this package, and ensure you have installed its peer dependencies.

`yarn info @side-eng/eslint-config-prettier peerDependencies`

`yarn add @side-eng/eslint-config-prettier`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

**Note**: Make sure to put it last, so it gets the chance to override other configs. Please reference the [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/blob/master/README.md#installation) documentation for more details.

For example:

```javascript
module.exports = {
  extends: ['@side-eng/base', '@side-eng/prettier'],
};
```

### @side-eng/eslint-config-prettier/react

This entry point will turn off additional rules if you're using React.

```javascript
module.exports = {
  extends: ['@side-eng/react', '@side-eng/react/hooks],
};
```

**NOTE:** If you are using this rule, you should not include the default `@side-eng/eslint-config-prettier` rule set since this contains everything you will need.

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring)
