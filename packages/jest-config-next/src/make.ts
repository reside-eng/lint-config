import type { Config } from '@jest/types';
// eslint-disable-next-line import/extensions
import createJestConfig from 'next/jest.js';
import * as path from 'node:path';
import { baseConfig, type DefinedConfig } from './internals/base.js';
import { detectBabelJest } from './internals/verification.js';

export type MakeConfigOptions = {
  /**
   * Aliases that correspond to any `paths` defined in tsconfig.json
   */
  moduleAliases?: NonNullable<Config.InitialOptions['moduleNameMapper']>;
  /**
   * Overrides to make to the base config
   */
  overrides?: (
    config: DefinedConfig,
  ) => Config.InitialOptions | Promise<Config.InitialOptions>;
  /**
   * Quantity of workers to allow in a CI environment
   */
  maxCIWorkerCount?: NonNullable<Config.InitialOptions['maxWorkers']>;
  /**
   * Absolute path to Next.js project directory
   */
  dir?: string;
};

export async function makeConfig({
  moduleAliases = {},
  overrides,
  maxCIWorkerCount = 2,
  dir = path.join(process.cwd(), './'),
}: MakeConfigOptions = {}) {
  // Verify environment preconditions
  detectBabelJest();

  // Copy base config
  const config: DefinedConfig = { ...baseConfig };

  // CI max workers
  // eslint-disable-next-line dot-notation
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
