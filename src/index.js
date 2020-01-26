"use strict";
import { declare } from "@babel/helper-plugin-utils";

// ES3
import transformEs3MemberExpressionLiterals from "babel-plugin-transform-es3-member-expression-literals";
import transformEs3PropertyLiterals from "babel-plugin-transform-es3-property-literals";
// ES2015
import transformArrowFunctions from "@babel/plugin-transform-arrow-functions";
import transformBlockScopedFunctions from "@babel/plugin-transform-block-scoped-functions";
import transformBlockScoping from "@babel/plugin-transform-block-scoping";
import transformClasses from "@babel/plugin-transform-classes";
import transformComputedProperties from "@babel/plugin-transform-computed-properties";
import transformDestructuring from "@babel/plugin-transform-destructuring";
import transformDuplicateKeys from "@babel/plugin-transform-duplicate-keys";
import transformForOf from "@babel/plugin-transform-for-of";
import transformFunctionName from "@babel/plugin-transform-function-name";
import transformLiterals from "@babel/plugin-transform-literals";
import transformObjectSuper from "@babel/plugin-transform-object-super";
import transformParameters from "@babel/plugin-transform-parameters";
import transformShorthandProperties from "@babel/plugin-transform-shorthand-properties";
import transformSpread from "@babel/plugin-transform-spread";
import transformTemplateLiterals from "@babel/plugin-transform-template-literals";
import transformUnicodeRegex from "@babel/plugin-transform-unicode-regex";
// ES2016
import transformExponentiationOperator from "@babel/plugin-transform-exponentiation-operator";
// ES2018
import proposalObjectRestSpread from "@babel/plugin-proposal-object-rest-spread";
import transformDotallRegex from "@babel/plugin-transform-dotall-regex";
import proposalUnicodePropertyRegex from "@babel/plugin-proposal-unicode-property-regex";
// Polyfill
import transformRuntime from "@babel/plugin-transform-runtime";
import runtimCorejs3Package from "@babel/runtime-corejs3/package.json";

const transformRuntimeCoreJsWraper = (0, declare)((api, options, dirname) => {
  const corejsVersion = 3;
  return transformRuntime(
    api,
    Object.assign(
      {
        corejs: corejsVersion,
        version: runtimCorejs3Package.version
      },
      options || {}
    ),
    dirname
  );
});

export default declare(api => {
  api.assertVersion(7);
  return {
    plugins: [
      // ES3
      transformEs3MemberExpressionLiterals,
      transformEs3PropertyLiterals,
      // ES2015
      transformArrowFunctions,
      transformBlockScopedFunctions,
      transformBlockScoping,
      transformClasses,
      transformComputedProperties,
      transformDestructuring,
      transformDuplicateKeys,
      transformForOf,
      transformFunctionName,
      transformLiterals,
      transformObjectSuper,
      transformParameters,
      transformShorthandProperties,
      transformSpread,
      transformTemplateLiterals,
      transformUnicodeRegex,
      // ES2016
      transformExponentiationOperator,
      // ES2018
      proposalObjectRestSpread,
      transformDotallRegex,
      proposalUnicodePropertyRegex,
      // Polyfill
      transformRuntimeCoreJsWraper
    ]
  };
});
