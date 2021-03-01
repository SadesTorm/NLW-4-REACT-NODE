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
/* harmony import */ var D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");



var _jsxFileName = "D:\\Projetos Rocketseat\\NLW-4-REACT-NODE\\Trilha-React\\health-ten-next\\src\\contexts\\ChallengesContext.tsx",
    _s = $RefreshSig$();





var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
/*
rest = (rest operator ) 
objetivo=> pegar todo o resto da propriedade e utilizar em rest (como se fosse um objeto)
*/

function ChallengesProvider(_ref) {
  _s();

  var _rest$level, _rest$currentExperien, _rest$challengeComple;

  var children = _ref.children,
      rest = Object(D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$challengeComple = rest.challengeCompleted) !== null && _rest$challengeComple !== void 0 ? _rest$challengeComple : 0),
      challengeCompleted = _useState3[0],
      setChallengeCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLevelUpModalOpen = _useState5[0],
      setIsLevelUpModalOpen = _useState5[1]; // calculo de level baseado no calculo de rpg


  var experienceToNextLevel = Math.pow((level + 1) * 4, 2); // array vazio a function e executada apaenas uma vez quando componete for exibido em tela

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengeCompleted', String(challengeCompleted));
  }, [level, currentExperience, challengeCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function startNewChallenge() {
    console.log('new challeng');
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: "Valendo ".concat(challenge.amount, "xp!")
      });
    }

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
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 36
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 9
  }, this);
}

_s(ChallengesProvider, "G44bLo1+3xjuOOrPwJAnROAe7hw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbFVwTW9kYWxPcGVuIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZWRDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE4Qk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTQyxrQkFBVCxPQUE0RTtBQUFBOztBQUFBOztBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFq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Rix5QkFBcUIsQ0FBQ0Qsa0JBQWtCLEdBQUcsQ0FBdEIsQ0FBckI7QUFHSDs7QUFLRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNJLFNBQUssRUFBRTtBQUNISixXQUFLLEVBQUxBLEtBREc7QUFFSG1CLGFBQU8sRUFBUEEsT0FGRztBQUdIakIsdUJBQWlCLEVBQWpCQSxpQkFIRztBQUlIRSx3QkFBa0IsRUFBbEJBLGtCQUpHO0FBS0hnQix1QkFBaUIsRUFBakJBLGlCQUxHO0FBTUhkLHFCQUFlLEVBQWZBLGVBTkc7QUFPSDRCLG9CQUFjLEVBQWRBLGNBUEc7QUFRSHhCLDJCQUFxQixFQUFyQkEscUJBUkc7QUFTSHlCLHdCQUFrQixFQUFsQkE7QUFURyxLQURYO0FBQUEsZUFjS3RDLFFBZEwsRUFlS1csa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0dBbkdlWixrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MDIyOThmNmJmZjYyOTQyODkwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcbmltcG9ydCB7IExldmVsVXBNb2RhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsJztcclxuXHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICAgIHR5cGU6ICdib2R5JyB8ICd5ZXknO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZUNvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgICBjb21wbGV0ZWRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW5cclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxuICAgIGxldmVsOiBudW1iZXIsXHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyLFxyXG4gICAgY2hhbGxlbmdlQ29tcGxldGVkOiBudW1iZXJcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbi8qXHJcbnJlc3QgPSAocmVzdCBvcGVyYXRvciApIFxyXG5vYmpldGl2bz0+IHBlZ2FyIHRvZG8gbyByZXN0byBkYSBwcm9wcmllZGFkZSBlIHV0aWxpemFyIGVtIHJlc3QgKGNvbW8gc2UgZm9zc2UgdW0gb2JqZXRvKVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMCk7XHJcbiAgICBjb25zdCBbY2hhbGxlbmdlQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VDb21wbGV0ZWRdID0gdXNlU3RhdGUocmVzdC5jaGFsbGVuZ2VDb21wbGV0ZWQgPz8gMCk7XHJcblxyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpc0xldmVsVXBNb2RhbE9wZW4sc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcblxyXG4gICAgLy8gY2FsY3VsbyBkZSBsZXZlbCBiYXNlYWRvIG5vIGNhbGN1bG8gZGUgcnBnXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG5cclxuICAgIC8vIGFycmF5IHZhemlvIGEgZnVuY3Rpb24gZSBleGVjdXRhZGEgYXBhZW5hcyB1bWEgdmV6IHF1YW5kbyBjb21wb25ldGUgZm9yIGV4aWJpZG8gZW0gdGVsYVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY3VycmVudEV4cGVyaWVuY2UnLCBTdHJpbmcoY3VycmVudEV4cGVyaWVuY2UpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY2hhbGxlbmdlQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZUNvbXBsZXRlZCkpO1xyXG5cclxuICAgIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZUNvbXBsZXRlZF0pXHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgY2hhbGxlbmcnKTtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8nLCB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9eHAhYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlZENoYWxsZW5nZSgpIHtcclxuICAgICAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuXHJcbiAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG5cclxuICAgICAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xyXG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgIHNldENoYWxsZW5nZUNvbXBsZXRlZChjaGFsbGVuZ2VDb21wbGV0ZWQgKyAxKTtcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbGxlbmdlQ29tcGxldGVkLFxyXG4gICAgICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZENoYWxsZW5nZSxcclxuICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIHtpc0xldmVsVXBNb2RhbE9wZW4gJiYgPExldmVsVXBNb2RhbCAvPn1cclxuICAgICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=