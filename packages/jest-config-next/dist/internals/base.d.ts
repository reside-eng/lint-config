import type { Config } from '@jest/types';
export declare const baseConfig: {
    testEnvironment: string;
    coverageReporters: ("json-summary" | "lcov")[];
    fakeTimers: {
        enableGlobally: true;
    };
    collectCoverageFrom: string[];
    setupFilesAfterEnv: string[];
    moduleDirectories: string[];
    testPathIgnorePatterns: string[];
};
export type DefinedConfig = typeof baseConfig & Config.InitialOptions;
