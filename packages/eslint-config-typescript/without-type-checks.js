// Note: Parser overrides are not needed when type checks are disabled

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    './rules/base',
    './rules/import',
    './rules/react',
    './rules/typescript-eslint',
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
