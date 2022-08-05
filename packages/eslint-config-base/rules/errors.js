module.exports = {
  rules: {
    /**
     * Turn off class methods use this
     * @link https://github.com/reside-eng/guidelines/blob/main/rfcs/shared-patterns/typescript/002-class-methods-use-this.md
     */
    'class-methods-use-this': 0,
    /**
     * Both forms of arrow functions are allowed.
     *
     * {@link https://residenetwork.atlassian.net/wiki/spaces/PLAT/pages/2570780871/UI+Working+Group+Meetings UI WG meeting decision on March 25, 2022}
     *
     * @example
     * ```ts
     * const foo = () => {
     *   return 'bar';
     * };
     *
     * const foo = () => 'bar';
     * ```
     */
    'arrow-body-style': 0,
    // Allow unused variables only when they are prefixed with an underscore (e.g. _foo)
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    // Allow for-of loops over iterators
    'no-restricted-syntax': 0,
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
