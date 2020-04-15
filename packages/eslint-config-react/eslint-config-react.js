module.exports = {
  extends: [
    'eslint-config-airbnb',
    '@side-eng/eslint-config-base',
    '@side-eng/eslint-config-prettier/react',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
