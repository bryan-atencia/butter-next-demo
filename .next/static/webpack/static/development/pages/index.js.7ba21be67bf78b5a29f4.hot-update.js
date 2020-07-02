webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buttercms */ \"./node_modules/buttercms/lib/butter.js\");\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buttercms__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout.js */ \"./components/layout.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _dec, _class, _temp;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar butter = buttercms__WEBPACK_IMPORTED_MODULE_2___default()(\"8d6d186981c0902966f48b2f7db8a6aaa5205822\");\n\n\n\n\nvar __N_SSG = true;\nvar Main = (_dec = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"withStyles\"])(function (theme) {\n  return {\n    image: {\n      background: \"grey\",\n      height: \"250px\",\n      width: \"250px\",\n      borderRadius: \"50%\",\n      backgroundColor: \"#ffe5b4\"\n    },\n    actionText: {\n      textTransform: \"uppercase\",\n      textAlign: \"center\",\n      borderBottom: \"1px solid\",\n      width: \"fit-content\",\n      margin: \"10px auto\",\n      color: \"black\"\n    },\n    actionLink: {\n      color: \"black\",\n      textDecoration: \"none\"\n    },\n    mainGrid: {\n      maxWidth: \"775px\",\n      margin: \"50px 0\"\n    }\n  };\n}), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main() {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.componentDidMount = function () {\n      fetch(\"https://api.buttercms.com/v2/content/?keys=categories&auth_token=8d6d186981c0902966f48b2f7db8a6aaa5205822\").then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        console.log(data, 'the data');\n      });\n    };\n\n    _this.renderCategories = function () {\n      var _this$props = _this.props,\n          data = _this$props.data,\n          classes = _this$props.classes;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n        container: true,\n        justify: \"space-between\",\n        alignItems: \"center\"\n      }, data && data.map(function (x, y) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n          item: true,\n          key: y\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n          className: classes.image\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/category/\".concat(x.name.split(\" \").join(\"\"))\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"], {\n          className: classes.actionText\n        }, x.name)));\n      }));\n    };\n\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          data = _this$props2.data,\n          classes = _this$props2.classes;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], null, \"here\"));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImJ1dHRlciIsIkJ1dHRlciIsIk1haW4iLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJpbWFnZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImFjdGlvblRleHQiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dEFsaWduIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luIiwiY29sb3IiLCJhY3Rpb25MaW5rIiwidGV4dERlY29yYXRpb24iLCJtYWluR3JpZCIsIm1heFdpZHRoIiwiY29tcG9uZW50RGlkTW91bnQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJDYXRlZ29yaWVzIiwicHJvcHMiLCJjbGFzc2VzIiwibWFwIiwieCIsInkiLCJuYW1lIiwic3BsaXQiLCJqb2luIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsZ0RBQU0sQ0FBQywwQ0FBRCxDQUFyQjtBQUVBO0FBQ0E7QUFDQTtBQUVBOztJQTRCcUJDLEksV0ExQnBCQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3RCQyxTQUFLLEVBQUU7QUFDTEMsZ0JBQVUsRUFBQyxNQUROO0FBRUxDLFlBQU0sRUFBQyxPQUZGO0FBR0xDLFdBQUssRUFBQyxPQUhEO0FBSUxDLGtCQUFZLEVBQUMsS0FKUjtBQUtMQyxxQkFBZSxFQUFDO0FBTFgsS0FEZTtBQVF0QkMsY0FBVSxFQUFFO0FBQ1ZDLG1CQUFhLEVBQUMsV0FESjtBQUVWQyxlQUFTLEVBQUMsUUFGQTtBQUdWQyxrQkFBWSxFQUFDLFdBSEg7QUFJVk4sV0FBSyxFQUFDLGFBSkk7QUFLVk8sWUFBTSxFQUFDLFdBTEc7QUFNVkMsV0FBSyxFQUFDO0FBTkksS0FSVTtBQWdCdEJDLGNBQVUsRUFBRTtBQUNWRCxXQUFLLEVBQUMsT0FESTtBQUVWRSxvQkFBYyxFQUFDO0FBRkwsS0FoQlU7QUFvQnRCQyxZQUFRLEVBQUU7QUFDUkMsY0FBUSxFQUFDLE9BREQ7QUFFUkwsWUFBTSxFQUFDO0FBRkM7QUFwQlksR0FBWjtBQUFBLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7OztVQTRCVE0saUIsR0FBb0IsWUFBTTtBQUN4QkMsV0FBSyxDQUFDLDJHQUFELENBQUwsQ0FDT0MsSUFEUCxDQUNZLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BRGYsRUFFT0YsSUFGUCxDQUVZLFVBQUFHLElBQUksRUFBSTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUFrQixVQUFsQjtBQUNELE9BSlA7QUFLRCxLOztVQUVERyxnQixHQUFtQixZQUFNO0FBQUEsd0JBRUcsTUFBS0MsS0FGUjtBQUFBLFVBRWZKLElBRmUsZUFFZkEsSUFGZTtBQUFBLFVBRVRLLE9BRlMsZUFFVEEsT0FGUztBQUl2QiwwQkFBTywyREFBQyxzREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFDLGVBQXhCO0FBQXdDLGtCQUFVLEVBQUM7QUFBbkQsU0FFS0wsSUFBSSxJQUFJQSxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN6Qiw0QkFBTywyREFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLGFBQUcsRUFBR0E7QUFBakIsd0JBQ0csMkRBQUMsc0RBQUQ7QUFBTSxtQkFBUyxFQUFHSCxPQUFPLENBQUMxQjtBQUExQixVQURILGVBRUksMkRBQUMsZ0RBQUQ7QUFBTSxjQUFJLHNCQUFlNEIsQ0FBQyxDQUFDRSxJQUFGLENBQU9DLEtBQVAsQ0FBYSxHQUFiLEVBQWtCQyxJQUFsQixDQUF1QixFQUF2QixDQUFmO0FBQVYsd0JBQ0csMkRBQUMsNERBQUQ7QUFBWSxtQkFBUyxFQUFHTixPQUFPLENBQUNwQjtBQUFoQyxXQUErQ3NCLENBQUMsQ0FBQ0UsSUFBakQsQ0FESCxDQUZKLENBQVA7QUFNRCxPQVBPLENBRmIsQ0FBUDtBQVlELEs7Ozs7Ozs7NkJBRVE7QUFBQSx5QkFDbUIsS0FBS0wsS0FEeEI7QUFBQSxVQUNDSixJQURELGdCQUNDQSxJQUREO0FBQUEsVUFDT0ssT0FEUCxnQkFDT0EsT0FEUDtBQUdQLDBCQUFPLDJEQUFDLDZEQUFELHFCQUNHLDJEQUFDLHNEQUFELGVBREgsQ0FBUDtBQVFEOzs7O0VBdkMrQk8sNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5cbmltcG9ydCBCdXR0ZXIgZnJvbSAnYnV0dGVyY21zJztcbmNvbnN0IGJ1dHRlciA9IEJ1dHRlcihcIjhkNmQxODY5ODFjMDkwMjk2NmY0OGIyZjdkYjhhNmFhYTUyMDU4MjJcIik7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnXG5cbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxuXG5Ad2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIGltYWdlOiB7XG4gICAgYmFja2dyb3VuZDpcImdyZXlcIixcbiAgICBoZWlnaHQ6XCIyNTBweFwiLFxuICAgIHdpZHRoOlwiMjUwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6XCI1MCVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZlNWI0XCJcbiAgfSxcbiAgYWN0aW9uVGV4dDoge1xuICAgIHRleHRUcmFuc2Zvcm06XCJ1cHBlcmNhc2VcIixcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcbiAgICBib3JkZXJCb3R0b206XCIxcHggc29saWRcIixcbiAgICB3aWR0aDpcImZpdC1jb250ZW50XCIsXG4gICAgbWFyZ2luOlwiMTBweCBhdXRvXCIsXG4gICAgY29sb3I6XCJibGFja1wiXG4gIH0sXG4gIGFjdGlvbkxpbms6IHtcbiAgICBjb2xvcjpcImJsYWNrXCIsXG4gICAgdGV4dERlY29yYXRpb246XCJub25lXCJcbiAgfSxcbiAgbWFpbkdyaWQ6IHtcbiAgICBtYXhXaWR0aDpcIjc3NXB4XCIsXG4gICAgbWFyZ2luOlwiNTBweCAwXCJcbiAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuYnV0dGVyY21zLmNvbS92Mi9jb250ZW50Lz9rZXlzPWNhdGVnb3JpZXMmYXV0aF90b2tlbj04ZDZkMTg2OTgxYzA5MDI5NjZmNDhiMmY3ZGI4YTZhYWE1MjA1ODIyXCIpXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLCAndGhlIGRhdGEnKVxuICAgICAgICAgIH0pXG4gIH1cblxuICByZW5kZXJDYXRlZ29yaWVzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgeyBkYXRhLCBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5tYXAoKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8R3JpZCBpdGVtIGtleT17IHkgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9eyBjbGFzc2VzLmltYWdlIH0+PC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7eC5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9eyBjbGFzc2VzLmFjdGlvblRleHQgfT57IHgubmFtZSB9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvR3JpZD5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGNsYXNzZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8TGF5b3V0PlxuICAgICAgICAgICAgICA8R3JpZD5oZXJlPC9HcmlkPlxuICAgICAgICAgICAgICB7LyogPEdyaWQgY2xhc3NOYW1lPXsgY2xhc3Nlcy5tYWluR3JpZCB9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGd1dHRlckJvdHRvbT5UaGUgQmFydGVuZGVyPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPllvdXIgY29tcGxldGUgZ3VpZGUgdG8gbWVu4oCZcyBhcHBhcmVsIGFuZCBhY2Nlc3Nvcmllcy4gQnJvd3NlIHN0eWxlIHRpcHMsIHNpemUgZ3VpZGVzLCBhbmQgc3RlcHMgdG8gbWFzdGVyIHR5aW5nIGEgbmVja3RpZSwgdHlpbmcgYSBib3cgdGllLCBmb2xkaW5nIGEgcG9ja2V0IHNxdWFyZSwgYW5kIG1vcmUuPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhdGVnb3JpZXMoKX0gKi99XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICAgIGRhdGE6IFtdXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})