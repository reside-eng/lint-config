const { join } = require('path');
const fs = require('fs');
const { glob } = require('glob');

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
          // Unused removed such as gulp, vue, karma, protractor
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
          '**/jest.config.{js,ts,mjs,cjs,mts,cts}', // jest config
          '**/jest.setup.{js,ts,mjs,cjs,mts,cts}', // jest setup
          '**/vitest.setup.{js,ts,mjs,cjs,mts,cts}', // Vitest setup
          '**/vitest.config.{js,ts,mjs,cjs,mts,cts}', // Vitest config
          '**/webpack.config.{js,ts,mjs,cjs,mts,cts}', // webpack config
          '**/webpack.config.*.{js,ts,mjs,cjs,mts,cts}', // webpack config
          '**/rollup.config.{js,ts,mjs,cjs,mts,cts}', // rollup config
          '**/rollup.config.*.{js,ts,mjs,cjs,mts,cts}', // rollup config
          //
          // Side's custom addition
          'bin/**',
          'scripts/**',
          '**/cypress/**',
          '**/babel.config.js',
          '**/*.stories.{js,jsx}',
          '**/.eslintrc.{js,mjs,cjs}',
          '**/lint-staged.config.{js,mjs,cjs}', // lint-staged config
          '**/commitlint.config.{ts,js,mjs,cjs}', // commitlint config
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
     * NOTE: Config does not apply to UIs due to override in packages/eslint-config-react
     */
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            // TODO [PLAT-2970]: Remove eslint error for top level imports once ESM is supported in services
            message:
              'Import [module] from lodash/[module] or lodash.* package instead (until ESM is supported in services)',
          },
          {
            name: 'date-fns',
            // TODO [PLAT-2970]: Remove eslint error for top level imports once ESM is supported in services
            message:
              'Import [module] from date-fns/[module] package instead (until ESM is supported in services)',
          },
          {
            name: 'faker',
            message:
              'Please use @faker-js/faker instead (faker is no longer supported).',
          },
        ],
        patterns: [
          {
            group: ['*/package.json'],
            message:
              'Do not import from package.json; use environment variables instead.',
          },
        ],
      },
    ],
  },
  overrides: [
    ...getNoExtraneousDepsOverrides(),
    // This override enables default exports for files that require them.
    {
      files: [
        'jest.config.{js,ts,mjs,cjs,mts,cts}',
        'vitest.config.{js,ts,mjs,cjs,mts,cts}',
        'commitlint.config.{js,ts,mjs,cjs,mts,cts}',
        'lint-staged.config.{js,ts,mjs,cjs,mts,cts}',
        'release.config.{js,ts,mjs,cjs,mts,cts}',
        'rollup.config.{js,ts,mjs,cjs,mts,cts}',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    // Support vitest nested imports within vitest.config
    {
      files: ['./vitest.config.{js,ts,mjs,cjs,mts,cts}'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['^vitest/.+'],
          },
        ],
      },
    },
  ],
};
