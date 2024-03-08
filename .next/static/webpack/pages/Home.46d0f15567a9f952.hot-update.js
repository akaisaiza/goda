"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Home",{

/***/ "./components/chat.js":
/*!****************************!*\
  !*** ./components/chat.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Service_APIService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Service/APIService */ \"./components/Service/APIService.js\");\n/* harmony import */ var _LocationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LocationModal */ \"./components/LocationModal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"G:\\\\goda-web\\\\goda\\\\components\\\\chat.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ChatComponent = function ChatComponent() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      messages = _useState[0],\n      setMessages = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      newMessage = _useState2[0],\n      setNewMessage = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      jwt = _useState3[0],\n      setJwt = _useState3[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  var apiService = new _Service_APIService__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      openModal = _useState4[0],\n      setOpenModal = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      selectedLocation = _useState5[0],\n      setSelectedLocation = _useState5[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var el = document.getElementById('messages');\n    el.scrollTop = el.scrollHeight;\n  }, [messages]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var storedJwt = localStorage.getItem(\"jwtToken\");\n\n    if (!storedJwt || storedJwt === undefined) {\n      router.push('/Auth/login');\n    } else {\n      setJwt(storedJwt);\n    }\n  }, [router]);\n\n  var onCloseModal = function onCloseModal() {\n    return setOpenModal(false);\n  };\n\n  var handleLocationClick = function handleLocationClick(id) {\n    setOpenModal(true);\n    setSelectedLocation(id);\n  };\n\n  var sendMessage = /*#__PURE__*/function () {\n    var _ref = (0,G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e, message) {\n      var userMessage, response, _response$response, answer, places, parsedPlaces, locationDetails, botMessage;\n\n      return G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n\n              if (message.trim()) {\n                _context.next = 3;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 3:\n              setNewMessage('');\n              userMessage = {\n                id: new Date().getTime(),\n                text: message,\n                sender: 'user'\n              };\n              setMessages([].concat((0,G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(messages), [userMessage]));\n              _context.prev = 6;\n              _context.next = 9;\n              return apiService.postData('api/chat', {\n                content: message,\n                session_id: jwt !== null && jwt !== void 0 ? jwt : \"test\",\n                longitude: 0,\n                latitude: 0\n              }, jwt);\n\n            case 9:\n              response = _context.sent;\n              _response$response = response.response, answer = _response$response.answer, places = _response$response.places;\n              parsedPlaces = JSON.parse(places);\n              locationDetails = answer.split(/(?=\\d\\. \")/);\n              botMessage = {\n                id: new Date().getTime() + 1,\n                text: locationDetails,\n                sender: 'bot',\n                places: parsedPlaces\n              };\n              setMessages(function (prevMessages) {\n                return [].concat((0,G_goda_web_goda_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prevMessages), [botMessage]);\n              });\n              _context.next = 20;\n              break;\n\n            case 17:\n              _context.prev = 17;\n              _context.t0 = _context[\"catch\"](6);\n              console.error('Error sending message:', _context.t0);\n\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[6, 17]]);\n    }));\n\n    return function sendMessage(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var botAvatar = '/assets/goda_logo.png';\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    className: \"flex-1 p-4 sm:p-8 justify-between flex flex-col custom-height-sm bg-gray-100 rounded-lg shadow\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      id: \"messages\",\n      className: \"flex flex-col space-y-4 p-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch\",\n      children: messages.map(function (message) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"chat-message flex \".concat(message.sender === 'user' ? 'justify-end' : 'justify-start'),\n          children: [message.sender === 'bot' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"img\", {\n            src: botAvatar,\n            alt: \"Bot Avatar\",\n            className: \"w-8 h-8 rounded-full mr-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"flex flex-col space-y-2 text-xs max-w-xs mx-2 items-\".concat(message.sender === 'user' ? 'end' : 'start'),\n            children: message.sender === 'bot' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              children: message.text.map(function (text, index) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                    className: \"px-1 py-2 rounded-lg inline-block bg-gray-300 text-gray-600 rounded-bl-none\",\n                    children: text\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 45\n                  }, _this), message.places[index] && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                    className: \"place-card p-4 my-4 border rounded-lg shadow-md\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h3\", {\n                      className: \"text-xl font-semibold mb-2\",\n                      children: message.places[index].name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 97,\n                      columnNumber: 53\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                      className: \"\\\"text-gray-600\\\" \".concat(message.places[index].avg_rate ? \"\" : \"hidden\"),\n                      children: [\"\\u0110\\xE1nh gi\\xE1: \", message.places[index].avg_rate, \" \\u2B50\"]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 98,\n                      columnNumber: 53\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"img\", {\n                      src: message.places[index].image_link,\n                      alt: message.places[index].name,\n                      className: \"mt-2 rounded-lg\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 99,\n                      columnNumber: 53\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                      className: \"flex py-6\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n                        className: \"flex items-center tracking-wide py-2 px-3 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue\",\n                        onClick: function onClick() {\n                          return handleLocationClick(message.places[index].id);\n                        },\n                        children: \"Chi ti\\u1EBFt\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 101,\n                        columnNumber: 57\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 100,\n                      columnNumber: 53\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 96,\n                    columnNumber: 49\n                  }, _this)]\n                }, index, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 91,\n                  columnNumber: 41\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 33\n            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n              className: \"px-1 py-2 rounded-lg inline-block bg-blue-500 text-white rounded-br-none\",\n              children: message.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 33\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 25\n          }, _this), message.sender === 'user' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"img\", {\n            src: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',\n            alt: \"User Avatar\",\n            className: \"w-8 h-8 rounded-full mr-2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 29\n          }, _this)]\n        }, message.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"px-4 pt-4 mb-2 sm:mb-0 bg-white\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n        className: \"relative flex\",\n        onSubmit: function onSubmit(e) {\n          return sendMessage(e, newMessage);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n          type: \"text\",\n          value: newMessage,\n          onChange: function onChange(e) {\n            return setNewMessage(e.target.value);\n          },\n          placeholder: \"Write your message!\",\n          className: \"w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 bg-gray-200 rounded-md py-3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          className: \"absolute right-0 items-center inset-y-0 sm:flex px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none\",\n          children: \"G\\u1EEDi\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_LocationModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      openModal: openModal,\n      onCloseModal: onCloseModal,\n      selectedLocationid: selectedLocation\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ChatComponent, \"ouulvGMiCRuR5CzB5IUwgIFJTSY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = ChatComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQXNGLFdBQVcsRUFBQyxxQkFBbEc7VUFBd0gsU0FBUyxFQUFDO1FBQWxJO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FESixlQUVJO1VBQVEsSUFBSSxFQUFDLFFBQWI7VUFBc0IsU0FBUyxFQUFDLHVIQUFoQztVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUZKO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F4Q0osZUFnREksOERBQUMsc0RBQUQ7TUFDSSxTQUFTLEVBQUVuRCxTQURmO01BRUksWUFBWSxFQUFFYyxZQUZsQjtNQUdJLGtCQUFrQixFQUFFWjtJQUh4QjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBaERKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBd0RILENBaklEOztHQUFNWDtVQUlhSDs7O0tBSmJHO0FBbUlOLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdC5qcz82NjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBUElTZXJ2aWNlIGZyb20gJy4vU2VydmljZS9BUElTZXJ2aWNlJztcclxuaW1wb3J0IExvY2F0aW9uTW9kYWwgZnJvbSAnLi9Mb2NhdGlvbk1vZGFsJztcclxuXHJcbmNvbnN0IENoYXRDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtqd3QsIHNldEp3dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGFwaVNlcnZpY2UgPSBuZXcgQVBJU2VydmljZSgpO1xyXG4gICAgY29uc3QgW29wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZExvY2F0aW9uLCBzZXRTZWxlY3RlZExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZXMnKTtcclxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlZEp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0VG9rZW5cIik7XHJcbiAgICAgICAgaWYgKCFzdG9yZWRKd3QgfHwgc3RvcmVkSnd0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9BdXRoL2xvZ2luJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Snd0KHN0b3JlZEp3dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2VNb2RhbCA9ICgpID0+IHNldE9wZW5Nb2RhbChmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9jYXRpb25DbGljayA9IChpZCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW5Nb2RhbCh0cnVlKTtcclxuICAgICAgICBzZXRTZWxlY3RlZExvY2F0aW9uKGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZSwgbWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIW1lc3NhZ2UudHJpbSgpKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBzZXROZXdNZXNzYWdlKCcnKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHVzZXJNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHNlbmRlcjogJ3VzZXInLFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIHVzZXJNZXNzYWdlXSk7XHJcbiAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaVNlcnZpY2UucG9zdERhdGEoJ2FwaS9jaGF0Jywge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIHNlc3Npb25faWQ6IGp3dCA/PyBcInRlc3RcIixcclxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMCxcclxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAwLFxyXG4gICAgICAgICAgICB9LCBqd3QpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHsgYW5zd2VyLCBwbGFjZXMgfSA9IHJlc3BvbnNlLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRQbGFjZXMgPSBKU09OLnBhcnNlKHBsYWNlcyk7XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25EZXRhaWxzID0gYW5zd2VyLnNwbGl0KC8oPz1cXGRcXC4gXCIpLyk7XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgYm90TWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDEsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhdGlvbkRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICBzZW5kZXI6ICdib3QnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VzOiBwYXJzZWRQbGFjZXMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgYm90TWVzc2FnZV0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgbWVzc2FnZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGJvdEF2YXRhciA9ICcvYXNzZXRzL2dvZGFfbG9nby5wbmcnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcC00IHNtOnAtOCBqdXN0aWZ5LWJldHdlZW4gZmxleCBmbGV4LWNvbCBjdXN0b20taGVpZ2h0LXNtIGJnLWdyYXktMTAwIHJvdW5kZWQtbGcgc2hhZG93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlc1wiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IHAtNCBvdmVyZmxvdy15LWF1dG8gc2Nyb2xsYmFyLXRodW1iLWJsdWUgc2Nyb2xsYmFyLXRodW1iLXJvdW5kZWQgc2Nyb2xsYmFyLXRyYWNrLWJsdWUtbGlnaHRlciBzY3JvbGxiYXItdy0yIHNjcm9sbGluZy10b3VjaFwiPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZXNzYWdlLmlkfSBjbGFzc05hbWU9e2BjaGF0LW1lc3NhZ2UgZmxleCAke21lc3NhZ2Uuc2VuZGVyID09PSAndXNlcicgPyAnanVzdGlmeS1lbmQnIDogJ2p1c3RpZnktc3RhcnQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5zZW5kZXIgPT09ICdib3QnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtib3RBdmF0YXJ9IGFsdD1cIkJvdCBBdmF0YXJcIiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBtci0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIHNwYWNlLXktMiB0ZXh0LXhzIG1heC13LXhzIG14LTIgaXRlbXMtJHttZXNzYWdlLnNlbmRlciA9PT0gJ3VzZXInID8gJ2VuZCcgOiAnc3RhcnQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2Uuc2VuZGVyID09PSAnYm90JyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS50ZXh0Lm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcHgtMSBweS0yIHJvdW5kZWQtbGcgaW5saW5lLWJsb2NrIGJnLWdyYXktMzAwIHRleHQtZ3JheS02MDAgcm91bmRlZC1ibC1ub25lYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5wbGFjZXNbaW5kZXhdICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZS1jYXJkIHAtNCBteS00IGJvcmRlciByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+e21lc3NhZ2UucGxhY2VzW2luZGV4XS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BcInRleHQtZ3JheS02MDBcIiAke21lc3NhZ2UucGxhY2VzW2luZGV4XS5hdmdfcmF0ZSA/IFwiXCIgOiBcImhpZGRlblwifWB9PsSQw6FuaCBnacOhOiB7bWVzc2FnZS5wbGFjZXNbaW5kZXhdLmF2Z19yYXRlfSDirZA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWVzc2FnZS5wbGFjZXNbaW5kZXhdLmltYWdlX2xpbmt9IGFsdD17bWVzc2FnZS5wbGFjZXNbaW5kZXhdLm5hbWV9IGNsYXNzTmFtZT1cIm10LTIgcm91bmRlZC1sZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBweS02Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgdHJhY2tpbmctd2lkZSBweS0yIHB4LTMgc206cHgtOCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIHRleHQtYmx1ZS01MDAgYmctd2hpdGUtNTAwIG91dGxpbmUtbm9uZSByb3VuZGVkLWwtZnVsbCByb3VuZGVkLXItZnVsbCBjYXBpdGFsaXplIGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOnRleHQtd2hpdGUtNTAwIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1ibHVlJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2NhdGlvbkNsaWNrKG1lc3NhZ2UucGxhY2VzW2luZGV4XS5pZCl9PkNoaSB0aeG6v3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BweC0xIHB5LTIgcm91bmRlZC1sZyBpbmxpbmUtYmxvY2sgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWJyLW5vbmVgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2Uuc2VuZGVyID09PSAndXNlcicgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL2Nkbi5pY29uLWljb25zLmNvbS9pY29uczIvMTM3OC9QTkcvNTEyL2F2YXRhcmRlZmF1bHRfOTI4MjQucG5nJ30gYWx0PVwiVXNlciBBdmF0YXJcIiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBtci0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB0LTQgbWItMiBzbTptYi0wIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4XCIgb25TdWJtaXQ9eyhlKSA9PiBzZW5kTWVzc2FnZShlLCBuZXdNZXNzYWdlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25ld01lc3NhZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBtZXNzYWdlIVwiIGNsYXNzTmFtZT1cInctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cGxhY2Vob2xkZXItZ3JheS00MDAgdGV4dC1ncmF5LTYwMCBwbGFjZWhvbGRlci1ncmF5LTYwMCBwbC01IGJnLWdyYXktMjAwIHJvdW5kZWQtbWQgcHktM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBpdGVtcy1jZW50ZXIgaW5zZXQteS0wIHNtOmZsZXggcHgtNCBweS0yIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEfhu61pXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TG9jYXRpb25Nb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbk1vZGFsPXtvcGVuTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb25pZD17c2VsZWN0ZWRMb2NhdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkFQSVNlcnZpY2UiLCJMb2NhdGlvbk1vZGFsIiwiQ2hhdENvbXBvbmVudCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsImp3dCIsInNldEp3dCIsInJvdXRlciIsImFwaVNlcnZpY2UiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJzZWxlY3RlZExvY2F0aW9uIiwic2V0U2VsZWN0ZWRMb2NhdGlvbiIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInN0b3JlZEp3dCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJwdXNoIiwib25DbG9zZU1vZGFsIiwiaGFuZGxlTG9jYXRpb25DbGljayIsImlkIiwic2VuZE1lc3NhZ2UiLCJlIiwibWVzc2FnZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInVzZXJNZXNzYWdlIiwiRGF0ZSIsImdldFRpbWUiLCJ0ZXh0Iiwic2VuZGVyIiwicG9zdERhdGEiLCJjb250ZW50Iiwic2Vzc2lvbl9pZCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwicmVzcG9uc2UiLCJhbnN3ZXIiLCJwbGFjZXMiLCJwYXJzZWRQbGFjZXMiLCJKU09OIiwicGFyc2UiLCJsb2NhdGlvbkRldGFpbHMiLCJzcGxpdCIsImJvdE1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJib3RBdmF0YXIiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJhdmdfcmF0ZSIsImltYWdlX2xpbmsiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chat.js\n"));

/***/ })

});