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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppLayout\": function() { return /* binding */ AppLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AppLayout = (param)=>{\n    let { children  } = param;\n    _s();\n    const { user , error , isLoading  } = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[300px_1fr] h-screen max-h-screen bg-slate-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col text-white overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"mb-2 bg-green-500 tracking-wider w-full text-sm text-center text-white font-semibold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block\",\n                                href: \"/post/new\",\n                                children: \"Add Post\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"block text-center\",\n                                href: \"/token-purchase\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCoins,\n                                        className: \"text-yellow-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"pl-1\",\n                                        children: \" 0 Tokens \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800 border-b border-b-cyan-600/60\",\n                        children: \"Post Listing\"\n                    }, void 0, false, {\n                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-cyan-800 flex items-center gap-3 border-t border-t-cyan-900/50 h-20 px-2\",\n                        children: [\n                            !!user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"min-w-[50px]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            className: \"rounded-full\",\n                                            src: user.picture,\n                                            alt: user.name,\n                                            height: 50,\n                                            width: 50\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold\",\n                                                children: user.email\n                                            }, void 0, false, {\n                                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                className: \"text-sm\",\n                                                href: \"/api/auth/logout\",\n                                                children: \"Log Out\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/api/auth/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white\",\n                children: [\n                    \" \",\n                    children,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johnhowell/Desktop/openAI-blog/post-genius/components/AppLayout.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AppLayout, \"z8NjDiK5azFgDeQIeOoWnL/sCfs=\", false, function() {\n    return [\n        _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_3__.useUser\n    ];\n});\n_c = AppLayout;\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0Y7QUFDd0I7QUFDWTtBQUNMO0FBRXJELE1BQU1LLFlBQVksU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUNsQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUUsR0FBR1AsbUVBQU9BO0lBQzFDLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEOzBDQUFJOzs7Ozs7MENBQ0wsOERBQUNULGtEQUFJQTtnQ0FDRFUsV0FBVTtnQ0FDVkMsTUFBSzswQ0FDUjs7Ozs7OzBDQUdELDhEQUFDWCxrREFBSUE7Z0NBQUNVLFdBQVU7Z0NBQW9CQyxNQUFLOztrREFDckMsOERBQUNULDJFQUFlQTt3Q0FDWlUsTUFBTVQsc0VBQU9BO3dDQUNiTyxXQUFVOzs7Ozs7a0RBRWQsOERBQUNHO3dDQUFLSCxXQUFVO2tEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRy9CLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBaUc7Ozs7OztrQ0FHaEgsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDVixDQUFDLENBQUNKLHFCQUNDOztrREFDSSw4REFBQ0c7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUNYLG1EQUFLQTs0Q0FDRlcsV0FBVTs0Q0FDVkksS0FBS1IsS0FBS1MsT0FBTzs0Q0FDakJDLEtBQUtWLEtBQUtXLElBQUk7NENBQ2RDLFFBQVE7NENBQ1JDLE9BQU87Ozs7Ozs7Ozs7O2tEQUdmLDhEQUFDVjt3Q0FBSUMsV0FBVTs7MERBQ1gsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUFhSixLQUFLYyxLQUFLOzs7Ozs7MERBQ3RDLDhEQUFDcEIsa0RBQUlBO2dEQUNEVSxXQUFVO2dEQUNWQyxNQUFLOzBEQUNSOzs7Ozs7Ozs7Ozs7OzZEQU1ULDhEQUFDWCxrREFBSUE7Z0NBQUNXLE1BQUs7MENBQWtCOzs7Ozt5Q0FDaEM7MENBQ0QsOERBQUNGOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ0E7Z0JBQUlDLFdBQVU7O29CQUFXO29CQUFFTDtvQkFBUzs7Ozs7Ozs7Ozs7OztBQUdqRCxFQUFFO0dBdkRXRDs7UUFDMEJILCtEQUFPQTs7O0tBRGpDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FwcExheW91dC5qc3g/MTc3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAvY2xpZW50JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUNvaW5zIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuZXhwb3J0IGNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB7IHVzZXIsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVVzZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVszMDBweF8xZnJdIGgtc2NyZWVuIG1heC1oLXNjcmVlbiBiZy1zbGF0ZS04MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXdoaXRlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmxvZ288L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTIgYmctZ3JlZW4tNTAwIHRyYWNraW5nLXdpZGVyIHctZnVsbCB0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciB1cHBlcmNhc2UgcHgtNCBweS0yIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JlZW4tNjAwIHRyYW5zaXRpb24tY29sb3JzIGJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcG9zdC9uZXdcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgUG9zdFxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtY2VudGVyXCIgaHJlZj1cIi90b2tlbi1wdXJjaGFzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhQ29pbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0xXCI+IDAgVG9rZW5zIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LWF1dG8gYmctZ3JhZGllbnQtdG8tYiBmcm9tLXNsYXRlLTgwMCB0by1jeWFuLTgwMCBib3JkZXItYiBib3JkZXItYi1jeWFuLTYwMC82MFwiPlxuICAgICAgICAgICAgICAgICAgICBQb3N0IExpc3RpbmdcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWN5YW4tODAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGJvcmRlci10IGJvcmRlci10LWN5YW4tOTAwLzUwIGgtMjAgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICB7ISF1c2VyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LVs1MHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXIucGljdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPnt1c2VyLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2FwaS9hdXRoL2xvZ291dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FwaS9hdXRoL2xvZ2luXCI+TG9naW48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj4ge2NoaWxkcmVufSA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlVXNlciIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ29pbnMiLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJlcnJvciIsImlzTG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJpY29uIiwic3BhbiIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJuYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppLayout.jsx\n"));

/***/ })

});