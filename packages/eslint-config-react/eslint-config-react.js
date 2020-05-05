module.exports = {
  extends: [
    'eslint-config-airbnb',
    // We only want @side-eng/eslint-config-base/core (rules only) so we can
    // properly override eslint-config-airbnb (which already includes
    // eslint-config-airbnb-base) without blowing away some of their settings we
    // still want.
    '@side-eng/eslint-config-base/core',
    '@side-eng/eslint-config-prettier/react',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
