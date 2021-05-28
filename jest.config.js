module.exports = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
  transform: {
    '^.+\\.((js|ts)x?)$': 'babel-jest',
  },

  /*
   * TODO: replace 'jasmine2' with 'circus' after the next jest release (27.0.2 or higher)
   * issue: https://github.com/facebook/jest/issues/11452
   */
  testRunner: 'jasmine2',
  testEnvironment: 'jsdom',
}
