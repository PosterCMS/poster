/* eslint-env node */

'use strict';

module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint',
    sourceType: 'module', // es6 import/export
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    mocha: true
  },
  globals: {
    global: true,
    arguments: true,
    module: true,
    process: true,
    logger: true,
    config: true,
    api: true,
    expect: true,
    proxy: true,
    googletag: true,
    $:true
  },
  rules: {
    'no-console': 0,
    'comma-dangle': [2, 'only-multiline'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    semi: ['error', 'always', {'omitLastInOneLineBlock': true}],
    'vue/name-property-casing': 'kebab-case',
    'vue/component-name-in-template-casing': 'kebab-case',
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }],
    'vue/html-closing-bracket-newline': 'never',
    'vue/no-v-html': false,
    'vue/require-default-prop': false,
    'vue/html-closing-bracket-spacing': false,
    'vue/singleline-html-element-content-newline': false,
    'vue/multiline-html-element-content-newline': false
  },
};