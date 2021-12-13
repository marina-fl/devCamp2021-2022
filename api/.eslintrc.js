module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: ["eslint:recommended", "airbnb/base", "prettier"],

  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },

  rules: {
    "no-var": 1,
    semi: "warn",
    "no-plusplus": "off",
  },
};
