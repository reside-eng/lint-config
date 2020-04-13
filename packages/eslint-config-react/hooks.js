// https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnbhooks
// Requires React v16.8+
module.exports = {
  extends: ['eslint-config-airbnb/hooks'].map(require.resolve),
};
