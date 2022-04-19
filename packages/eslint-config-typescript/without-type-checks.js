module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['./rules/import'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['./rules/base', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
