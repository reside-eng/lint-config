module.exports = {
  overrides: [
    {
      files: ['**/cypress/**/*.js'],
      extends: [
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
      ],
      rules: {
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-force': 'warn',
      },
    },
  ],
};
