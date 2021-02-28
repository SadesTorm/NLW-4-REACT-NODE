webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CowntodownContext, CowntodownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CowntodownContext", function() { return CowntodownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CowntodownProvider", function() { return CowntodownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");


var _jsxFileName = "D:\\Projetos Rocketseat\\NLW-4-REACT-NODE\\Trilha-React\\health-ten-next\\src\\contexts\\CountdownContext.tsx",
    _s = $RefreshSig$();



var CowntodownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CowntodownProvider(_ref) {
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
      hasFinished: hasFinished
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, this);
}

_s(CowntodownProvider, "cWScFVAUIY49spZsdh7tZYGAreo=");

_c = CowntodownProvider;

var _c;

$RefreshReg$(_c, "CowntodownProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNvd250b2Rvd25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvd250b2Rvd25Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0Iiwic3RhcnROZXdDaGFsbGVuZ2UiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImhhc0ZpbmlzaGVkIiwic2V0SGFzRmluZXNoZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiY291bnRkb3duVGltZW91dCIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0Iiwic3RhcnRDb3VudGRvd24iLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYU8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFFQSxTQUFTQyxrQkFBVCxPQUFxRTtBQUFBOztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7O0FBRXhFO0FBRndFLG9CQUcxQ0Msd0RBQVUsQ0FBQ0Msb0VBQUQsQ0FIZ0M7QUFBQSxNQUdoRUMsaUJBSGdFLGVBR2hFQSxpQkFIZ0U7O0FBQUEsa0JBS2pEQyxzREFBUSxDQUFDLE9BQU8sRUFBUixDQUx5QztBQUFBLE1BS2pFQyxJQUxpRTtBQUFBLE1BSzVEQyxPQUw0RDs7QUFBQSxtQkFNekNGLHNEQUFRLENBQUMsS0FBRCxDQU5pQztBQUFBLE1BTWpFRyxRQU5pRTtBQUFBLE1BTXhEQyxXQU53RDs7QUFBQSxtQkFPbkNKLHNEQUFRLENBQUMsS0FBRCxDQVAyQjtBQUFBLE1BT2pFSyxXQVBpRTtBQUFBLE1BT3BEQyxhQVBvRDs7QUFTeEUsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHVCxJQUFJLEdBQUcsRUFBdkI7QUFFQSxNQUFJVSxnQkFBSjs7QUFFQSxXQUFTQyxjQUFULEdBQXlCO0FBRXJCQyxnQkFBWSxDQUFDRixnQkFBRCxDQUFaO0FBQ0FQLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTyxDQUFDLE9BQU8sRUFBUixDQUFQO0FBRUg7O0FBRUQsV0FBU1ksY0FBVCxHQUF5QjtBQUNyQlYsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUVIOztBQUVEVyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHWixRQUFRLElBQUlGLElBQUksR0FBRyxDQUF0QixFQUF3QjtBQUNoQlUsc0JBQWdCLEdBQUdLLFVBQVUsQ0FBQyxZQUFJO0FBQ2xDZCxlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDSCxPQUZnQyxFQUU5QixJQUY4QixDQUE3QjtBQUdQLEtBSkQsTUFJTSxJQUFHRSxRQUFRLElBQUlGLElBQUksSUFBSSxDQUF2QixFQUF5QjtBQUMzQmdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQVosbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUwsdUJBQWlCO0FBQ3BCO0FBRUosR0FaUSxFQVlOLENBQUNJLFFBQUQsRUFBVUYsSUFBVixDQVpNLENBQVQ7QUFjQSxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNBLFNBQUssRUFBRTtBQUNIVyxvQkFBYyxFQUFkQSxjQURHO0FBRUhFLG9CQUFjLEVBQWRBLGNBRkc7QUFHSEMsZUFBUyxFQUFUQSwrQ0FIRztBQUlIUixhQUFPLEVBQVBBLE9BSkc7QUFLSEcsYUFBTyxFQUFQQSxPQUxHO0FBTUhMLGlCQUFXLEVBQVhBO0FBTkcsS0FEUDtBQUFBLGNBV0tUO0FBWEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0dBeERlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDZhNzA0MTIyOTljMzkwN2M3MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ293bnRvZG93bkNvbnRleHREYXRhe1xyXG5cclxuICAgIHJlc2V0Q291bnRkb3duOiAoKSA9PiB2b2lkLFxyXG5cclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBDb3dudG9kb3duUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvd250b2Rvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3dudG9kb3duQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvd250b2Rvd25Qcm92aWRlciggeyBjaGlsZHJlbiB9IDogQ293bnRvZG93blByb3ZpZGVyUHJvcHMgKXtcclxuXHJcbiAgICAvL3BlZ2FuZG8gdmFsb3JlcyBkZSBvdXRyb3MgY29tcG9uZXRzXHJcbiAgICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuICAgIFxyXG4gICAgY29uc3QgW3RpbWUsc2V0VGltZV0gPSB1c2VTdGF0ZSgwLjA1ICogNjApO1xyXG4gICAgY29uc3QgW2lzQWN0aXZlLHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluZXNoZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XHJcblxyXG4gICAgbGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCl7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgc2V0VGltZSgwLjA1ICogNjApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpe1xyXG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNBY3RpdmUgJiYgdGltZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH1lbHNlIGlmKGlzQWN0aXZlICYmIHRpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaW5hbGl6b3UnKTtcclxuICAgICAgICAgICAgc2V0SGFzRmluZXNoZCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sIFtpc0FjdGl2ZSx0aW1lXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvd250b2Rvd25Db250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIHJlc2V0Q291bnRkb3duLFxyXG4gICAgICAgICAgICBzdGFydENvdW50ZG93bixcclxuICAgICAgICAgICAgdXNlRWZmZWN0LFxyXG4gICAgICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgICAgICBzZWNvbmRzLFxyXG4gICAgICAgICAgICBoYXNGaW5pc2hlZFxyXG5cclxuICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ293bnRvZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==