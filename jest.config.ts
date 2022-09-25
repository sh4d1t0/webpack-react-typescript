import type { Config } from 'jest'

// Sync object
export default async (): Promise<Config> => {
  return {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
      '!**/node_modules/**',
      '!<rootDir>/src/index.tsx',
      '!<rootDir>/**/*.d.ts',
    ],
    coverageDirectory: 'coverage',
    moduleNameMapper: {
      '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
      '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/fileMock.js`,
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
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  }
}
