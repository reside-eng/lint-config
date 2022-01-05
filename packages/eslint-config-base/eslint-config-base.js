module.exports = {
  extends: ['eslint-config-airbnb-base', './core'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {},
};
