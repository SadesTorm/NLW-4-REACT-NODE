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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      challengeCompleted = _useState3[0],
      setChallengeCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      levelUp: levelUp,
      currentExperience: currentExperience,
      challengeCompleted: challengeCompleted,
      startNewChallenge: startNewChallenge,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

_s(ChallengesProvider, "pKLOy8OMwU3Klizz3kQW+1MCUhI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJjb25zb2xlIiwibG9nIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFzQk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFHQSxTQUFTQyxrQkFBVCxPQUFxRTtBQUFBOztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7O0FBQUEsa0JBRTlDQyxzREFBUSxDQUFDLENBQUQsQ0FGc0M7QUFBQSxNQUVqRUMsS0FGaUU7QUFBQSxNQUUxREMsUUFGMEQ7O0FBQUEsbUJBR3RCRixzREFBUSxDQUFDLENBQUQsQ0FIYztBQUFBLE1BR2pFRyxpQkFIaUU7QUFBQSxNQUc5Q0Msb0JBSDhDOztBQUFBLG1CQUlwQkosc0RBQVEsQ0FBQyxDQUFELENBSlk7QUFBQSxNQUlqRUssa0JBSmlFO0FBQUEsTUFJN0NDLHFCQUo2Qzs7QUFBQSxtQkFPM0JOLHNEQUFRLENBQUMsSUFBRCxDQVBtQjtBQUFBLE1BT2pFTyxlQVBpRTtBQUFBLE1BT2pEQyxrQkFQaUQ7O0FBU3hFLFdBQVNDLE9BQVQsR0FBa0I7QUFDZFAsWUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0g7O0FBRUQsV0FBU1MsaUJBQVQsR0FBNEI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxRQUFNQyxvQkFBb0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFlQyw2Q0FBVSxDQUFDQyxNQUFyQyxDQUE3QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0YsNkNBQVUsQ0FBQ0osb0JBQUQsQ0FBNUI7QUFFQUwsc0JBQWtCLENBQUNXLFNBQUQsQ0FBbEI7QUFFSDs7QUFFRCxXQUFTQyxjQUFULEdBQXlCO0FBQ3JCWixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0g7O0FBS0Qsc0JBQ0kscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDQSxTQUFLLEVBQUc7QUFDQVAsV0FBSyxFQUFMQSxLQURBO0FBRUFRLGFBQU8sRUFBUEEsT0FGQTtBQUdBTix1QkFBaUIsRUFBakJBLGlCQUhBO0FBSUFFLHdCQUFrQixFQUFsQkEsa0JBSkE7QUFLQUssdUJBQWlCLEVBQWpCQSxpQkFMQTtBQU1BSCxxQkFBZSxFQUFmQSxlQU5BO0FBT0FhLG9CQUFjLEVBQWRBO0FBUEEsS0FEUjtBQUFBLGNBWUtyQjtBQVpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDs7R0E3Q2VELGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNmYxNTEwOTVjNjMxYWZiYzIzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9ZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXtcclxuICAgIHR5cGU6ICdib2R5JyB8ICd5ZXknO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhe1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDsgXHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTsgICBcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkOyAgIFxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHN7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKCB7IGNoaWxkcmVuIH0gOiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyApe1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZUNvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSxzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpe1xyXG4gICAgICAgIHNldExldmVsKGxldmVsICsgMSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyBjaGFsbGVuZycpO1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICB2YWx1ZT17IHtcclxuICAgICAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbGxlbmdlQ29tcGxldGVkLFxyXG4gICAgICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsICAgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsICAgXHJcbiAgICAgICAgICAgICAgICByZXNldENoYWxsZW5nZSwgICAgIFxyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=