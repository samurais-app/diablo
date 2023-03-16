/* eslint-disable no-undef */
const base = require('../../jest.config.base.js');

module.exports = {
    ...base,
    moduleNameMapper: {
        '^@tools/(.*)$': '<rootDir>/src/$1',
    },
    displayName: '@diabol/tool'
};