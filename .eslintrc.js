/* eslint-env node */

'use strict';

module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    es6: true,
    commonjs: true,
  }
};