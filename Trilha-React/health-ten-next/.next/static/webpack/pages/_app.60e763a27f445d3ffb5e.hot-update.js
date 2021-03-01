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
      completedChallenge: completedChallenge,
      setIsLevelUpModalOpen: setIsLevelUpModalOpen
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 36
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbFVwTW9kYWxPcGVuIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZWRDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE4Qk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTQyxrQkFBVCxPQUE0RTtBQUFBOztBQUFBOztBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFq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Rix5QkFBcUIsQ0FBQ0Qsa0JBQWtCLEdBQUcsQ0FBdEIsQ0FBckI7QUFHSDs7QUFLRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNJLFNBQUssRUFBRTtBQUNISixXQUFLLEVBQUxBLEtBREc7QUFFSG1CLGFBQU8sRUFBUEEsT0FGRztBQUdIakIsdUJBQWlCLEVBQWpCQSxpQkFIRztBQUlIRSx3QkFBa0IsRUFBbEJBLGtCQUpHO0FBS0hnQix1QkFBaUIsRUFBakJBLGlCQUxHO0FBTUhkLHFCQUFlLEVBQWZBLGVBTkc7QUFPSDRCLG9CQUFjLEVBQWRBLGNBUEc7QUFRSHhCLDJCQUFxQixFQUFyQkEscUJBUkc7QUFTSHlCLHdCQUFrQixFQUFsQkEsa0JBVEc7QUFVSDFCLDJCQUFxQixFQUFyQkE7QUFWRyxLQURYO0FBQUEsZUFlS1osUUFmTCxFQWdCS1csa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQXJHZVosa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjBlNzYzYTI3ZjQ0NWQzZmZiNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOiAnYm9keScgfCAneWV5JztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VDb21wbGV0ZWQ6IG51bWJlcjtcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG4gICAgbGV2ZWw6IG51bWJlcixcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXIsXHJcbiAgICBjaGFsbGVuZ2VDb21wbGV0ZWQ6IG51bWJlclxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuLypcclxucmVzdCA9IChyZXN0IG9wZXJhdG9yICkgXHJcbm9iamV0aXZvPT4gcGVnYXIgdG9kbyBvIHJlc3RvIGRhIHByb3ByaWVkYWRlIGUgdXRpbGl6YXIgZW0gcmVzdCAoY29tbyBzZSBmb3NzZSB1bSBvYmpldG8pXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VDb21wbGV0ZWQsIHNldENoYWxsZW5nZUNvbXBsZXRlZF0gPSB1c2VTdGF0ZShyZXN0LmNoYWxsZW5nZUNvbXBsZXRlZCA/PyAwKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3BlbixzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuXHJcbiAgICAvLyBjYWxjdWxvIGRlIGxldmVsIGJhc2VhZG8gbm8gY2FsY3VsbyBkZSBycGdcclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XHJcblxyXG4gICAgLy8gYXJyYXkgdmF6aW8gYSBmdW5jdGlvbiBlIGV4ZWN1dGFkYSBhcGFlbmFzIHVtYSB2ZXogcXVhbmRvIGNvbXBvbmV0ZSBmb3IgZXhpYmlkbyBlbSB0ZWxhXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VDb21wbGV0ZWQnLCBTdHJpbmcoY2hhbGxlbmdlQ29tcGxldGVkKSk7XHJcblxyXG4gICAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlQ29tcGxldGVkXSlcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgICAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RhbCgpXHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyBjaGFsbGVuZycpO1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG5cclxuICAgICAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xyXG4gICAgICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XHJcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05vdm8gZGVzYWZpbycsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGxldGVkQ2hhbGxlbmdlKCkge1xyXG4gICAgICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcblxyXG4gICAgICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XHJcbiAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICAgICAgc2V0Q2hhbGxlbmdlQ29tcGxldGVkKGNoYWxsZW5nZUNvbXBsZXRlZCArIDEpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgICAgICBjaGFsbGVuZ2VDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuLFxyXG4gICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAge2lzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==