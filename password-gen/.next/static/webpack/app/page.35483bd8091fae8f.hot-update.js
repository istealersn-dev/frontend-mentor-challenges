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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Strength: function() { return /* binding */ Strength; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Strength.module.css */ \"(app-pages-browser)/./components/styles/Strength.module.css\");\n/* harmony import */ var _styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Strength = (param)=>{\n    let { strength } = param;\n    // Create an object to define Strength status\n    const strengthLevel = {\n        1: \"too weak\",\n        2: \"weak\",\n        3: \"medium\",\n        4: \"strong\"\n    };\n    // Create an object to define the various sets of colors based on strength\n    const spanBg = {\n        1: \"var(--red)\",\n        2: \"var(--amber)\",\n        3: \"var(--yellow)\",\n        4: \"var(--accent)\"\n    };\n    const spanStyle = strength > 0 ? {\n        backgroundColor: spanBg[strength],\n        border: \"none\"\n    } : {};\n    const strengthMessage = strengthLevel[strength];\n    const spanElements = Array.from({\n        length: 4\n    }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: index < strength ? spanStyle : {}\n        }, index, false, {\n            fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n            lineNumber: 30,\n            columnNumber: 5\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            \"Strength\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().status),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().statusmessage),\n                        children: strengthMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Strength_module_css__WEBPACK_IMPORTED_MODULE_1___default().statusboxes),\n                        children: spanElements\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Frontend Mentor\\\\frontend-mentor-challenges\\\\password-gen\\\\components\\\\Strength.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Strength;\nvar _c;\n$RefreshReg$(_c, \"Strength\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3RyZW5ndGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBRTNDLE1BQU1DLFdBQVc7UUFBQyxFQUFDQyxRQUFRLEVBQVE7SUFDeEMsNkNBQTZDO0lBQzdDLE1BQU1DLGdCQUF3QztRQUM1QyxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0lBQ0w7SUFFQSwwRUFBMEU7SUFDMUUsTUFBTUMsU0FBaUM7UUFDckMsR0FBSTtRQUNKLEdBQUk7UUFDSixHQUFJO1FBQ0osR0FBSTtJQUNOO0lBRUEsTUFBTUMsWUFDSkgsV0FBVyxJQUNQO1FBQ0VJLGlCQUFpQkYsTUFBTSxDQUFDRixTQUFTO1FBQ2pDSyxRQUFTO0lBQ1gsSUFDQSxDQUFDO0lBRVAsTUFBTUMsa0JBQWtCTCxhQUFhLENBQUNELFNBQVM7SUFDL0MsTUFBTU8sZUFBZUMsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVE7SUFBRSxHQUFHLENBQUNDLEdBQUdDLHNCQUNqRCw4REFBQ0M7WUFBaUJDLE9BQU9GLFFBQVFaLFdBQVdHLFlBQVksQ0FBQztXQUE5Q1M7Ozs7O0lBR2IscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdsQiw4RUFBZ0I7O1lBQUU7MEJBRWhDLDhEQUFDaUI7Z0JBQUlDLFdBQVdsQiwyRUFBYTs7a0NBQzNCLDhEQUFDZTt3QkFBS0csV0FBV2xCLGtGQUFvQjtrQ0FBR1E7Ozs7OztrQ0FDeEMsOERBQUNTO3dCQUFJQyxXQUFXbEIsZ0ZBQWtCO2tDQUFHUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDLEVBQUU7S0F2Q1dSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RyZW5ndGgudHN4Pzc2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvU3RyZW5ndGgubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0cmVuZ3RoID0gKHtzdHJlbmd0aH06bnVtYmVyKSAgPT4ge1xyXG4gIC8vIENyZWF0ZSBhbiBvYmplY3QgdG8gZGVmaW5lIFN0cmVuZ3RoIHN0YXR1c1xyXG4gIGNvbnN0IHN0cmVuZ3RoTGV2ZWw6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XHJcbiAgICAxOiBcInRvbyB3ZWFrXCIsXHJcbiAgICAyOiBcIndlYWtcIixcclxuICAgIDM6IFwibWVkaXVtXCIsXHJcbiAgICA0OiBcInN0cm9uZ1wiLFxyXG4gIH07XHJcblxyXG4gIC8vIENyZWF0ZSBhbiBvYmplY3QgdG8gZGVmaW5lIHRoZSB2YXJpb3VzIHNldHMgb2YgY29sb3JzIGJhc2VkIG9uIHN0cmVuZ3RoXHJcbiAgY29uc3Qgc3BhbkJnOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xyXG4gICAgMTogYHZhcigtLXJlZClgLFxyXG4gICAgMjogYHZhcigtLWFtYmVyKWAsXHJcbiAgICAzOiBgdmFyKC0teWVsbG93KWAsXHJcbiAgICA0OiBgdmFyKC0tYWNjZW50KWAsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3BhblN0eWxlID1cclxuICAgIHN0cmVuZ3RoID4gMFxyXG4gICAgICA/IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3BhbkJnW3N0cmVuZ3RoXSxcclxuICAgICAgICAgIGJvcmRlcjogYG5vbmVgLFxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fTtcclxuXHJcbiAgY29uc3Qgc3RyZW5ndGhNZXNzYWdlID0gc3RyZW5ndGhMZXZlbFtzdHJlbmd0aF07XHJcbiAgY29uc3Qgc3BhbkVsZW1lbnRzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNCB9LCAoXywgaW5kZXgpID0+IChcclxuICAgIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlPXtpbmRleCA8IHN0cmVuZ3RoID8gc3BhblN0eWxlIDoge319Pjwvc3Bhbj5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgU3RyZW5ndGhcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c21lc3NhZ2V9PntzdHJlbmd0aE1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzYm94ZXN9PntzcGFuRWxlbWVudHN9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlN0cmVuZ3RoIiwic3RyZW5ndGgiLCJzdHJlbmd0aExldmVsIiwic3BhbkJnIiwic3BhblN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwic3RyZW5ndGhNZXNzYWdlIiwic3BhbkVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4Iiwic3BhbiIsInN0eWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic3RhdHVzIiwic3RhdHVzbWVzc2FnZSIsInN0YXR1c2JveGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Strength.tsx\n"));

/***/ })

});