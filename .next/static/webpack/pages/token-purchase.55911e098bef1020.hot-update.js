"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token-purchase",{

/***/ "./components/AppLayout.jsx":
/*!**********************************!*\
  !*** ./components/AppLayout.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppLayout\": function() { return /* binding */ AppLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AppLayout = (param)=>{\n    let { children  } = param;\n    _s();\n    const { user , error , isLoading  } = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[300px_1fr] h-screen max-h-screen bg-slate-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col text-white overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"bg-green-500 tracking-wider w-full text-center text-white font-semibold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block\",\n                                href: \"/post/new\",\n                                children: \"New Post\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/token-purchase\",\n                                children: \"0 Tokens\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800 border-b border-b-cyan-600/60\",\n                        children: \"Post Listing\"\n                    }, void 0, false, {\n                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-cyan-800 flex items-center gap-3 border-t border-t-cyan-900/50 h-20 px-2\",\n                        children: [\n                            !!user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"min-w-[50px]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            className: \"rounded-full\",\n                                            src: user.picture,\n                                            alt: user.name,\n                                            height: 50,\n                                            width: 50\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold\",\n                                                children: user.email\n                                            }, void 0, false, {\n                                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                className: \"text-sm\",\n                                                href: \"/api/auth/logout\",\n                                                children: \"Log Out\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/api/auth/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white\",\n                children: [\n                    \" \",\n                    children,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AppLayout, \"z8NjDiK5azFgDeQIeOoWnL/sCfs=\", false, function() {\n    return [\n        _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_3__.useUser\n    ];\n});\n_c = AppLayout;\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBQ3dCO0FBRTlDLE1BQU1HLFlBQVksU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUNsQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUUsR0FBR0wsbUVBQU9BO0lBQzFDLHFCQUNJLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDs7MENBQ0csOERBQUNBOzBDQUFJOzs7Ozs7MENBQ0wsOERBQUNQLGtEQUFJQTtnQ0FDRFEsV0FBVTtnQ0FDVkMsTUFBSzswQ0FDUjs7Ozs7OzBDQUdELDhEQUFDVCxrREFBSUE7Z0NBQUNTLE1BQUs7MENBQWtCOzs7Ozs7Ozs7Ozs7a0NBRWpDLDhEQUFDRjt3QkFBSUMsV0FBVTtrQ0FBaUc7Ozs7OztrQ0FHaEgsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDVixDQUFDLENBQUNKLHFCQUNDOztrREFDSSw4REFBQ0c7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUNULG1EQUFLQTs0Q0FDRlMsV0FBVTs0Q0FDVkUsS0FBS04sS0FBS08sT0FBTzs0Q0FDakJDLEtBQUtSLEtBQUtTLElBQUk7NENBQ2RDLFFBQVE7NENBQ1JDLE9BQU87Ozs7Ozs7Ozs7O2tEQUdmLDhEQUFDUjt3Q0FBSUMsV0FBVTs7MERBQ1gsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUFhSixLQUFLWSxLQUFLOzs7Ozs7MERBQ3RDLDhEQUFDaEIsa0RBQUlBO2dEQUNEUSxXQUFVO2dEQUNWQyxNQUFLOzBEQUNSOzs7Ozs7Ozs7Ozs7OzZEQU1ULDhEQUFDVCxrREFBSUE7Z0NBQUNTLE1BQUs7MENBQWtCOzs7Ozt5Q0FDaEM7MENBQ0QsOERBQUNGOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ0E7Z0JBQUlDLFdBQVU7O29CQUFXO29CQUFFTDtvQkFBUzs7Ozs7Ozs7Ozs7OztBQUdqRCxFQUFFO0dBakRXRDs7UUFDMEJELCtEQUFPQTs7O0tBRGpDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FwcExheW91dC5qc3g/MTc3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAvY2xpZW50JztcblxuZXhwb3J0IGNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB7IHVzZXIsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVVzZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVszMDBweF8xZnJdIGgtc2NyZWVuIG1heC1oLXNjcmVlbiBiZy1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXdoaXRlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+bG9nbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRyYWNraW5nLXdpZGVyIHctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgdXBwZXJjYXNlIHB4LTQgcHktMiByb3VuZGVkLW1kIGhvdmVyOmJnLWdyZWVuLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Bvc3QvbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFBvc3RcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Rva2VuLXB1cmNoYXNlXCI+MCBUb2tlbnM8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3ctYXV0byBiZy1ncmFkaWVudC10by1iIGZyb20tc2xhdGUtODAwIHRvLWN5YW4tODAwIGJvcmRlci1iIGJvcmRlci1iLWN5YW4tNjAwLzYwXCI+XG4gICAgICAgICAgICAgICAgICAgIFBvc3QgTGlzdGluZ1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY3lhbi04MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgYm9yZGVyLXQgYm9yZGVyLXQtY3lhbi05MDAvNTAgaC0yMCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHshIXVzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctWzUwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5waWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3VzZXIuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYXBpL2F1dGgvbG9nb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIE91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXBpL2F1dGgvbG9naW5cIj5Mb2dpbjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPiB7Y2hpbGRyZW59IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VVc2VyIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwicGljdHVyZSIsImFsdCIsIm5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppLayout.jsx\n"));

/***/ })

});