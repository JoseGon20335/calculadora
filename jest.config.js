// eslint-disable-next-line no-undef
module.exports = {
    moduleNameMapper: {
      '\\.css$': '<rootDir>/__mocks__/styleMock.js',
      '\\.svg$': '<rootDir>/__mocks__/svgMock.js'
    },
    testEnvironment: 'jsdom'
}