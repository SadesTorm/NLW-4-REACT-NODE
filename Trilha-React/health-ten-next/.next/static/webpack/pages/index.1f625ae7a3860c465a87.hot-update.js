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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(60),
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
    lineNumber: 82,
    columnNumber: 9
  }, this);
}

_s(ChallengesProvider, "jRPJNrHkkfNS+CRVYW2Hr1n3gCk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwiY29uc29sZSIsImxvZyIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZWRDaGFsbGVuZ2UiLCJhbW91bnQiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUF3Qk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFHQSxTQUFTQyxrQkFBVCxPQUFxRTtBQUFBOztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7O0FBQUEsa0JBRTlDQyxzREFBUSxDQUFDLENBQUQsQ0FGc0M7QUFBQSxNQUVqRUMsS0FGaUU7QUFBQSxNQUUxREMsUUFGMEQ7O0FBQUEsbUJBR3RCRixzREFBUSxDQUFDLEVBQUQsQ0FIYztBQUFBLE1BR2pFRyxpQkFIaUU7QUFBQSxNQUc5Q0Msb0JBSDhDOztBQUFBLG1CQUlwQkosc0RBQVEsQ0FBQyxDQUFELENBSlk7QUFBQSxNQUlqRUssa0JBSmlFO0FBQUEsTUFJN0NDLHFCQUo2Qzs7QUFBQSxtQkFPM0JOLHNEQUFRLENBQUMsSUFBRCxDQVBtQjtBQUFBLE1BT2pFTyxlQVBpRTtBQUFBLE1BT2pEQyxrQkFQaUQsa0JBU3hFOzs7QUFDQSxNQUFNQyxxQkFBcUIsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQ1YsS0FBSyxHQUFHLENBQVQsSUFBYyxDQUF2QixFQUEwQixDQUExQixDQUE5Qjs7QUFFQSxXQUFTVyxPQUFULEdBQWtCO0FBQ2RWLFlBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNIOztBQUVELFdBQVNZLGlCQUFULEdBQTRCO0FBQ3hCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsUUFBTUMsb0JBQW9CLEdBQUdOLElBQUksQ0FBQ08sS0FBTCxDQUFXUCxJQUFJLENBQUNRLE1BQUwsS0FBZUMsNkNBQVUsQ0FBQ0MsTUFBckMsQ0FBN0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLDZDQUFVLENBQUNILG9CQUFELENBQTVCO0FBRUFSLHNCQUFrQixDQUFDYSxTQUFELENBQWxCO0FBRUg7O0FBRUQsV0FBU0MsY0FBVCxHQUF5QjtBQUNyQmQsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNIOztBQUVELFdBQVNlLGtCQUFULEdBQTZCO0FBQ3pCLFFBQUcsQ0FBQ2hCLGVBQUosRUFBb0I7QUFFaEI7QUFDSDs7QUFKd0IsUUFNakJpQixNQU5pQixHQU1OakIsZUFOTSxDQU1qQmlCLE1BTmlCO0FBUXpCLFFBQUlDLGVBQWUsR0FBR3RCLGlCQUFpQixHQUFHcUIsTUFBMUM7O0FBRUEsUUFBR0MsZUFBZSxJQUFJaEIscUJBQXRCLEVBQTRDO0FBQ3hDZ0IscUJBQWUsR0FBR0EsZUFBZSxHQUFHaEIscUJBQXBDO0FBQ0FHLGFBQU87QUFDVjs7QUFFRFIsd0JBQW9CLENBQUNxQixlQUFELENBQXBCO0FBQ0FqQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBRUg7O0FBS0Qsc0JBQ0kscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDQSxTQUFLLEVBQUc7QUFDQVAsV0FBSyxFQUFMQSxLQURBO0FBRUFXLGFBQU8sRUFBUEEsT0FGQTtBQUdBVCx1QkFBaUIsRUFBakJBLGlCQUhBO0FBSUFFLHdCQUFrQixFQUFsQkEsa0JBSkE7QUFLQVEsdUJBQWlCLEVBQWpCQSxpQkFMQTtBQU1BTixxQkFBZSxFQUFmQSxlQU5BO0FBT0FlLG9CQUFjLEVBQWRBLGNBUEE7QUFRQWIsMkJBQXFCLEVBQXJCQSxxQkFSQTtBQVNBYyx3QkFBa0IsRUFBbEJBO0FBVEEsS0FEUjtBQUFBLGNBY0t4QjtBQWRMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDs7R0F0RWVELGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZjYyNWFlN2EzODYwYzQ2NWE4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9ZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXtcclxuICAgIHR5cGU6ICdib2R5JyB8ICd5ZXknO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhe1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDsgXHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTsgICBcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkOyAgXHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjsgXHJcbiAgICBjb21wbGV0ZWRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoIHsgY2hpbGRyZW4gfSA6IENoYWxsZW5nZXNQcm92aWRlclByb3BzICl7XHJcblxyXG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoNjApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZUNvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSxzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuICAgIC8vIGNhbGN1bG8gZGUgbGV2ZWwgYmFzZWFkbyBubyBjYWxjdWxvIGRlIHJwZ1xyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IGNoYWxsZW5nJyk7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZWRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBpZighYWN0aXZlQ2hhbGxlbmdlKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICB2YWx1ZT17IHtcclxuICAgICAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbGxlbmdlQ29tcGxldGVkLFxyXG4gICAgICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsICAgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsICAgXHJcbiAgICAgICAgICAgICAgICByZXNldENoYWxsZW5nZSwgICAgXHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsIFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=