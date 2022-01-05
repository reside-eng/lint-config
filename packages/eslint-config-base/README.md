# @side/eslint-config-base

A base ESLint configuration which extends the following:

- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

## Installation

Install this package, and ensure you have installed its peer dependencies.

`yarn info @side/eslint-config-base peerDependencies`

`yarn add -D @side/eslint-config-base`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

**.eslintrc.js**

```js
module.exports = {
  extends: ['@side/base'],
};
```

## Monorepo Support

If you're trying to integrate this library with a monorepo, you will want to tell `@side/eslint-config-base` of the workspaces you have setup so rules such as `import/no-extraneous-dependencies` can properly navigate the correct package.json files. You have two ways you can do this in your root package.json file.

### Option 1: Yarn/Lerna workspaces location (recommended)

If you have setup workspaces already, then there is nothing else you need to do. Lint-config will pick this up and do it's thing.

**./package.json**

```json
{
  "workspaces": ["packages/*"]
}
```

### Option 2: Lint Config's custom workspace location

If option 1 isn't doable, you can specify your workspaces inside the `lintConfig` property.

**./package.json**

```json
"lintConfig": {
  "workspaces": ["packages/*"]
},
```

## Resources

For more information on configuring ESLint, please [refer to their documentation](https://eslint.org/docs/user-guide/configuring)
