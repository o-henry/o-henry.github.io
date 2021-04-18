webpackHotUpdate_N_E("pages/blog/04-browser",{

/***/ "./pages/blog/04-browser/index.mdx":
/*!*****************************************!*\
  !*** ./pages/blog/04-browser/index.mdx ***!
  \*****************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meta\", function() { return meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/post */ \"./components/post.js\");\n\n\n\nvar _jsxFileName = \"/Users/henry/Documents/private_source/PROJECT/henryb/pages/blog/04-browser/index.mdx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\n\nvar meta = {\n  title: \"How Browsers Work\",\n  description: \"브라우저 작동원리\",\n  date: \"Nov 07, 2020\",\n  readTime: 5\n};\nvar layoutProps = {\n  meta: meta\n};\n\nvar MDXLayout = function MDXLayout(_ref) {\n  var children = _ref.children;\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(_components_post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    meta: meta,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 37\n    }\n  }, children);\n};\n\n_c = MDXLayout;\nfunction MDXContent(_ref2) {\n  var components = _ref2.components,\n      props = Object(_Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"div\", {\n    style: {\n      marginTop: \"4rem\",\n      fontFamily: \"NotoSansKR-Thin, MalgunGothic\",\n      fontSize: \"11pt\",\n      lineHeight: \"22pt\",\n      letterSpacing: \".8px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"\\uC0AC\\uC6A9\\uC790\\uAC00 \\uBE0C\\uB77C\\uC6B0\\uC800 \\uC8FC\\uC18C\\uCC3D\\uC5D0 \\uC8FC\\uC18C\\uB97C \\uC785\\uB825(url)\\uD588\\uC744 \\uB54C, \\uD654\\uBA74\\uC5D0 \\uBCF4\\uC5EC\\uC9C0\\uAC8C \\uB418\\uB294 \\uC77C\\uB828\\uC758 \\uACFC\\uC815\\uB4E4\\uC774 \\uC788\\uB2E4.\\n\\uBE0C\\uB77C\\uC6B0\\uC800\\uB294 \\uC8FC\\uC18C\\uB97C \\uD1B5\\uD574 \\uC11C\\uBC84\\uC5D0 request\\uB97C \\uBCF4\\uB0B4\\uACE0 \\uC751\\uB2F5\\uC73C\\uB85C resource\\uB97C \\uB0B4\\uB824\\uBC1B\\uACE0, HTML\\uB370\\uC774\\uD130\\uB97C \\uBC1B\\uC544 \\uB85C\\uB529\\uACFC\\uC815\\uC744 \\uAC70\\uCCD0 \\uD654\\uBA74\\uC744 \\uBCF4\\uC5EC\\uC900\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"blockquote\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"blockquote\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"\\uBE0C\\uB77C\\uC6B0\\uC800 \\uB85C\\uB529\\uACFC\\uC815 : \\uC6F9 \\uD398\\uC774\\uC9C0\\uC5D0 \\uD544\\uC694\\uD55C \\uB9AC\\uC18C\\uC2A4\\uB97C \\uB0B4\\uB824\\uBC1B\\uACE0, \\uD574\\uC11D\\uD6C4 \\uACC4\\uC0B0 \\uD654\\uBA74\\uC5D0 \\uBCF4\\uC5EC\\uC8FC\\uB294 \\uACFC\\uC815\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, \"Parsing\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"\\uBE0C\\uB77C\\uC6B0\\uC800 \\uC5D0\\uC11C \\uC6F9\\uD398\\uC774\\uC9C0\\uB97C \\uB85C\\uB4DC\\uD558\\uBA74 HTML \\uD30C\\uC77C\\uC744 \\uB2E4\\uC6B4\\uB85C\\uB4DC\\uD55C\\uB2E4. 2. HTML\\uC744 \\uD574\\uC11D(\\uD30C\\uC2F1) DOM \\uD2B8\\uB9AC\\uB97C \\uAD6C\\uC131\\uD55C\\uB2E4 3. \\uD30C\\uC2F1 \\uC911 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 87\n    }\n  }, \"<script />\"), \" \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 146\n    }\n  }, \"<link />\"), \" \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 203\n    }\n  }, \"<img />\"), \" \\uB97C \\uB9CC\\uB098\\uBA74 \\uB9AC\\uC18C\\uC2A4\\uB97C \\uC694\\uCCAD\\uD558\\uACE0 \\uB2E4\\uC6B4\\uB85C\\uB4DC \\uD55C\\uB2E4.\\n\\u251C\\u2500 JS\\uD30C\\uC77C\\uC744 \\uB9CC\\uB098\\uBA74 \\uD574\\uB2F9 \\uD30C\\uC77C\\uC744 \\uBC1B\\uC544\\uC640\\uC11C \\uC2E4\\uD589\\uD560\\uB54C \\uAE4C\\uC9C0 \\uD30C\\uC2F1\\uC774 \\uBA48\\uCD98\\uB2E4.\\n\\u2514\\u2500 \\uC704 \\uAC19\\uC740 \\uBB38\\uC81C\\uB97C \\uB9C9\\uAE30\\uC704\\uD574, body \\uCD5C\\uD558\\uB2E8\\uC5D0 script \\uB97C \\uC704\\uCE58\\uD558\\uAC8C \\uD55C\\uB2E4. 4. HTML \\uB610\\uB294 \\uB9AC\\uC18C\\uC2A4\\uC5D0 CSS\\uAC00 \\uD3EC\\uD568\\uB420 \\uACBD\\uC6B0, CSSOM\\uD2B8\\uB9AC \\uC791\\uC5C5\\uB3C4 \\uD568\\uAED8 \\uC9C4\\uD589\\uD55C\\uB2E4. 5. CSSOM\\uC744 \\uAD6C\\uC131\\uD558\\uB294 \\uAC83\\uC774 \\uB05D\\uB098\\uC57C, \\uBE44\\uB85C\\uC18C \\uC774\\uD6C4\\uC758 Rendering \\uACFC\\uC815\\uC744 \\uC2DC\\uC791\\uD560 \\uC218 \\uC788\\uB2E4.\\n\\u2514\\u2500 HTML \\uBC0F CSS\\uB294 \\uB458\\uB2E4 \\uB80C\\uB354\\uB9C1 \\uCC28\\uB2E8 \\uB9AC\\uC18C\\uC2A4\\uC785\\uB2C8\\uB2E4\")));\n}\n_c2 = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MDXLayout\");\n$RefreshReg$(_c2, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy8wNC1icm93c2VyL2luZGV4Lm1keD8xNmI0Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInJlYWRUaW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJjaGlsZHJlbiIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBOztBQUNBO0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsbUJBRFc7QUFFbEJDLGFBQVcsRUFBRSxXQUZLO0FBR2xCQyxNQUFJLEVBQUUsY0FIWTtBQUlsQkMsVUFBUSxFQUFFO0FBSlEsQ0FBYjtBQU9QLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjs7QUFHQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQWtCLDBEQUFDLHdEQUFEO0FBQU0sUUFBSSxFQUFFUCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJPLFFBQW5CLENBQWxCO0FBQUEsQ0FBbEI7O0tBQU1ELFM7QUFDUyxTQUFTRSxVQUFULFFBR1o7QUFBQSxNQUZEQyxVQUVDLFNBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCxnREFBZUwsV0FBZixHQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMO0FBQUssU0FBSyxFQUFFO0FBQ1ZFLGVBQVMsRUFBRSxNQUREO0FBRVZDLGdCQUFVLEVBQUUsK0JBRkY7QUFHVkMsY0FBUSxFQUFFLE1BSEE7QUFJVkMsZ0JBQVUsRUFBRSxNQUpGO0FBS1ZDLG1CQUFhLEVBQUU7QUFMTCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVqQkFQRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGNBQVUsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMFBBREYsQ0FURixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscVJBQWdGO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWhGLE9BQTJJO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTNJLE9BQW9NO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBcE0scTZCQWRGLENBSkssQ0FBUDtBQXdCRDtNQTVCdUJQLFU7QUE4QnhCO0FBQ0FBLFVBQVUsQ0FBQ1EsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvMDQtYnJvd3Nlci9pbmRleC5tZHguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wb3N0XCI7XG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6IFwiSG93IEJyb3dzZXJzIFdvcmtcIixcbiAgZGVzY3JpcHRpb246IFwi67iM65287Jqw7KCAIOyekeuPmeybkOumrFwiLFxuICBkYXRlOiBcIk5vdiAwNywgMjAyMFwiLFxuICByZWFkVGltZTogNVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiA8UG9zdCBtZXRhPXttZXRhfT57Y2hpbGRyZW59PC9Qb3N0PlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgbWFyZ2luVG9wOiBcIjRyZW1cIixcbiAgICAgIGZvbnRGYW1pbHk6IFwiTm90b1NhbnNLUi1UaGluLCBNYWxndW5Hb3RoaWNcIixcbiAgICAgIGZvbnRTaXplOiBcIjExcHRcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMjJwdFwiLFxuICAgICAgbGV0dGVyU3BhY2luZzogXCIuOHB4XCJcbiAgICB9fT5cbiAgICAgIDxwPntg7IKs7Jqp7J6Q6rCAIOu4jOudvOyasOyggCDso7zshozssL3sl5Ag7KO87IaM66W8IOyeheugpSh1cmwp7ZaI7J2EIOuVjCwg7ZmU66m07JeQIOuztOyXrOyngOqyjCDrkJjripQg7J2866Co7J2YIOqzvOygleuTpOydtCDsnojri6QuXG7ruIzrnbzsmrDsoIDripQg7KO87IaM66W8IO2Gte2VtCDshJzrsoTsl5AgcmVxdWVzdOulvCDrs7TrgrTqs6Ag7J2R64u17Jy866GcIHJlc291cmNl66W8IOuCtOugpOuwm+qzoCwgSFRNTOuNsOydtO2EsOulvCDrsJvslYQg66Gc65Sp6rO87KCV7J2EIOqxsOyzkCDtmZTrqbTsnYQg67O07Jes7KSA64ukLmB9PC9wPlxuICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgIDxwIHBhcmVudE5hbWU9XCJibG9ja3F1b3RlXCI+e2DruIzrnbzsmrDsoIAg66Gc65Sp6rO87KCVIDog7Ju5IO2OmOydtOyngOyXkCDtlYTsmpTtlZwg66as7IaM7Iqk66W8IOuCtOugpOuwm+qzoCwg7ZW07ISd7ZuEIOqzhOyCsCDtmZTrqbTsl5Ag67O07Jes7KO864qUIOqzvOyglWB9PC9wPlxuICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgPGgxPlBhcnNpbmc8L2gxPlxuICAgICAgPGhyIC8+XG4gICAgICA8cD57YOu4jOudvOyasOyggCDsl5DshJwg7Ju57Y6Y7J207KeA66W8IOuhnOuTnO2VmOuptCBIVE1MIO2MjOydvOydhCDri6TsmrTroZzrk5ztlZzri6QuIDIuIEhUTUzsnYQg7ZW07ISdKO2MjOyLsSkgRE9NIO2KuOumrOulvCDqtazshLHtlZzri6QgMy4g7YyM7IuxIOykkSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8c2NyaXB0IC8+YH08L2lubGluZUNvZGU+e2AgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGxpbmsgLz5gfTwvaW5saW5lQ29kZT57YCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8aW1nIC8+YH08L2lubGluZUNvZGU+e2Ag66W8IOunjOuCmOuptCDrpqzshozsiqTrpbwg7JqU7LKt7ZWY6rOgIOuLpOyatOuhnOuTnCDtlZzri6QuXG7ilJzilIAgSlPtjIzsnbzsnYQg66eM64KY66m0IO2VtOuLuSDtjIzsnbzsnYQg67Cb7JWE7JmA7IScIOyLpO2Wie2VoOuVjCDquYzsp4Ag7YyM7Iux7J20IOupiOy2mOuLpC5cbuKUlOKUgCDsnIQg6rCZ7J2AIOusuOygnOulvCDrp4nquLDsnITtlbQsIGJvZHkg7LWc7ZWY64uo7JeQIHNjcmlwdCDrpbwg7JyE7LmY7ZWY6rKMIO2VnOuLpC4gNC4gSFRNTCDrmJDripQg66as7IaM7Iqk7JeQIENTU+qwgCDtj6ztlajrkKAg6rK97JqwLCBDU1NPTe2KuOumrCDsnpHsl4Xrj4Qg7ZWo6ruYIOynhO2Wie2VnOuLpC4gNS4gQ1NTT03snYQg6rWs7ISx7ZWY64qUIOqyg+ydtCDrgZ3rgpjslbwsIOu5hOuhnOyGjCDsnbTtm4TsnZggUmVuZGVyaW5nIOqzvOygleydhCDsi5zsnpHtlaAg7IiYIOyeiOuLpC5cbuKUlOKUgCBIVE1MIOuwjyBDU1PripQg65GY64ukIOugjOuNlOungSDssKjri6gg66as7IaM7Iqk7J6F64uI64ukYH08L3A+XG4gICAgPC9kaXY+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/04-browser/index.mdx\n");

/***/ })

})