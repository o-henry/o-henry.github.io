webpackHotUpdate_N_E("pages/blog/04-browser",{

/***/ "./pages/blog/04-browser/index.mdx":
/*!*****************************************!*\
  !*** ./pages/blog/04-browser/index.mdx ***!
  \*****************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meta\", function() { return meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/post */ \"./components/post.js\");\n\n\n\nvar _jsxFileName = \"/Users/henry/Documents/private_source/PROJECT/henryb/pages/blog/04-browser/index.mdx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\n\nvar meta = {\n  title: \"How Browsers Work\",\n  description: \"브라우저 작동원리\",\n  date: \"Nov 07, 2020\",\n  readTime: 5\n};\nvar layoutProps = {\n  meta: meta\n};\n\nvar MDXLayout = function MDXLayout(_ref) {\n  var children = _ref.children;\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(_components_post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    meta: meta,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 37\n    }\n  }, children);\n};\n\n_c = MDXLayout;\nfunction MDXContent(_ref2) {\n  var components = _ref2.components,\n      props = Object(_Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"div\", {\n    style: {\n      marginTop: \"4rem\",\n      fontFamily: \"NotoSansKR-Thin, MalgunGothic\",\n      fontSize: \"11pt\",\n      lineHeight: \"22pt\",\n      letterSpacing: \".8px\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"\\uC0AC\\uC6A9\\uC790\\uAC00 \\uBE0C\\uB77C\\uC6B0\\uC800 \\uC8FC\\uC18C\\uCC3D\\uC5D0 \\uC8FC\\uC18C\\uB97C \\uC785\\uB825(url)\\uD588\\uC744 \\uB54C, \\uD654\\uBA74\\uC5D0 \\uBCF4\\uC5EC\\uC9C0\\uAC8C \\uB418\\uB294 \\uC77C\\uB828\\uC758 \\uACFC\\uC815\\uB4E4\\uC774 \\uC788\\uB2E4.\\n\\uBE0C\\uB77C\\uC6B0\\uC800\\uB294 \\uC8FC\\uC18C\\uB97C \\uD1B5\\uD574 \\uC11C\\uBC84\\uC5D0 request\\uB97C \\uBCF4\\uB0B4\\uACE0 \\uC751\\uB2F5\\uC73C\\uB85C resource\\uB97C \\uB0B4\\uB824\\uBC1B\\uACE0, HTML\\uB370\\uC774\\uD130\\uB97C \\uBC1B\\uC544 \\uB85C\\uB529\\uACFC\\uC815\\uC744 \\uAC70\\uCCD0 \\uD654\\uBA74\\uC744 \\uBCF4\\uC5EC\\uC900\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"blockquote\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    parentName: \"blockquote\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"\\uBE0C\\uB77C\\uC6B0\\uC800 \\uB85C\\uB529\\uACFC\\uC815 : \\uC6F9 \\uD398\\uC774\\uC9C0\\uC5D0 \\uD544\\uC694\\uD55C \\uB9AC\\uC18C\\uC2A4\\uB97C \\uB0B4\\uB824\\uBC1B\\uACE0, \\uD574\\uC11D\\uD6C4 \\uACC4\\uC0B0 \\uD654\\uBA74\\uC5D0 \\uBCF4\\uC5EC\\uC8FC\\uB294 \\uACFC\\uC815\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, \"Parsing\")));\n}\n_c2 = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MDXLayout\");\n$RefreshReg$(_c2, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy8wNC1icm93c2VyL2luZGV4Lm1keD8xNmI0Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInJlYWRUaW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJjaGlsZHJlbiIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBOztBQUNBO0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsbUJBRFc7QUFFbEJDLGFBQVcsRUFBRSxXQUZLO0FBR2xCQyxNQUFJLEVBQUUsY0FIWTtBQUlsQkMsVUFBUSxFQUFFO0FBSlEsQ0FBYjtBQU9QLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjs7QUFHQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQWtCLDBEQUFDLHdEQUFEO0FBQU0sUUFBSSxFQUFFUCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJPLFFBQW5CLENBQWxCO0FBQUEsQ0FBbEI7O0tBQU1ELFM7QUFDUyxTQUFTRSxVQUFULFFBR1o7QUFBQSxNQUZEQyxVQUVDLFNBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCxnREFBZUwsV0FBZixHQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMO0FBQUssU0FBSyxFQUFFO0FBQ1ZFLGVBQVMsRUFBRSxNQUREO0FBRVZDLGdCQUFVLEVBQUUsK0JBRkY7QUFHVkMsY0FBUSxFQUFFLE1BSEE7QUFJVkMsZ0JBQVUsRUFBRSxNQUpGO0FBS1ZDLG1CQUFhLEVBQUU7QUFMTCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVqQkFQRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGNBQVUsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMFBBREYsQ0FURixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixDQUpLLENBQVA7QUFtQkQ7TUF2QnVCUCxVO0FBeUJ4QjtBQUNBQSxVQUFVLENBQUNRLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoiLi9wYWdlcy9ibG9nLzA0LWJyb3dzZXIvaW5kZXgubWR4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcG9zdFwiO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiBcIkhvdyBCcm93c2VycyBXb3JrXCIsXG4gIGRlc2NyaXB0aW9uOiBcIuu4jOudvOyasOyggCDsnpHrj5nsm5DrpqxcIixcbiAgZGF0ZTogXCJOb3YgMDcsIDIwMjBcIixcbiAgcmVhZFRpbWU6IDVcbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gPFBvc3QgbWV0YT17bWV0YX0+e2NoaWxkcmVufTwvUG9zdD5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIG1hcmdpblRvcDogXCI0cmVtXCIsXG4gICAgICBmb250RmFtaWx5OiBcIk5vdG9TYW5zS1ItVGhpbiwgTWFsZ3VuR290aGljXCIsXG4gICAgICBmb250U2l6ZTogXCIxMXB0XCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjIycHRcIixcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiLjhweFwiXG4gICAgfX0+XG4gICAgICA8cD57YOyCrOyaqeyekOqwgCDruIzrnbzsmrDsoIAg7KO87IaM7LC97JeQIOyjvOyGjOulvCDsnoXroKUodXJsKe2WiOydhCDrlYwsIO2ZlOuptOyXkCDrs7Tsl6zsp4Dqsowg65CY64qUIOydvOugqOydmCDqs7zsoJXrk6TsnbQg7J6I64ukLlxu67iM65287Jqw7KCA64qUIOyjvOyGjOulvCDthrXtlbQg7ISc67KE7JeQIHJlcXVlc3Trpbwg67O064K06rOgIOydkeuLteycvOuhnCByZXNvdXJjZeulvCDrgrTroKTrsJvqs6AsIEhUTUzrjbDsnbTthLDrpbwg67Cb7JWEIOuhnOuUqeqzvOygleydhCDqsbDss5Ag7ZmU66m07J2EIOuztOyXrOykgOuLpC5gfTwvcD5cbiAgICAgIDxibG9ja3F1b3RlPlxuICAgICAgICA8cCBwYXJlbnROYW1lPVwiYmxvY2txdW90ZVwiPntg67iM65287Jqw7KCAIOuhnOuUqeqzvOyglSA6IOybuSDtjpjsnbTsp4Dsl5Ag7ZWE7JqU7ZWcIOumrOyGjOyKpOulvCDrgrTroKTrsJvqs6AsIO2VtOyEne2bhCDqs4TsgrAg7ZmU66m07JeQIOuztOyXrOyjvOuKlCDqs7zsoJVgfTwvcD5cbiAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDxoMT5QYXJzaW5nPC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/04-browser/index.mdx\n");

/***/ })

})