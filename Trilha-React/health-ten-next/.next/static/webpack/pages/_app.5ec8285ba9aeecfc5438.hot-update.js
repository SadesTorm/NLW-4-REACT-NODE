webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);


var _jsxFileName = "D:\\Projetos Rocketseat\\NLW-4-REACT-NODE\\Trilha-React\\health-ten-next\\src\\contexts\\ChallengesContext.tsx",
    _s = $RefreshSig$();



var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var children = _ref.children;
  // array vazio a function e executada apaenas uma vez quando componete for exibido em tela
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      challengeCompleted = _useState3[0],
      setChallengeCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1]; // calculo de level baseado no calculo de rpg


  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('new challeng');
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      levelUp: levelUp,
      currentExperience: currentExperience,
      challengeCompleted: challengeCompleted,
      startNewChallenge: startNewChallenge,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      experienceToNextLevel: experienceToNextLevel,
      completedChallenge: completedChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 9
  }, this);
}

_s(ChallengesProvider, "asBxDoBS8iIiKPwkriVvGMegY9k=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZUNvbXBsZXRlZCIsInNldENoYWxsZW5nZUNvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJjb25zb2xlIiwibG9nIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlZENoYWxsZW5nZSIsImFtb3VudCIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQXdCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUdBLFNBQVNDLGtCQUFULE9BQXFFO0FBQUE7O0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQztBQUV4RTtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0JBQVksQ0FBQ0MsaUJBQWI7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUh3RSxrQkFPOUNDLHNEQUFRLENBQUMsQ0FBRCxDQVBzQztBQUFBLE1BT2pFQyxLQVBpRTtBQUFBLE1BTzFEQyxRQVAwRDs7QUFBQSxtQkFRdEJGLHNEQUFRLENBQUMsQ0FBRCxDQVJjO0FBQUEsTUFRakVHLGlCQVJpRTtBQUFBLE1BUTlDQyxvQkFSOEM7O0FBQUEsbUJBU3BCSixzREFBUSxDQUFDLENBQUQsQ0FUWTtBQUFBLE1BU2pFSyxrQkFUaUU7QUFBQSxNQVM3Q0MscUJBVDZDOztBQUFBLG1CQVkzQk4sc0RBQVEsQ0FBQyxJQUFELENBWm1CO0FBQUEsTUFZakVPLGVBWmlFO0FBQUEsTUFZakRDLGtCQVppRCxrQkFjeEU7OztBQUNBLE1BQU1DLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDVixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCOztBQUVBLFdBQVNXLE9BQVQsR0FBa0I7QUFDZFYsWUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0g7O0FBRUQsV0FBU1ksaUJBQVQsR0FBNEI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxRQUFNQyxvQkFBb0IsR0FBR04sSUFBSSxDQUFDTyxLQUFMLENBQVdQLElBQUksQ0FBQ1EsTUFBTCxLQUFlQyw2Q0FBVSxDQUFDQyxNQUFyQyxDQUE3QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0YsNkNBQVUsQ0FBQ0gsb0JBQUQsQ0FBNUI7QUFFQVIsc0JBQWtCLENBQUNhLFNBQUQsQ0FBbEI7QUFFSDs7QUFFRCxXQUFTQyxjQUFULEdBQXlCO0FBQ3JCZCxzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0g7O0FBRUQsV0FBU2Usa0JBQVQsR0FBNkI7QUFDekIsUUFBRyxDQUFDaEIsZUFBSixFQUFvQjtBQUVoQjtBQUNIOztBQUp3QixRQU1qQmlCLE1BTmlCLEdBTU5qQixlQU5NLENBTWpCaUIsTUFOaUI7QUFRekIsUUFBSUMsZUFBZSxHQUFHdEIsaUJBQWlCLEdBQUdxQixNQUExQzs7QUFFQSxRQUFHQyxlQUFlLElBQUloQixxQkFBdEIsRUFBNEM7QUFDeENnQixxQkFBZSxHQUFHQSxlQUFlLEdBQUdoQixxQkFBcEM7QUFDQUcsYUFBTztBQUNWOztBQUVEUix3QkFBb0IsQ0FBQ3FCLGVBQUQsQ0FBcEI7QUFDQWpCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUYseUJBQXFCLENBQUNELGtCQUFrQixHQUFHLENBQXRCLENBQXJCO0FBRUg7O0FBS0Qsc0JBQ0kscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDQSxTQUFLLEVBQUc7QUFDQUosV0FBSyxFQUFMQSxLQURBO0FBRUFXLGFBQU8sRUFBUEEsT0FGQTtBQUdBVCx1QkFBaUIsRUFBakJBLGlCQUhBO0FBSUFFLHdCQUFrQixFQUFsQkEsa0JBSkE7QUFLQVEsdUJBQWlCLEVBQWpCQSxpQkFMQTtBQU1BTixxQkFBZSxFQUFmQSxlQU5BO0FBT0FlLG9CQUFjLEVBQWRBLGNBUEE7QUFRQWIsMkJBQXFCLEVBQXJCQSxxQkFSQTtBQVNBYyx3QkFBa0IsRUFBbEJBO0FBVEEsS0FEUjtBQUFBLGNBY0szQjtBQWRMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDs7R0E1RWVELGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVlYzgyODViYTlhZWVjZmM1NDM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfWZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2V7XHJcbiAgICB0eXBlOiAnYm9keScgfCAneWV5JztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YXtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZUNvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7IFxyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7ICAgXHJcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDsgIFxyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7IFxyXG4gICAgY29tcGxldGVkQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKCB7IGNoaWxkcmVuIH0gOiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApe1xyXG5cclxuICAgIC8vIGFycmF5IHZhemlvIGEgZnVuY3Rpb24gZSBleGVjdXRhZGEgYXBhZW5hcyB1bWEgdmV6IHF1YW5kbyBjb21wb25ldGUgZm9yIGV4aWJpZG8gZW0gdGVsYVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZUNvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSxzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuICAgIC8vIGNhbGN1bG8gZGUgbGV2ZWwgYmFzZWFkbyBubyBjYWxjdWxvIGRlIHJwZ1xyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IGNoYWxsZW5nJyk7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZWRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBpZighYWN0aXZlQ2hhbGxlbmdlKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICAgICAgc2V0Q2hhbGxlbmdlQ29tcGxldGVkKGNoYWxsZW5nZUNvbXBsZXRlZCArIDEpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgIHZhbHVlPXsge1xyXG4gICAgICAgICAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgICAgICBjaGFsbGVuZ2VDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSwgICBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSwgICBcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLCAgICBcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCwgXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==