webpackHotUpdate("static/development/pages/category/[id].js",{

/***/ "./pages/category/[id].js":
/*!********************************!*\
  !*** ./pages/category/[id].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Category; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout.js */ \"./components/layout.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions */ \"./functions/index.js\");\nvar _dec, _class, _temp;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nvar Category = (_dec = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(function (theme) {\n  return {\n    heroImage: {\n      background: \"grey\",\n      height: \"600px\",\n      width: \"600px\",\n      borderRadius: \"50%\",\n      backgroundColor: \"#ffe5b4\",\n      margin: \"0 auto\"\n    },\n    image: {\n      height: \"250px\",\n      width: \"250px\",\n      borderRadius: \"50%\",\n      backgroundColor: \"#ffe5b4\"\n    },\n    mainGrid: {\n      maxWidth: \"775px\",\n      margin: \"50px 0\"\n    },\n    tileTitle: {\n      margin: \"15px auto 0\",\n      fontWeight: \"bold\"\n    },\n    tileSubTitle: {\n      margin: \"15px auto\"\n    },\n    tileActionText: {\n      borderBottom: \"1px solid\",\n      width: \"fit-content\"\n    },\n    heroTitle: {\n      fontWeight: \"bold\"\n    },\n    heroDescription: {\n      margin: \"15px 0\"\n    },\n    homeLink: {\n      color: \"black\",\n      textDecoration: \"none\"\n    },\n    actionLink: {\n      color: \"black\",\n      textDecoration: \"none\"\n    }\n  };\n}), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {\n  _inherits(Category, _React$Component);\n\n  var _super = _createSuper(Category);\n\n  function Category() {\n    var _this;\n\n    _classCallCheck(this, Category);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.renderSubCategories = function () {\n      var _this$props = _this.props,\n          data = _this$props.data,\n          classes = _this$props.classes,\n          id = _this$props.id;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        container: true,\n        style: {\n          textAlign: \"center\"\n        },\n        justify: \"space-between\"\n      }, data.subcategories.map(function (x, y) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n          container: true,\n          item: true,\n          key: y,\n          xs: 12,\n          sm: 3,\n          alignItems: \"center\",\n          direction: \"column\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n          className: classes.image\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n          container: true,\n          direction: \"column\",\n          alignItems: \"center\",\n          justify: \"center\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n          variant: \"h6\",\n          className: classes.tileTitle\n        }, x.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n          variant: \"subtitle1\",\n          className: classes.tileSubTitle,\n          style: {\n            width: \"270px\"\n          }\n        }, x.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/subcategory/\".concat(id, \"/\").concat(x.id)\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n          variant: \"body1\",\n          className: classes.tileActionText\n        }, x.actiontext))));\n      }));\n    };\n\n    return _this;\n  }\n\n  _createClass(Category, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          data = _this$props2.data,\n          classes = _this$props2.classes;\n      var descrip = data.herodescription ? data.herodescription.split(\"<b>\") : [];\n      console.log(data, 'the data here');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        className: classes.mainGrid\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"h2\"\n      }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"h6\",\n        style: {\n          margin: \"15px 0\"\n        }\n      }, data.subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        container: true,\n        justify: \"flex-start\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        className: classes.tileActionText,\n        style: {\n          marginRight: \"20px\"\n        }\n      }, data.actiontext), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        href: \"/\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"body1\",\n        className: classes.tileActionText\n      }, \"HOME\")))), data.subcategories && this.renderSubCategories(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        container: true,\n        style: {\n          margin: \"50px auto\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 7\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        className: classes.heroImage\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        sm: 5,\n        container: true,\n        justify: \"center\",\n        alignItems: \"flex-start\",\n        direction: \"column\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"h6\",\n        className: classes.heroTitle\n      }, data.herotitle), descrip && descrip.map(function (x, y) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n          key: y,\n          variant: \"subtitle1\",\n          className: classes.heroDescription\n        }, x);\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n        variant: \"body1\",\n        className: classes.tileActionText\n      }, data.heroactionlink))));\n    }\n  }]);\n\n  return Category;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXRlZ29yeS8uanM/M2UwYiJdLCJuYW1lcyI6WyJDYXRlZ29yeSIsIndpdGhTdHlsZXMiLCJ0aGVtZSIsImhlcm9JbWFnZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsImltYWdlIiwibWFpbkdyaWQiLCJtYXhXaWR0aCIsInRpbGVUaXRsZSIsImZvbnRXZWlnaHQiLCJ0aWxlU3ViVGl0bGUiLCJ0aWxlQWN0aW9uVGV4dCIsImJvcmRlckJvdHRvbSIsImhlcm9UaXRsZSIsImhlcm9EZXNjcmlwdGlvbiIsImhvbWVMaW5rIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImFjdGlvbkxpbmsiLCJyZW5kZXJTdWJDYXRlZ29yaWVzIiwicHJvcHMiLCJkYXRhIiwiY2xhc3NlcyIsImlkIiwidGV4dEFsaWduIiwic3ViY2F0ZWdvcmllcyIsIm1hcCIsIngiLCJ5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbnRleHQiLCJkZXNjcmlwIiwiaGVyb2Rlc2NyaXB0aW9uIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwic3VidGl0bGUiLCJtYXJnaW5SaWdodCIsImhlcm90aXRsZSIsImhlcm9hY3Rpb25saW5rIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0lBaURxQkEsUSxXQTlDcEJDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDcEJDLGFBQVMsRUFBRTtBQUNUQyxnQkFBVSxFQUFDLE1BREY7QUFFVEMsWUFBTSxFQUFDLE9BRkU7QUFHVEMsV0FBSyxFQUFDLE9BSEc7QUFJVEMsa0JBQVksRUFBQyxLQUpKO0FBS1RDLHFCQUFlLEVBQUMsU0FMUDtBQU1UQyxZQUFNLEVB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VyxVQUFFLEVBQUcsRUFBaEI7QUFBcUIsVUFBRSxFQUFHO0FBQTFCLHNCQUNFLDJEQUFDLHNEQUFEO0FBQU0saUJBQVMsRUFBR2tCLE9BQU8sQ0FBQ3hCO0FBQTFCLFFBREYsQ0FERixlQUlFLDJEQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFHLEVBQWhCO0FBQXFCLFVBQUUsRUFBRyxDQUExQjtBQUE4QixpQkFBUyxNQUF2QztBQUF3QyxlQUFPLEVBQUMsUUFBaEQ7QUFBeUQsa0JBQVUsRUFBQyxZQUFwRTtBQUFpRixpQkFBUyxFQUFDO0FBQTNGLHNCQUNFLDJEQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFTLEVBQUd3QixPQUFPLENBQUNUO0FBQTdDLFNBQTJEUSxJQUFJLENBQUNrQixTQUFoRSxDQURGLEVBRUlQLE9BQU8sSUFBSUEsT0FBTyxDQUFDTixHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsNEJBQVUsMkRBQUMsNERBQUQ7QUFBWSxhQUFHLEVBQUdBLENBQWxCO0FBQXNCLGlCQUFPLEVBQUMsV0FBOUI7QUFBMEMsbUJBQVMsRUFBR04sT0FBTyxDQUFDUjtBQUE5RCxXQUFrRmEsQ0FBbEYsQ0FBVjtBQUFBLE9BQVosQ0FGZixlQUdFLDJEQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQTRCLGlCQUFTLEVBQUdMLE9BQU8sQ0FBQ1g7QUFBaEQsU0FBbUVVLElBQUksQ0FBQ21CLGNBQXhFLENBSEYsQ0FKRixDQVpILENBQVA7QUF1QkQ7Ozs7RUFuRG1DQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vcGFnZXMvY2F0ZWdvcnkvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tIFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC5qcydcblxuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcywgZ2V0U3ViY2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnNcIlxuXG5cbkB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICBoZXJvSW1hZ2U6IHtcbiAgICAgIGJhY2tncm91bmQ6XCJncmV5XCIsXG4gICAgICBoZWlnaHQ6XCI2MDBweFwiLFxuICAgICAgd2lkdGg6XCI2MDBweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOlwiNTAlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZlNWI0XCIsXG4gICAgICBtYXJnaW46XCIwIGF1dG9cIlxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIGhlaWdodDpcIjI1MHB4XCIsXG4gICAgICB3aWR0aDpcIjI1MHB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6XCI1MCVcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmU1YjRcIlxuICAgIH0sXG4gICAgbWFpbkdyaWQ6IHtcbiAgICAgIG1heFdpZHRoOlwiNzc1cHhcIixcbiAgICAgIG1hcmdpbjpcIjUwcHggMFwiXG4gICAgfSxcbiAgICB0aWxlVGl0bGU6IHtcbiAgICAgIG1hcmdpbjpcIjE1cHggYXV0byAwXCIsXG4gICAgICBmb250V2VpZ2h0OlwiYm9sZFwiXG4gICAgfSxcbiAgICB0aWxlU3ViVGl0bGU6e1xuICAgICAgbWFyZ2luOlwiMTVweCBhdXRvXCJcbiAgICB9LFxuICAgIHRpbGVBY3Rpb25UZXh0OiB7XG4gICAgICBib3JkZXJCb3R0b206XCIxcHggc29saWRcIixcbiAgICAgIHdpZHRoOlwiZml0LWNvbnRlbnRcIlxuICAgIH0sXG4gICAgaGVyb1RpdGxlOiB7XG4gICAgICBmb250V2VpZ2h0OlwiYm9sZFwiXG4gICAgfSxcbiAgICBoZXJvRGVzY3JpcHRpb246IHtcbiAgICAgIG1hcmdpbjpcIjE1cHggMFwiXG4gICAgfSxcbiAgICBob21lTGluazoge1xuICAgICAgY29sb3I6XCJibGFja1wiLFxuICAgICAgdGV4dERlY29yYXRpb246XCJub25lXCJcbiAgICB9LFxuICAgIGFjdGlvbkxpbms6IHtcbiAgICAgIGNvbG9yOlwiYmxhY2tcIixcbiAgICAgIHRleHREZWNvcmF0aW9uOlwibm9uZVwiXG4gICAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXJTdWJDYXRlZ29yaWVzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgeyBkYXRhLCBjbGFzc2VzLCBpZCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyB0ZXh0QWxpZ246XCJjZW50ZXJcIiB9fSBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkYXRhLnN1YmNhdGVnb3JpZXMubWFwKCh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8R3JpZCBjb250YWluZXIgaXRlbSBrZXk9eyB5IH0geHM9ezEyfSBzbT17M30gYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXsgY2xhc3Nlcy5pbWFnZSB9PjwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9eyBjbGFzc2VzLnRpbGVUaXRsZSB9PnsgeC50aXRsZSB9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY2xhc3NOYW1lPXsgY2xhc3Nlcy50aWxlU3ViVGl0bGUgfSBzdHlsZT17eyB3aWR0aDpcIjI3MHB4XCIgfX0+eyB4LmRlc2NyaXB0aW9uIH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eyBgL3N1YmNhdGVnb3J5LyR7aWR9LyR7eC5pZH1gIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXsgY2xhc3Nlcy50aWxlQWN0aW9uVGV4dCB9PnsgeC5hY3Rpb250ZXh0IH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgPC9HcmlkPlxuICB9XG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHsgZGF0YSwgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGRlc2NyaXAgPSBkYXRhLmhlcm9kZXNjcmlwdGlvbiA/IGRhdGEuaGVyb2Rlc2NyaXB0aW9uLnNwbGl0KFwiPGI+XCIpIDogW11cbiAgICBjb25zb2xlLmxvZyhkYXRhLCAndGhlIGRhdGEgaGVyZScpXG4gICAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXsgY2xhc3Nlcy5tYWluR3JpZCB9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiID57IGRhdGEudGl0bGUgfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzdHlsZT17eyBtYXJnaW46XCIxNXB4IDBcIiB9fT57IGRhdGEuc3VidGl0bGUgfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17IGNsYXNzZXMudGlsZUFjdGlvblRleHQgfSBzdHlsZT17eyBtYXJnaW5SaWdodDpcIjIwcHhcIiB9fT57IGRhdGEuYWN0aW9udGV4dCB9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXsgY2xhc3Nlcy50aWxlQWN0aW9uVGV4dCB9PkhPTUU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIHsgZGF0YS5zdWJjYXRlZ29yaWVzICYmIHRoaXMucmVuZGVyU3ViQ2F0ZWdvcmllcygpIH1cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IG1hcmdpbjpcIjUwcHggYXV0b1wiIH19PlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9eyAxMiB9IHNtPXsgNyB9PlxuICAgICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXsgY2xhc3Nlcy5oZXJvSW1hZ2UgfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9eyAxMiB9IHNtPXsgNSB9IGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17IGNsYXNzZXMuaGVyb1RpdGxlIH0+eyBkYXRhLmhlcm90aXRsZSB9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgeyBkZXNjcmlwICYmIGRlc2NyaXAubWFwKCh4LCB5KSA9PiA8VHlwb2dyYXBoeSBrZXk9eyB5IH0gdmFyaWFudD1cInN1YnRpdGxlMVwiIGNsYXNzTmFtZT17IGNsYXNzZXMuaGVyb0Rlc2NyaXB0aW9uIH0+eyB4IH08L1R5cG9ncmFwaHk+KSB9XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjbGFzc05hbWU9eyBjbGFzc2VzLnRpbGVBY3Rpb25UZXh0IH0+eyBkYXRhLmhlcm9hY3Rpb25saW5rIH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGxldCBwYXRocyA9IGF3YWl0IGdldENhdGVnb3JpZXMoKVxuICAgIHBhdGhzID0gcGF0aHMubWFwKHggPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgaWQ6IHguaWRcbiAgICAgICAgfVxuICAgICAgfVxuICB9KVxuXG4gIHJldHVybiAge1xuICAgICAgICAgICAgcGF0aHMsXG4gICAgICAgICAgICBmYWxsYmFjazpmYWxzZVxuICAgICAgICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgbGV0IGRhdGEgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKClcbiAgbGV0IGNhdGVnb3J5ID0gZGF0YS5maWx0ZXIoeCA9PiB4LmlkID09IHBhcmFtcy5pZClbMF07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogY2F0ZWdvcnksXG4gICAgICBpZDogcGFyYW1zLmlkXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/[id].js\n");

/***/ })

})