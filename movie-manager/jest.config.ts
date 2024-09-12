import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',  // Make sure to install jest-environment-jsdom
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',   // Use babel-jest for transforming TS/JS/JSX/TSX files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  collectCoverage: true, // Enable coverage collection
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
  coverageDirectory: 'coverage', // Save coverage reports in this folder
  coverageReporters: ['text', 'lcov'], // Show coverage in the terminal and save an HTML report
};

export default config;



