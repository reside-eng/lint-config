module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    '@side-eng/eslint-config-prettier',
    './rules/imports',
  ].map(require.resolve),
  rules: {},
};
