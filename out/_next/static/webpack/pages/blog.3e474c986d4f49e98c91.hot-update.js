webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/03-redux/index.mdx":
/*!***************************************!*\
  !*** ./pages/blog/03-redux/index.mdx ***!
  \***************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meta\", function() { return meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/post */ \"./components/post.js\");\n\n\n\nvar _jsxFileName = \"/Users/henry/Documents/private_source/PROJECT/henryb/pages/blog/03-redux/index.mdx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\n\nvar meta = {\n  title: \"Redux\",\n  description: \"리덕스\",\n  date: \"Nov 15, 2020\",\n  readTime: 5\n};\nvar layoutProps = {\n  meta: meta\n};\n\nvar MDXLayout = function MDXLayout(_ref) {\n  var children = _ref.children;\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(_components_post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    meta: meta,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 37\n    }\n  }, children);\n};\n\n_c = MDXLayout;\nfunction MDXContent(_ref2) {\n  var components = _ref2.components,\n      props = Object(_Users_henry_Documents_private_source_PROJECT_henryb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"div\", {\n    style: {\n      marginTop: \"4rem\",\n      fontFamily: \"NotoSansKR-Thin, MalgunGothic\",\n      fontSize: '11pt',\n      lineHeight: '22pt',\n      letterSpacing: '.8px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"Redux\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, \"\\uB9AC\\uB355\\uC2A4\\uB294 \\uC0C1\\uD0DC\\uAD00\\uB9AC\\uB97C \\uCEF4\\uD3EC\\uB10C\\uD2B8 \\uBC16\\uC5D0\\uC11C \\uD569\\uB2C8\\uB2E4. \\uC571\\uC758 \\uC0C1\\uD0DC \\uC804\\uBD80\\uB294 \\uD558\\uB098\\uC758 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 53\n    }\n  }, \"store\"), \" \\uC548\\uC5D0\\n\\uC788\\uB294 \\uAC1D\\uCCB4 \\uD2B8\\uB9AC\\uC5D0 \\uC800\\uC7A5\\uB429\\uB2C8\\uB2E4. \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 20\n    }\n  }, \"\\uC0C1\\uD0DC \\uD2B8\\uB9AC\\uB97C \\uBCC0\\uACBD\"), \" \\uD558\\uB294 \\uBC29\\uBC95\\uC740 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 77\n    }\n  }, \"action\"), \"\\uC744 \\uBCF4\\uB0B4\\uB294 \\uAC83 \\uBFD0\\uC785\\uB2C8\\uB2E4.\\n\\uC561\\uC158\\uC774 \\uC0C1\\uD0DC\\uD2B8\\uB9AC\\uB97C \\uC5B4\\uB5BB\\uAC8C \\uBCC0\\uACBD\\uD560\\uC9C0 \\uBA85\\uC2DC\\uD558\\uAE30 \\uC704\\uD574 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 30\n    }\n  }, \"reducers\"), \"\\uB97C \\uC791\\uC131\\uD574\\uC57C \\uD569\\uB2C8\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, \"action\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"action\\uC740 \\uAC1D\\uCCB4 \\uD615\\uD0DC\\uB85C \\uC560\\uD50C\\uB9AC\\uCF00\\uC774\\uC158\\uC5D0\\uC11C \\uC2A4\\uD1A0\\uC5B4\\uB85C \\uBCF4\\uB0B4\\uB294 \\uB370\\uC774\\uD130 \\uBB36\\uC74C \\uC785\\uB2C8\\uB2E4. \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 59\n    }\n  }, \"store.dispatch()\"), \"\\uB97C \\uD1B5\\uD574\\uC11C \\uBCF4\\uB0C5\\uB2C8\\uB2E4. \\uBC18\\uB4DC\\uC2DC \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 139\n    }\n  }, \"type\"), \" \\uC18D\\uC131\\uC744 \\uAC00\\uC838\\uC57C \\uD569\\uB2C8\\uB2E4.\\ntype \\uC18D\\uC131\\uAC12\\uC740 \\uB9AC\\uB4C0\\uC11C\\uC5D0 \\uC561\\uC158 \\uAC1D\\uCCB4\\uB97C \\uAD6C\\uBD84\\uD560 \\uB54C\\uB3C4 \\uC0AC\\uC6A9\\uB418\\uAE30 \\uB54C\\uBB38\\uC5D0 \\uC0C1\\uC218 \\uBCC0\\uC218\\uB85C \\uB9CC\\uB4DC\\uB294\\uAC83\\uC774 \\uC88B\\uC2B5\\uB2C8\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, \"reducer\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, \"reducer\\uB294 \\uC774\\uC804 \\uC0C1\\uD0DC\\uAC12\\uACFC, \\uC561\\uC158 \\uAC1D\\uCCB4\\uB97C \\uC785\\uB825\\uC73C\\uB85C \\uBC1B\\uC544 \\uC0C8\\uB85C\\uC6B4 \\uC0C1\\uD0DC\\uAC12\\uC744 \\uB9CC\\uB4DC\\uB294 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 60\n    }\n  }, \"\\uC21C\\uC218\\uD568\\uC218\"), \"\\n\\uC785\\uB2C8\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, \"middleware\"), \"\\uBBF8\\uB4E4\\uC6E8\\uC5B4\\uB294 \\uB9AC\\uB4C0\\uC11C\\uAC00 \\uC561\\uC158\\uC744 \\uCC98\\uB9AC\\uD558\\uAE30\\uC804\\uC5D0 \\uC2E4\\uD589\\uB418\\uB294 \\uD568\\uC218 \\uC785\\uB2C8\\uB2E4. \\uB514\\uBC84\\uAE45 \\uBAA9\\uC801\\uC73C\\uB85C \\uC0C1\\uD0EF\\uAC12 \\uBCC0\\uACBD\\uC2DC \\uB85C\\uADF8\\uB97C \\uCD9C\\uB825\\uD558\\uAC70\\uB098, API \\uD638\\uCD9C \\uB4F1\\uC758 \\uBAA9\\uC801\\uC73C\\uB85C \\uD65C\\uC6A9 \\uAC00\\uB2A5\\uD569\\uB2C8\\uB2E4.\", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, \"\\uB370\\uC774\\uD130 \\uC885\\uB958\\uBCC4\\uB85C \\uC0C1\\uD0EF\\uAC12 \\uB098\\uB204\\uAE30\")));\n}\n_c2 = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MDXLayout\");\n$RefreshReg$(_c2, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy8wMy1yZWR1eC9pbmRleC5tZHg/ZDg1OCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJyZWFkVGltZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiY2hpbGRyZW4iLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibWFyZ2luVG9wIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLE9BRFc7QUFFbEJDLGFBQVcsRUFBRSxLQUZLO0FBR2xCQyxNQUFJLEVBQUUsY0FIWTtBQUlsQkMsVUFBUSxFQUFFO0FBSlEsQ0FBYjtBQU9QLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjs7QUFHQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQWtCLDBEQUFDLHdEQUFEO0FBQU0sUUFBSSxFQUFFUCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJPLFFBQW5CLENBQWxCO0FBQUEsQ0FBbEI7O0tBQU1ELFM7QUFDUyxTQUFTRSxVQUFULFFBR1o7QUFBQSxNQUZEQyxVQUVDLFNBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCxnREFBZUwsV0FBZixHQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMO0FBQUssU0FBSyxFQUFFO0FBQ1ZFLGVBQVMsRUFBRSxNQUREO0FBRVZDLGdCQUFVLEVBQUUsK0JBRkY7QUFHVkMsY0FBUSxFQUFFLE1BSEE7QUFJVkMsZ0JBQVUsRUFBRSxNQUpGO0FBS1ZDLG1CQUFhLEVBQUU7QUFMTCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlNQUE4QztBQUFRLGNBQVUsRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTlDLGtHQUNhO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBRGIsdUNBQ3NFO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEdEUsc01BRXVCO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRnZCLHdEQVRGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1TUFBb0Q7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBcEQsNkVBQW9JO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBcEksNFRBZEYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbU1BQXFEO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQXJELDBCQWxCRixFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckJGLHdaQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlGQXhCRixDQUpLLENBQVA7QUErQkQ7TUFuQ3VCUCxVO0FBcUN4QjtBQUNBQSxVQUFVLENBQUNRLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoiLi9wYWdlcy9ibG9nLzAzLXJlZHV4L2luZGV4Lm1keC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBQb3N0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Bvc3RcIjtcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogXCJSZWR1eFwiLFxuICBkZXNjcmlwdGlvbjogXCLrpqzrjZXsiqRcIixcbiAgZGF0ZTogXCJOb3YgMTUsIDIwMjBcIixcbiAgcmVhZFRpbWU6IDVcbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gPFBvc3QgbWV0YT17bWV0YX0+e2NoaWxkcmVufTwvUG9zdD5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIG1hcmdpblRvcDogXCI0cmVtXCIsXG4gICAgICBmb250RmFtaWx5OiBcIk5vdG9TYW5zS1ItVGhpbiwgTWFsZ3VuR290aGljXCIsXG4gICAgICBmb250U2l6ZTogJzExcHQnLFxuICAgICAgbGluZUhlaWdodDogJzIycHQnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy44cHgnXG4gICAgfX0+XG4gICAgICA8aDE+UmVkdXg8L2gxPlxuICAgICAgPGhyIC8+XG4gICAgICA8cD57YOumrOuNleyKpOuKlCDsg4Htg5zqtIDrpqzrpbwg7Lu07Y+s64SM7Yq4IOuwluyXkOyEnCDtlanri4jri6QuIOyVseydmCDsg4Htg5wg7KCE67aA64qUIO2VmOuCmOydmCBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YHN0b3JlYH08L3N0cm9uZz57YCDslYjsl5BcbuyeiOuKlCDqsJ3ssrQg7Yq466as7JeQIOyggOyepeuQqeuLiOuLpC4gYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2Dsg4Htg5wg7Yq466as66W8IOuzgOqyvWB9PC9zdHJvbmc+e2Ag7ZWY64qUIOuwqeuyleydgCBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YGFjdGlvbmB9PC9zdHJvbmc+e2DsnYQg67O064K064qUIOqygyDrv5DsnoXri4jri6QuXG7slaHshZjsnbQg7IOB7YOc7Yq466as66W8IOyWtOuWu+qyjCDrs4Dqsr3tlaDsp4Ag66qF7Iuc7ZWY6riwIOychO2VtCBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YHJlZHVjZXJzYH08L3N0cm9uZz57YOulvCDsnpHshLHtlbTslbwg7ZWp64uI64ukLmB9PC9wPlxuICAgICAgPGhyIC8+XG4gICAgICA8aDM+YWN0aW9uPC9oMz5cbiAgICAgIDxwPntgYWN0aW9u7J2AIOqwneyytCDtmJXtg5zroZwg7JWg7ZSM66as7LyA7J207IWY7JeQ7IScIOyKpO2GoOyWtOuhnCDrs7TrgrTripQg642w7J207YSwIOustuydjCDsnoXri4jri6QuIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0b3JlLmRpc3BhdGNoKClgfTwvaW5saW5lQ29kZT57YOulvCDthrXtlbTshJwg67O064OF64uI64ukLiDrsJjrk5zsi5wgYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2B0eXBlYH08L3N0cm9uZz57YCDsho3shLHsnYQg6rCA7KC47JW8IO2VqeuLiOuLpC5cbnR5cGUg7IaN7ISx6rCS7J2AIOumrOuTgOyEnOyXkCDslaHshZgg6rCd7LK066W8IOq1rOu2hO2VoCDrlYzrj4Qg7IKs7Jqp65CY6riwIOuVjOusuOyXkCDsg4HsiJgg67OA7IiY66GcIOunjOuTnOuKlOqyg+ydtCDsoovsirXri4jri6QuYH08L3A+XG4gICAgICA8aHIgLz5cbiAgICAgIDxoMz5yZWR1Y2VyPC9oMz5cbiAgICAgIDxwPntgcmVkdWNlcuuKlCDsnbTsoIQg7IOB7YOc6rCS6rO8LCDslaHshZgg6rCd7LK066W8IOyeheugpeycvOuhnCDrsJvslYQg7IOI66Gc7Jq0IOyDge2DnOqwkuydhCDrp4zrk5zripQgYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2DsiJzsiJjtlajsiJhgfTwvc3Ryb25nPntgXG7snoXri4jri6QuYH08L3A+XG4gICAgICA8aHIgLz5cbiAgICAgIDxoMz5taWRkbGV3YXJlPC9oMz5cbuuvuOuTpOybqOyWtOuKlCDrpqzrk4DshJzqsIAg7JWh7IWY7J2EIOyymOumrO2VmOq4sOyghOyXkCDsi6TtlonrkJjripQg7ZWo7IiYIOyeheuLiOuLpC4g65SU67KE6rmFIOuqqeyggeycvOuhnCDsg4Htg6/qsJJcbuuzgOqyveyLnCDroZzqt7jrpbwg7Lac66Cl7ZWY6rGw64KYLCBBUEkg7Zi47LacIOuTseydmCDrqqnsoIHsnLzroZwg7Zmc7JqpIOqwgOuKpe2VqeuLiOuLpC5cbiAgICAgIDxoMT7rjbDsnbTthLAg7KKF66WY67OE66GcIOyDge2Dr+qwkiDrgpjriITquLA8L2gxPlxuICAgIDwvZGl2PlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/03-redux/index.mdx\n");

/***/ })

})