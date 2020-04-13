module.exports = {
  extends: [
    'eslint-config-airbnb',
    '@side-eng/eslint-config-base',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
