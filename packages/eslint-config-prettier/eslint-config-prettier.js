module.exports = {
  extends: [
    'plugin:prettier/recommended',
    ...['./rules/prettier'].map(require.resolve),
  ],
  rules: {},
};
