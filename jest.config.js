module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  moduleNameMapper: {
    '.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mock__/fileMock.js',
    '.(css|less)$': '<rootDir>/__mock__/styleMock.js',
  },
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: ['text', 'json', 'lcov'],
};
