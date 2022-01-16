/*
 * @Author: ran
 * @Date: 2022-01-16 23:23:56
 * @LastEditors: ran
 * @LastEditTime: 2022-01-17 00:15:43
 */
module.exports = {
    roots: [
        "<rootDir>/test"
    ],
    testRegex: '.(js|ts)$',
    transform: {
        // // "^.+\\.ts$": "ts-jest",
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    transformIgnorePatterns:['node_modules'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  }