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

const {
  extractConfig,
  disablePlugins,
} = require('eslint-disable');

const baseConfig = {
  'extends': [
    'canonical'
  ],
  'root': true,
};

// This will disable "import" plugin and all rules matching "import/*" pattern.
module.exports = disablePlugins(
  extractConfig(
    baseConfig,
  ),
  [
    'import',
  ]
);