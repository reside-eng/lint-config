const { join } = require('path');
const fs = require('fs');
const glob = require('glob');

// eslint-disable-next-line import/no-dynamic-require
const packageJson = require(join(process.cwd(), 'package.json'));

/**
 * Create overrides based on workspace settings for a repo
 */
const getNoExtraneousDepsOverrides = () => {
  const cwd = process.cwd();
  const globs =
    packageJson.workspaces ||
    (packageJson.lintConfig && packageJson.lintConfig.workspaces) ||
    [];

  return [
    ...new Set(
      globs
        .map((path) => glob.sync(path))
        .reduce((acc, val) => acc.concat(val), [])
        .filter((path) => {
          return (
            !path.match(/node_modules/) &&
            fs.lstatSync(path).isDirectory() &&
            fs.existsSync(join(path, 'package.json'))
          );
        })
        .map((path) => {
          const file = join(cwd, path);
          return {
            files: [path],
            rules: {
              'import/no-extraneous-dependencies': [
                'error',
                {
                  packageDir: [cwd, file],
                },
              ],
            },
          };
        }),
    ),
  ];
};

module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // From Airbnb:
          // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L71
          //
          // We want to still allow everything that Airbnb set as default but
          // also want to provide some additional items specific to Side's needs
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/jest.setup.js', // jest setup
          '**/vue.config.js', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config
          '**/karma.conf.js', // karma config
          //
          // Side's custom addition
          'bin/**',
          'scripts/**',
          '**/babel.config.js',
          '**/*.stories.js',
        ],
      },
    ],
  },
  overrides: [...getNoExtraneousDepsOverrides()],
};
