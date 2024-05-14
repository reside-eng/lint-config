module.exports = {
  overrides: [
    {
      files: [
        'scripts/**',
        'codegen.ts',
        'next.config.mjs',
        'next.config.js',
        '**/*.stories.tsx',
        '**/*.stories.jsx',
      ],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
    // Next.js default exports
    {
      files: ['app/**', 'src/pages/**', 'pages/**', 'next.config.{js,mjs}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['codegen.ts'],
      rules: {
        // Codegen expects default export
        'import/no-default-export': 0,
        // Codegen loads the module through codegen-cli
        'import/no-unused-modules': 0,
      },
    },
  ],
};
