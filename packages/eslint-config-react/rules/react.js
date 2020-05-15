module.exports = {
  rules: {
    'react/jsx-handler-names': [
      'error',
      {
        // AirBnB is disabling this rule by default
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/require-default-props': [
      'error',
      {
        // TODO: Modify this once support for checking functional component's
        // arguments for default params is supported.
        // https://github.com/yannickcr/eslint-plugin-react/issues/2396
        ignoreFunctionalComponents: true,
      },
    ],
  },
};
