module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    '@side-eng/eslint-config-prettier',
    './core',
  ].map(require.resolve),
  rules: {},
};
