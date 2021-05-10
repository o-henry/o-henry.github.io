webpackHotUpdate_N_E("pages/blog/07-tdd",{

/***/ "./pages/blog/07-tdd/index.mdx":
/*!*************************************!*\
  !*** ./pages/blog/07-tdd/index.mdx ***!
  \*************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meta\", function() { return meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _Users_henry_Documents_blog_o_henry_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_henry_Documents_blog_o_henry_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/post */ \"./components/post.js\");\n\n\n\nvar _jsxFileName = \"/Users/henry/Documents/blog/o-henry.github.io/pages/blog/07-tdd/index.mdx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_henry_Documents_blog_o_henry_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\n\nvar meta = {\n  title: \"TDD\",\n  description: \"자바스크립트 패턴과 테스트\",\n  date: \"2021-05-04T11:15:00.0Z\",\n  readTime: 4\n};\nvar layoutProps = {\n  meta: meta\n};\n\nvar MDXLayout = function MDXLayout(_ref) {\n  var children = _ref.children;\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(_components_post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    meta: meta,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 37\n    }\n  }, children);\n};\n\n_c = MDXLayout;\nfunction MDXContent(_ref2) {\n  var components = _ref2.components,\n      props = Object(_Users_henry_Documents_blog_o_henry_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"div\", {\n    style: {\n      marginTop: \"4rem\",\n      fontFamily: \"NotoSansKR-Thin, MalgunGothic\",\n      fontSize: '11pt',\n      lineHeight: '22pt',\n      letterSpacing: '.8px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"TDD\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h3\", {\n    style: {\n      fontFamily: \"SeoulNamsanL\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, \"\\uB2E8\\uC704 \\uD14C\\uC2A4\\uD2B8\\uD560 \\uC218 \\uC788\\uB294 \\uCF54\\uB4DC\\uB97C \\uC791\\uC131\\uD558\\uB77C\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"\\uB2E8\\uC704 \\uD14C\\uC2A4\\uD2B8\\uB97C \\uD560 \\uC218 \\uC788\\uB294 \\uCF54\\uB4DC\\uB97C \\uB9CC\\uB4E4\\uB824\\uBA74 \\uD504\\uB85C\\uADF8\\uB7A8\\uC744 \\uB2E8\\uC704\\uBCC4\\uB85C \\uB098\\uB204\\uC5B4 \\uAC1C\\uBC1C\\uD558\\uB77C.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, \"\\uB2E8\\uC704\\uB780 \\uC791\\uC740 \\uC778\\uD130\\uD398\\uC774\\uC2A4 \\uC640 \\uB2E8\\uC77C \\uCC45\\uC784\\uC744 \\uAC00\\uC9C4 \\uBAA8\\uB4C8\\uC744 \\uB9D0\\uD55C\\uB2E4. \\uB2E4\\uB978 \\uB2E8\\uC704\\uC758 \\uC11C\\uBE44\\uC2A4\\uB97C \\uC0AC\\uC6A9\\uD574\\uC57C \\uD55C\\uB2E4\\uBA74 \\uC758\\uC874\\uC131 \\uC8FC\\uC785\\uC774\\uB77C\\uB294 SOLID \\uD55C \\uCE5C\\uAD6C\\uC5D0\\uAC8C \\uBD80\\uD0C1\\uD558\\uB77C.\\n\\uBC1B\\uB294 \\uCABD \\uC0DD\\uC131\\uC790 \\uD568\\uC218\\uB97C \\uD1B5\\uD574 \\uC11C\\uBE44\\uC2A4\\uB97C \\uC8FC\\uACE0\\uC790 \\uD55C\\uB2E4\\uBA74, \\uB2E8\\uC704 \\uD14C\\uC2A4\\uD2B8 \\uC2DC \\uBAA8\\uD615\\uC744 \\uC0AC\\uC6A9\\uD574 \\uD14C\\uC2A4\\uD2B8\\uD560 \\uB300\\uC0C1\\uCF54\\uB4DC\\uB97C \\uD558\\uB098\\uC758 \\uB2E8\\uC704\\uB85C \\uC881\\uD78C\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 10\n    }\n  }, \"\\uD14C\\uC2A4\\uD2B8 \\uACB0\\uACFC \\uC790\\uCCB4\\uB97C \\uAE30\\uB2A5\\uBA85\\uC138\\uB85C \\uBCF4\\uACE0 \\uB420 \\uC218 \\uC788\\uB3C4\\uB85D \\uAD6C\\uCCB4\\uC801\\uC73C\\uB85C \\uAE30\\uC220\\uD55C\\uB2E4.\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 10\n    }\n  }, \"\\uAE30\\uBCF8\\uC801 TDD\\uC758 \\uC808\\uCC28\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"\\uC2E4\\uD328\\uD558\\uB294 \\uD14C\\uC2A4\\uD2B8\\uB97C \\uC791\\uC131\\uD55C\\uB2E4. \\uBCF8\\uC778\\uC774 \\uBB34\\uC5C7\\uC744 \\uD14C\\uC2A4\\uD2B8\\uD558\\uB824\\uACE0 \\uD558\\uB294\\uC9C0 \\uD655\\uC2E4\\uD574\\uC9C4\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ul\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"\\uCF54\\uB529 \\uC804 \\uD14C\\uC2A4\\uD2B8\\uB97C \\uBA3C\\uC800 \\uC791\\uC131\\uD55C\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \"\\uC5D0\\uB7EC\\uC870\\uAC74\\uC744 \\uBA3C\\uC800 \\uD14C\\uC2A4\\uD2B8\\uD55C\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"\\uBCF5\\uC7A1\\uD55C\\uAC83 \\uBCF4\\uB2E4 \\uAC04\\uB2E8\\uD55C\\uAC83\\uC744 \\uBA3C\\uC800 \\uD14C\\uC2A4\\uD2B8\\uD55C\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"\\uAD6C\\uCCB4\\uC801\\uC73C\\uB85C \\uC791\\uC131\\uD55C\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"\\uD14C\\uC2A4\\uD2B8 \\uB9C8\\uB2E4 \\uD55C\\uAC00\\uC9C0\\uB9CC \\uD655\\uC778\\uD55C\\uB2E4.\"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, \"\\uD14C\\uC2A4\\uD2B8\\uAC00 \\uC131\\uACF5\\uD560\\uB9CC\\uD07C \\uCF54\\uB529\\uD55C\\uB2E4.\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"\\uB9AC\\uD329\\uD1A0\\uB9C1 \\uD55C\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ul\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"DRY \\uD558\\uAC8C \\uC720\\uC9C0\\uD55C\\uB2E4.\"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"\\uC2E4\\uD328\\uD558\\uB294 \\uD14C\\uC2A4\\uD2B8\\uC5D0\\uC11C\\uB294 \\uD574\\uB2F9 \\uAE30\\uB2A5\\uC744 \\uC5B4\\uB5BB\\uAC8C \\uAD6C\\uC131\\uD560\\uC9C0 \\uB610, \\uC5B4\\uB5A4 \\uAC83\\uC774 \\uD544\\uC694\\uD55C\\uC9C0\\uB4F1\\uC758 \\uBA85\\uC138\\uB97C \\uC791\\uC131\\uD55C\\uB2E4.\"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, \"BDD\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, \"\\uD14C\\uC2A4\\uD2B8 \\uCF54\\uB4DC\\uB294 \\uACE7 \\uBA85\\uC138\\uAC00 \\uB41C\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, \"BDD(\\uD589\\uC704 \\uC8FC\\uB3C4 \\uAC1C\\uBC1C) ~\\uB294 \\uC774\\uB7EC\\uD574\\uC57C \\uD55C\\uB2E4. \\uB3D9\\uC791\\uC5D0 \\uB300\\uD574 \\uADF8\\uB9B0\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, \"\\uC0AC\\uC6A9\\uC790 \\uCE21\\uBA74\\uC5D0\\uC11C\\uC758 \\uD14C\\uC2A4\\uD2B8 \\uD55C\\uB2E4. ( \\uC798 \\uC791\\uB3D9\\uD558\\uB294\\uC9C0 \\uB4F1 \\uC758 \\uC5EC\\uBD80\\uB97C \\uCCB4\\uD06C\\uD55C\\uB2E4. )\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"ul\", {\n    parentName: \"li\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"li\", {\n    parentName: \"ul\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, \"\\uC0AC\\uC6A9\\uC790\\uB294 \\uD574\\uB2F9 \\uAE30\\uB2A5\\uC774 \\uC5B4\\uB5BB\\uAC8C \\uC2E4\\uD589\\uB418\\uB294\\uC9C0 \\uC2E0\\uACBD\\uC4F0\\uC9C0 \\uC54A\\uB294\\uB2E4. \\uADF8\\uC800 \\uC790\\uC2E0\\uC774 \\uAE30\\uB300\\uD558\\uB294\\uB300\\uB85C \\uC791\\uB3D9\\uD558\\uB294 \\uC9C0\\uB97C \\uACE0\\uB824\\uD55C\\uB2E4.\"))))));\n}\n_c2 = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MDXLayout\");\n$RefreshReg$(_c2, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy8wNy10ZGQvaW5kZXgubWR4PzEyYmUiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwicmVhZFRpbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsImNoaWxkcmVuIiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsIm1hcmdpblRvcCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0FBQ0E7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxLQURXO0FBRWxCQyxhQUFXLEVBQUUsZ0JBRks7QUFHbEJDLE1BQUksRUFBRSx3QkFIWTtBQUlsQkMsVUFBUSxFQUFFO0FBSlEsQ0FBYjtBQU9QLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjs7QUFHQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQWtCLDBEQUFDLHdEQUFEO0FBQU0sUUFBSSxFQUFFUCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJPLFFBQW5CLENBQWxCO0FBQUEsQ0FBbEI7O0tBQU1ELFM7QUFDUyxTQUFTRSxVQUFULFFBR1o7QUFBQSxNQUZEQyxVQUVDLFNBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCxnREFBZUwsV0FBZixHQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMO0FBQUssU0FBSyxFQUFF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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscVFBREYsQ0FwQkYsQ0FyQkYsRUE2Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdDRixFQThDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOUNGLEVBK0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUZBREYsRUFFRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0pBRkYsRUFHRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ01BQ0U7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9TQURGLENBREYsQ0FIRixDQS9DRixDQUpLLENBQVA7QUE4REQ7TUFsRXVCSixVO0FBb0V4QjtBQUNBQSxVQUFVLENBQUNRLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoiLi9wYWdlcy9ibG9nLzA3LXRkZC9pbmRleC5tZHguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wb3N0XCI7XG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6IFwiVEREXCIsXG4gIGRlc2NyaXB0aW9uOiBcIuyekOuwlOyKpO2BrOumve2KuCDtjKjthLTqs7wg7YWM7Iqk7Yq4XCIsXG4gIGRhdGU6IFwiMjAyMS0wNS0wNFQxMToxNTowMC4wWlwiLFxuICByZWFkVGltZTogNFxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiA8UG9zdCBtZXRhPXttZXRhfT57Y2hpbGRyZW59PC9Qb3N0PlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgbWFyZ2luVG9wOiBcIjRyZW1cIixcbiAgICAgIGZvbnRGYW1pbHk6IFwiTm90b1NhbnNLUi1UaGluLCBNYWxndW5Hb3RoaWNcIixcbiAgICAgIGZvbnRTaXplOiAnMTFwdCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjJwdCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLjhweCdcbiAgICB9fT5cbiAgICAgIDxoMT57YFRERGB9PC9oMT5cbiAgICAgIDxiciAvPlxuICAgICAgPGgzIHN0eWxlPXt7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiU2VvdWxOYW1zYW5MXCJcbiAgICAgIH19PlxuICDri6jsnIQg7YWM7Iqk7Yq47ZWgIOyImCDsnojripQg7L2U65Oc66W8IOyekeyEse2VmOudvFxuICAgICAgPC9oMz5cbiAgICAgIDxwPntg64uo7JyEIO2FjOyKpO2KuOulvCDtlaAg7IiYIOyeiOuKlCDsvZTrk5zrpbwg66eM65Ok66Ck66m0IO2UhOuhnOq3uOueqOydhCDri6jsnITrs4TroZwg64KY64iE7Ja0IOqwnOuwnO2VmOudvC5gfTwvcD5cbiAgICAgIDxwPntg64uo7JyE656AIOyekeydgCDsnbjthLDtjpjsnbTsiqQg7JmAIOuLqOydvCDssYXsnoTsnYQg6rCA7KeEIOuqqOuTiOydhCDrp5DtlZzri6QuIOuLpOuluCDri6jsnITsnZgg7ISc67mE7Iqk66W8IOyCrOyaqe2VtOyVvCDtlZzri6TrqbQg7J2Y7KG07ISxIOyjvOyeheydtOudvOuKlCBTT0xJRCDtlZwg7Lmc6rWs7JeQ6rKMIOu2gO2Dge2VmOudvC5cbuuwm+uKlCDsqr0g7IOd7ISx7J6QIO2VqOyImOulvCDthrXtlbQg7ISc67mE7Iqk66W8IOyjvOqzoOyekCDtlZzri6TrqbQsIOuLqOychCDthYzsiqTtirgg7IucIOuqqO2YleydhCDsgqzsmqntlbQg7YWM7Iqk7Yq47ZWgIOuMgOyDgey9lOuTnOulvCDtlZjrgpjsnZgg64uo7JyE66GcIOyige2ejOuLpC5gfTwvcD5cbiAgICAgIDxociAvPlxuICAgICAgPHA+PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntg7YWM7Iqk7Yq4IOqysOqzvCDsnpDssrTrpbwg6riw64ql66qF7IS466GcIOuztOqzoCDrkKAg7IiYIOyeiOuPhOuhnSDqtazssrTsoIHsnLzroZwg6riw7Iig7ZWc64ukLmB9PC9zdHJvbmc+PC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8cD48c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2DquLDrs7jsoIEgVERE7J2YIOygiOywqGB9PC9zdHJvbmc+PC9wPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+XG4gICAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+e2Dsi6TtjKjtlZjripQg7YWM7Iqk7Yq466W8IOyekeyEse2VnOuLpC4g67O47J247J20IOustOyXh+ydhCDthYzsiqTtirjtlZjroKTqs6Ag7ZWY64qU7KeAIO2ZleyLpO2VtOynhOuLpC5gfTwvcD5cbiAgICAgICAgICA8dWwgcGFyZW50TmFtZT1cImxpXCI+XG4gICAgICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2DsvZTrlKkg7KCEIO2FjOyKpO2KuOulvCDrqLzsoIAg7J6R7ISx7ZWc64ukLmB9PC9saT5cbiAgICAgICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YOyXkOufrOyhsOqxtOydhCDrqLzsoIAg7YWM7Iqk7Yq47ZWc64ukLmB9PC9saT5cbiAgICAgICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YOuzteyeoe2VnOqygyDrs7Tri6Qg6rCE64uo7ZWc6rKD7J2EIOuovOyggCDthYzsiqTtirjtlZzri6QuYH08L2xpPlxuICAgICAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntg6rWs7LK07KCB7Jy866GcIOyekeyEse2VnOuLpC5gfTwvbGk+XG4gICAgICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2DthYzsiqTtirgg66eI64ukIO2VnOqwgOyngOunjCDtmZXsnbjtlZzri6QuYH08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj5cbiAgICAgICAgICA8cCBwYXJlbnROYW1lPVwibGlcIj57YO2FjOyKpO2KuOqwgCDshLHqs7XtlaDrp4ztgbwg7L2U65Sp7ZWc64ukLmB9PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+XG4gICAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+e2DrpqztjKnthqDrp4Eg7ZWc64ukLmB9PC9wPlxuICAgICAgICAgIDx1bCBwYXJlbnROYW1lPVwibGlcIj5cbiAgICAgICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YERSWSDtlZjqsowg7Jyg7KeA7ZWc64ukLmB9PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+XG4gICAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+e2Dsi6TtjKjtlZjripQg7YWM7Iqk7Yq47JeQ7ISc64qUIO2VtOuLuSDquLDriqXsnYQg7Ja065a76rKMIOq1rOyEse2VoOyngCDrmJAsIOyWtOuWpCDqsoPsnbQg7ZWE7JqU7ZWc7KeA65Ox7J2YIOuqheyEuOulvCDsnpHshLHtlZzri6QuYH08L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDE+e2BCRERgfTwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YO2FjOyKpO2KuCDsvZTrk5zripQg6rOnIOuqheyEuOqwgCDrkJzri6QuYH08L2xpPlxuICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BCREQo7ZaJ7JyEIOyjvOuPhCDqsJzrsJwpIH7ripQg7J2065+s7ZW07JW8IO2VnOuLpC4g64+Z7J6R7JeQIOuMgO2VtCDqt7jrprDri6QuYH08L2xpPlxuICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2DsgqzsmqnsnpAg7Lih66m07JeQ7ISc7J2YIO2FjOyKpO2KuCDtlZzri6QuICgg7J6YIOyekeuPme2VmOuKlOyngCDrk7Eg7J2YIOyXrOu2gOulvCDssrTtgaztlZzri6QuIClgfVxuICAgICAgICAgIDx1bCBwYXJlbnROYW1lPVwibGlcIj5cbiAgICAgICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YOyCrOyaqeyekOuKlCDtlbTri7kg6riw64ql7J20IOyWtOuWu+qyjCDsi6TtlonrkJjripTsp4Ag7Iug6rK97JOw7KeAIOyViuuKlOuLpC4g6re47KCAIOyekOyLoOydtCDquLDrjIDtlZjripTrjIDroZwg7J6R64+Z7ZWY64qUIOyngOulvCDqs6DroKTtlZzri6QuYH08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/07-tdd/index.mdx\n");

/***/ })

})