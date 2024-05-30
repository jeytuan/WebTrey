"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vuln-scan",{

/***/ "./pages/vuln-scan.tsx":
/*!*****************************!*\
  !*** ./pages/vuln-scan.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"../../../../../node_modules/semantic-ui-react/dist/es/modules/Tab/Tab.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"../../../../../node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"../../../../../node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"../../../../../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst scanOptions = [\n    {\n        key: \"all\",\n        value: \"all\",\n        text: \"Run All Scans\"\n    },\n    {\n        key: \"burp\",\n        value: \"burp_scan.py\",\n        text: \"Burp Scan\"\n    },\n    {\n        key: \"nmap\",\n        value: \"nmap_scan.py\",\n        text: \"Nmap Scan\"\n    },\n    {\n        key: \"nikto\",\n        value: \"nikto_scan.py\",\n        text: \"Nikto Scan\"\n    },\n    {\n        key: \"sslscan\",\n        value: \"sslscan.py\",\n        text: \"SSLScan\"\n    },\n    {\n        key: \"slither\",\n        value: \"slither_scan.py\",\n        text: \"Slither Scan\"\n    },\n    {\n        key: \"echidna\",\n        value: \"echidna_scan.py\",\n        text: \"Echidna Scan\"\n    },\n    {\n        key: \"foundry\",\n        value: \"foundry_scan.py\",\n        text: \"Foundry Scan\"\n    },\n    {\n        key: \"hardhat\",\n        value: \"hardhat_scan.py\",\n        text: \"Hardhat Scan\"\n    }\n];\nconst targetOptions = [\n    {\n        key: \"enzyme\",\n        value: \"Enzyme\",\n        text: \"Enzyme\"\n    },\n    {\n        key: \"giza\",\n        value: \"Giza\",\n        text: \"Giza\"\n    },\n    {\n        key: \"lambda\",\n        value: \"Lambda\",\n        text: \"Lambda\"\n    },\n    {\n        key: \"linea\",\n        value: \"Linea\",\n        text: \"Linea\"\n    },\n    {\n        key: \"ssv_network\",\n        value: \"SSV Network\",\n        text: \"SSV Network\"\n    },\n    {\n        key: \"starknet\",\n        value: \"Starknet\",\n        text: \"Starknet\"\n    },\n    {\n        key: \"zksync\",\n        value: \"zkSync\",\n        text: \"zkSync\"\n    }\n];\nconst VulnScanPage = ()=>{\n    _s();\n    const [selectedScan, setSelectedScan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedTarget, setSelectedTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"terminal\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Load existing logs\n        const loadLogs = async ()=>{\n            const logFiles = [\n                \"zkSync/url_scans/vuln_scan_results_20240526_053917.log\",\n                \"zkSync/url_scans/vuln_scan_results_20240526_053925.log\"\n            ];\n            const fetchedLogs = await Promise.all(logFiles.map(async (file)=>{\n                const response = await fetch(\"/logs/\".concat(file));\n                const content = await response.text();\n                return {\n                    fileName: file,\n                    content\n                };\n            }));\n            setLogs(fetchedLogs);\n        };\n        loadLogs();\n    }, []);\n    const handleScan = async ()=>{\n        if (!selectedScan || !selectedTarget) {\n            alert(\"Please select a scan type and target.\");\n            return;\n        }\n        setLoading(true);\n        setResult(null);\n        try {\n            const response = await fetch(\"/api/vuln-scan?scan=\".concat(selectedScan, \"&target=\").concat(selectedTarget));\n            const data = await response.json();\n            if (response.ok) {\n                setResult(data.output);\n            } else {\n                setResult(\"Error: \".concat(data.error));\n            }\n        } catch (error) {\n            setResult(\"Error: \".concat(error.message));\n        } finally{\n            setLoading(false);\n        }\n    };\n    const panes = [\n        {\n            menuItem: \"Terminal\",\n            render: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Pane, {\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        active: true,\n                        inline: \"centered\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, undefined) : result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scan-result\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Scan Result\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                children: result\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n        },\n        ...logs.map((log, index)=>({\n                menuItem: \"Log \".concat(index + 1),\n                render: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Pane, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: log.fileName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                children: log.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined)\n            }))\n    ];\n    const handleTabChange = (e, data)=>{\n        const newIndex = data.activeIndex;\n        if (typeof newIndex === \"number\") {\n            setActiveTab(panes[newIndex].menuItem);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"vuln-scan-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Vulnerability Scan\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Select a scan type and target, then start the vulnerability scan.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    gap: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        placeholder: \"Select Scan Type\",\n                        fluid: true,\n                        selection: true,\n                        options: scanOptions,\n                        onChange: (e, param)=>{\n                            let { value } = param;\n                            return setSelectedScan(value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        placeholder: \"Select Scan Target\",\n                        fluid: true,\n                        selection: true,\n                        options: targetOptions,\n                        onChange: (e, param)=>{\n                            let { value } = param;\n                            return setSelectedTarget(value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: handleScan,\n                disabled: loading,\n                primary: true,\n                children: loading ? \"Scanning...\" : \"Start Scan\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Logs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                panes: panes,\n                onTabChange: handleTabChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justi\\\\Documents\\\\GitHub\\\\WebTrey\\\\webtrey-dashboard\\\\frontend\\\\pages\\\\vuln-scan.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VulnScanPage, \"AsTG5ATzER9UsOH9MQ29EC8Dzmc=\");\n_c = VulnScanPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VulnScanPage);\nvar _c;\n$RefreshReg$(_c, \"VulnScanPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O21DQUFLSyxnQkFBZ0JMOzs7Ozs7O2tDQUU5Qyw4REFBQ04seURBQVFBO3dCQUNQK0QsYUFBWTt3QkFDWkMsS0FBSzt3QkFDTEMsU0FBUzt3QkFDVEMsU0FBUzFEO3dCQUNUMkQsVUFBVSxDQUFDWjtnQ0FBRyxFQUFFakQsS0FBSyxFQUFFO21DQUFLTyxrQkFBa0JQOzs7Ozs7Ozs7Ozs7OzBCQUdsRCw4REFBQ0wseURBQU1BO2dCQUFDbUUsU0FBU25DO2dCQUFZb0MsVUFBVXJEO2dCQUFTc0QsT0FBTzswQkFDcER0RCxVQUFVLGdCQUFnQjs7Ozs7OzBCQUU3Qiw4REFBQ2lDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUM5Qyx5REFBR0E7Z0JBQUNzQyxPQUFPQTtnQkFBTzhCLGFBQWFqQjs7Ozs7Ozs7Ozs7O0FBR3RDO0dBcEhNN0M7S0FBQUE7QUFzSE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdnVsbi1zY2FuLnRzeD81ZmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9ncyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ3MnO1xyXG5pbXBvcnQgeyBEcm9wZG93biwgQnV0dG9uLCBMb2FkZXIsIFRhYiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNvbnN0IHNjYW5PcHRpb25zID0gW1xyXG4gIHsga2V5OiAnYWxsJywgdmFsdWU6ICdhbGwnLCB0ZXh0OiAnUnVuIEFsbCBTY2FucycgfSxcclxuICB7IGtleTogJ2J1cnAnLCB2YWx1ZTogJ2J1cnBfc2Nhbi5weScsIHRleHQ6ICdCdXJwIFNjYW4nIH0sXHJcbiAgeyBrZXk6ICdubWFwJywgdmFsdWU6ICdubWFwX3NjYW4ucHknLCB0ZXh0OiAnTm1hcCBTY2FuJyB9LFxyXG4gIHsga2V5OiAnbmlrdG8nLCB2YWx1ZTogJ25pa3RvX3NjYW4ucHknLCB0ZXh0OiAnTmlrdG8gU2NhbicgfSxcclxuICB7IGtleTogJ3NzbHNjYW4nLCB2YWx1ZTogJ3NzbHNjYW4ucHknLCB0ZXh0OiAnU1NMU2NhbicgfSxcclxuICB7IGtleTogJ3NsaXRoZXInLCB2YWx1ZTogJ3NsaXRoZXJfc2Nhbi5weScsIHRleHQ6ICdTbGl0aGVyIFNjYW4nIH0sXHJcbiAgeyBrZXk6ICdlY2hpZG5hJywgdmFsdWU6ICdlY2hpZG5hX3NjYW4ucHknLCB0ZXh0OiAnRWNoaWRuYSBTY2FuJyB9LFxyXG4gIHsga2V5OiAnZm91bmRyeScsIHZhbHVlOiAnZm91bmRyeV9zY2FuLnB5JywgdGV4dDogJ0ZvdW5kcnkgU2NhbicgfSxcclxuICB7IGtleTogJ2hhcmRoYXQnLCB2YWx1ZTogJ2hhcmRoYXRfc2Nhbi5weScsIHRleHQ6ICdIYXJkaGF0IFNjYW4nIH1cclxuXTtcclxuXHJcbmNvbnN0IHRhcmdldE9wdGlvbnMgPSBbXHJcbiAgeyBrZXk6ICdlbnp5bWUnLCB2YWx1ZTogJ0VuenltZScsIHRleHQ6ICdFbnp5bWUnIH0sXHJcbiAgeyBrZXk6ICdnaXphJywgdmFsdWU6ICdHaXphJywgdGV4dDogJ0dpemEnIH0sXHJcbiAgeyBrZXk6ICdsYW1iZGEnLCB2YWx1ZTogJ0xhbWJkYScsIHRleHQ6ICdMYW1iZGEnIH0sXHJcbiAgeyBrZXk6ICdsaW5lYScsIHZhbHVlOiAnTGluZWEnLCB0ZXh0OiAnTGluZWEnIH0sXHJcbiAgeyBrZXk6ICdzc3ZfbmV0d29yaycsIHZhbHVlOiAnU1NWIE5ldHdvcmsnLCB0ZXh0OiAnU1NWIE5ldHdvcmsnIH0sXHJcbiAgeyBrZXk6ICdzdGFya25ldCcsIHZhbHVlOiAnU3RhcmtuZXQnLCB0ZXh0OiAnU3RhcmtuZXQnIH0sXHJcbiAgeyBrZXk6ICd6a3N5bmMnLCB2YWx1ZTogJ3prU3luYycsIHRleHQ6ICd6a1N5bmMnIH1cclxuXTtcclxuXHJcbmNvbnN0IFZ1bG5TY2FuUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkU2Nhbiwgc2V0U2VsZWN0ZWRTY2FuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhcmdldCwgc2V0U2VsZWN0ZWRUYXJnZXRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9ncywgc2V0TG9nc10gPSB1c2VTdGF0ZTx7IGZpbGVOYW1lOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9W10+KFtdKTtcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4oJ3Rlcm1pbmFsJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBMb2FkIGV4aXN0aW5nIGxvZ3NcclxuICAgIGNvbnN0IGxvYWRMb2dzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBsb2dGaWxlcyA9IFtcclxuICAgICAgICAnemtTeW5jL3VybF9zY2Fucy92dWxuX3NjYW5fcmVzdWx0c18yMDI0MDUyNl8wNTM5MTcubG9nJyxcclxuICAgICAgICAnemtTeW5jL3VybF9zY2Fucy92dWxuX3NjYW5fcmVzdWx0c18yMDI0MDUyNl8wNTM5MjUubG9nJ1xyXG4gICAgICBdO1xyXG4gICAgICBjb25zdCBmZXRjaGVkTG9ncyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIGxvZ0ZpbGVzLm1hcChhc3luYyAoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2xvZ3MvJHtmaWxlfWApO1xyXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgIHJldHVybiB7IGZpbGVOYW1lOiBmaWxlLCBjb250ZW50IH07XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgc2V0TG9ncyhmZXRjaGVkTG9ncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRMb2dzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY2FuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFzZWxlY3RlZFNjYW4gfHwgIXNlbGVjdGVkVGFyZ2V0KSB7XHJcbiAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgc2NhbiB0eXBlIGFuZCB0YXJnZXQuJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0UmVzdWx0KG51bGwpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdnVsbi1zY2FuP3NjYW49JHtzZWxlY3RlZFNjYW59JnRhcmdldD0ke3NlbGVjdGVkVGFyZ2V0fWApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc2V0UmVzdWx0KGRhdGEub3V0cHV0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRSZXN1bHQoYEVycm9yOiAke2RhdGEuZXJyb3J9YCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldFJlc3VsdChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhbmVzID0gW1xyXG4gICAge1xyXG4gICAgICBtZW51SXRlbTogJ1Rlcm1pbmFsJyxcclxuICAgICAgcmVuZGVyOiAoKSA9PiAoXHJcbiAgICAgICAgPFRhYi5QYW5lPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxMb2FkZXIgYWN0aXZlIGlubGluZT1cImNlbnRlcmVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIHJlc3VsdCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY2FuLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlNjYW4gUmVzdWx0PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwcmU+e3Jlc3VsdH08L3ByZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgLi4ubG9ncy5tYXAoKGxvZywgaW5kZXgpID0+ICh7XHJcbiAgICAgIG1lbnVJdGVtOiBgTG9nICR7aW5kZXggKyAxfWAsXHJcbiAgICAgIHJlbmRlcjogKCkgPT4gKFxyXG4gICAgICAgIDxUYWIuUGFuZT5cclxuICAgICAgICAgIDxoMz57bG9nLmZpbGVOYW1lfTwvaDM+XHJcbiAgICAgICAgICA8cHJlPntsb2cuY29udGVudH08L3ByZT5cclxuICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICApXHJcbiAgICB9KSlcclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQsIGRhdGE6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SW5kZXggPSBkYXRhLmFjdGl2ZUluZGV4O1xyXG4gICAgaWYgKHR5cGVvZiBuZXdJbmRleCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgc2V0QWN0aXZlVGFiKHBhbmVzW25ld0luZGV4XS5tZW51SXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidnVsbi1zY2FuLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aDE+VnVsbmVyYWJpbGl0eSBTY2FuPC9oMT5cclxuICAgICAgPHA+U2VsZWN0IGEgc2NhbiB0eXBlIGFuZCB0YXJnZXQsIHRoZW4gc3RhcnQgdGhlIHZ1bG5lcmFiaWxpdHkgc2Nhbi48L3A+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNjYW4gVHlwZVwiXHJcbiAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICBvcHRpb25zPXtzY2FuT3B0aW9uc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgeyB2YWx1ZSB9KSA9PiBzZXRTZWxlY3RlZFNjYW4odmFsdWUgYXMgc3RyaW5nKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgU2NhbiBUYXJnZXRcIlxyXG4gICAgICAgICAgZmx1aWRcclxuICAgICAgICAgIHNlbGVjdGlvblxyXG4gICAgICAgICAgb3B0aW9ucz17dGFyZ2V0T3B0aW9uc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgeyB2YWx1ZSB9KSA9PiBzZXRTZWxlY3RlZFRhcmdldCh2YWx1ZSBhcyBzdHJpbmcpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjYW59IGRpc2FibGVkPXtsb2FkaW5nfSBwcmltYXJ5PlxyXG4gICAgICAgIHtsb2FkaW5nID8gJ1NjYW5uaW5nLi4uJyA6ICdTdGFydCBTY2FuJ31cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxoMj5Mb2dzPC9oMj5cclxuICAgICAgPFRhYiBwYW5lcz17cGFuZXN9IG9uVGFiQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVnVsblNjYW5QYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRyb3Bkb3duIiwiQnV0dG9uIiwiTG9hZGVyIiwiVGFiIiwic2Nhbk9wdGlvbnMiLCJrZXkiLCJ2YWx1ZSIsInRleHQiLCJ0YXJnZXRPcHRpb25zIiwiVnVsblNjYW5QYWdlIiwic2VsZWN0ZWRTY2FuIiwic2V0U2VsZWN0ZWRTY2FuIiwic2VsZWN0ZWRUYXJnZXQiLCJzZXRTZWxlY3RlZFRhcmdldCIsInJlc3VsdCIsInNldFJlc3VsdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9ncyIsInNldExvZ3MiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJsb2FkTG9ncyIsImxvZ0ZpbGVzIiwiZmV0Y2hlZExvZ3MiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZmlsZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb250ZW50IiwiZmlsZU5hbWUiLCJoYW5kbGVTY2FuIiwiYWxlcnQiLCJkYXRhIiwianNvbiIsIm9rIiwib3V0cHV0IiwiZXJyb3IiLCJtZXNzYWdlIiwicGFuZXMiLCJtZW51SXRlbSIsInJlbmRlciIsIlBhbmUiLCJhY3RpdmUiLCJpbmxpbmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInByZSIsImxvZyIsImluZGV4IiwiaDMiLCJoYW5kbGVUYWJDaGFuZ2UiLCJlIiwibmV3SW5kZXgiLCJhY3RpdmVJbmRleCIsImgxIiwicCIsInN0eWxlIiwiZGlzcGxheSIsImdhcCIsInBsYWNlaG9sZGVyIiwiZmx1aWQiLCJzZWxlY3Rpb24iLCJvcHRpb25zIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwcmltYXJ5Iiwib25UYWJDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/vuln-scan.tsx\n"));

/***/ })

});