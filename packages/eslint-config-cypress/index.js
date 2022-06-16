module.exports = {
  overrides: [
    {
      files: ['cypress/**/*'],
      extends: [
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
      ],
      rules: {
        'cypress/assertion-before-screenshot': 'error',
        'cypress/no-force': 'error',
      },
    },
    {
      files: ['cypress.config.*'],
      rules: {
        'import/no-default-export': 0, // cypress expects default output
        'import/no-extraneous-dependencies': 0, // cypress is a dev-dependency and uses other dev-dependencies
      },
    },
  ],
};
