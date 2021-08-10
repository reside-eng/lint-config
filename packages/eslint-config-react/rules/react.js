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
    // Next.JS does not require JSX to be in scope
    'react/react-in-jsx-scope': 'off',
    // We're okay with this but use it sparingly and only when this is intentional
    'react/jsx-props-no-spreading': 'off',
  },
};
