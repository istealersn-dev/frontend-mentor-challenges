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

/***/ "(app-pages-browser)/./components/utils/Genpassword.tsx":
/*!******************************************!*\
  !*** ./components/utils/Genpassword.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePassword: function() { return /* binding */ generatePassword; }\n/* harmony export */ });\nconst generatePassword = (length, includeUppercase, includeLowercase, includeNumbers, includeSymbols)=>{\n    const uppercaseChars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n    const lowercaseChars = \"abcdefghijklmnopqrstuvwxyz\";\n    const numberChars = \"0123456789\";\n    const symbolChars = \"!@#$%^&*()_-+=<>?/\";\n    // Set the password characters based on inclusion\n    let passChars = \"\";\n    if (includeUppercase) passChars += uppercaseChars;\n    if (includeLowercase) passChars += lowercaseChars;\n    if (includeNumbers) passChars += numberChars;\n    if (includeSymbols) passChars += symbolChars;\n    if (passChars === \"\") {\n        console.error(\"Please select at least one character type.\");\n        alert(\"Please select at least one character type\");\n    }\n    const password = Array.from({\n        length\n    }, ()=>{\n        const randomIndex = Math.floor(Math.random() * passChars.length);\n        return passChars.charAt(randomIndex);\n    }).join(\"\");\n    return password;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdXRpbHMvR2VucGFzc3dvcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxtQkFBbUIsQ0FDNUJDLFFBQ0FDLGtCQUNBQyxrQkFDQUMsZ0JBQ0FDO0lBRUEsTUFBTUMsaUJBQWlCO0lBQ3ZCLE1BQU1DLGlCQUFpQjtJQUN2QixNQUFNQyxjQUFjO0lBQ3BCLE1BQU1DLGNBQWM7SUFFcEIsaURBQWlEO0lBQ2pELElBQUlDLFlBQVk7SUFDaEIsSUFBSVIsa0JBQWtCUSxhQUFhSjtJQUNuQyxJQUFJSCxrQkFBa0JPLGFBQWFIO0lBQ25DLElBQUlILGdCQUFnQk0sYUFBYUY7SUFDakMsSUFBSUgsZ0JBQWdCSyxhQUFhRDtJQUVqQyxJQUFJQyxjQUFjLElBQUk7UUFDbEJDLFFBQVFDLEtBQUssQ0FBQztRQUNkQyxNQUFNO0lBQ1Y7SUFFQSxNQUFNQyxXQUFXQyxNQUFNQyxJQUFJLENBQUM7UUFBQ2Y7SUFBTSxHQUFHO1FBQ2xDLE1BQU1nQixjQUFjQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS1YsVUFBVVQsTUFBTTtRQUMvRCxPQUFPUyxVQUFVVyxNQUFNLENBQUNKO0lBQzVCLEdBQUdLLElBQUksQ0FBQztJQUVSLE9BQU9SO0FBQ1gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3V0aWxzL0dlbnBhc3N3b3JkLnRzeD84YmIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZW5lcmF0ZVBhc3N3b3JkID0gKFxyXG4gICAgbGVuZ3RoOiBudW1iZXIsXHJcbiAgICBpbmNsdWRlVXBwZXJjYXNlOiBib29sZWFuLFxyXG4gICAgaW5jbHVkZUxvd2VyY2FzZTogYm9vbGVhbixcclxuICAgIGluY2x1ZGVOdW1iZXJzOiBib29sZWFuLFxyXG4gICAgaW5jbHVkZVN5bWJvbHM6IGJvb2xlYW4pID0+IFxyXG4gICAge1xyXG4gICAgY29uc3QgdXBwZXJjYXNlQ2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gICAgY29uc3QgbG93ZXJjYXNlQ2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xyXG4gICAgY29uc3QgbnVtYmVyQ2hhcnMgPSAnMDEyMzQ1Njc4OSc7XHJcbiAgICBjb25zdCBzeW1ib2xDaGFycyA9ICchQCMkJV4mKigpXy0rPTw+Py8nO1xyXG5cclxuICAgIC8vIFNldCB0aGUgcGFzc3dvcmQgY2hhcmFjdGVycyBiYXNlZCBvbiBpbmNsdXNpb25cclxuICAgIGxldCBwYXNzQ2hhcnMgPSAnJ1xyXG4gICAgaWYgKGluY2x1ZGVVcHBlcmNhc2UpIHBhc3NDaGFycyArPSB1cHBlcmNhc2VDaGFyc1xyXG4gICAgaWYgKGluY2x1ZGVMb3dlcmNhc2UpIHBhc3NDaGFycyArPSBsb3dlcmNhc2VDaGFyc1xyXG4gICAgaWYgKGluY2x1ZGVOdW1iZXJzKSBwYXNzQ2hhcnMgKz0gbnVtYmVyQ2hhcnNcclxuICAgIGlmIChpbmNsdWRlU3ltYm9scykgcGFzc0NoYXJzICs9IHN5bWJvbENoYXJzXHJcblxyXG4gICAgaWYgKHBhc3NDaGFycyA9PT0gJycpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgdHlwZS4nKVxyXG4gICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgdHlwZScpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBBcnJheS5mcm9tKHtsZW5ndGh9LCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwYXNzQ2hhcnMubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBwYXNzQ2hhcnMuY2hhckF0KHJhbmRvbUluZGV4KVxyXG4gICAgfSkuam9pbignJylcclxuXHJcbiAgICByZXR1cm4gcGFzc3dvcmRcclxufSJdLCJuYW1lcyI6WyJnZW5lcmF0ZVBhc3N3b3JkIiwibGVuZ3RoIiwiaW5jbHVkZVVwcGVyY2FzZSIsImluY2x1ZGVMb3dlcmNhc2UiLCJpbmNsdWRlTnVtYmVycyIsImluY2x1ZGVTeW1ib2xzIiwidXBwZXJjYXNlQ2hhcnMiLCJsb3dlcmNhc2VDaGFycyIsIm51bWJlckNoYXJzIiwic3ltYm9sQ2hhcnMiLCJwYXNzQ2hhcnMiLCJjb25zb2xlIiwiZXJyb3IiLCJhbGVydCIsInBhc3N3b3JkIiwiQXJyYXkiLCJmcm9tIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFyQXQiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/utils/Genpassword.tsx\n"));

/***/ })

});