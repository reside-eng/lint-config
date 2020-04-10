module.exports = {
  extends: ['@side-eng/eslint-config-base', 'airbnb'],
  rules: {
    // AirBnB is using .jsx, we want to also allow .js
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],
    'react/jsx-handler-names': [
      'error',
      {
        // AirBnB is disabling this rule by default
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
  },
};
