module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest/globals": true
  },
  "plugins": [
    "react",
    "jest",
    "jsx-a11y",
    "import"
  ],
  "globals": {
    "graphql": true
  },
  "rules": {
    "comma-dangle": 0,
    "import/imports-first": 0,
    "global-require": 0,
    "class-methods-use-this": 0,
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "no-debugger": 0,
    "dot-notation": 0,
    "no-console": 0,
    "new-cap": 0,
    "strict": 0,
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "eol-last": 0,
    "no-shadow": 0,
    "quotes": [
      2,
      "single"
    ],
    "jsx-quotes": [
      0,
      "prefer-single"
    ],
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "linebreak-style": ["error", (require("os").EOL === "\r\n" ? "windows" : "unix")]
    }
}