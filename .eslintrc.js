module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:security/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier", "jest", "security"],
  env: {
    node: true,
    es6: true,
    "jest/globals": true,
  },
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
