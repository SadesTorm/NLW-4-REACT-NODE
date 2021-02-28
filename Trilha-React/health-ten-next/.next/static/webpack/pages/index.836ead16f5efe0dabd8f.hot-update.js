webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Projetos Rocketseat\\NLW-4-REACT-NODE\\Trilha-React\\health-ten-next\\src\\components\\ChallengeBox.tsx",
    _s = $RefreshSig$();




function ChallengeBox() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      activeChallenge = _useContext.activeChallenge,
      resetChallenge = _useContext.resetChallenge;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 20
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/".concat(activeChallenge.type, ".svg"),
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 24
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 24
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 20
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxFailedButton,
          onClick: resetChallenge,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxSuccededButton,
          onClick: completedChallengen,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 16
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.challengeBoxNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber um desafio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "Level Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), "Avance de level completando desafios"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_s(ChallengeBox, "FTOc261EUUgkk2QBX3nIU3Qnx8E=");

_c = ChallengeBox;

var _c;

$RefreshReg$(_c, "ChallengeBox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VCb3giLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsInN0eWxlcyIsImNoYWxsZW5nZUJveENvbnRhaW5lciIsImNoYWxsZW5nZUJveEFjdGl2ZSIsImFtb3VudCIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImNoYWxsZW5nZUJveEZhaWxlZEJ1dHRvbiIsImNoYWxsZW5nZUJveFN1Y2NlZGVkQnV0dG9uIiwiY29tcGxldGVkQ2hhbGxlbmdlbiIsImNoYWxsZW5nZUJveE5vdEFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSU8sU0FBU0EsWUFBVCxHQUF1QjtBQUFBOztBQUFBLG9CQUVpQkMsd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FGM0I7QUFBQSxNQUVsQkMsZUFGa0IsZUFFbEJBLGVBRmtCO0FBQUEsTUFFRkMsY0FGRSxlQUVGQSxjQUZFOztBQU0xQixzQkFDSTtBQUFLLGFBQVMsRUFBRUMsaUZBQU0sQ0FBQ0MscUJBQXZCO0FBQUEsY0FFS0gsZUFBZSxnQkFFYjtBQUFLLGVBQVMsRUFBRUUsaUZBQU0sQ0FBQ0Usa0JBQXZCO0FBQUEsOEJBQ0k7QUFBQSw2QkFBZUosZUFBZSxDQUFDSyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLGtCQUFXTCxlQUFlLENBQUNNLElBQTNCLFNBQVI7QUFBK0MsYUFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUEsb0JBQUlOLGVBQWUsQ0FBQ087QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQVVLO0FBQUEsZ0NBRUk7QUFDSSxjQUFJLEVBQUMsUUFEVDtBQUVJLG1CQUFTLEVBQUVMLGlGQUFNLENBQUNNLHdCQUZ0QjtBQUdJLGlCQUFPLEVBQUVQLGNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFVSTtBQUNDLGNBQUksRUFBQyxRQUROO0FBRUMsbUJBQVMsRUFBRUMsaUZBQU0sQ0FBQ08sMEJBRm5CO0FBR0MsaUJBQU8sRUFBS0MsbUJBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmEsZ0JBb0NaO0FBQUssZUFBUyxFQUFFUixpRkFBTSxDQUFDUyxxQkFBdkI7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBQSxnQ0FDSTtBQUFLLGFBQUcsRUFBQyxvQkFBVDtBQUE4QixhQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF0Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0RIOztHQXhEZWQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MzZlYWQxNmY1ZWZlMGRhYmQ4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IENvbXBsZXRlZENoYWxsZW5nZW5zIH0gZnJvbSAnLi9Db21wbGV0ZWRDaGFsbGVuZ2VzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlQm94KCl7XHJcblxyXG4gICAgY29uc3QgeyBhY3RpdmVDaGFsbGVuZ2UscmVzZXRDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgeyBhY3RpdmVDaGFsbGVuZ2UgPyAoXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveEFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICA8aGVhZGVyPkdhbmhlIHthY3RpdmVDaGFsbGVuZ2UuYW1vdW50fSB4cDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm92byBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FjdGl2ZUNoYWxsZW5nZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICA8L21haW4+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VCb3hGYWlsZWRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldENoYWxsZW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbGhlaSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQm94U3VjY2VkZWRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geyBjb21wbGV0ZWRDaGFsbGVuZ2VuIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVpICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgKSA6IChcclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveE5vdEFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZpbmFsaXplIHVtIGNpY2xvIHBhcmEgcmVjZWJlciB1bSBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLXVwLnN2Z1wiIGFsdD1cIkxldmVsIFVwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIEF2YW5jZSBkZSBsZXZlbCBjb21wbGV0YW5kbyBkZXNhZmlvc1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=