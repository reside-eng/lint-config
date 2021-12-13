module.exports = {
  extends: ['plugin:jest/recommended', 'prettier'],
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
