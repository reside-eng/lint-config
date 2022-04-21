module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // Allow unused variables only when they are prefixed with an underscore (e.g. _foo)
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
};
