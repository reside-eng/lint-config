import type { Config } from '@jest/types';
import { type DefinedConfig } from './internals/base.js';
export type MakeConfigOptions = {
    /**
     * Aliases that correspond to any `paths` defined in tsconfig.json
     */
    moduleAliases?: NonNullable<Config.InitialOptions['moduleNameMapper']>;
    /**
     * Overrides to make to the base config
     */
    overrides?: (config: DefinedConfig) => Config.InitialOptions | Promise<Config.InitialOptions>;
    /**
     * Quantity of workers to allow in a CI environment
     */
    maxCIWorkerCount?: NonNullable<Config.InitialOptions['maxWorkers']>;
    /**
     * Absolute path to Next.js project directory
     */
    dir?: string;
};
export declare function makeConfig({ moduleAliases, overrides, maxCIWorkerCount, dir, }?: MakeConfigOptions): Promise<() => Promise<any>>;
