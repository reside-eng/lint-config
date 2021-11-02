module.exports = {
  extends: [
    'eslint-config-airbnb',
    '@side/eslint-config-base/core',
    'plugin:@typescript-eslint/recommended',
    './rules/typescript',
    './settings/typescript',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
  settings: {},
};
