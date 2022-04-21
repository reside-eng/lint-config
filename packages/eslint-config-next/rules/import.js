module.exports = {
  overrides: [
    {
      files: [
        'scripts/**',
        'next.config.mjs',
        'next.config.js',
        '**/*.stories.tsx',
        '**/*.stories.jsx',
      ],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
