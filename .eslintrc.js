module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "plugin:cypress/recommended",
        "plugin:prettier/recommended",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "quotes": ["error", "single"],
        "react/prop-types": 0,
        "jsx-quotes": ["error", "prefer-double"],
        "jest/no-mocks-import": 0
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
