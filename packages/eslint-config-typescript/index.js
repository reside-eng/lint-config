module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:import/typescript',
    './rules/base',
    './rules/import',
    './rules/react',
    './rules/typescript-eslint',
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
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
