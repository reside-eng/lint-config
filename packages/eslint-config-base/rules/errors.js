module.exports = {
  rules: {
    /**
     * Turn off class methods use this
     * @link https://github.com/reside-eng/guidelines/blob/main/rfcs/shared-patterns/typescript/002-class-methods-use-this.md
     */
    'class-methods-use-this': 0,
  },
  overrides: [
    {
      files: ['bin/**', 'scripts/**'],
      rules: {
        'no-console': 0,
      },
    },
  ],
};
