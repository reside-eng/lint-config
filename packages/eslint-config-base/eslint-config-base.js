module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    '@side-eng/eslint-config-prettier',
    './core',
  ].map(require.resolve),
  rules: {},
  overrides: [
    {
      extends: ['plugin:jest/all'],
      files: [
        '**/__tests__/**',
        '**/__mocks__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx}',
      ],
      rules: {
        'jest/prefer-expect-assertions': 0,
        'jest/lowercase-name': [
          'error',
          {
            ignore: ['describe'],
          },
        ],
        'jest/no-disabled-tests': 0,
        'jest/no-hooks': 0,
      },
    },
  ],
};
