"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Strength.tsx":
/*!*********************************!*\
  !*** ./components/Strength.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Strength: function() { return /* binding */ Strength; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Strength.module.css */ \"(app-pages-browser)/./components/styles/Strength.module.css\");\n/* harmony import */ var _styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Strength = (param)=>{\n    let { strength } = param;\n    // Create an object to define Strength status\n    const strengthLevel = {\n        1: \"too weak\",\n        2: \"weak\",\n        3: \"medium\",\n        4: \"strong\"\n    };\n    const strengthMessage = strengthLevel[strength];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            \"Strength\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().status),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().statusmessage),\n                        children: strength && strengthMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().statusboxes),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"1\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"2\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"4\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Strength;\nvar _c;\n$RefreshReg$(_c, \"Strength\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3RyZW5ndGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlEO0FBTTFDLE1BQU1DLFdBQVc7UUFBQyxFQUFDQyxRQUFRLEVBQWdCO0lBRTVDLDZDQUE2QztJQUMvQyxNQUFNQyxnQkFBd0M7UUFDMUMsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNQO0lBRUEsTUFBTUMsa0JBQWtCRCxhQUFhLENBQUNELFNBQVM7SUFFL0MscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVdOLDhFQUFnQjs7WUFBRTswQkFFOUIsOERBQUNLO2dCQUFJQyxXQUFXTiwyRUFBYTs7a0NBQ3pCLDhEQUFDUzt3QkFBS0gsV0FBV04sa0ZBQW9CO2tDQUFHRSxZQUFZRTs7Ozs7O2tDQUNwRCw4REFBQ0M7d0JBQUlDLFdBQVdOLGdGQUFrQjs7MENBQzlCLDhEQUFDUztnQ0FBS0csSUFBRzs7Ozs7OzBDQUNULDhEQUFDSDtnQ0FBS0csSUFBRzs7Ozs7OzBDQUNULDhEQUFDSDtnQ0FBS0csSUFBRzs7Ozs7OzBDQUNULDhEQUFDSDtnQ0FBS0csSUFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCLEVBQUM7S0ExQllYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RyZW5ndGgudHN4Pzc2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9TdHJlbmd0aC5tb2R1bGUuY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFN0cmVuZ3RoUHJvcHMge1xyXG4gICAgc3RyZW5ndGg6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RyZW5ndGggPSAoe3N0cmVuZ3RofTogU3RyZW5ndGhQcm9wcykgPT4ge1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB0byBkZWZpbmUgU3RyZW5ndGggc3RhdHVzXHJcbiAgICBjb25zdCBzdHJlbmd0aExldmVsOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xyXG4gICAgICAgIDE6IFwidG9vIHdlYWtcIixcclxuICAgICAgICAyOiBcIndlYWtcIixcclxuICAgICAgICAzOiBcIm1lZGl1bVwiLFxyXG4gICAgICAgIDQ6IFwic3Ryb25nXCJcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdHJlbmd0aE1lc3NhZ2UgPSBzdHJlbmd0aExldmVsW3N0cmVuZ3RoXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICBTdHJlbmd0aFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNtZXNzYWdlfT57c3RyZW5ndGggJiYgc3RyZW5ndGhNZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzYm94ZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiMVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIjJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCIzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiNFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJTdHJlbmd0aCIsInN0cmVuZ3RoIiwic3RyZW5ndGhMZXZlbCIsInN0cmVuZ3RoTWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInN0YXR1cyIsInNwYW4iLCJzdGF0dXNtZXNzYWdlIiwic3RhdHVzYm94ZXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Strength.tsx\n"));

/***/ })

});