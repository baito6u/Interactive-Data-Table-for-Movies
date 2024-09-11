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
};

export default config;



