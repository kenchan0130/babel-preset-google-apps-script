[![npm version](https://badge.fury.io/js/%40kenchan0130%2Fbabel-preset-google-apps-script.svg)](https://badge.fury.io/js/%40kenchan0130%2Fbabel-preset-google-apps-script)
[![Build Status](https://travis-ci.org/kenchan0130/babel-preset-google-apps-script.svg?branch=master)](https://travis-ci.org/kenchan0130/babel-preset-google-apps-script)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Greenkeeper badge](https://badges.greenkeeper.io/kenchan0130/babel-preset-google-apps-script.svg)](https://greenkeeper.io/)

# babel-preset-google-apps-script

Babel preset for all Goolge Apps Script.

This preset includes the following plugins:

- [@babel/plugin-transform-arrow-functions](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)
- [@babel/plugin-transform-block-scoped-functions](https://babeljs.io/docs/en/babel-plugin-transform-block-scoped-functions)
- [@babel/plugin-transform-block-scoping](https://babeljs.io/docs/en/babel-plugin-transform-block-scoping)
- [@babel/plugin-transform-classes](https://babeljs.io/docs/en/babel-plugin-transform-classes)
- [@babel/plugin-transform-computed-properties](https://babeljs.io/docs/en/next/babel-plugin-transform-computed-properties)
- [@babel/plugin-transform-destructuring](https://babeljs.io/docs/en/babel-plugin-transform-destructuring)
- [@babel/plugin-transform-duplicate-keys](https://babeljs.io/docs/en/babel-plugin-transform-duplicate-keys)
- [@babel/plugin-transform-exponentiation-operator](https://babeljs.io/docs/en/babel-plugin-transform-exponentiation-operator)
- [@babel/plugin-transform-for-of](https://babeljs.io/docs/en/babel-plugin-transform-for-of)
- [@babel/plugin-transform-function-name](https://babeljs.io/docs/en/babel-plugin-transform-function-name)
- [@babel/plugin-transform-literals](https://babeljs.io/docs/en/babel-plugin-transform-literals)
- [@babel/plugin-transform-member-expression-literals](https://babeljs.io/docs/en/babel-plugin-transform-member-expression-literals)
- [@babel/plugin-transform-object-super](https://babeljs.io/docs/en/babel-plugin-transform-object-super)
- [@babel/plugin-transform-parameters](https://babeljs.io/docs/en/babel-plugin-transform-parameters)
- [@babel/plugin-transform-property-literals](https://babeljs.io/docs/en/babel-plugin-transform-property-literals)
- [@babel/plugin-transform-shorthand-properties](https://babeljs.io/docs/en/babel-plugin-transform-shorthand-properties)
- [@babel/plugin-transform-spread](https://babeljs.io/docs/en/babel-plugin-transform-spread)
- [@babel/plugin-transform-template-literals](https://babeljs.io/docs/en/babel-plugin-transform-template-literals)
- [@babel/plugin-transform-unicode-regex](https://babeljs.io/docs/en/babel-plugin-transform-unicode-regex)

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

## License

MIT
