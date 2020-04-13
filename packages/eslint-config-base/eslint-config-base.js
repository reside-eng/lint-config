module.exports = {
  extends: ['eslint-config-airbnb-base', './rules/imports'].map(
    require.resolve,
  ),
  rules: {},
};
