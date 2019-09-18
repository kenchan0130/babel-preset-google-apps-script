[![npm version](https://badge.fury.io/js/%40kenchan0130%2Fbabel-preset-google-apps-script.svg)](https://badge.fury.io/js/%40kenchan0130%2Fbabel-preset-google-apps-script)
[![Build Status](https://travis-ci.org/kenchan0130/babel-preset-google-apps-script.svg?branch=master)](https://travis-ci.org/kenchan0130/babel-preset-google-apps-script)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# babel-preset-google-apps-script

Babel preset for all Goolge Apps Script.

## Requiredment

- Babel version 7

## Used plugins

This preset includes the following plugins.

### ES3

- [babel-plugin-transform-es3-member-expression-literals](https://babeljs.io/docs/en/babel-plugin-transform-es3-member-expression-literals)
- [babel-plugin-transform-es3-property-literals](https://babeljs.io/docs/en/babel-plugin-transform-es3-property-literals)

### ES2015

- [@babel/plugin-transform-arrow-functions](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)
- [@babel/plugin-transform-block-scoped-functions](https://babeljs.io/docs/en/babel-plugin-transform-block-scoped-functions)
- [@babel/plugin-transform-block-scoping](https://babeljs.io/docs/en/babel-plugin-transform-block-scoping)
- [@babel/plugin-transform-classes](https://babeljs.io/docs/en/babel-plugin-transform-classes)
- [@babel/plugin-transform-computed-properties](https://babeljs.io/docs/en/next/babel-plugin-transform-computed-properties)
- [@babel/plugin-transform-destructuring](https://babeljs.io/docs/en/babel-plugin-transform-destructuring)
- [@babel/plugin-transform-duplicate-keys](https://babeljs.io/docs/en/babel-plugin-transform-duplicate-keys)
- [@babel/plugin-transform-for-of](https://babeljs.io/docs/en/babel-plugin-transform-for-of)
- [@babel/plugin-transform-function-name](https://babeljs.io/docs/en/babel-plugin-transform-function-name)
- [@babel/plugin-transform-literals](https://babeljs.io/docs/en/babel-plugin-transform-literals)
- [@babel/plugin-transform-object-super](https://babeljs.io/docs/en/babel-plugin-transform-object-super)
- [@babel/plugin-transform-parameters](https://babeljs.io/docs/en/babel-plugin-transform-parameters)
- [@babel/plugin-transform-shorthand-properties](https://babeljs.io/docs/en/babel-plugin-transform-shorthand-properties)
- [@babel/plugin-transform-spread](https://babeljs.io/docs/en/babel-plugin-transform-spread)
- [@babel/plugin-transform-template-literals](https://babeljs.io/docs/en/babel-plugin-transform-template-literals)
- [@babel/plugin-transform-unicode-regex](https://babeljs.io/docs/en/babel-plugin-transform-unicode-regex)

### ES2016

- [@babel/plugin-transform-exponentiation-operator](https://babeljs.io/docs/en/babel-plugin-transform-exponentiation-operator)

## Installation

Using npm:

```sh
npm install --save-dev @kenchan0130/babel-preset-google-apps-script
```

or using yarn:

```sh
yarn add --dev @kenchan0130/babel-preset-google-apps-script
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["@kenchan0130/babel-preset-google-apps-script"]
}
```

### Via CLI

```sh
babel --presets @kenchan0130/babel-preset-google-apps-script script.js
```

### Via Node API

```javascript
require("@babel/core").transform("code", {
  plugins: ["@kenchan0130/babel-preset-google-apps-script"]
});
```

## References

- https://github.com/eiel/babel-preset-google-apps-script
  - Babel preset for Google Apps Script (not updated)
  - Using legacy presets
- https://github.com/fossamagna/babel-preset-gas
  - Babel preset for all Goolge Apps Script plugins
  - Insufficient import of preset

## Development

### Release

Run

```sh
npm version major|minor|patch
```

with local master branch.

## License

MIT
