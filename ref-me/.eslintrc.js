// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: false,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  globals: {
     "chrome": false
    // chrome: true
  },
  env: {
    browser: false,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
