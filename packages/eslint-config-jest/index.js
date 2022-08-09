module.exports = {
  plugins: ['filenames'],
  overrides: [
    {
      files: [
        '**/__tests__/**',
        '**/__mocks__/**',
        '*.test.*',
        '*.spec.*',
        'jest.setup.{ts,js}',
      ],
      excludedFiles: ['cypress/**/*'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/recommended',
      ],
      rules: {
        'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
        'jest/no-disabled-tests': 0,
      },
    },
    {
      files: ['jest.setup.*'],
      rules: {
        'jest/require-top-level-describe': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
    /**
     * Enforce `.spec` over `.test` file names
     * {@link https://github.com/reside-eng/guidelines/blob/main/rfcs/ui-patterns/002-unit-test-files.md}
     */
    {
      files: ['**/*.test.*'],
      rules: {
        'filenames/match-regex': ['warn', '\\.spec\\.'],
      },
    },
  ],
};
