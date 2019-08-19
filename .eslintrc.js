module.exports = {
    "env": {
        "browser": false,
        "es6": true
    },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb"
  ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
  },
  parser: "babel-eslint",
  "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "react",
      "prettier"
    ],
    "rules": {
      "indent": [2, 2],
      "linebreak-style": [ "error", "unix" ],
      "quotes": [ "error", "single" ],
      "semi": [ "error", "always" ],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/destructuring-assignment": [1, "always"],
      "react/prop-types": [1, {skipUndeclared: true}],
      "react/jsx-first-prop-new-line": [1, "multiline-multiprop"],
      "react/jsx-max-props-per-line": [1, {"maximum": 1, "when": "always"}],
      "jsx-a11y/label-has-associated-control": [1, {
        "assert": "either",
        "depth": 3,
      }], 
    }
};
