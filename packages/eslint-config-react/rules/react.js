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
    // Next.JS does not require JSX to be in scope
    'react/react-in-jsx-scope': 'off',
    // We're okay with this but use it sparingly and only when this is intentional
    'react/jsx-props-no-spreading': 'off',
    // eslint-config-airbnb became opinionated on this at v19, but the working group has not come to a clear decision
    // on how to approach this as an organization, although they are unified that they do not with to enforce it as AirBnB has.
    // new rule to cause issues: https://github.com/airbnb/javascript/blame/52e710c14ec0197cfefe131061e1fe41c966f93b/packages/eslint-config-airbnb/rules/react.js#L528-L531
    // discussion for context: https://top-agent.slack.com/archives/C0XU3K155/p1638225804365600?thread_ts=1638204245.354900&cid=C0XU3K155
    'react/function-component-definition': 'off',
  },
};
