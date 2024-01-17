module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: true,
      },
      rules: {
        'no-unused-vars': 'off',
        // Allow unused variables only when they are prefixed with an underscore (e.g. _foo)
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        // Allow type definitions as well as interfaces (when on type definitions are not allowed)
        '@typescript-eslint/consistent-type-definitions': 'off',
        // Force imports to use type (not included in code transpiled by tsc to commonjs)
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        // NOTE: prefer-top-level causes duplicate imports for types
        'import/no-duplicates': ['error', { 'prefer-inline': true }],
      },
    },
  ],
};
