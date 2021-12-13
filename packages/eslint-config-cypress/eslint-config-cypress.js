module.exports = {
  extends: [
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
    'prettier',
  ],
  rules: {
    'cypress/assertion-before-screenshot': 'error',
    'cypress/no-force': 'error',
  },
};
