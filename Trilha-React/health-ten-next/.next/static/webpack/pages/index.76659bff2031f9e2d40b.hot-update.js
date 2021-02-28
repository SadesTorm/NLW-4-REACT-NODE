webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\Projetos Rocketseat\\NLW-4-REACT-NODE\\Trilha-React\\health-ten-next\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();




var countdownTimeout;
function Countdown() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CowntodownContext"]),
      resetCountdown = _useContext.resetCountdown; //se a string so conter um caracter, pega o começo e add o 0 (padStart) depois divide (.split(''))


  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRigth = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRigth = _String$padStart$spli4[1]; //pegando valores de outros componets

  /*function resetCountdown(){
        clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(0.05 * 60);
    }*/


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRigth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRigth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }, this) : isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, " ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonStop),
      onClick: resetCountdown,
      children: "Abandonar ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      onClick: startCountdown,
      children: "Iniciar um ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

_s(Countdown, "a8aVkMNKysoEtXjHKgpf9+K9FrU=");

_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCJdLCJuYW1lcyI6WyJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duIiwidXNlQ29udGV4dCIsIkNvd250b2Rvd25Db250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJTdHJpbmciLCJtaW51dGVzIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWd0aCIsInNlY29uZHMiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlndGgiLCJzdHlsZXMiLCJjb3VudGRvd25Db250YWluZXIiLCJoYXNGaW5pc2hlZCIsImNvdW50ZG93bkJ1dHRvbiIsImlzQWN0aXZlIiwiY291bnRkb3duQnV0dG9uU3RvcCIsInN0YXJ0Q291bnRkb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQUlBLGdCQUFKO0FBRU8sU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBLG9CQUVHQyx3REFBVSxDQUFDQyw0RUFBRCxDQUZiO0FBQUEsTUFFaEJDLGNBRmdCLGVBRWhCQSxjQUZnQixFQUd4Qjs7O0FBSHdCLDhCQUlTQyxNQUFNLENBQUNDLE9BQUQsQ0FBTixDQUFnQkMsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBMkIsR0FBM0IsRUFBZ0NDLEtBQWhDLENBQXNDLEVBQXRDLENBSlQ7QUFBQTtBQUFBLE1BSWpCQyxVQUppQjtBQUFBLE1BSU5DLFdBSk07O0FBQUEsK0JBS1NMLE1BQU0sQ0FBQ00sT0FBRCxDQUFOLENBQWdCSixRQUFoQixDQUF5QixDQUF6QixFQUEyQixHQUEzQixFQUFnQ0MsS0FBaEMsQ0FBc0MsRUFBdEMsQ0FMVDtBQUFBO0FBQUEsTUFLakJJLFVBTGlCO0FBQUEsTUFLTkMsV0FMTSw4QkFPeEI7O0FBSUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O0FBUUksc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUMsOEVBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsOEJBRUk7QUFBQSxnQ0FDSTtBQUFBLG9CQUFPTjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBT0k7QUFBQSxnQ0FDSTtBQUFBLG9CQUFPRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFnQk1HLFdBQVcsZ0JBRVQ7QUFDQSxjQUFRLE1BRFI7QUFFQSxlQUFTLEVBQUVGLDhFQUFNLENBQUNHLGVBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlMsR0FhWkMsUUFBUSxnQkFDTDtBQUNBLFVBQUksRUFBQyxRQURMO0FBRUEsZUFBUyxZQUFLSiw4RUFBTSxDQUFDRyxlQUFaLGNBQStCSCw4RUFBTSxDQUFDSyxtQkFBdEMsQ0FGVDtBQUdBLGFBQU8sRUFBRWYsY0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGdCQVlMO0FBQ0ksVUFBSSxFQUFDLFFBRFQ7QUFFSSxlQUFTLEVBQUVVLDhFQUFNLENBQUNHLGVBRnRCO0FBR0ksYUFBTyxFQUFFRyxjQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMERIOztHQWpGZW5CLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzY2NTliZmYyMDMxZjllMmQ0MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCB7IENvd250b2Rvd25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnO1xyXG5cclxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpIHtcclxuXHJcbiAgICBjb25zdCB7IHJlc2V0Q291bnRkb3duIH0gPSB1c2VDb250ZXh0KENvd250b2Rvd25Db250ZXh0KTtcclxuICAgIC8vc2UgYSBzdHJpbmcgc28gY29udGVyIHVtIGNhcmFjdGVyLCBwZWdhIG8gY29tZcOnbyBlIGFkZCBvIDAgKHBhZFN0YXJ0KSBkZXBvaXMgZGl2aWRlICguc3BsaXQoJycpKVxyXG4gICAgY29uc3QgW21pbnV0ZUxlZnQsbWludXRlUmlndGhdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsJzAnKS5zcGxpdCgnJyk7XHJcbiAgICBjb25zdCBbc2Vjb25kTGVmdCxzZWNvbmRSaWd0aF0gPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKTtcclxuXHJcbiAgICAvL3BlZ2FuZG8gdmFsb3JlcyBkZSBvdXRyb3MgY29tcG9uZXRzXHJcbiAgICBcclxuXHJcblxyXG4gICAgLypmdW5jdGlvbiByZXNldENvdW50ZG93bigpe1xyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHNldFRpbWUoMC4wNSAqIDYwKTtcclxuXHJcbiAgICB9Ki9cclxuXHJcblxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVSaWd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7IGhhc0ZpbmlzaGVkID8gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICBDaWNsbyBlbmNlcnJhZG8gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgIGlzQWN0aXZlID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnRkb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudGRvd25CdXR0b25TdG9wfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldENvdW50ZG93bn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEluaWNpYXIgdW0gY2ljbG9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=