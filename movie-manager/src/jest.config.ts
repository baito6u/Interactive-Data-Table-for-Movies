// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     "^.+.tsx?$": ["ts-jest",{}],
//   },
// };

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Pointing to jest.setup.ts
};

