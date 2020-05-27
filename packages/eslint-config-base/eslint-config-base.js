module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    '@side/eslint-config-prettier',
    './core',
  ].map(require.resolve),
  rules: {},
};
