module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    './rules/typescript',
    './settings/typescript',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  rules: {},
  settings: {},
};
