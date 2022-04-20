const fs = require('fs');
const path = require('path');

/**
 * Determines if the project has a `<root>/cypress/tsconfig.json` file
 *
 * @returns {boolean}
 */
function hasCypressTSConfig() {
  const tsConfigPath = path.join(process.cwd(), 'cypress', 'tsconfig.json');
  return fs.existsSync(tsConfigPath);
}

module.exports = {
  overrides: [
    // Adds the additional tsconfig.json to the `@typescript-eslint/parser` configuration
    hasCypressTSConfig()
      ? {
          files: ['cypress/**/*'],
          parserOptions: {
            project: ['cypress/tsconfig.json'],
          },
        }
      : {},
  ],
};
