module.exports = {
  env: {
    es6: true,
    node: true
  },
  plugins: [
    "security"
  ],
  extends: [
    "eslint:recommended",
    "plugin:security/recommended"
  ],
  parserOptions: {
    sourceType: "module"
  }
};
