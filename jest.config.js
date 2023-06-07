module.exports = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  // forked from default
  // https://jestjs.io/docs/configuration#testmatch-arraystring
  testMatch: [
    '**/__tests__/**/*.[jt]s',
    '**/__tests__/**/*.[jt]sx',
    '**/?(*.)+(spec|test).[jt]s',
    '**/?(*.)+(spec|test).[jt]sx',
  ],
  collectCoverageFrom: ['packages/**/*'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '^.+\\.((js|ts)x?)$': ['@swc/jest'],
  },
  moduleNameMapper: {
    '^@lidofinance/(.*)$': '<rootDir>/packages/$1/src',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
