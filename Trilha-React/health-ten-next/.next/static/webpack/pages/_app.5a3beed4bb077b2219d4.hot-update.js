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

  function SetLevelUpModalOpen() {
    setIsLevelUpModalOpen(false);
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
      lineNumber: 140,
      columnNumber: 36
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbFVwTW9kYWxPcGVuIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJTZXRMZXZlbFVwTW9kYWxPcGVuIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJjb25zb2xlIiwibG9nIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVkQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBOEJPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0Msa0JBQVQsT0FBNEU7QUFBQTs7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMs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Q0FTLGFBQU87QUFDVjs7QUFFRGhCLHdCQUFvQixDQUFDa0MsZUFBRCxDQUFwQjtBQUNBOUIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRix5QkFBcUIsQ0FBQ0Qsa0JBQWtCLEdBQUcsQ0FBdEIsQ0FBckI7QUFHSDs7QUFLRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNJLFNBQUssRUFBRTtBQUNISixXQUFLLEVBQUxBLEtBREc7QUFFSG1CLGFBQU8sRUFBUEEsT0FGRztBQUdIakIsdUJBQWlCLEVBQWpCQSxpQkFIRztBQUlIRSx3QkFBa0IsRUFBbEJBLGtCQUpHO0FBS0hpQix1QkFBaUIsRUFBakJBLGlCQUxHO0FBTUhmLHFCQUFlLEVBQWZBLGVBTkc7QUFPSDZCLG9CQUFjLEVBQWRBLGNBUEc7QUFRSHpCLDJCQUFxQixFQUFyQkEscUJBUkc7QUFTSDBCLHdCQUFrQixFQUFsQkEsa0JBVEc7QUFVSDNCLDJCQUFxQixFQUFyQkE7QUFWRyxLQURYO0FBQUEsZUFlS1osUUFmTCxFQWdCS1csa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQXZHZVosa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWEzYmVlZDRiYjA3N2IyMjE5ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOiAnYm9keScgfCAneWV5JztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VDb21wbGV0ZWQ6IG51bWJlcjtcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgY29tcGxldGVkQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG4gICAgbGV2ZWw6IG51bWJlcixcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXIsXHJcbiAgICBjaGFsbGVuZ2VDb21wbGV0ZWQ6IG51bWJlclxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuLypcclxucmVzdCA9IChyZXN0IG9wZXJhdG9yICkgXHJcbm9iamV0aXZvPT4gcGVnYXIgdG9kbyBvIHJlc3RvIGRhIHByb3ByaWVkYWRlIGUgdXRpbGl6YXIgZW0gcmVzdCAoY29tbyBzZSBmb3NzZSB1bSBvYmpldG8pXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VDb21wbGV0ZWQsIHNldENoYWxsZW5nZUNvbXBsZXRlZF0gPSB1c2VTdGF0ZShyZXN0LmNoYWxsZW5nZUNvbXBsZXRlZCA/PyAwKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3BlbixzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuXHJcbiAgICAvLyBjYWxjdWxvIGRlIGxldmVsIGJhc2VhZG8gbm8gY2FsY3VsbyBkZSBycGdcclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XHJcblxyXG4gICAgLy8gYXJyYXkgdmF6aW8gYSBmdW5jdGlvbiBlIGV4ZWN1dGFkYSBhcGFlbmFzIHVtYSB2ZXogcXVhbmRvIGNvbXBvbmV0ZSBmb3IgZXhpYmlkbyBlbSB0ZWxhXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VDb21wbGV0ZWQnLCBTdHJpbmcoY2hhbGxlbmdlQ29tcGxldGVkKSk7XHJcblxyXG4gICAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlQ29tcGxldGVkXSlcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgICAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBTZXRMZXZlbFVwTW9kYWxPcGVuKCl7XHJcbiAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IGNoYWxsZW5nJyk7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XHJcblxyXG4gICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcbiAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvJywge1xyXG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZWRDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcclxuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VDb21wbGV0ZWQoY2hhbGxlbmdlQ29tcGxldGVkICsgMSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICAgICAgICAgIGNoYWxsZW5nZUNvbXBsZXRlZCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWRDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4sXHJcbiAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICB7aXNMZXZlbFVwTW9kYWxPcGVuICYmIDxMZXZlbFVwTW9kYWwgLz59XHJcbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9