module.exports = {
  extends: ['plugin:jest/recommended'],
  rules: {
    'jest/prefer-lowercase-title': [
      'error',
      {
        ignore: ['describe'],
      },
    ],
    'jest/no-disabled-tests': 0,
  },
};
