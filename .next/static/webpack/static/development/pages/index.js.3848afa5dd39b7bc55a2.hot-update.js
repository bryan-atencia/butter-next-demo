webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buttercms */ \"./node_modules/buttercms/lib/butter.js\");\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buttercms__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout.js */ \"./components/layout.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _dec, _class, _temp;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar butter = buttercms__WEBPACK_IMPORTED_MODULE_2___default()(\"8d6d186981c0902966f48b2f7db8a6aaa5205822\");\n\n\n\n\nvar __N_SSG = true;\nvar Main = (_dec = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"withStyles\"])(function (theme) {\n  return {\n    image: {\n      background: \"grey\",\n      height: \"250px\",\n      width: \"250px\",\n      borderRadius: \"50%\",\n      backgroundColor: \"#ffe5b4\"\n    },\n    actionText: {\n      textTransform: \"uppercase\",\n      textAlign: \"center\",\n      borderBottom: \"1px solid\",\n      width: \"fit-content\",\n      margin: \"10px auto\",\n      color: \"black\"\n    },\n    actionLink: {\n      color: \"black\",\n      textDecoration: \"none\"\n    },\n    mainGrid: {\n      maxWidth: \"775px\",\n      margin: \"50px 0\"\n    }\n  };\n}), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main() {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.componentDidMount = function () {\n      // console.log(butter)\n      butter.category.list({}).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        console.log(data, 'the data');\n      });\n    };\n\n    _this.renderCategories = function () {\n      var _this$props = _this.props,\n          data = _this$props.data,\n          classes = _this$props.classes;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n        container: true,\n        justify: \"space-between\",\n        alignItems: \"center\"\n      }, data && data.map(function (x, y) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n          item: true,\n          key: y\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n          className: classes.image\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/category/\".concat(x.name.split(\" \").join(\"\"))\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"], {\n          className: classes.actionText\n        }, x.name)));\n      }));\n    };\n\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          data = _this$props2.data,\n          classes = _this$props2.classes;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], null, \"here\"));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImJ1dHRlciIsIkJ1dHRlciIsIk1haW4iLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJpbWFnZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImFjdGlvblRleHQiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dEFsaWduIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luIiwiY29sb3IiLCJhY3Rpb25MaW5rIiwidGV4dERlY29yYXRpb24iLCJtYWluR3JpZCIsIm1heFdpZHRoIiwiY29tcG9uZW50RGlkTW91bnQiLCJjYXRlZ29yeSIsImxpc3QiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyQ2F0ZWdvcmllcyIsInByb3BzIiwiY2xhc3NlcyIsIm1hcCIsIngiLCJ5IiwibmFtZSIsInNwbGl0Iiwiam9pbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLGdEQUFNLENBQUMsMENBQUQsQ0FBckI7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7SUE0QnFCQyxJLFdBMUJwQkMsb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN0QkMsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUMsTUFETjtBQUVMQyxZQUFNLEVBQUMsT0FGRjtBQUdMQyxXQUFLLEVBQUMsT0FIRDtBQUlMQyxrQkFBWSxFQUFDLEtBSlI7QUFLTEMscUJBQWUsRUFBQztBQUxYLEtBRGU7QUFRdEJDLGNBQVUsRUFBRTtBQUNWQyxtQkFBYSxFQUFDLFdBREo7QUFFVkMsZUFBUyxFQUFDLFFBRkE7QUFHVkMsa0JBQVksRUFBQyxXQUhIO0FBSVZOLFdBQUssRUFBQyxhQUpJO0FBS1ZPLFlBQU0sRUFBQyxXQUxHO0FBTVZDLFdBQUssRUFBQztBQU5JLEtBUlU7QUFnQnRCQyxjQUFVLEVBQUU7QUFDVkQsV0FBSyxFQUFDLE9BREk7QUFFVkUsb0JBQWMsRUFBQztBQUZMLEtBaEJVO0FBb0J0QkMsWUFBUSxFQUFFO0FBQ1JDLGNBQVEsRUFBQyxPQUREO0FBRVJMLFlBQU0sRUFBQztBQUZDO0FBcEJZLEdBQVo7QUFBQSxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7VUE0QlRNLGlCLEdBQW9CLFlBQU07QUFDeEI7QUFDQXJCLFlBQU0sQ0FBQ3NCLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCLEVBQXJCLEVBQ09DLElBRFAsQ0FDWSxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxPQURmLEVBRU9GLElBRlAsQ0FFWSxVQUFBRyxJQUFJLEVBQUk7QUFDWkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFBa0IsVUFBbEI7QUFDRCxPQUpQO0FBS0QsSzs7VUFFREcsZ0IsR0FBbUIsWUFBTTtBQUFBLHdCQUVHLE1BQUtDLEtBRlI7QUFBQSxVQUVmSixJQUZlLGVBRWZBLElBRmU7QUFBQSxVQUVUSyxPQUZTLGVBRVRBLE9BRlM7QUFJdkIsMEJBQU8sMkRBQUMsc0RBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGVBQU8sRUFBQyxlQUF4QjtBQUF3QyxrQkFBVSxFQUFDO0FBQW5ELFNBRUtMLElBQUksSUFBSUEsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDekIsNEJBQU8sMkRBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxhQUFHLEVBQUdBO0FBQWpCLHdCQUNHLDJEQUFDLHNEQUFEO0FBQU0sbUJBQVMsRUFBR0gsT0FBTyxDQUFDM0I7QUFBMUIsVUFESCxlQUVJLDJEQUFDLGdEQUFEO0FBQU0sY0FBSSxzQkFBZTZCLENBQUMsQ0FBQ0UsSUFBRixDQUFPQyxLQUFQLENBQWEsR0FBYixFQUFrQkMsSUFBbEIsQ0FBdUIsRUFBdkIsQ0FBZjtBQUFWLHdCQUNHLDJEQUFDLDREQUFEO0FBQVksbUJBQVMsRUFBR04sT0FBTyxDQUFDckI7QUFBaEMsV0FBK0N1QixDQUFDLENBQUNFLElBQWpELENBREgsQ0FGSixDQUFQO0FBTUQsT0FQTyxDQUZiLENBQVA7QUFZRCxLOzs7Ozs7OzZCQUVRO0FBQUEseUJBQ21CLEtBQUtMLEtBRHhCO0FBQUEsVUFDQ0osSUFERCxnQkFDQ0EsSUFERDtBQUFBLFVBQ09LLE9BRFAsZ0JBQ09BLE9BRFA7QUFHUCwwQkFBTywyREFBQyw2REFBRCxxQkFDRywyREFBQyxzREFBRCxlQURILENBQVA7QUFRRDs7OztFQXhDK0JPLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tIFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuXG5pbXBvcnQgQnV0dGVyIGZyb20gJ2J1dHRlcmNtcyc7XG5jb25zdCBidXR0ZXIgPSBCdXR0ZXIoXCI4ZDZkMTg2OTgxYzA5MDI5NjZmNDhiMmY3ZGI4YTZhYWE1MjA1ODIyXCIpO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJ1xuXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcblxuQHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBpbWFnZToge1xuICAgIGJhY2tncm91bmQ6XCJncmV5XCIsXG4gICAgaGVpZ2h0OlwiMjUwcHhcIixcbiAgICB3aWR0aDpcIjI1MHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOlwiNTAlXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZTViNFwiXG4gIH0sXG4gIGFjdGlvblRleHQ6IHtcbiAgICB0ZXh0VHJhbnNmb3JtOlwidXBwZXJjYXNlXCIsXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXG4gICAgYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkXCIsXG4gICAgd2lkdGg6XCJmaXQtY29udGVudFwiLFxuICAgIG1hcmdpbjpcIjEwcHggYXV0b1wiLFxuICAgIGNvbG9yOlwiYmxhY2tcIlxuICB9LFxuICBhY3Rpb25MaW5rOiB7XG4gICAgY29sb3I6XCJibGFja1wiLFxuICAgIHRleHREZWNvcmF0aW9uOlwibm9uZVwiXG4gIH0sXG4gIG1haW5HcmlkOiB7XG4gICAgbWF4V2lkdGg6XCI3NzVweFwiLFxuICAgIG1hcmdpbjpcIjUwcHggMFwiXG4gIH1cbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhidXR0ZXIpXG4gICAgYnV0dGVyLmNhdGVnb3J5Lmxpc3Qoe30pXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLCAndGhlIGRhdGEnKVxuICAgICAgICAgIH0pXG4gIH1cblxuICByZW5kZXJDYXRlZ29yaWVzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgeyBkYXRhLCBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5tYXAoKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8R3JpZCBpdGVtIGtleT17IHkgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9eyBjbGFzc2VzLmltYWdlIH0+PC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7eC5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9eyBjbGFzc2VzLmFjdGlvblRleHQgfT57IHgubmFtZSB9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvR3JpZD5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGNsYXNzZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8TGF5b3V0PlxuICAgICAgICAgICAgICA8R3JpZD5oZXJlPC9HcmlkPlxuICAgICAgICAgICAgICB7LyogPEdyaWQgY2xhc3NOYW1lPXsgY2xhc3Nlcy5tYWluR3JpZCB9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGd1dHRlckJvdHRvbT5UaGUgQmFydGVuZGVyPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPllvdXIgY29tcGxldGUgZ3VpZGUgdG8gbWVu4oCZcyBhcHBhcmVsIGFuZCBhY2Nlc3Nvcmllcy4gQnJvd3NlIHN0eWxlIHRpcHMsIHNpemUgZ3VpZGVzLCBhbmQgc3RlcHMgdG8gbWFzdGVyIHR5aW5nIGEgbmVja3RpZSwgdHlpbmcgYSBib3cgdGllLCBmb2xkaW5nIGEgcG9ja2V0IHNxdWFyZSwgYW5kIG1vcmUuPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhdGVnb3JpZXMoKX0gKi99XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICAgIGRhdGE6IFtdXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})