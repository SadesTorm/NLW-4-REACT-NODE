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
      secondRigth = _String$padStart$spli4[1];
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
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRigth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRigth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }, this) : isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, " ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonStop),
      onClick: resetCountdown,
      children: "Abandonar ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      onClick: startCountdown,
      children: "Iniciar um ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCJdLCJuYW1lcyI6WyJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duIiwidXNlQ29udGV4dCIsIkNvd250b2Rvd25Db250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJTdHJpbmciLCJtaW51dGVzIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWd0aCIsInNlY29uZHMiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlndGgiLCJzdHlsZXMiLCJjb3VudGRvd25Db250YWluZXIiLCJoYXNGaW5pc2hlZCIsImNvdW50ZG93bkJ1dHRvbiIsImlzQWN0aXZlIiwiY291bnRkb3duQnV0dG9uU3RvcCIsInN0YXJ0Q291bnRkb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQUlBLGdCQUFKO0FBRU8sU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBLG9CQUVHQyx3REFBVSxDQUFDQyw0RUFBRCxDQUZiO0FBQUEsTUFFaEJDLGNBRmdCLGVBRWhCQSxjQUZnQixFQUd4Qjs7O0FBSHdCLDhCQUlTQyxNQUFNLENBQUNDLE9BQUQsQ0FBTixDQUFnQkMsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBMkIsR0FBM0IsRUFBZ0NDLEtBQWhDLENBQXNDLEVBQXRDLENBSlQ7QUFBQTtBQUFBLE1BSWpCQyxVQUppQjtBQUFBLE1BSU5DLFdBSk07O0FBQUEsK0JBS1NMLE1BQU0sQ0FBQ00sT0FBRCxDQUFOLENBQWdCSixRQUFoQixDQUF5QixDQUF6QixFQUEyQixHQUEzQixFQUFnQ0MsS0FBaEMsQ0FBc0MsRUFBdEMsQ0FMVDtBQUFBO0FBQUEsTUFLakJJLFVBTGlCO0FBQUEsTUFLTkMsV0FMTTtBQVV4QjtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7QUFRSSxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQyw4RUFBTSxDQUFDQyxrQkFBdkI7QUFBQSw4QkFFSTtBQUFBLGdDQUNJO0FBQUEsb0JBQU9OO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUFBLGdDQUNJO0FBQUEsb0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQWdCTUcsV0FBVyxnQkFFVDtBQUNBLGNBQVEsTUFEUjtBQUVBLGVBQVMsRUFBRUYsOEVBQU0sQ0FBQ0csZUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUyxHQWFaQyxRQUFRLGdCQUNMO0FBQ0EsVUFBSSxFQUFDLFFBREw7QUFFQSxlQUFTLFlBQUtKLDhFQUFNLENBQUNHLGVBQVosY0FBK0JILDhFQUFNLENBQUNLLG1CQUF0QyxDQUZUO0FBR0EsYUFBTyxFQUFFZixjQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZ0JBWUw7QUFDSSxVQUFJLEVBQUMsUUFEVDtBQUVJLGVBQVMsRUFBRVUsOEVBQU0sQ0FBQ0csZUFGdEI7QUFHSSxhQUFPLEVBQUVHLGNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwREg7O0dBaEZlbkIsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ODczZTM0NDIxYWI5MjMyODdmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0JztcclxuaW1wb3J0IHsgQ293bnRvZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcyc7XHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCkge1xyXG5cclxuICAgIGNvbnN0IHsgcmVzZXRDb3VudGRvd24gfSA9IHVzZUNvbnRleHQoQ293bnRvZG93bkNvbnRleHQpO1xyXG4gICAgLy9zZSBhIHN0cmluZyBzbyBjb250ZXIgdW0gY2FyYWN0ZXIsIHBlZ2EgbyBjb21lw6dvIGUgYWRkIG8gMCAocGFkU3RhcnQpIGRlcG9pcyBkaXZpZGUgKC5zcGxpdCgnJykpXHJcbiAgICBjb25zdCBbbWludXRlTGVmdCxtaW51dGVSaWd0aF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKTtcclxuICAgIGNvbnN0IFtzZWNvbmRMZWZ0LHNlY29uZFJpZ3RoXSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCcwJykuc3BsaXQoJycpO1xyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICAvKmZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCl7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgc2V0VGltZSgwLjA1ICogNjApO1xyXG5cclxuICAgIH0qL1xyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRSaWd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIHsgaGFzRmluaXNoZWQgPyAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgIENpY2xvIGVuY2VycmFkbyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgaXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvblN0b3B9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgQWJhbmRvbmFyIGNpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudGRvd259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5pY2lhciB1bSBjaWNsb1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==