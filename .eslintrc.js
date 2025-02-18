module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
    'linebreak-style': 'off', // I'm using windows for development. does not really matter
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param
    'indent': 'off', //turn off indent checking. does not really matter
  },
};
