webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/buttercms/lib/butter.js":
false,

/***/ "./node_modules/buttercms/lib/resources/Author.js":
false,

/***/ "./node_modules/buttercms/lib/resources/Category.js":
false,

/***/ "./node_modules/buttercms/lib/resources/Content.js":
false,

/***/ "./node_modules/buttercms/lib/resources/Feed.js":
false,

/***/ "./node_modules/buttercms/lib/resources/Page.js":
false,

/***/ "./node_modules/buttercms/lib/resources/Post.js":
false,

/***/ "./node_modules/buttercms/lib/resources/Tag.js":
false,

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout.js */ \"./components/layout.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _dec, _class, _temp;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar __N_SSG = true;\nvar Main = (_dec = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])(function (theme) {\n  return {\n    image: {\n      background: \"grey\",\n      height: \"250px\",\n      width: \"250px\",\n      borderRadius: \"50%\",\n      backgroundColor: \"#ffe5b4\"\n    },\n    actionText: {\n      textTransform: \"uppercase\",\n      textAlign: \"center\",\n      borderBottom: \"1px solid\",\n      width: \"fit-content\",\n      margin: \"10px auto\",\n      color: \"black\"\n    },\n    actionLink: {\n      color: \"black\",\n      textDecoration: \"none\"\n    },\n    mainGrid: {\n      maxWidth: \"775px\",\n      margin: \"50px 0\"\n    }\n  };\n}), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main() {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.renderCategories = function () {\n      var _this$props = _this.props,\n          categories = _this$props.categories,\n          classes = _this$props.classes;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n        container: true,\n        justify: \"space-between\",\n        alignItems: \"center\"\n      }, categories && categories.map(function (x, y) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n          item: true,\n          key: y\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n          className: classes.image\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/category/\".concat(x.name.split(\" \").join(\"\"))\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n          className: classes.actionText\n        }, x.name)));\n      }));\n    };\n\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          categories = _this$props2.categories,\n          classes = _this$props2.classes;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n        className: classes.mainGrid\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n        variant: \"h2\",\n        gutterBottom: true\n      }, \"The Bartender\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n        variant: \"h6\"\n      }, \"Your complete guide to men\\u2019s apparel and accessories. Browse style tips, size guides, and steps to master tying a necktie, tying a bow tie, folding a pocket square, and more.\")), this.renderCategories());\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIk1haW4iLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJpbWFnZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImFjdGlvblRleHQiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dEFsaWduIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luIiwiY29sb3IiLCJhY3Rpb25MaW5rIiwidGV4dERlY29yYXRpb24iLCJtYWluR3JpZCIsIm1heFdpZHRoIiwicmVuZGVyQ2F0ZWdvcmllcyIsInByb3BzIiwiY2F0ZWdvcmllcyIsImNsYXNzZXMiLCJtYXAiLCJ4IiwieSIsIm5hbWUiLCJzcGxpdCIsImpvaW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7SUE0QnFCQSxJLFdBMUJwQkMsb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN0QkMsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUMsTUFETjtBQUVMQyxZQUFNLEVBQUMsT0FGRjtBQUdMQyxXQUFLLEVBQUMsT0FIRDtBQUlMQyxrQkFBWSxFQUFDLEtBSlI7QUFLTEMscUJBQWUsRUFBQztBQUxYLEtBRGU7QUFRdEJDLGNBQVUsRUFBRTtBQUNWQyxtQkFBYSxFQUFDLFdBREo7QUFFVkMsZUFBUyxFQUFDLFFBRkE7QUFHVkMsa0JBQVksRUFBQyxXQUhIO0FBSVZOLFdBQUssRUFBQyxhQUpJO0FBS1ZPLFlBQU0sRUFBQyxXQUxHO0FBTVZDLFdBQUssRUFBQztBQU5JLEtBUlU7QUFnQnRCQyxjQUFVLEVBQUU7QUFDVkQsV0FBSyxFQUFDLE9BREk7QUFFVkUsb0JBQWMsRUFBQztBQUZMLEtBaEJVO0FBb0J0QkMsWUFBUSxFQUFFO0FBQ1JDLGNBQVEsRUFBQyxPQUREO0FBRVJMLFlBQU0sRUFBQztBQUZDO0FBcEJZLEdBQVo7QUFBQSxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7VUE0QlRNLGdCLEdBQW1CLFlBQU07QUFBQSx3QkFDUyxNQUFLQyxLQURkO0FBQUEsVUFDZkMsVUFEZSxlQUNmQSxVQURlO0FBQUEsVUFDSEMsT0FERyxlQUNIQSxPQURHO0FBR3ZCLDBCQUFPLDJEQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUMsZUFBeEI7QUFBd0Msa0JBQVUsRUFBQztBQUFuRCxTQUVLRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0UsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3JDLDRCQUFPLDJEQUFDLHNEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsYUFBRyxFQUFHQTtBQUFqQix3QkFDRywyREFBQyxzREFBRDtBQUFNLG1CQUFTLEVBQUdILE9BQU8sQ0FBQ25CO0FBQTFCLFVBREgsZUFFSSwyREFBQyxnREFBRDtBQUFNLGNBQUksc0JBQWVxQixDQUFDLENBQUNFLElBQUYsQ0FBT0MsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLElBQWxCLENBQXVCLEVBQXZCLENBQWY7QUFBVix3QkFDRywyREFBQyw0REFBRDtBQUFZLG1CQUFTLEVBQUdOLE9BQU8sQ0FBQ2I7QUFBaEMsV0FBK0NlLENBQUMsQ0FBQ0UsSUFBakQsQ0FESCxDQUZKLENBQVA7QUFNRCxPQVBhLENBRm5CLENBQVA7QUFZRCxLOzs7Ozs7OzZCQUVRO0FBQUEseUJBQ3lCLEtBQUtOLEtBRDlCO0FBQUEsVUFDQ0MsVUFERCxnQkFDQ0EsVUFERDtBQUFBLFVBQ2FDLE9BRGIsZ0JBQ2FBLE9BRGI7QUFHUCwwQkFBTywyREFBQyw2REFBRCxxQkFDRywyREFBQyxzREFBRDtBQUFNLGlCQUFTLEVBQUdBLE9BQU8sQ0FBQ0w7QUFBMUIsc0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsb0JBQVk7QUFBckMseUJBREYsZUFFRSwyREFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQztBQUFwQiwrTEFGRixDQURILEVBS0ssS0FBS0UsZ0JBQUwsRUFMTCxDQUFQO0FBT0Q7Ozs7RUE3QitCVSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcblxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5cbkB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaW1hZ2U6IHtcbiAgICBiYWNrZ3JvdW5kOlwiZ3JleVwiLFxuICAgIGhlaWdodDpcIjI1MHB4XCIsXG4gICAgd2lkdGg6XCIyNTBweFwiLFxuICAgIGJvcmRlclJhZGl1czpcIjUwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmU1YjRcIlxuICB9LFxuICBhY3Rpb25UZXh0OiB7XG4gICAgdGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiLFxuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxuICAgIGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZFwiLFxuICAgIHdpZHRoOlwiZml0LWNvbnRlbnRcIixcbiAgICBtYXJnaW46XCIxMHB4IGF1dG9cIixcbiAgICBjb2xvcjpcImJsYWNrXCJcbiAgfSxcbiAgYWN0aW9uTGluazoge1xuICAgIGNvbG9yOlwiYmxhY2tcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjpcIm5vbmVcIlxuICB9LFxuICBtYWluR3JpZDoge1xuICAgIG1heFdpZHRoOlwiNzc1cHhcIixcbiAgICBtYXJnaW46XCI1MHB4IDBcIlxuICB9XG59KSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNhdGVnb3JpZXMsIGNsYXNzZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8R3JpZCBjb250YWluZXIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLm1hcCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxHcmlkIGl0ZW0ga2V5PXsgeSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17IGNsYXNzZXMuaW1hZ2UgfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHt4Lm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIil9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17IGNsYXNzZXMuYWN0aW9uVGV4dCB9PnsgeC5uYW1lIH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9HcmlkPlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcmllcywgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17IGNsYXNzZXMubWFpbkdyaWQgfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBndXR0ZXJCb3R0b20+VGhlIEJhcnRlbmRlcjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Zb3VyIGNvbXBsZXRlIGd1aWRlIHRvIG1lbuKAmXMgYXBwYXJlbCBhbmQgYWNjZXNzb3JpZXMuIEJyb3dzZSBzdHlsZSB0aXBzLCBzaXplIGd1aWRlcywgYW5kIHN0ZXBzIHRvIG1hc3RlciB0eWluZyBhIG5lY2t0aWUsIHR5aW5nIGEgYm93IHRpZSwgZm9sZGluZyBhIHBvY2tldCBzcXVhcmUsIGFuZCBtb3JlLjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2F0ZWdvcmllcygpIH1cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgICBjYXRlZ29yaWVzOiBnZXRDYXRlZ29yaWVzKClcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})