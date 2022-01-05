module.exports = {
  extends: [
    'eslint-config-airbnb',
    // We only want @side/eslint-config-base/core (rules only) so we can
    // properly override eslint-config-airbnb (which already includes
    // eslint-config-airbnb-base) without blowing away some of their settings we
    // still want.
    '@side/eslint-config-base/core',
    './rules/base',
    './rules/react',
    './rules/import',
  ].map(require.resolve),
  rules: {},
};
