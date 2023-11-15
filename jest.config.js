module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./tests/setup.js'],
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: ['src/**/*.js'],
};