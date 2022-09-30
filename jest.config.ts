import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest'

// Sync object
const jestConfig: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!<rootDir>/src/index.tsx',
    '!<rootDir>/**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/fileMock.js`,
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    //'^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['node_modules'],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '\\.cache', '<rootDir>.*/public'],
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { babelConfig: true }],
  },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
}

export default jestConfig
