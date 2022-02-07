module.exports = {
  rules: {
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['FC'],
            message: `Do not use React.FC per proposal <https://github.com/reside-eng/guidelines/blob/main/rfcs/ui-patterns/001-disalllow-react-fc.md>`,
          },
        ],
      },
    ],
  },
};
