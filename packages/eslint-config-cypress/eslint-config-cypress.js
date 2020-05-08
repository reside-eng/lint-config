module.exports = {
  overrides: [
    {
      files: ['**/cypress/**/*.js'],
      plugins: ['cypress', 'chai-friendly'],
      env: {
        'cypress/globals': true,
      },
      extends: [
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
      ],
    },
  ],
};
