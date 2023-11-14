module.exports = {
  overrides: [
    {
      files: ['*.graphql'],
      extends: 'plugin:@graphql-eslint/operations-recommended',
    },
    {
      files: ['**/*.{ts,tsx}'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-underscore-dangle': [
          'error',
          {
            allow: ['__typename'],
          },
        ],
      },
    },
  ],
};
