// jest.config.js
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<snapshot-tests>/__mocks__/fileMock.js"
  }
  // other Jest configurations...
};

  