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
    // eslint-config-airbnb became opinionated on this at v19, but the working group has not come to a clear decision
    // on how to approach this as an organization, although they are unified that they do not with to enforce it as AirBnB has.
    'react/function-component-definition': 'off',
  },
};
