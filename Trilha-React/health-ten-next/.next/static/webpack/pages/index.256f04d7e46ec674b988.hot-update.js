webpackHotUpdate_N_E("pages/index",{

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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {}, []);

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
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwiY29uc29sZSIsImxvZyIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZWRDaGFsbGVuZ2UiLCJhbW91bnQiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUF3Qk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFHQSxTQUFTQyxrQkFBVCxPQUFxRTtBQUFBOztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7QUFFeEVDLHlEQUFTLENBQUMsWUFBTSxDQUFFLENBQVQsRUFBVyxFQUFYLENBQVQ7O0FBRndFLGtCQUk5Q0Msc0RBQVEsQ0FBQyxDQUFELENBSnNDO0FBQUEsTUFJakVDLEtBSmlFO0FBQUEsTUFJMURDLFFBSjBEOztBQUFBLG1CQUt0QkYsc0RBQVEsQ0FBQyxDQUFELENBTGM7QUFBQSxNQUtqRUcsaUJBTGlFO0FBQUEsTUFLOUNDLG9CQUw4Qzs7QUFBQSxtQkFNcEJKLHNEQUFRLENBQUMsQ0FBRCxDQU5ZO0FBQUEsTUFNakVLLGtCQU5pRTtBQUFBLE1BTTdDQyxxQkFONkM7O0FBQUEsbUJBUzNCTixzREFBUSxDQUFDLElBQUQsQ0FUbUI7QUFBQSxNQVNqRU8sZUFUaUU7QUFBQSxNQVNqREMsa0JBVGlELGtCQVd4RTs7O0FBQ0EsTUFBTUMscUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUNWLEtBQUssR0FBRyxDQUFULElBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBOUI7O0FBRUEsV0FBU1csT0FBVCxHQUFrQjtBQUNkVixZQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDSDs7QUFFRCxXQUFTWSxpQkFBVCxHQUE0QjtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBLFFBQU1DLG9CQUFvQixHQUFHTixJQUFJLENBQUNPLEtBQUwsQ0FBV1AsSUFBSSxDQUFDUSxNQUFMLEtBQWVDLDZDQUFVLENBQUNDLE1BQXJDLENBQTdCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRiw2Q0FBVSxDQUFDSCxvQkFBRCxDQUE1QjtBQUVBUixzQkFBa0IsQ0FBQ2EsU0FBRCxDQUFsQjtBQUVIOztBQUVELFdBQVNDLGNBQVQsR0FBeUI7QUFDckJkLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDSDs7QUFFRCxXQUFTZSxrQkFBVCxHQUE2QjtBQUN6QixRQUFHLENBQUNoQixlQUFKLEVBQW9CO0FBRWhCO0FBQ0g7O0FBSndCLFFBTWpCaUIsTUFOaUIsR0FNTmpCLGVBTk0sQ0FNakJpQixNQU5pQjtBQVF6QixRQUFJQyxlQUFlLEdBQUd0QixpQkFBaUIsR0FBR3FCLE1BQTFDOztBQUVBLFFBQUdDLGVBQWUsSUFBSWhCLHFCQUF0QixFQUE0QztBQUN4Q2dCLHFCQUFlLEdBQUdBLGVBQWUsR0FBR2hCLHFCQUFwQztBQUNBRyxhQUFPO0FBQ1Y7O0FBRURSLHdCQUFvQixDQUFDcUIsZUFBRCxDQUFwQjtBQUNBakIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRix5QkFBcUIsQ0FBQ0Qsa0JBQWtCLEdBQUcsQ0FBdEIsQ0FBckI7QUFFSDs7QUFLRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNBLFNBQUssRUFBRztBQUNBSixXQUFLLEVBQUxBLEtBREE7QUFFQVcsYUFBTyxFQUFQQSxPQUZBO0FBR0FULHVCQUFpQixFQUFqQkEsaUJBSEE7QUFJQUUsd0JBQWtCLEVBQWxCQSxrQkFKQTtBQUtBUSx1QkFBaUIsRUFBakJBLGlCQUxBO0FBTUFOLHFCQUFlLEVBQWZBLGVBTkE7QUFPQWUsb0JBQWMsRUFBZEEsY0FQQTtBQVFBYiwyQkFBcUIsRUFBckJBLHFCQVJBO0FBU0FjLHdCQUFrQixFQUFsQkE7QUFUQSxLQURSO0FBQUEsY0FjS3pCO0FBZEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIOztHQXpFZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI1NmYwNGQ3ZTQ2ZWM2NzRiOTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfWZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2V7XHJcbiAgICB0eXBlOiAnYm9keScgfCAneWV5JztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YXtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZUNvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7IFxyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7ICAgXHJcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDsgIFxyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7IFxyXG4gICAgY29tcGxldGVkQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKCB7IGNoaWxkcmVuIH0gOiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApe1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pXHJcblxyXG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY2hhbGxlbmdlQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VDb21wbGV0ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIFxyXG4gICAgLy8gY2FsY3VsbyBkZSBsZXZlbCBiYXNlYWRvIG5vIGNhbGN1bG8gZGUgcnBnXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKXtcclxuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgY2hhbGxlbmcnKTtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCl7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlZENoYWxsZW5nZSgpe1xyXG4gICAgICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2Upe1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuXHJcbiAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG5cclxuICAgICAgICBpZihmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKXtcclxuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VDb21wbGV0ZWQoY2hhbGxlbmdlQ29tcGxldGVkICsgMSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgICAgdmFsdWU9eyB7XHJcbiAgICAgICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICAgICAgICAgIGNoYWxsZW5nZUNvbXBsZXRlZCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLCAgIFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLCAgIFxyXG4gICAgICAgICAgICAgICAgcmVzZXRDaGFsbGVuZ2UsICAgIFxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLCBcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZENoYWxsZW5nZSxcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9