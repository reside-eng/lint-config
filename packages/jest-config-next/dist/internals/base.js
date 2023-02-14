export const baseConfig = {
  testEnvironment: 'jsdom',
  coverageReporters: ['lcov', 'json-summary'],
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
};
