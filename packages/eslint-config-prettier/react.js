module.exports = {
  extends: [
    'plugin:prettier/recommended',
    ...['eslint-config-prettier/react', './rules/prettier'].map(
      require.resolve,
    ),
  ],
  rules: {},
};
