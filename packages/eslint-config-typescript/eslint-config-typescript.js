module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['plugin:import/typescript', './rules/import', './rules/react'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
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
