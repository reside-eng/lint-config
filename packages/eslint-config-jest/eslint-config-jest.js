module.exports = {
  extends: ['plugin:jest/all'],
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
};
