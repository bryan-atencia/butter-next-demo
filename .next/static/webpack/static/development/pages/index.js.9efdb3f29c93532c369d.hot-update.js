webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buttercms */ \"./node_modules/buttercms/lib/butter.js\");\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buttercms__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout.js */ \"./components/layout.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _dec, _class, _temp;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar butter = buttercms__WEBPACK_IMPORTED_MODULE_2___default()(\"8d6d186981c0902966f48b2f7db8a6aaa5205822\");\n\n\n\n\nvar __N_SSG = true;\nvar Main = (_dec = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"withStyles\"])(function (theme) {\n  return {\n    image: {\n      background: \"grey\",\n      height: \"250px\",\n      width: \"250px\",\n      borderRadius: \"50%\",\n      backgroundColor: \"#ffe5b4\"\n    },\n    actionText: {\n      textTransform: \"uppercase\",\n      textAlign: \"center\",\n      borderBottom: \"1px solid\",\n      width: \"fit-content\",\n      margin: \"10px auto\",\n      color: \"black\"\n    },\n    actionLink: {\n      color: \"black\",\n      textDecoration: \"none\"\n    },\n    mainGrid: {\n      maxWidth: \"775px\",\n      margin: \"50px 0\"\n    }\n  };\n}), _dec(_class = (_temp = /*#__PURE__*/function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main() {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.componentDidMount = function () {\n      console.log(butter.Page._conn.get(\"how-to\")); // butter.category.list({})\n      //       .then(res => {\n      //         console.log(res)\n      //       })\n      //       .then(data => {\n      //         console.log(data, 'the data')\n      //       })\n    };\n\n    _this.renderCategories = function () {\n      var _this$props = _this.props,\n          data = _this$props.data,\n          classes = _this$props.classes;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n        container: true,\n        justify: \"space-between\",\n        alignItems: \"center\"\n      }, data && data.map(function (x, y) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n          item: true,\n          key: y\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n          className: classes.image\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/category/\".concat(x.name.split(\" \").join(\"\"))\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"], {\n          className: classes.actionText\n        }, x.name)));\n      }));\n    };\n\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          data = _this$props2.data,\n          classes = _this$props2.classes;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], null, \"here\"));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImJ1dHRlciIsIkJ1dHRlciIsIk1haW4iLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJpbWFnZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImFjdGlvblRleHQiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dEFsaWduIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luIiwiY29sb3IiLCJhY3Rpb25MaW5rIiwidGV4dERlY29yYXRpb24iLCJtYWluR3JpZCIsIm1heFdpZHRoIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwiUGFnZSIsIl9jb25uIiwiZ2V0IiwicmVuZGVyQ2F0ZWdvcmllcyIsInByb3BzIiwiZGF0YSIsImNsYXNzZXMiLCJtYXAiLCJ4IiwieSIsIm5hbWUiLCJzcGxpdCIsImpvaW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxnREFBTSxDQUFDLDBDQUFELENBQXJCO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0lBNEJxQkMsSSxXQTFCcEJDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdEJDLFNBQUssRUFBRTtBQUNMQyxnQkFBVSxFQUFDLE1BRE47QUFFTEMsWUFBTSxFQUFDLE9BRkY7QUFHTEMsV0FBSyxFQUFDLE9BSEQ7QUFJTEMsa0JBQVksRUFBQyxLQUpSO0FBS0xDLHFCQUFlLEVBQUM7QUFMWCxLQURlO0FBUXRCQyxjQUFVLEVBQUU7QUFDVkMsbUJBQWEsRUFBQyxXQURKO0FBRVZDLGVBQVMsRUFBQyxRQUZBO0FBR1ZDLGtCQUFZLEVBQUMsV0FISDtBQUlWTixXQUFLLEVBQUMsYUFKSTtBQUtWTyxZQUFNLEVBQUMsV0FMRztBQU1WQyxXQUFLLEVBQUM7QUFOSSxLQVJVO0FBZ0J0QkMsY0FBVSxFQUFFO0FBQ1ZELFdBQUssRUFBQyxPQURJO0FBRVZFLG9CQUFjLEVBQUM7QUFGTCxLQWhCVTtBQW9CdEJDLFlBQVEsRUFBRTtBQUNSQyxjQUFRLEVBQUMsT0FERDtBQUVSTCxZQUFNLEVBQUM7QUFGQztBQXBCWSxHQUFaO0FBQUEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7O1VBNEJUTSxpQixHQUFvQixZQUFNO0FBQ3hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWXZCLE1BQU0sQ0FBQ3dCLElBQVAsQ0FBWUMsS0FBWixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEIsQ0FBWixFQUR3QixDQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEs7O1VBRURDLGdCLEdBQW1CLFlBQU07QUFBQSx3QkFFRyxNQUFLQyxLQUZSO0FBQUEsVUFFZkMsSUFGZSxlQUVmQSxJQUZlO0FBQUEsVUFFVEMsT0FGUyxlQUVUQSxPQUZTO0FBSXZCLDBCQUFPLDJEQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUMsZUFBeEI7QUFBd0Msa0JBQVUsRUFBQztBQUFuRCxTQUVLRCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3pCLDRCQUFPLDJEQUFDLHNEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsYUFBRyxFQUFHQTtBQUFqQix3QkFDRywyREFBQyxzREFBRDtBQUFNLG1CQUFTLEVBQUdILE9BQU8sQ0FBQ3pCO0FBQTFCLFVBREgsZUFFSSwyREFBQyxnREFBRDtBQUFNLGNBQUksc0JBQWUyQixDQUFDLENBQUNFLElBQUYsQ0FBT0MsS0FBUCxDQUFhLEdBQWIsRUFBa0JDLElBQWxCLENBQXVCLEVBQXZCLENBQWY7QUFBVix3QkFDRywyREFBQyw0REFBRDtBQUFZLG1CQUFTLEVBQUdOLE9BQU8sQ0FBQ25CO0FBQWhDLFdBQStDcUIsQ0FBQyxDQUFDRSxJQUFqRCxDQURILENBRkosQ0FBUDtBQU1ELE9BUE8sQ0FGYixDQUFQO0FBWUQsSzs7Ozs7Ozs2QkFFUTtBQUFBLHlCQUNtQixLQUFLTixLQUR4QjtBQUFBLFVBQ0NDLElBREQsZ0JBQ0NBLElBREQ7QUFBQSxVQUNPQyxPQURQLGdCQUNPQSxPQURQO0FBR1AsMEJBQU8sMkRBQUMsNkRBQUQscUJBQ0csMkRBQUMsc0RBQUQsZUFESCxDQUFQO0FBUUQ7Ozs7RUExQytCTyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcblxuaW1wb3J0IEJ1dHRlciBmcm9tICdidXR0ZXJjbXMnO1xuY29uc3QgYnV0dGVyID0gQnV0dGVyKFwiOGQ2ZDE4Njk4MWMwOTAyOTY2ZjQ4YjJmN2RiOGE2YWFhNTIwNTgyMlwiKTtcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcblxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5cbkB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaW1hZ2U6IHtcbiAgICBiYWNrZ3JvdW5kOlwiZ3JleVwiLFxuICAgIGhlaWdodDpcIjI1MHB4XCIsXG4gICAgd2lkdGg6XCIyNTBweFwiLFxuICAgIGJvcmRlclJhZGl1czpcIjUwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmU1YjRcIlxuICB9LFxuICBhY3Rpb25UZXh0OiB7XG4gICAgdGV4dFRyYW5zZm9ybTpcInVwcGVyY2FzZVwiLFxuICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxuICAgIGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZFwiLFxuICAgIHdpZHRoOlwiZml0LWNvbnRlbnRcIixcbiAgICBtYXJnaW46XCIxMHB4IGF1dG9cIixcbiAgICBjb2xvcjpcImJsYWNrXCJcbiAgfSxcbiAgYWN0aW9uTGluazoge1xuICAgIGNvbG9yOlwiYmxhY2tcIixcbiAgICB0ZXh0RGVjb3JhdGlvbjpcIm5vbmVcIlxuICB9LFxuICBtYWluR3JpZDoge1xuICAgIG1heFdpZHRoOlwiNzc1cHhcIixcbiAgICBtYXJnaW46XCI1MHB4IDBcIlxuICB9XG59KSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYnV0dGVyLlBhZ2UuX2Nvbm4uZ2V0KFwiaG93LXRvXCIpKVxuICAgIC8vIGJ1dHRlci5jYXRlZ29yeS5saXN0KHt9KVxuICAgIC8vICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsICd0aGUgZGF0YScpXG4gICAgLy8gICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlckNhdGVnb3JpZXMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB7IGRhdGEsIGNsYXNzZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8R3JpZCBjb250YWluZXIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLm1hcCgoeCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxHcmlkIGl0ZW0ga2V5PXsgeSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17IGNsYXNzZXMuaW1hZ2UgfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHt4Lm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIil9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17IGNsYXNzZXMuYWN0aW9uVGV4dCB9PnsgeC5uYW1lIH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9HcmlkPlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxHcmlkPmhlcmU8L0dyaWQ+XG4gICAgICAgICAgICAgIHsvKiA8R3JpZCBjbGFzc05hbWU9eyBjbGFzc2VzLm1haW5HcmlkIH0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgZ3V0dGVyQm90dG9tPlRoZSBCYXJ0ZW5kZXI8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+WW91ciBjb21wbGV0ZSBndWlkZSB0byBtZW7igJlzIGFwcGFyZWwgYW5kIGFjY2Vzc29yaWVzLiBCcm93c2Ugc3R5bGUgdGlwcywgc2l6ZSBndWlkZXMsIGFuZCBzdGVwcyB0byBtYXN0ZXIgdHlpbmcgYSBuZWNrdGllLCB0eWluZyBhIGJvdyB0aWUsIGZvbGRpbmcgYSBwb2NrZXQgc3F1YXJlLCBhbmQgbW9yZS48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2F0ZWdvcmllcygpfSAqL31cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgICAgZGF0YTogW11cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})