"use strict";
import { declare } from "@babel/helper-plugin-utils";
import transformArrowFunctions from "@babel/plugin-transform-arrow-functions";
import transformBlockScopedFunctions from "@babel/plugin-transform-block-scoped-functions";
import transformBlockScoping from "@babel/plugin-transform-block-scoping";
import transformClasses from "@babel/plugin-transform-classes";
import transformComputedProperties from "@babel/plugin-transform-computed-properties";
import transformDestructuring from "@babel/plugin-transform-destructuring";
import transformDuplicateKeys from "@babel/plugin-transform-duplicate-keys";
import transformExponentiationPperator from "@babel/plugin-transform-exponentiation-operator";
import transformForOf from "@babel/plugin-transform-for-of";
import transformFunctionName from "@babel/plugin-transform-function-name";
import transformLiterals from "@babel/plugin-transform-literals";
import transformObjectSuper from "@babel/plugin-transform-object-super";
import transformParameters from "@babel/plugin-transform-parameters";
import transformShorthandProperties from "@babel/plugin-transform-shorthand-properties";
import transformSpread from "@babel/plugin-transform-spread";
import transformTemplateLiterals from "@babel/plugin-transform-template-literals";
import transformUnicodeRegex from "@babel/plugin-transform-unicode-regex";
import transformEs3MemberExpressionLiterals from "babel-plugin-transform-es3-property-literals";
import transformEs3PropertyLiterals from "babel-plugin-transform-es3-property-literals";

export default declare(api => {
  api.assertVersion(7);
  return {
    plugins: [
      transformArrowFunctions,
      transformBlockScopedFunctions,
      transformBlockScoping,
      transformClasses,
      transformComputedProperties,
      transformDestructuring,
      transformDuplicateKeys,
      transformExponentiationPperator,
      transformForOf,
      transformFunctionName,
      transformLiterals,
      transformObjectSuper,
      transformParameters,
      transformShorthandProperties,
      transformSpread,
      transformTemplateLiterals,
      transformUnicodeRegex,
      transformEs3MemberExpressionLiterals,
      transformEs3PropertyLiterals
    ]
  };
});
