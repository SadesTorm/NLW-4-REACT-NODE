webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CowntodownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CowntodownContext", function() { return CowntodownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");


var _jsxFileName = "D:\\Projetos Rocketseat\\NLW-4-REACT-NODE\\Trilha-React\\health-ten-next\\src\\contexts\\CountdownContext.tsx",
    _s = $RefreshSig$();



var CowntodownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  //pegando valores de outros componets
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      startNewChallenge = _useContext.startNewChallenge;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.05 * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFineshd = _useState3[1];

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  var countdownTimeout;

  function handleChallengeSucceeded() {}

  function handleChallengeFailed() {}

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  function startCountdown() {
    setIsActive(true);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time == 0) {
      console.log('finalizou');
      setHasFineshd(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CowntodownContext.Provider, {
    value: {
      resetCountdown: resetCountdown,
      startCountdown: startCountdown,
      useEffect: react__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
      minutes: minutes,
      seconds: seconds,
      hasFinished: hasFinished,
      isActive: isActive
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

_s(CountdownProvider, "cWScFVAUIY49spZsdh7tZYGAreo=");

_c = CountdownProvider;

var _c;

$RefreshReg$(_c, "CountdownProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNvd250b2Rvd25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvdW50ZG93blByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5lc2hkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJjb3VudGRvd25UaW1lb3V0IiwiaGFuZGxlQ2hhbGxlbmdlU3VjY2VlZGVkIiwiaGFuZGxlQ2hhbGxlbmdlRmFpbGVkIiwicmVzZXRDb3VudGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdGFydENvdW50ZG93biIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFtQk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFFQSxTQUFTQyxpQkFBVCxPQUFvRTtBQUFBOztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7O0FBRXZFO0FBRnVFLG9CQUd6Q0Msd0RBQVUsQ0FBQ0Msb0VBQUQsQ0FIK0I7QUFBQSxNQUcvREMsaUJBSCtELGVBRy9EQSxpQkFIK0Q7O0FBQUEsa0JBS2hEQyxzREFBUSxDQUFDLE9BQU8sRUFBUixDQUx3QztBQUFBLE1BS2hFQyxJQUxnRTtBQUFBLE1BSzNEQyxPQUwyRDs7QUFBQSxtQkFNeENGLHNEQUFRLENBQUMsS0FBRCxDQU5nQztBQUFBLE1BTWhFRyxRQU5nRTtBQUFBLE1BTXZEQyxXQU51RDs7QUFBQSxtQkFPbENKLHNEQUFRLENBQUMsS0FBRCxDQVAwQjtBQUFBLE1BT2hFSyxXQVBnRTtBQUFBLE1BT25EQyxhQVBtRDs7QUFTdkUsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHVCxJQUFJLEdBQUcsRUFBdkI7QUFFQSxNQUFJVSxnQkFBSjs7QUFDQSxXQUFTQyx3QkFBVCxHQUFtQyxDQUdsQzs7QUFHRCxXQUFTQyxxQkFBVCxHQUFnQyxDQUcvQjs7QUFFRCxXQUFTQyxjQUFULEdBQXlCO0FBRXJCQyxnQkFBWSxDQUFDSixnQkFBRCxDQUFaO0FBQ0FQLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTyxDQUFDLE9BQU8sRUFBUixDQUFQO0FBRUg7O0FBRUQsV0FBU2MsY0FBVCxHQUF5QjtBQUNyQlosZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUVIOztBQUVEYSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHZCxRQUFRLElBQUlGLElBQUksR0FBRyxDQUF0QixFQUF3QjtBQUNoQlUsc0JBQWdCLEdBQUdPLFVBQVUsQ0FBQyxZQUFJO0FBQ2xDaEIsZUFBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0gsT0FGZ0MsRUFFOUIsSUFGOEIsQ0FBN0I7QUFHUCxLQUpELE1BSU0sSUFBR0UsUUFBUSxJQUFJRixJQUFJLElBQUksQ0FBdkIsRUFBeUI7QUFDM0JrQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FkLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FGLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FMLHVCQUFpQjtBQUNwQjtBQUVKLEdBWlEsRUFZTixDQUFDSSxRQUFELEVBQVVGLElBQVYsQ0FaTSxDQUFUO0FBY0Esc0JBQ0kscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDQSxTQUFLLEVBQUU7QUFDSGEsb0JBQWMsRUFBZEEsY0FERztBQUVIRSxvQkFBYyxFQUFkQSxjQUZHO0FBR0hDLGVBQVMsRUFBVEEsK0NBSEc7QUFJSFYsYUFBTyxFQUFQQSxPQUpHO0FBS0hHLGFBQU8sRUFBUEEsT0FMRztBQU1ITCxpQkFBVyxFQUFYQSxXQU5HO0FBT0hGLGNBQVEsRUFBUkE7QUFQRyxLQURQO0FBQUEsY0FZS1A7QUFaTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBbkVlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDZmZjg4YTNiY2M3MjBhZDU5MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ293bnRvZG93bkNvbnRleHREYXRhe1xyXG5cclxuICAgIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkLFxyXG4gICAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQsXHJcbiAgICB1c2VFZmZlY3QsXHJcbiAgICBtaW51dGVzOiBudW1iZXIsXHJcbiAgICBzZWNvbmRzOiBudW1iZXIsXHJcbiAgICBoYXNGaW5pc2hlZDogYm9vbGVhbixcclxuICAgIGlzQWN0aXZlOiBib29sZWFuXHJcblxyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIENvd250b2Rvd25Qcm92aWRlclByb3Bze1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ293bnRvZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvd250b2Rvd25Db250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoIHsgY2hpbGRyZW4gfSA6IENvd250b2Rvd25Qcm92aWRlclByb3BzICl7XHJcblxyXG4gICAgLy9wZWdhbmRvIHZhbG9yZXMgZGUgb3V0cm9zIGNvbXBvbmV0c1xyXG4gICAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFt0aW1lLHNldFRpbWVdID0gdXNlU3RhdGUoMC4wNSAqIDYwKTtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSxzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmVzaGRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xyXG5cclxuICAgIGxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZVN1Y2NlZWRlZCgpe1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZUZhaWxlZCgpe1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpe1xyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHNldFRpbWUoMC4wNSAqIDYwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKXtcclxuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGlzQWN0aXZlICYmIHRpbWUgPiAwKXtcclxuICAgICAgICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICB9ZWxzZSBpZihpc0FjdGl2ZSAmJiB0aW1lID09IDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmluYWxpem91Jyk7XHJcbiAgICAgICAgICAgIHNldEhhc0ZpbmVzaGQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LCBbaXNBY3RpdmUsdGltZV0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb3dudG9kb3duQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICByZXNldENvdW50ZG93bixcclxuICAgICAgICAgICAgc3RhcnRDb3VudGRvd24sXHJcbiAgICAgICAgICAgIHVzZUVmZmVjdCxcclxuICAgICAgICAgICAgbWludXRlcyxcclxuICAgICAgICAgICAgc2Vjb25kcyxcclxuICAgICAgICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlLFxyXG5cclxuICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ293bnRvZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==