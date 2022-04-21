module.exports = {
  extends: ['./index'],
  overrides: [
    {
      files: ['**/*.test.{jsx,tsx}', '**/*.spec.{jsx,tsx}'],
      excludedFiles: ['cypress/**/*'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
