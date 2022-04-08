module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['./rules/import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        './rules/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
  ],
};
