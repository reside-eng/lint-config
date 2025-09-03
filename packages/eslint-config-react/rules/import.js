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
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    /**
     * Direct users to consume DataGrid wrapper component instead of @side/pantry or @mui/x-data-grid directly
     * due to css import within @mui/x-data-grid starting with v8 (must be imported at app level instead of within a library)
     */
    {
      files: ['**/*.{tsx}', '!src/components/DataGrid.tsx', '!src/components/DataGrid/DataGrid.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
            {
              paths: [
                {
                  name: '@mui/x-data-grid',
                  importNames: ['DataGrid'],
                  message:
                    'Please import `DataGrid` from `src/components/DataGrid` instead.',
                },
                {
                  name: '@side/pantry',
                  importNames: ['DataGrid'],
                  message:
                    'Please import `DataGrid` from `src/components/DataGrid` instead.',
                },
              ],
            },
          ],
      },
    },
  ],
};
