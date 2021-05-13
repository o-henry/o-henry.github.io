webpackHotUpdate_N_E("pages/blog/03-redux",{

/***/ "./pages/blog/03-redux/index.mdx":
/*!***************************************!*\
  !*** ./pages/blog/03-redux/index.mdx ***!
  \***************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meta\", function() { return meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _Users_henry_Documents_blog_o_henry_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_henry_Documents_blog_o_henry_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/post */ \"./components/post.js\");\n\n\n\nvar _jsxFileName = \"/Users/henry/Documents/blog/o-henry.github.io/pages/blog/03-redux/index.mdx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_henry_Documents_blog_o_henry_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\n\nvar meta = {\n  title: \"Redux\",\n  description: \"리덕스\",\n  date: \"2020-11-15T10:45:00.0Z\",\n  readTime: 7\n};\nvar layoutProps = {\n  meta: meta\n};\n\nvar MDXLayout = function MDXLayout(_ref) {\n  var children = _ref.children;\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(_components_post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    meta: meta,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 37\n    }\n  }, children);\n};\n\n_c = MDXLayout;\nfunction MDXContent(_ref2) {\n  var components = _ref2.components,\n      props = Object(_Users_henry_Documents_blog_o_henry_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"div\", {\n    style: {\n      marginTop: \"4rem\",\n      fontFamily: \"NotoSansKR-Thin, MalgunGothic\",\n      fontSize: '11pt',\n      lineHeight: '22pt',\n      letterSpacing: '.8px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"Redux\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, \"\\uB9AC\\uB355\\uC2A4\\uB294 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 19\n    }\n  }, \"actions\"), \" \\uC774\\uBCA4\\uD2B8\\uB97C \\uC0AC\\uC6A9\\uD558\\uC5EC \\uC5B4\\uD50C\\uB9AC\\uCF00\\uC774\\uC158\\uC758 \\uC0C1\\uD0DC\\uB97C \\uAD00\\uB9AC\\uD558\\uACE0 \\uC5C5\\uB370\\uC774\\uD2B8 \\uD558\\uB294 \\uD328\\uD134\\uBC0F \\uB77C\\uC774\\uBE0C\\uB7EC\\uB9AC \\uC785\\uB2C8\\uB2E4.\\n\\uB9AC\\uB355\\uC2A4\\uB294 \\uC0C1\\uD0DC\\uAD00\\uB9AC\\uB97C \\uCEF4\\uD3EC\\uB10C\\uD2B8 \\uBC16\\uC5D0\\uC11C \\uD569\\uB2C8\\uB2E4. \\uC571\\uC758 \\uC0C1\\uD0DC \\uC804\\uBD80\\uB294 \\uD558\\uB098\\uC758 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 42\n    }\n  }, \"store\"), \" \\uC548\\uC5D0\\n\\uC788\\uB294 \\uAC1D\\uCCB4 \\uD2B8\\uB9AC\\uC5D0 \\uC800\\uC7A5\\uB429\\uB2C8\\uB2E4. \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 20\n    }\n  }, \"\\uC0C1\\uD0DC \\uD2B8\\uB9AC\\uB97C \\uBCC0\\uACBD\"), \" \\uD558\\uB294 \\uBC29\\uBC95\\uC740 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 77\n    }\n  }, \"action\"), \"\\uC744 \\uBCF4\\uB0B4\\uB294 \\uAC83 \\uBFD0\\uC785\\uB2C8\\uB2E4.\\n\\uC561\\uC158\\uC774 \\uC0C1\\uD0DC\\uD2B8\\uB9AC\\uB97C \\uC5B4\\uB5BB\\uAC8C \\uBCC0\\uACBD\\uD560\\uC9C0 \\uBA85\\uC2DC\\uD558\\uAE30 \\uC704\\uD574 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 30\n    }\n  }, \"reducers\"), \"\\uB97C \\uC791\\uC131\\uD574\\uC57C \\uD569\\uB2C8\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 10\n    }\n  }, \"\\uB9AC\\uB355\\uC2A4\\uB97C \\uC5B8\\uC81C \\uC0AC\\uC6A9\\uD574\\uC57C \\uD560\\uAE4C\\uC694\"), \"?>\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 10\n    }\n  }, \"action\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, \"action\\uC740 \\uAC1D\\uCCB4 \\uD615\\uD0DC\\uB85C \\uC560\\uD50C\\uB9AC\\uCF00\\uC774\\uC158\\uC5D0\\uC11C \\uC2A4\\uD1A0\\uC5B4\\uB85C \\uBCF4\\uB0B4\\uB294 \\uB370\\uC774\\uD130 \\uBB36\\uC74C \\uC785\\uB2C8\\uB2E4. \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"inlineCode\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 59\n    }\n  }, \"store.dispatch()\"), \"\\uB97C \\uD1B5\\uD574\\uC11C \\uBCF4\\uB0C5\\uB2C8\\uB2E4. \\uBC18\\uB4DC\\uC2DC \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 139\n    }\n  }, \"type\"), \" \\uC18D\\uC131\\uC744 \\uAC00\\uC838\\uC57C \\uD569\\uB2C8\\uB2E4.\\ntype \\uC18D\\uC131\\uAC12\\uC740 \\uB9AC\\uB4C0\\uC11C\\uC5D0 \\uC561\\uC158 \\uAC1D\\uCCB4\\uB97C \\uAD6C\\uBD84\\uD560 \\uB54C\\uB3C4 \\uC0AC\\uC6A9\\uB418\\uAE30 \\uB54C\\uBB38\\uC5D0 \\uC0C1\\uC218 \\uBCC0\\uC218\\uB85C \\uB9CC\\uB4DC\\uB294\\uAC83\\uC774 \\uC88B\\uC2B5\\uB2C8\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 10\n    }\n  }, \"reducer\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, \"reducer\\uB294 \\uC774\\uC804 \\uC0C1\\uD0DC\\uAC12\\uACFC, \\uC561\\uC158 \\uAC1D\\uCCB4\\uB97C \\uC785\\uB825\\uC73C\\uB85C \\uBC1B\\uC544 \\uC0C8\\uB85C\\uC6B4 \\uC0C1\\uD0DC\\uAC12\\uC744 \\uB9CC\\uB4DC\\uB294 \", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 60\n    }\n  }, \"\\uC21C\\uC218\\uD568\\uC218\"), \"\\n\\uC785\\uB2C8\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"strong\", {\n    parentName: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 10\n    }\n  }, \"middleware\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, \"\\uBBF8\\uB4E4\\uC6E8\\uC5B4\\uB294 \\uB9AC\\uB4C0\\uC11C\\uAC00 \\uC561\\uC158\\uC744 \\uCC98\\uB9AC\\uD558\\uAE30\\uC804\\uC5D0 \\uC2E4\\uD589\\uB418\\uB294 \\uD568\\uC218 \\uC785\\uB2C8\\uB2E4. \\uB514\\uBC84\\uAE45 \\uBAA9\\uC801\\uC73C\\uB85C \\uC0C1\\uD0EF\\uAC12\\n\\uBCC0\\uACBD\\uC2DC \\uB85C\\uADF8\\uB97C \\uCD9C\\uB825\\uD558\\uAC70\\uB098, API \\uD638\\uCD9C \\uB4F1\\uC758 \\uBAA9\\uC801\\uC73C\\uB85C \\uD65C\\uC6A9 \\uAC00\\uB2A5\\uD569\\uB2C8\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, \"\\uB370\\uC774\\uD130\\uAC00 \\uB9CE\\uC544\\uC9C8\\uC218\\uB85D \\uC774\\uB97C \\uCCB4\\uACC4\\uC801\\uC73C\\uB85C \\uAD6C\\uC870\\uD654 \\uD558\\uB294 \\uBC29\\uBC95\\uC774 \\uD544\\uC694\\uD569\\uB2C8\\uB2E4. \\uAC01 \\uAE30\\uB2A5 \\uD3F4\\uB354 \\uD558\\uC704\\uC5D0 \\uC791\\uC131\\uD558\\uC5EC \\uAD00\\uB9AC\\uD558\\uB294\\uAC8C \\uC88B\\uC2B5\\uB2C8\\uB2E4.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, \"To consider\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", _objectSpread(_objectSpread({\n    parentName: \"pre\"\n  }, {}), {}, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 12\n    }\n  }), \"\\u2605 \\uC0AC\\uC6A9\\uD558\\uB294 \\uB370\\uC774\\uD130\\uAC00 \\uD558\\uB098\\uB2E4. \\u21E2 \\uB9AC\\uB4C0\\uC11C\\uB97C \\uD558\\uB098\\uB9CC \\uC0AC\\uC6A9\\uD55C\\uB2E4.\\n\\u2605 \\uC0AC\\uC6A9\\uB418\\uB294 \\uB370\\uC774\\uD130\\uC758 \\uC591\\uC774 \\uB9CE\\uC544\\uC9C4\\uB2E4. \\u21E2 \\uB370\\uC774\\uD130\\uB97C \\uAE30\\uB2A5\\uBCC4\\uB85C \\uD3F4\\uB354\\uB97C \\uB9CC\\uB4E4\\uC5B4 \\uD558\\uC704\\uC5D0\\uC11C \\uAD00\\uB9AC/\\uAD6C\\uC870\\uD654 \\uD55C\\uB2E4.\\n\\u2605 \\uBD84\\uB9AC\\uD55C \\uB9AC\\uB4C0\\uC11C\\uB97C \\uD1B5\\uD569\\uD55C\\uB2E4 \\u21E2 combineReducder\\n\\n\\n\\uD398\\uC774\\uC2A4\\uBD81\\uC5D0\\uC11C '\\uD0C0\\uC784\\uB77C\\uC778' \\uACFC '\\uCE5C\\uAD6C\\uBAA9\\uB85D'\\uC744 \\uAD6C\\uD604\\uD55C\\uB2E4\\uACE0 \\uD558\\uC790.\\n\\u2605 \\uD0C0\\uC784\\uB77C\\uC778 \\uC5D0\\uC11C\\uB294 \\uC0AC\\uC6A9\\uC790\\uC5D0\\uAC8C \\uBCF4\\uC5EC\\uC904 \\uC5EC\\uB7EC \\uAC1C\\uC758 \\uAC8C\\uC2DC\\uBB3C\\uC744 \\uAD00\\uB9AC\\uD574\\uC57C \\uD55C\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uAC01 \\uAC8C\\uC2DC\\uBB3C \\uB370\\uC774\\uD130\\uB97C \\uBC30\\uC5F4\\uB85C \\uAD00\\uB9AC\\uD55C\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uAC8C\\uC2DC\\uBB3C\\uC744 \\uCD94\\uAC00 / \\uC0AD\\uC81C \\uD560 \\uC218 \\uC788\\uC5B4\\uC57C \\uD55C\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uAC01 \\uAC8C\\uC2DC\\uBB3C\\uC758 \\uC88B\\uC544\\uC694 \\uC22B\\uC790\\uB294 \\uBCC0\\uD558\\uB294 \\uAC12\\uC774\\uBBC0\\uB85C \\uAC8C\\uC2DC\\uBB3C \\uB370\\uC774\\uD130\\uB97C \\uC218\\uC815\\uD560 \\uC218 \\uC788\\uC5B4\\uC57C \\uD55C\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uBB34\\uD55C \\uC2A4\\uD06C\\uB864 \\uAE30\\uB2A5\\uC774 \\uD544\\uC694 \\uD558\\uBBC0\\uB85C \\uB85C\\uB529\\uB41C \\uB370\\uC774\\uD130 \\uB05D\\uC5D0 \\uB3C4\\uB2EC\\uD558\\uBA74 \\uC790\\uB3D9\\uC73C\\uB85C \\uB2E4\\uC74C \\uB370\\uC774\\uD130\\uB97C \\uC11C\\uBC84\\uB85C \\uC694\\uCCAD\\uD574\\uC57C \\uD55C\\uB2E4.\\n\\n\\u2605 \\uCE5C\\uAD6C \\uBAA9\\uB85D\\n\\u2514\\u2500\\u2500 \\uCE5C\\uAD6C\\uBAA9\\uB85D \\uB370\\uC774\\uD130\\uB97C \\uBC30\\uC5F4\\uB85C \\uAD00\\uB9AC\\uD55C\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uCE5C\\uAD6C\\uB97C \\uCD94\\uAC00 / \\uC0AD\\uC81C \\uD560 \\uC218 \\uC788\\uC5B4\\uC57C \\uD55C\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uCE5C\\uAD6C\\uAC00 \\uC218\\uC815\\uD55C \\uD504\\uB85C\\uD544 \\uC815\\uBCF4\\uB97C \\uBC18\\uC601\\uD558\\uAE30 \\uC704\\uD574 \\uCE5C\\uAD6C \\uB370\\uC774\\uD130\\uB97C \\uC218\\uC815\\uD560 \\uC218 \\uC788\\uC5B4\\uC57C \\uD55C\\uB2E4.\\n\\n\\u2605 \\uB355\\uC2A4 \\uD328\\uD134\\n\\u2514\\u2500\\u2500 \\uC5F0\\uAD00\\uB41C \\uC561\\uC158 \\uD0C0\\uC785, \\uC561\\uC158 \\uC0DD\\uC131\\uC790 \\uD568\\uC218, \\uB9AC\\uB4C0\\uC11C\\uB97C \\uD558\\uB098\\uC758 \\uD30C\\uC77C\\uB85C \\uC791\\uC131\\uD55C\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uB9AC\\uB4C0\\uC11C \\uD568\\uC218\\uB294 export default \\uD0A4\\uC6CC\\uB4DC\\uB85C \\uB0B4\\uBCF4\\uB0B8\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uC561\\uC158 \\uC0DD\\uC131\\uC790 \\uD568\\uC218\\uB294 export \\uD0A4\\uC6CC\\uB4DC\\uB85C \\uB0B4\\uBCF4\\uB0B8\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uC561\\uC158 \\uD0C0\\uC785\\uC740 \\uC811\\uB450\\uC0AC\\uC640 \\uC561\\uC158 \\uC774\\uB984\\uC744 \\uC870\\uD569\\uD574\\uC11C \\uB9CC\\uB4E0\\uB2E4.\\n\\nsrc\\n\\u251C\\u2500\\u2500 common\\n\\u2502   \\u2514\\u2500\\u2500 createReducer.js\\n\\u251C\\u2500\\u2500 friend\\n\\u2502   \\u2514\\u2500\\u2500 state.js\\n\\u251C\\u2500\\u2500 index.js\\n\\u2514\\u2500\\u2500 timeline\\n    \\u2514\\u2500\\u2500 state.js\\n\\n\\u2605 (\\uCE5C\\uAD6C \\uBAA9\\uB85D) \\uC561\\uC158 \\uACFC \\uB9AC\\uB4C0\\uC11C \\uCF54\\uB4DC\\uB97C \\uBA3C\\uC800 \\uC791\\uC131\\uD55C\\uB2E4.\\n\\u25E6 \\uB370\\uC774\\uD130 \\uD0C0\\uC785\\uC740 \\uC5B4\\uB5BB\\uAC8C \\uB418\\uC5B4 \\uC788\\uB294\\uAC00 \\u21E2 \\uBC30\\uC5F4\\uB85C \\uAD00\\uB9AC\\uD55C\\uB2E4.\\n\\u25E6 \\uC5B4\\uB5A4 \\uC561\\uC158 \\uD0C0\\uC785\\uC774 \\uD544\\uC694\\uD55C\\uAC00 \\u21E2 \\uCE5C\\uAD6C\\uB97C \\uCD94\\uAC00 / \\uC0AD\\uC81C \\uD560 \\uC218 \\uC788\\uC5B4\\uC57C \\uD558\\uACE0, \\uB370\\uC774\\uD130\\uB97C \\uC218\\uC815\\uD560 \\uC218 \\uC788\\uC5B4\\uC57C \\uD55C\\uB2E4.\\n\\u25E6 \\uB9AC\\uB4C0\\uC11C \\uC5D0\\uC11C \\uC0C1\\uD0EF\\uAC12\\uC744 \\uC218\\uC815\\uD55C\\uB2E4. \\u21E2 ADD, REMOVE, EDIT \\uC5D0 \\uD574\\uB2F9\\uD558\\uB294 \\uB85C\\uC9C1\\uC744 \\uAD6C\\uD604\\uD55C\\uB2E4.\\n\\n\\u2605 (\\uD0C0\\uC784 \\uB77C\\uC778) \\uC561\\uC158 \\uACFC \\uB9AC\\uB4C0\\uC11C \\uCF54\\uB4DC\\uB97C \\uC791\\uC131\\uD55C\\uB2E4.\\n\\u25E6 \\uB370\\uC774\\uD130 \\uD0C0\\uC785\\uC740 \\uC5B4\\uB5BB\\uAC8C \\uB418\\uC5B4 \\uC788\\uB294\\uAC00 \\u21E2 \\uBC30\\uC5F4\\uB85C \\uAD00\\uB9AC\\uD55C\\uB2E4.\\n\\u25E6 \\uC5B4\\uB5A4 \\uC561\\uC158 \\uD0C0\\uC785\\uC774 \\uD544\\uC694\\uD55C\\uAC00 \\u21E2 \\uAC8C\\uC2DC\\uBB3C\\uC744 \\uCD94\\uAC00 / \\uC0AD\\uC81C \\uBC0F \\uAC8C\\uC2DC\\uBB3C\\uC744 \\uC218\\uC815 \\uB610 \\uD398\\uC774\\uC9C0 \\uBC88\\uD638 \\uC99D\\uAC00.\\n\\n\\u2605 \\uB9AC\\uB4C0\\uC11C\\uC758 \\uACF5\\uD1B5 \\uBD80\\uBD84 \\uBD84\\uB9AC\\uD558\\uAE30\\n\\u25E6 \\uCD08\\uAE30 \\uC0C1\\uD0DC\\uAC12 \\uBE48 \\uBC30\\uC5F4 \\uC815\\uC758\\n\\u25E6 \\uC561\\uC158 \\uD0C0\\uC785\\uACFC \\uC561\\uC158 \\uC0DD\\uC131\\uC790 \\uD568\\uC218\\n\\u25E6 \\uB370\\uC774\\uD130 \\uCD94\\uAC00/\\uC0AD\\uC81C/\\uC218\\uC815 \\uB9AC\\uB4C0\\uC11C \\uCF54\\uB4DC\\n\\u2514\\u2500\\u2500 \\uACF5\\uD1B5\\uBD80\\uBD84\\uC5D0 \\uD574\\uB2F9\\uD558\\uB294 \\uBD80\\uBD84\\uC744 \\uBAA8\\uB4C8\\uD654 \\uD55C\\uB2E4.\\n\\n\\u2605 \\uB9AC\\uB4C0\\uC11C \\uD569\\uCE58\\uAE30\\ncombineReducers\\uB97C \\uD1B5\\uD574 \\uB9AC\\uB4C0\\uC11C\\uB97C \\uD558\\uB098\\uB85C \\uD569\\uCE60 \\uC218 \\uC788\\uB2E4.\\n\\u2514\\u2500\\u2500 entry point\\uC5D0\\uC11C reducer\\uB97C \\uD569\\uCCD0\\uC900\\uB2E4.\\n\\u2514\\u2500\\u2500 \\uD569\\uCE5C \\uB9AC\\uB4C0\\uC11C\\uB97C \\uC2A4\\uD1A0\\uC5B4\\uC5D0 \\uBD99\\uC778\\uB2E4.\\n\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }\n  })));\n}\n_c2 = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MDXLayout\");\n$RefreshReg$(_c2, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy8wMy1yZWR1eC9pbmRleC5tZHg/ZDg1OCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJyZWFkVGltZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiY2hpbGRyZW4iLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibWFyZ2luVG9wIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLE9BRFc7QUFFbEJDLGFBQVcsRUFBRSxLQUZLO0FBR2xCQyxNQUFJLEVBQUUsd0JBSFk7QUFJbEJDLFVBQVEsRUFBRTtBQUpRLENBQWI7QUFPUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7O0FBR0EsSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUFrQiwwREFBQyx3REFBRDtBQUFNLFFBQUksRUFBRVAsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CTyxRQUFuQixDQUFsQjtBQUFBLENBQWxCOztLQUFNRCxTO0FBQ1MsU0FBU0UsVUFBVCxRQUdaO0FBQUEsTUFGREMsVUFFQyxTQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQsZ0RBQWVMLFdBQWYsR0FBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFLLFNBQUssRUFBRTtBQUNWRSxlQUFTLEVBQUUsTUFERDtBQUVWQyxnQkFBVSxFQUFFLCtCQUZGO0FBR1ZDLGNBQVEsRUFBRSxNQUhBO0FBSVZDLGdCQUFVLEVBQUUsTUFKRjtBQUtWQyxtQkFBYSxFQUFFO0FBTEwsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBWTtBQUFRLGNBQVUsRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVoscWJBQ21DO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEbkMsa0dBRWE7QUFBUSxjQUFVLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFGYix1Q0FFc0U7QUFBUSxjQUFVLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZ0RSxzTUFHdUI7QUFBUSxjQUFVLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIdkIsd0RBVEYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBUSxjQUFVLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RkFBSCxPQWRGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFRLGNBQVUsRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsQ0FoQkYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1TUFBb0Q7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBcEQsNkVBQW9JO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBcEksNFRBakJGLEVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQVEsY0FBVSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxDQXBCRixFQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1NQUFxRDtBQUFRLGNBQVUsRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFyRCwwQkFyQkYsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixFQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBUSxjQUFVLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxDQXhCRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJaQXpCRixFQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGLEVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb1VBNUJGLEVBNkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsRUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5QkYsRUErQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZytKQUFMLENBL0JGLEVBbUZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuRkYsQ0FKSyxDQUFQO0FBMEZEO01BOUZ1QlAsVTtBQWdHeEI7QUFDQUEsVUFBVSxDQUFDUSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy8wMy1yZWR1eC9pbmRleC5tZHguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9wb3N0XCI7XG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6IFwiUmVkdXhcIixcbiAgZGVzY3JpcHRpb246IFwi66as642V7IqkXCIsXG4gIGRhdGU6IFwiMjAyMC0xMS0xNVQxMDo0NTowMC4wWlwiLFxuICByZWFkVGltZTogN1xufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiA8UG9zdCBtZXRhPXttZXRhfT57Y2hpbGRyZW59PC9Qb3N0PlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgbWFyZ2luVG9wOiBcIjRyZW1cIixcbiAgICAgIGZvbnRGYW1pbHk6IFwiTm90b1NhbnNLUi1UaGluLCBNYWxndW5Hb3RoaWNcIixcbiAgICAgIGZvbnRTaXplOiAnMTFwdCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjJwdCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLjhweCdcbiAgICB9fT5cbiAgICAgIDxoMT5SZWR1eDwvaDE+XG4gICAgICA8aHIgLz5cbiAgICAgIDxwPntg66as642V7Iqk64qUIGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgYWN0aW9uc2B9PC9zdHJvbmc+e2Ag7J2067Kk7Yq466W8IOyCrOyaqe2VmOyXrCDslrTtlIzrpqzsvIDsnbTshZjsnZgg7IOB7YOc66W8IOq0gOumrO2VmOqzoCDsl4XrjbDsnbTtirgg7ZWY64qUIO2MqO2EtOuwjyDrnbzsnbTruIzrn6zrpqwg7J6F64uI64ukLlxu66as642V7Iqk64qUIOyDge2DnOq0gOumrOulvCDsu7Ttj6zrhIztirgg67CW7JeQ7IScIO2VqeuLiOuLpC4g7JWx7J2YIOyDge2DnCDsoITrtoDripQg7ZWY64KY7J2YIGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgc3RvcmVgfTwvc3Ryb25nPntgIOyViOyXkFxu7J6I64qUIOqwneyytCDtirjrpqzsl5Ag7KCA7J6l65Cp64uI64ukLiBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YOyDge2DnCDtirjrpqzrpbwg67OA6rK9YH08L3N0cm9uZz57YCDtlZjripQg67Cp67KV7J2AIGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgYWN0aW9uYH08L3N0cm9uZz57YOydhCDrs7TrgrTripQg6rKDIOu/kOyeheuLiOuLpC5cbuyVoeyFmOydtCDsg4Htg5ztirjrpqzrpbwg7Ja065a76rKMIOuzgOqyve2VoOyngCDrqoXsi5ztlZjquLAg7JyE7ZW0IGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgcmVkdWNlcnNgfTwvc3Ryb25nPntg66W8IOyekeyEse2VtOyVvCDtlanri4jri6QuYH08L3A+XG4gICAgICA8aHIgLz5cbiAgICAgIDxwPjxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YOumrOuNleyKpOulvCDslrjsoJwg7IKs7Jqp7ZW07JW8IO2VoOq5jOyalGB9PC9zdHJvbmc+e2A/PmB9PC9wPlxuICAgICAgPGhyIC8+XG4gICAgICA8cD48c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BhY3Rpb25gfTwvc3Ryb25nPjwvcD5cbiAgICAgIDxwPntgYWN0aW9u7J2AIOqwneyytCDtmJXtg5zroZwg7JWg7ZSM66as7LyA7J207IWY7JeQ7IScIOyKpO2GoOyWtOuhnCDrs7TrgrTripQg642w7J207YSwIOustuydjCDsnoXri4jri6QuIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0b3JlLmRpc3BhdGNoKClgfTwvaW5saW5lQ29kZT57YOulvCDthrXtlbTshJwg67O064OF64uI64ukLiDrsJjrk5zsi5wgYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2B0eXBlYH08L3N0cm9uZz57YCDsho3shLHsnYQg6rCA7KC47JW8IO2VqeuLiOuLpC5cbnR5cGUg7IaN7ISx6rCS7J2AIOumrOuTgOyEnOyXkCDslaHshZgg6rCd7LK066W8IOq1rOu2hO2VoCDrlYzrj4Qg7IKs7Jqp65CY6riwIOuVjOusuOyXkCDsg4HsiJgg67OA7IiY66GcIOunjOuTnOuKlOqyg+ydtCDsoovsirXri4jri6QuYH08L3A+XG4gICAgICA8aHIgLz5cbiAgICAgIDxwPjxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YHJlZHVjZXJgfTwvc3Ryb25nPjwvcD5cbiAgICAgIDxwPntgcmVkdWNlcuuKlCDsnbTsoIQg7IOB7YOc6rCS6rO8LCDslaHshZgg6rCd7LK066W8IOyeheugpeycvOuhnCDrsJvslYQg7IOI66Gc7Jq0IOyDge2DnOqwkuydhCDrp4zrk5zripQgYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2DsiJzsiJjtlajsiJhgfTwvc3Ryb25nPntgXG7snoXri4jri6QuYH08L3A+XG4gICAgICA8aHIgLz5cbiAgICAgIDxwPjxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YG1pZGRsZXdhcmVgfTwvc3Ryb25nPjwvcD5cbiAgICAgIDxwPntg66+465Ok7Juo7Ja064qUIOumrOuTgOyEnOqwgCDslaHshZjsnYQg7LKY66as7ZWY6riw7KCE7JeQIOyLpO2WieuQmOuKlCDtlajsiJgg7J6F64uI64ukLiDrlJTrsoTquYUg66qp7KCB7Jy866GcIOyDge2Dr+qwklxu67OA6rK97IucIOuhnOq3uOulvCDstpzroKXtlZjqsbDrgpgsIEFQSSDtmLjstpwg65Ox7J2YIOuqqeyggeycvOuhnCDtmZzsmqkg6rCA64ql7ZWp64uI64ukLmB9PC9wPlxuICAgICAgPGhyIC8+XG4gICAgICA8cD57YOuNsOydtO2EsOqwgCDrp47slYTsp4jsiJjroZ0g7J2066W8IOyytOqzhOyggeycvOuhnCDqtazsobDtmZQg7ZWY64qUIOuwqeuyleydtCDtlYTsmpTtlanri4jri6QuIOqwgSDquLDriqUg7Y+0642UIO2VmOychOyXkCDsnpHshLHtlZjsl6wg6rSA66as7ZWY64qU6rKMIOyii+yKteuLiOuLpC5gfTwvcD5cbiAgICAgIDxiciAvPlxuICAgICAgPGgxPntgVG8gY29uc2lkZXJgfTwvaDE+XG4gICAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319Pntg4piFIOyCrOyaqe2VmOuKlCDrjbDsnbTthLDqsIAg7ZWY64KY64ukLiDih6Ig66as65OA7ISc66W8IO2VmOuCmOunjCDsgqzsmqntlZzri6QuXG7imIUg7IKs7Jqp65CY64qUIOuNsOydtO2EsOydmCDslpHsnbQg66eO7JWE7KeE64ukLiDih6Ig642w7J207YSw66W8IOq4sOuKpeuzhOuhnCDtj7TrjZTrpbwg66eM65Ok7Ja0IO2VmOychOyXkOyEnCDqtIDrpqwv6rWs7KGw7ZmUIO2VnOuLpC5cbuKYhSDrtoTrpqztlZwg66as65OA7ISc66W8IO2Gte2Vqe2VnOuLpCDih6IgY29tYmluZVJlZHVjZGVyXG5cblxu7Y6Y7J207Iqk67aB7JeQ7IScICftg4DsnoTrnbzsnbgnIOqzvCAn7Lmc6rWs66qp66GdJ+ydhCDqtaztmITtlZzri6Tqs6Ag7ZWY7J6QLlxu4piFIO2DgOyehOudvOyduCDsl5DshJzripQg7IKs7Jqp7J6Q7JeQ6rKMIOuztOyXrOykhCDsl6zrn6wg6rCc7J2YIOqyjOyLnOusvOydhCDqtIDrpqztlbTslbwg7ZWc64ukLlxu4pSU4pSA4pSAIOqwgSDqsozsi5zrrLwg642w7J207YSw66W8IOuwsOyXtOuhnCDqtIDrpqztlZzri6QuXG7ilJTilIDilIAg6rKM7Iuc66y87J2EIOy2lOqwgCAvIOyCreygnCDtlaAg7IiYIOyeiOyWtOyVvCDtlZzri6QuXG7ilJTilIDilIAg6rCBIOqyjOyLnOusvOydmCDsoovslYTsmpQg7Iir7J6Q64qUIOuzgO2VmOuKlCDqsJLsnbTrr4DroZwg6rKM7Iuc66y8IOuNsOydtO2EsOulvCDsiJjsoJXtlaAg7IiYIOyeiOyWtOyVvCDtlZzri6QuXG7ilJTilIDilIAg66y07ZWcIOyKpO2BrOuhpCDquLDriqXsnbQg7ZWE7JqUIO2VmOuvgOuhnCDroZzrlKnrkJwg642w7J207YSwIOuBneyXkCDrj4Tri6ztlZjrqbQg7J6Q64+Z7Jy866GcIOuLpOydjCDrjbDsnbTthLDrpbwg7ISc67KE66GcIOyalOyyre2VtOyVvCDtlZzri6QuXG5cbuKYhSDsuZzqtawg66qp66GdXG7ilJTilIDilIAg7Lmc6rWs66qp66GdIOuNsOydtO2EsOulvCDrsLDsl7TroZwg6rSA66as7ZWc64ukLlxu4pSU4pSA4pSAIOy5nOq1rOulvCDstpTqsIAgLyDsgq3soJwg7ZWgIOyImCDsnojslrTslbwg7ZWc64ukLlxu4pSU4pSA4pSAIOy5nOq1rOqwgCDsiJjsoJXtlZwg7ZSE66Gc7ZWEIOygleuztOulvCDrsJjsmIHtlZjquLAg7JyE7ZW0IOy5nOq1rCDrjbDsnbTthLDrpbwg7IiY7KCV7ZWgIOyImCDsnojslrTslbwg7ZWc64ukLlxuXG7imIUg642V7IqkIO2MqO2EtFxu4pSU4pSA4pSAIOyXsOq0gOuQnCDslaHshZgg7YOA7J6FLCDslaHshZgg7IOd7ISx7J6QIO2VqOyImCwg66as65OA7ISc66W8IO2VmOuCmOydmCDtjIzsnbzroZwg7J6R7ISx7ZWc64ukLlxu4pSU4pSA4pSAIOumrOuTgOyEnCDtlajsiJjripQgZXhwb3J0IGRlZmF1bHQg7YKk7JuM65Oc66GcIOuCtOuztOuCuOuLpC5cbuKUlOKUgOKUgCDslaHshZgg7IOd7ISx7J6QIO2VqOyImOuKlCBleHBvcnQg7YKk7JuM65Oc66GcIOuCtOuztOuCuOuLpC5cbuKUlOKUgOKUgCDslaHshZgg7YOA7J6F7J2AIOygkeuRkOyCrOyZgCDslaHshZgg7J2066aE7J2EIOyhsO2Vqe2VtOyEnCDrp4zrk6Dri6QuXG5cbnNyY1xu4pSc4pSA4pSAIGNvbW1vblxu4pSCICAg4pSU4pSA4pSAIGNyZWF0ZVJlZHVjZXIuanNcbuKUnOKUgOKUgCBmcmllbmRcbuKUgiAgIOKUlOKUgOKUgCBzdGF0ZS5qc1xu4pSc4pSA4pSAIGluZGV4LmpzXG7ilJTilIDilIAgdGltZWxpbmVcbiAgICDilJTilIDilIAgc3RhdGUuanNcblxu4piFICjsuZzqtawg66qp66GdKSDslaHshZgg6rO8IOumrOuTgOyEnCDsvZTrk5zrpbwg66i87KCAIOyekeyEse2VnOuLpC5cbuKXpiDrjbDsnbTthLAg7YOA7J6F7J2AIOyWtOuWu+qyjCDrkJjslrQg7J6I64qU6rCAIOKHoiDrsLDsl7TroZwg6rSA66as7ZWc64ukLlxu4pemIOyWtOuWpCDslaHshZgg7YOA7J6F7J20IO2VhOyalO2VnOqwgCDih6Ig7Lmc6rWs66W8IOy2lOqwgCAvIOyCreygnCDtlaAg7IiYIOyeiOyWtOyVvCDtlZjqs6AsIOuNsOydtO2EsOulvCDsiJjsoJXtlaAg7IiYIOyeiOyWtOyVvCDtlZzri6QuXG7il6Yg66as65OA7IScIOyXkOyEnCDsg4Htg6/qsJLsnYQg7IiY7KCV7ZWc64ukLiDih6IgQURELCBSRU1PVkUsIEVESVQg7JeQIO2VtOuLue2VmOuKlCDroZzsp4HsnYQg6rWs7ZiE7ZWc64ukLlxuXG7imIUgKO2DgOyehCDrnbzsnbgpIOyVoeyFmCDqs7wg66as65OA7IScIOy9lOuTnOulvCDsnpHshLHtlZzri6QuXG7il6Yg642w7J207YSwIO2DgOyeheydgCDslrTrlrvqsowg65CY7Ja0IOyeiOuKlOqwgCDih6Ig67Cw7Je066GcIOq0gOumrO2VnOuLpC5cbuKXpiDslrTrlqQg7JWh7IWYIO2DgOyeheydtCDtlYTsmpTtlZzqsIAg4oeiIOqyjOyLnOusvOydhCDstpTqsIAgLyDsgq3soJwg67CPIOqyjOyLnOusvOydhCDsiJjsoJUg65iQIO2OmOydtOyngCDrsojtmLgg7Kad6rCALlxuXG7imIUg66as65OA7ISc7J2YIOqzte2GtSDrtoDrtoQg67aE66as7ZWY6riwXG7il6Yg7LSI6riwIOyDge2DnOqwkiDruYgg67Cw7Je0IOygleydmFxu4pemIOyVoeyFmCDtg4DsnoXqs7wg7JWh7IWYIOyDneyEseyekCDtlajsiJhcbuKXpiDrjbDsnbTthLAg7LaU6rCAL+yCreygnC/siJjsoJUg66as65OA7IScIOy9lOuTnFxu4pSU4pSA4pSAIOqzte2Gteu2gOu2hOyXkCDtlbTri7ntlZjripQg67aA67aE7J2EIOuqqOuTiO2ZlCDtlZzri6QuXG5cbuKYhSDrpqzrk4DshJwg7ZWp7LmY6riwXG5jb21iaW5lUmVkdWNlcnPrpbwg7Ya17ZW0IOumrOuTgOyEnOulvCDtlZjrgpjroZwg7ZWp7LmgIOyImCDsnojri6QuXG7ilJTilIDilIAgZW50cnkgcG9pbnTsl5DshJwgcmVkdWNlcuulvCDtlanss5DspIDri6QuXG7ilJTilIDilIAg7ZWp7LmcIOumrOuTgOyEnOulvCDsiqTthqDslrTsl5Ag67aZ7J2464ukLlxuYH08L2NvZGU+PC9wcmU+XG4gICAgICA8YnIgLz5cbiAgICA8L2Rpdj5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/03-redux/index.mdx\n");

/***/ })

})