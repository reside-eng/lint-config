module.exports = {
  overrides: [
    /**
     * This override enables default exports for files that require them.
     * @link https://github.com/reside-eng/guidelines/blob/main/rfcs/shared-patterns/typescript/001-consistent-import-export.md
     */
    {
      files: [
        // Storybook stories
        '**/*.stories.{jsx,tsx}',

        // Next.js app router
        'app/**',

        // Next.js pages router
        'src/pages/**',
        'pages/**',

        // Next.js config
        'next.config.{js,mjs}',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
