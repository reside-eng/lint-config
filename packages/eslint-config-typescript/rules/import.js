module.exports = {
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.cjs',
      '.mts',
      '.cts',
    ],
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.mjs',
          '.json',
          '.ts',
          '.tsx',
          '.cjs',
          '.mts',
          '.cts',
        ],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
        cjs: 'never',
        mts: 'never',
        cts: 'never',
      },
    ],
  },
};
