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
        // Cypress uses default export
        'import/no-default-export': 'off',
        // Cypress is allowed to use devDependencies
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
