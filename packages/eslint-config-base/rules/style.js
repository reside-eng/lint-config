// The following are stylistic ESLint rules. Since we are using Prettier, these
// are only intented to be used to override or re-enable some style rules that
// Prettier is not concerned about.
module.exports = {
  rules: {
    // Prettier is not concerned with turning single/double quotes into template
    // literals or vice versa. https://github.com/prettier/prettier/issues/2996
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
