# @side-eng/eslint-config-jest

An ESLint configuration which enables lint rules for Jest tests.

## Installation

Install this package, and ensure you have installed its peer dependencies.

`yarn info @side-eng/eslint-config-jest peerDependencies`

`yarn add -D @side-eng/eslint-config-jest`

## Usage

Once all peer dependencies have been added to your project, extend this configuration in your project's `.eslintrc.js`.

**.eslintrc.js**

```js
module.exports = {
  overrides: [
    {
      files: [
        '**/__tests__/**',
        '**/__mocks__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx}',
      ],
      // Make sure you exclude any paths where Cypress tests are located
      excludedFiles: ['**/cypress/**/*.js'],
      extends: ['@side-eng/jest'],
    },
  ],
};
```

**Note**: Make sure to extend this as an override so you can specify the exact Jest test files you want these rules to be run against. Please reference the [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) documentation for more details.
