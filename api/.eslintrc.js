module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },

    "extends": ["eslint:recommended",
    "airbnb",
    "prettier"],

    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },

    "rules": {
    },
    "plugins": [
        "prettier"
      ]
};
