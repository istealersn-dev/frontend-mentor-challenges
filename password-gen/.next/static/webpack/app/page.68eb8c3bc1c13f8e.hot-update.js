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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Strength: function() { return /* binding */ Strength; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Strength.module.css */ \"(app-pages-browser)/./components/styles/Strength.module.css\");\n/* harmony import */ var _styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Strength = (param)=>{\n    let { strength } = param;\n    // Create an object to define Strength status\n    const strengthLevel = {\n        1: \"too weak\",\n        2: \"weak\",\n        3: \"medium\",\n        4: \"strong\"\n    };\n    const spanStyle = {\n        backgroundColor: \"var(--red)\",\n        border: \"none\"\n    };\n    const strengthMessage = strengthLevel[strength];\n    const spanElements = Array.from({\n        length: 4\n    }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, index, false, {\n            fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n            lineNumber: 23,\n            columnNumber: 66\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            \"Strength\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().status),\n                children: [\n                    \" \",\n                    strength,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().statusmessage),\n                        children: strengthMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().statusboxes),\n                        children: spanElements\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Strength;\nvar _c;\n$RefreshReg$(_c, \"Strength\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3RyZW5ndGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlEO0FBTTFDLE1BQU1DLFdBQVc7UUFBQyxFQUFDQyxRQUFRLEVBQWdCO0lBRTVDLDZDQUE2QztJQUMvQyxNQUFNQyxnQkFBd0M7UUFDMUMsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNQO0lBRUEsTUFBTUMsWUFBWTtRQUNkQyxpQkFBa0I7UUFDbEJDLFFBQVM7SUFDYjtJQUVBLE1BQU1DLGtCQUFrQkosYUFBYSxDQUFDRCxTQUFTO0lBQy9DLE1BQU1NLGVBQWVDLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUMsR0FBRyxDQUFDQyxHQUFHQyxzQkFBVyw4REFBQ0MsWUFBVUQ7Ozs7O0lBRXhFLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFXaEIsOEVBQWdCOztZQUFFOzBCQUU5Qiw4REFBQ2U7Z0JBQUlDLFdBQVdoQiwyRUFBYTs7b0JBQUU7b0JBQUVFO2tDQUM3Qiw4REFBQ1k7d0JBQUtFLFdBQVdoQixrRkFBb0I7a0NBQUdPOzs7Ozs7a0NBQ3hDLDhEQUFDUTt3QkFBSUMsV0FBV2hCLGdGQUFrQjtrQ0FDN0JROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckIsRUFBQztLQTdCWVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdHJlbmd0aC50c3g/NzZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL1N0cmVuZ3RoLm1vZHVsZS5jc3MnXHJcblxyXG5pbnRlcmZhY2UgU3RyZW5ndGhQcm9wcyB7XHJcbiAgICBzdHJlbmd0aDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdHJlbmd0aCA9ICh7c3RyZW5ndGh9OiBTdHJlbmd0aFByb3BzKSA9PiB7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IHRvIGRlZmluZSBTdHJlbmd0aCBzdGF0dXNcclxuICAgIGNvbnN0IHN0cmVuZ3RoTGV2ZWw6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XHJcbiAgICAgICAgMTogXCJ0b28gd2Vha1wiLFxyXG4gICAgICAgIDI6IFwid2Vha1wiLFxyXG4gICAgICAgIDM6IFwibWVkaXVtXCIsXHJcbiAgICAgICAgNDogXCJzdHJvbmdcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNwYW5TdHlsZSA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGB2YXIoLS1yZWQpYCxcclxuICAgICAgICBib3JkZXI6IGBub25lYFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0cmVuZ3RoTWVzc2FnZSA9IHN0cmVuZ3RoTGV2ZWxbc3RyZW5ndGhdXHJcbiAgICBjb25zdCBzcGFuRWxlbWVudHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA0fSwgKF8sIGluZGV4KSA9PiAoPHNwYW4ga2V5PXtpbmRleH0+PC9zcGFuPikpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIFN0cmVuZ3RoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT4ge3N0cmVuZ3RofVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzbWVzc2FnZX0+e3N0cmVuZ3RoTWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c2JveGVzfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3BhbkVsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIlN0cmVuZ3RoIiwic3RyZW5ndGgiLCJzdHJlbmd0aExldmVsIiwic3BhblN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwic3RyZW5ndGhNZXNzYWdlIiwic3BhbkVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4Iiwic3BhbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInN0YXR1cyIsInN0YXR1c21lc3NhZ2UiLCJzdGF0dXNib3hlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Strength.tsx\n"));

/***/ })

});