import type { Config } from '@jest/types';

const reporters: Config.InitialOptions['reporters'] = [];
if (process.env['CI']) {
  reporters.push(['github-actions', { silent: false }]);
}
reporters.push('default');

export const baseConfig = {
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'json-summary'],
  reporters,
  fakeTimers: {
    enableGlobally: true,
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!**/*.stories.*',
    '!**/*.generated.*',
    '!**/generated/**',
    '!**/__snapshots__/**',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
  ],
} satisfies Config.InitialOptions;

export type DefinedConfig = typeof baseConfig & Config.InitialOptions;
