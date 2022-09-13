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
        .filter(
          (path) =>
            !path.match(/node_modules/) &&
            fs.lstatSync(path).isDirectory() &&
            fs.existsSync(join(path, 'package.json')),
        )
        .map((path) => {
          const file = join(cwd, path);
          return {
            files: [`${path}/**`],
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
          '**/jest.config.{js,ts}', // jest config
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
          '**/cypress/**',
          '**/babel.config.js',
          '**/*.stories.{js,jsx}',
          '**/.eslintrc.js',
          '**/lint-staged.config.js', // lint-staged config
          //
          // Support for TypeScript extensions
          'test.{ts,tsx}', // repos with a single test file
          'test-*.{ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
        ],
      },
    ],
    /**
     * Use named exports over default exports
     * @link https://github.com/reside-eng/guidelines/blob/main/rfcs/shared-patterns/typescript/001-consistent-import-export.md
     */
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    /**
     * Restrict import patterns
     * NOTE: Condig does not apply to UIs due to override in packages/eslint-config-react
     */
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['*/package.json'],
            message:
              'Do not import from package.json; use environment variables instead.',
          },
          {
            name: 'lodash',
            // TODO [PLAT-2970]: Remove eslint error for top level imports once ESM is supported
            message:
              'Please use direct imports (i.e. lodash/*) until services support ESM',
          },
        ],
      },
    ],
    /**
     * Handling for firebase-admin >10 module imports [PLAT-1324]
     * NOTE: This is added since eslint-plugin-import does not support exports in package.json
     * which is what firebase-admin v10 uses.
     * @see https://github.com/import-js/eslint-plugin-import/issues/1810
     */
    'import/no-unresolved': [
      2,
      {
        ignore: [
          'firebase-admin/app',
          'firebase-admin/auth',
          'firebase-admin/database',
          'firebase-admin/firestore',
          'firebase-admin/functions',
          'firebase-admin/storage',
        ],
      },
    ],
  },
  overrides: [
    ...getNoExtraneousDepsOverrides(),
    // This override enables default exports for files that require them.
    {
      files: ['jest.config.{js,mjs,ts}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
