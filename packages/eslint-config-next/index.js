module.exports = {
  extends: [
    '@side/react',
    '@side/react/hooks',
    '@side/jest/react',
    '@side/cypress',
    '@side/typescript',
    'plugin:@next/next/core-web-vitals',
    './rules/base',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
  ],
};
