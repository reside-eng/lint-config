module.exports = {
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
  ],
};
