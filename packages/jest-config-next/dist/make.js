import createJestConfig from 'next/jest.js';
import path from 'node:path';
import { baseConfig } from './internals/base.js';
import { detectBabelJest } from './internals/verification.js';
export async function makeConfig({
  moduleAliases = {},
  overrides,
  maxCIWorkerCount = 2,
  dir = path.join(process.cwd(), './'),
} = {}) {
  // Verify environment preconditions
  detectBabelJest();
  // Copy base config
  const config = { ...baseConfig };
  // CI max workers
  if (typeof maxCIWorkerCount === 'number' && process.env['CI'] === 'true') {
    config.maxWorkers = maxCIWorkerCount;
  }
  // Module aliases
  config.moduleNameMapper = moduleAliases;
  let finalConfig;
  if (typeof overrides === 'function') {
    // Use function-based override
    finalConfig = await overrides(config);
  } else {
    // Use unmodified config
    finalConfig = config;
  }
  return createJestConfig({ dir })(finalConfig);
}
