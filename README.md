[![npm version](https://badge.fury.io/js/%40kenchan0130%2Fbabel-preset-google-apps-script.svg)](https://badge.fury.io/js/%40kenchan0130%2Fbabel-preset-google-apps-script)
[![Build Status](https://github.com/kenchan0130/babel-preset-google-apps-script/workflows/Node.js%20CI/badge.svg)](https://github.com/kenchan0130/babel-preset-google-apps-script/actions?query=workflow%3A%22Node.js+CI%22)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# babel-preset-google-apps-script

Babel syntax preset for all Goolge Apps Script.

## Announcement

If you are going to create a new Google Apps Script app with babel, I **do not recommend using** this preset.

Google has announced [support for V8 as the runtime engine for Google Apps Script](https://developers.google.com/apps-script/guides/v8-runtime).
V8, Google Apps Script JavaScript runtime, supports the latest ECMAScript syntax, so you don't need to use this preset.

### Future plan

Until the V8 runtime becomes stable, I will keep maintaining this project.
And I will archive this repository when the time comes.

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

### ES2018

- [@babel/plugin-proposal-object-rest-spread](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread)
- [@babel/plugin-transform-dotall-regex](https://babeljs.io/docs/en/babel-plugin-transform-dotall-regex)
- [@babel/plugin-proposal-unicode-property-regex](https://babeljs.io/docs/en/babel-plugin-proposal-unicode-property-regex)

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

## Polyfill

This library does not include polyfill.
If you want to use it, I recommend using [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env).

### Case webpack

First, install the required dependencies for polyfill.

```sh
npm i -D core-js/stable regenerator-runtime/runtime @babel/preset-env core-js@3
```

And set `webpack.config.js` as follows.

```js
const path = require('path');
const GasPlugin = require("gas-webpack-plugin"); // Define functions at the top level

module.exports = {
  mode: 'none', // Prevent minify
  entry: [
    "core-js/stable",
    "regenerator-runtime/runtime",
    path.resolve(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'out.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [
                [
                  "@babel/preset-env", {
                    useBuiltIns: "entry",
                    corejs: 3
                  }
                ],
                [
                  '@kenchan0130/babel-preset-google-apps-script'
                ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new GasPlugin()
  ]
};
```

## References

- https://github.com/eiel/babel-preset-google-apps-script
  - Babel preset for Google Apps Script (not updated)
  - Using legacy presets
- https://github.com/fossamagna/babel-preset-gas
  - Babel preset for all Goolge Apps Script plugins
  - Insufficient import of preset

## Development

### Test

```sh
npm run test
```

All you need to know is that the transforms are reflected.

### Release

```sh
npm version major|minor|patch
```

Run the command with local master branch.

## License

MIT
