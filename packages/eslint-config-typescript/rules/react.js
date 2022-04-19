module.exports = {
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
      },
    },
  ],
};
