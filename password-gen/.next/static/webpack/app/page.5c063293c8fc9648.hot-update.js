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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Strength: function() { return /* binding */ Strength; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Strength.module.css */ \"(app-pages-browser)/./components/styles/Strength.module.css\");\n/* harmony import */ var _styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Strength = (strength)=>{\n    // Create an object to define Strength status\n    const strengthLevel = {\n        1: \"too weak\",\n        2: \"weak\",\n        3: \"medium\",\n        4: \"strong\"\n    };\n    // Create an object to define the various sets of colors based on strength\n    const spanBg = {\n        1: \"var(--red)\",\n        2: \"var(--amber)\",\n        3: \"var(--yellow)\",\n        4: \"var(--accent)\"\n    };\n    const spanStyle = strength > 0 ? {\n        backgroundColor: spanBg[strength],\n        border: \"none\"\n    } : {};\n    const strengthMessage = strengthLevel[strength];\n    const spanElements = Array.from({\n        length: 4\n    }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: index < strength ? spanStyle : {}\n        }, index, false, {\n            fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n            lineNumber: 30,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            \"Strength\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().status),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().statusmessage),\n                        children: strengthMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().statusboxes),\n                        children: spanElements\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Strength;\nvar _c;\n$RefreshReg$(_c, \"Strength\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3RyZW5ndGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBRTNDLE1BQU1DLFdBQVcsQ0FBQ0M7SUFDdkIsNkNBQTZDO0lBQzdDLE1BQU1DLGdCQUF3QztRQUM1QyxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0lBQ0w7SUFFQSwwRUFBMEU7SUFDMUUsTUFBTUMsU0FBaUM7UUFDckMsR0FBSTtRQUNKLEdBQUk7UUFDSixHQUFJO1FBQ0osR0FBSTtJQUNOO0lBRUEsTUFBTUMsWUFDSkgsV0FBVyxJQUNQO1FBQ0VJLGlCQUFpQkYsTUFBTSxDQUFDRixTQUFTO1FBQ2pDSyxRQUFTO0lBQ1gsSUFDQSxDQUFDO0lBRVAsTUFBTUMsa0JBQWtCTCxhQUFhLENBQUNELFNBQVM7SUFDL0MsTUFBTU8sZUFBZUMsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVE7SUFBRSxHQUFHLENBQUNDLEdBQUdDLHNCQUNqRCw4REFBQ0M7WUFBaUJDLE9BQU9GLFFBQVFaLFdBQVdHLFlBQVksQ0FBQztXQUE5Q1M7Ozs7O0lBR2IscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdsQiw4RUFBZ0I7O1lBQUU7MEJBRWhDLDhEQUFDaUI7Z0JBQUlDLFdBQVdsQiwyRUFBYTs7a0NBQzNCLDhEQUFDZTt3QkFBS0csV0FBV2xCLGtGQUFvQjtrQ0FBR1E7Ozs7OztrQ0FDeEMsOERBQUNTO3dCQUFJQyxXQUFXbEIsZ0ZBQWtCO2tDQUFHUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDLEVBQUU7S0F2Q1dSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RyZW5ndGgudHN4Pzc2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvU3RyZW5ndGgubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0cmVuZ3RoID0gKHN0cmVuZ3RoOiBudW1iZXIpICA9PiB7XHJcbiAgLy8gQ3JlYXRlIGFuIG9iamVjdCB0byBkZWZpbmUgU3RyZW5ndGggc3RhdHVzXHJcbiAgY29uc3Qgc3RyZW5ndGhMZXZlbDogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcclxuICAgIDE6IFwidG9vIHdlYWtcIixcclxuICAgIDI6IFwid2Vha1wiLFxyXG4gICAgMzogXCJtZWRpdW1cIixcclxuICAgIDQ6IFwic3Ryb25nXCIsXHJcbiAgfTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuIG9iamVjdCB0byBkZWZpbmUgdGhlIHZhcmlvdXMgc2V0cyBvZiBjb2xvcnMgYmFzZWQgb24gc3RyZW5ndGhcclxuICBjb25zdCBzcGFuQmc6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XHJcbiAgICAxOiBgdmFyKC0tcmVkKWAsXHJcbiAgICAyOiBgdmFyKC0tYW1iZXIpYCxcclxuICAgIDM6IGB2YXIoLS15ZWxsb3cpYCxcclxuICAgIDQ6IGB2YXIoLS1hY2NlbnQpYCxcclxuICB9O1xyXG5cclxuICBjb25zdCBzcGFuU3R5bGUgPVxyXG4gICAgc3RyZW5ndGggPiAwXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzcGFuQmdbc3RyZW5ndGhdLFxyXG4gICAgICAgICAgYm9yZGVyOiBgbm9uZWAsXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHt9O1xyXG5cclxuICBjb25zdCBzdHJlbmd0aE1lc3NhZ2UgPSBzdHJlbmd0aExldmVsW3N0cmVuZ3RoXTtcclxuICBjb25zdCBzcGFuRWxlbWVudHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA0IH0sIChfLCBpbmRleCkgPT4gKFxyXG4gICAgPHNwYW4ga2V5PXtpbmRleH0gc3R5bGU9e2luZGV4IDwgc3RyZW5ndGggPyBzcGFuU3R5bGUgOiB7fX0+PC9zcGFuPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICBTdHJlbmd0aFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzbWVzc2FnZX0+e3N0cmVuZ3RoTWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNib3hlc30+e3NwYW5FbGVtZW50c308L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiU3RyZW5ndGgiLCJzdHJlbmd0aCIsInN0cmVuZ3RoTGV2ZWwiLCJzcGFuQmciLCJzcGFuU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJzdHJlbmd0aE1lc3NhZ2UiLCJzcGFuRWxlbWVudHMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJzcGFuIiwic3R5bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdGF0dXMiLCJzdGF0dXNtZXNzYWdlIiwic3RhdHVzYm94ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Strength.tsx\n"));

/***/ })

});