module.exports = {
  extends: ['plugin:jest/recommended'],
  rules: {
    'jest/prefer-expect-assertions': 0,
    'jest/prefer-lowercase-title': [
      'error',
      {
        ignore: ['describe'],
      },
    ],
    'jest/no-disabled-tests': 0,
    'jest/no-hooks': 0,
  },
};
