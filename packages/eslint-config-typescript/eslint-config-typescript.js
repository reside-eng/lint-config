module.exports = {
  extends: [
    'eslint-config-airbnb',
    '@side/eslint-config-base/core',
    './rules/typescript',
    './settings/typescript'
  ].map(require.resolve),
  rules: {},
  settings: {}
};
