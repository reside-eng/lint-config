module.exports = {
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./rules/base', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
