module.exports = {
  extends: [
    'plugin:prettier/recommended',
    ...['eslint-config-prettier', './rules/prettier'].map(require.resolve),
  ],
  rules: {},
};
