/* eslint-disable no-undef */
const base = require('../../jest.config.base.js');

module.exports = {
    ...base,
    moduleNameMapper: {
        '^@icon/(.*)$': '<rootDir>/src/$1',
    },
    displayName: '@diabol/icon'
};