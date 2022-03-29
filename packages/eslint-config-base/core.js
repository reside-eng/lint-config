// Just include barebone set of rules without any other dependencies to allow
// for other rules to have better control in ordering their extensions. See
// https://github.com/reside-eng/lint-config/blob/master/packages/eslint-config-react/eslint-config-react.js
// for more info around this need.
module.exports = {
  ignorePatterns: ['!.eslintrc.js'],
  extends: ['./rules/errors', './rules/imports', './rules/style'].map(
    require.resolve,
  ),
  rules: {},
};
