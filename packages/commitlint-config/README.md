# @side/commitlint-config

A base Commitlint configuration which provides defaults for linting all commit messages at Side.

## Installation

Install this package, and ensure you have installed its peer dependencies.

`yarn info @side/commitlint-config peerDependencies`

`yarn add -D @side/commitlint-config`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `commitlint.config.js`.

**.eslintrc.js**

```js
module.exports = {
  extends: ['@side/commitlint-config'],
};
```

For more information on configuring Commitlint, please [refer to their documentation](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md)
