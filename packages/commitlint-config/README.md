# @side-eng/commitlint-config

A base Commitlint configuration which provides defaults for linting all commit messages at Side.

## Installation

Install this package, and ensure you have installed its peer dependencies.

`yarn info @side-eng/commitlint-config peerDependencies`

`yarn add @side-eng/commitlint-config`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `commitlint.config.js`.

```javascript
module.exports = {
  extends: ['@side-eng/commitlint-config'],
};
```

For more information on configuring Commitlint, please [refer to their documentation](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md)
