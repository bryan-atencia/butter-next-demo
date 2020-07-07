webpackHotUpdate("static/development/pages/category/[id].js",{

/***/ "./functions/index.js":
/*!****************************!*\
  !*** ./functions/index.js ***!
  \****************************/
/*! exports provided: getCategories, getSubcategories, getCategory, getSubcategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategories\", function() { return getCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSubcategories\", function() { return getSubcategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategory\", function() { return getCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSubcategory\", function() { return getSubcategory; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar butter = __webpack_require__(/*! buttercms */ \"./node_modules/buttercms/lib/butter.js\")(\"8d6d186981c0902966f48b2f7db8a6aaa5205822\");\n\nfunction getCategories() {\n  return _getCategories.apply(this, arguments);\n}\n\nfunction _getCategories() {\n  _getCategories = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var fetchCategories, categoriesData, returnedData;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return butter.content.retrieve(['categories']);\n\n          case 2:\n            fetchCategories = _context.sent;\n            _context.next = 5;\n            return fetchCategories;\n\n          case 5:\n            categoriesData = _context.sent;\n            returnedData = categoriesData.data.data.categories;\n            return _context.abrupt(\"return\", returnedData);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getCategories.apply(this, arguments);\n}\n\nfunction getSubcategories() {\n  return _getSubcategories.apply(this, arguments);\n}\n\nfunction _getSubcategories() {\n  _getSubcategories = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var fetchSubcategories, subcategoriesData, returnedData;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return butter.content.retrieve(['subcategories']);\n\n          case 2:\n            fetchSubcategories = _context2.sent;\n            _context2.next = 5;\n            return fetchSubcategories;\n\n          case 5:\n            subcategoriesData = _context2.sent;\n            returnedData = subcategoriesData.data.data.subcategories;\n            return _context2.abrupt(\"return\", returnedData);\n\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getSubcategories.apply(this, arguments);\n}\n\nfunction getCategory(_x) {\n  return _getCategory.apply(this, arguments);\n}\n\nfunction _getCategory() {\n  _getCategory = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {\n    var fetchCategory, categoryData, returnedData;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return butter.content.retrieve(['categories'], {\n              \"fields.id\": id\n            });\n\n          case 2:\n            fetchCategory = _context3.sent;\n            _context3.next = 5;\n            return fetchCategory;\n\n          case 5:\n            categoryData = _context3.sent;\n            returnedData = categoryData.data.data.categories[0];\n            return _context3.abrupt(\"return\", returnedData);\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getCategory.apply(this, arguments);\n}\n\nfunction getSubcategory(_x2) {\n  return _getSubcategory.apply(this, arguments);\n}\n\nfunction _getSubcategory() {\n  _getSubcategory = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {\n    var fetchSubcategory, subcategoryData, returnedData;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return butter.content.retrieve(['subcategories'], {\n              \"fields.id\": id\n            });\n\n          case 2:\n            fetchSubcategory = _context4.sent;\n            _context4.next = 5;\n            return fetchSubcategory;\n\n          case 5:\n            subcategoryData = _context4.sent;\n            returnedData = subcategoryData.data.data.categories;\n            console.log(subcategoryData, 'the data');\n            return _context4.abrupt(\"return\", returnedData);\n\n          case 9:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _getSubcategory.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mdW5jdGlvbnMvaW5kZXguanM/ZjkzOCJdLCJuYW1lcyI6WyJidXR0ZXIiLCJyZXF1aXJlIiwiZ2V0Q2F0ZWdvcmllcyIsImNvbnRlbnQiLCJyZXRyaWV2ZSIsImZldGNoQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXNEYXRhIiwicmV0dXJuZWREYXRhIiwiZGF0YSIsImNhdGVnb3JpZXMiLCJnZXRTdWJjYXRlZ29yaWVzIiwiZmV0Y2hTdWJjYXRlZ29yaWVzIiwic3ViY2F0ZWdvcmllc0RhdGEiLCJzdWJjYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcnkiLCJpZCIsImZldGNoQ2F0ZWdvcnkiLCJjYXRlZ29yeURhdGEiLCJnZXRTdWJjYXRlZ29yeSIsImZldGNoU3ViY2F0ZWdvcnkiLCJzdWJjYXRlZ29yeURhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMseURBQUQsQ0FBUCxDQUFxQiwwQ0FBckIsQ0FBYjs7QUFFTyxTQUFlQyxhQUF0QjtBQUFBO0FBQUE7OzsyRUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN1QkYsTUFBTSxDQUFDRyxPQUFQLENBQWVDLFFBQWYsQ0FBd0IsQ0FBQyxZQUFELENBQXhCLENBRHZCOztBQUFBO0FBQ0RDLDJCQURDO0FBQUE7QUFBQSxtQkFFc0JBLGVBRnRCOztBQUFBO0FBRURDLDBCQUZDO0FBR0RDLHdCQUhDLEdBR2NELGNBQWMsQ0FBQ0UsSUFBZixDQUFvQkEsSUFBcEIsQ0FBeUJDLFVBSHZDO0FBQUEsNkNBS0VGLFlBTEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVFBLFNBQWVHLGdCQUF0QjtBQUFBO0FBQUE7Ozs4RUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMwQlYsTUFBTSxDQUFDRyxPQUFQLENBQWVDLFFBQWYsQ0FBd0IsQ0FBQyxlQUFELENBQXhCLENBRDFCOztBQUFBO0FBQ0RPLDhCQURDO0FBQUE7QUFBQSxtQkFFeUJBLGtCQUZ6Qjs7QUFBQTtBQUVEQyw2QkFGQztBQUdETCx3QkFIQyxHQUdjSyxpQkFBaUIsQ0FBQ0osSUFBbEIsQ0FBdUJBLElBQXZCLENBQTRCSyxhQUgxQztBQUFBLDhDQUtFTixZQUxGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFRQSxTQUFlTyxXQUF0QjtBQUFBO0FBQUE7Ozt5RUFBTyxrQkFBMkJDLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3FCZixNQUFNLENBQUNHLE9BQVAsQ0FBZUMsUUFBZixDQUF3QixDQUFDLFlBQUQsQ0FBeEIsRUFBd0M7QUFBRSwyQkFBYVc7QUFBZixhQUF4QyxDQURyQjs7QUFBQTtBQUNEQyx5QkFEQztBQUFBO0FBQUEsbUJBRW9CQSxhQUZwQjs7QUFBQTtBQUVEQyx3QkFGQztBQUdEVix3QkFIQyxHQUdjVSxZQUFZLENBQUNULElBQWIsQ0FBa0JBLElBQWxCLENBQXVCQyxVQUF2QixDQUFrQyxDQUFsQyxDQUhkO0FBQUEsOENBS0VGLFlBTEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVFBLFNBQWVXLGNBQXRCO0FBQUE7QUFBQTs7OzRFQUFPLGtCQUE4QkgsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDd0JmLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxRQUFmLENBQXdCLENBQUMsZUFBRCxDQUF4QixFQUEyQztBQUFFLDJCQUFhVztBQUFmLGFBQTNDLENBRHhCOztBQUFBO0FBQ0RJLDRCQURDO0FBQUE7QUFBQSxtQkFFdUJBLGdCQUZ2Qjs7QUFBQTtBQUVEQywyQkFGQztBQUdEYix3QkFIQyxHQUdjYSxlQUFlLENBQUNaLElBQWhCLENBQXFCQSxJQUFyQixDQUEwQkMsVUFIeEM7QUFJTFksbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixlQUFaLEVBQTZCLFVBQTdCO0FBSkssOENBS0ViLFlBTEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL2Z1bmN0aW9ucy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBidXR0ZXIgPSByZXF1aXJlKCdidXR0ZXJjbXMnKShcIjhkNmQxODY5ODFjMDkwMjk2NmY0OGIyZjdkYjhhNmFhYTUyMDU4MjJcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICBsZXQgZmV0Y2hDYXRlZ29yaWVzID0gYXdhaXQgYnV0dGVyLmNvbnRlbnQucmV0cmlldmUoWydjYXRlZ29yaWVzJ10pXG4gIGxldCBjYXRlZ29yaWVzRGF0YSA9IGF3YWl0IGZldGNoQ2F0ZWdvcmllc1xuICBsZXQgcmV0dXJuZWREYXRhID0gY2F0ZWdvcmllc0RhdGEuZGF0YS5kYXRhLmNhdGVnb3JpZXNcblxuICByZXR1cm4gcmV0dXJuZWREYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdWJjYXRlZ29yaWVzKCkge1xuICBsZXQgZmV0Y2hTdWJjYXRlZ29yaWVzID0gYXdhaXQgYnV0dGVyLmNvbnRlbnQucmV0cmlldmUoWydzdWJjYXRlZ29yaWVzJ10pXG4gIGxldCBzdWJjYXRlZ29yaWVzRGF0YSA9IGF3YWl0IGZldGNoU3ViY2F0ZWdvcmllc1xuICBsZXQgcmV0dXJuZWREYXRhID0gc3ViY2F0ZWdvcmllc0RhdGEuZGF0YS5kYXRhLnN1YmNhdGVnb3JpZXNcblxuICByZXR1cm4gcmV0dXJuZWREYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yeShpZCkge1xuICBsZXQgZmV0Y2hDYXRlZ29yeSA9IGF3YWl0IGJ1dHRlci5jb250ZW50LnJldHJpZXZlKFsnY2F0ZWdvcmllcyddLCB7IFwiZmllbGRzLmlkXCI6IGlkIH0pXG4gIGxldCBjYXRlZ29yeURhdGEgPSBhd2FpdCBmZXRjaENhdGVnb3J5XG4gIGxldCByZXR1cm5lZERhdGEgPSBjYXRlZ29yeURhdGEuZGF0YS5kYXRhLmNhdGVnb3JpZXNbMF1cblxuICByZXR1cm4gcmV0dXJuZWREYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdWJjYXRlZ29yeShpZCkge1xuICBsZXQgZmV0Y2hTdWJjYXRlZ29yeSA9IGF3YWl0IGJ1dHRlci5jb250ZW50LnJldHJpZXZlKFsnc3ViY2F0ZWdvcmllcyddLCB7IFwiZmllbGRzLmlkXCI6IGlkIH0pXG4gIGxldCBzdWJjYXRlZ29yeURhdGEgPSBhd2FpdCBmZXRjaFN1YmNhdGVnb3J5XG4gIGxldCByZXR1cm5lZERhdGEgPSBzdWJjYXRlZ29yeURhdGEuZGF0YS5kYXRhLmNhdGVnb3JpZXNcbiAgY29uc29sZS5sb2coc3ViY2F0ZWdvcnlEYXRhLCAndGhlIGRhdGEnKVxuICByZXR1cm4gcmV0dXJuZWREYXRhXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./functions/index.js\n");

/***/ })

})