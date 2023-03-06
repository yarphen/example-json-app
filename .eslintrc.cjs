const os = require('os');

const isWin = os.platform() === 'win32';
const winEsLintPatch = isWin ? {
  'import/no-unresolved': [2, { caseSensitive: false }],
  'linebreak-style': 0,
} : null;

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb/base',
  ],
  rules: {
    'max-len': [2, 120],
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'template-curly-spacing': 'off',
    'no-plusplus': 'off',
    ...winEsLintPatch,
  },
  globals: {},
  env:{
    "es2020": true
  }
};
