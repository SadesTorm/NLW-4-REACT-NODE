webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
false,

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
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "D:\\Projetos Rocketseat\\NLW-4-REACT-NODE\\Trilha-React\\health-ten-next\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();





var countdownTimeout;
function Countdown() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_4__["CowntodownContext"]),
      resetCountdown = _useContext.resetCountdown;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0.05 * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFineshd = _useState3[1];

  var minutes = Math.floor(time / 60);
  var seconds = time % 60; //se a string so conter um caracter, pega o começo e add o 0 (padStart) depois divide (.split(''))

  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRigth = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRigth = _String$padStart$spli4[1]; //pegando valores de outros componets


  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__["ChallengesContext"]),
      startNewChallenge = _useContext2.startNewChallenge;
  /*function resetCountdown(){
        clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(0.05 * 60);
    }*/


  function startCountdown() {
    setIsActive(true);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRigth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRigth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }, this) : isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownButton, " ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownButtonStop),
      onClick: resetCountdown,
      children: "Abandonar ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.countdownButton,
      onClick: startCountdown,
      children: "Iniciar um ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

_s(Countdown, "aVxT3y5A4uvYF70gKTeegTYm86s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCJdLCJuYW1lcyI6WyJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duIiwidXNlQ29udGV4dCIsIkNvd250b2Rvd25Db250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImhhc0ZpbmlzaGVkIiwic2V0SGFzRmluZXNoZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWd0aCIsInNlY29uZExlZnQiLCJzZWNvbmRSaWd0aCIsIkNoYWxsZW5nZXNDb250ZXh0Iiwic3RhcnROZXdDaGFsbGVuZ2UiLCJzdGFydENvdW50ZG93biIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIiwiY291bnRkb3duQnV0dG9uU3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxnQkFBSjtBQUVPLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxvQkFFR0Msd0RBQVUsQ0FBQ0MsNEVBQUQsQ0FGYjtBQUFBLE1BRWhCQyxjQUZnQixlQUVoQkEsY0FGZ0I7O0FBQUEsa0JBSURDLHNEQUFRLENBQUMsT0FBTyxFQUFSLENBSlA7QUFBQSxNQUlqQkMsSUFKaUI7QUFBQSxNQUlaQyxPQUpZOztBQUFBLG1CQUtPRixzREFBUSxDQUFDLEtBQUQsQ0FMZjtBQUFBLE1BS2pCRyxRQUxpQjtBQUFBLE1BS1JDLFdBTFE7O0FBQUEsbUJBTWFKLHNEQUFRLENBQUMsS0FBRCxDQU5yQjtBQUFBLE1BTWpCSyxXQU5pQjtB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eEIsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YjIyMjA0MDZhOGQ4YmY4MzBjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0JztcclxuaW1wb3J0IHsgQ293bnRvZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcyc7XHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCkge1xyXG5cclxuICAgIGNvbnN0IHsgcmVzZXRDb3VudGRvd24gfSA9IHVzZUNvbnRleHQoQ293bnRvZG93bkNvbnRleHQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMDUgKiA2MCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5lc2hkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuXHJcbiAgICAvL3NlIGEgc3RyaW5nIHNvIGNvbnRlciB1bSBjYXJhY3RlciwgcGVnYSBvIGNvbWXDp28gZSBhZGQgbyAwIChwYWRTdGFydCkgZGVwb2lzIGRpdmlkZSAoLnNwbGl0KCcnKSlcclxuICAgIGNvbnN0IFttaW51dGVMZWZ0LG1pbnV0ZVJpZ3RoXSA9IFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCcwJykuc3BsaXQoJycpO1xyXG4gICAgY29uc3QgW3NlY29uZExlZnQsc2Vjb25kUmlndGhdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsJzAnKS5zcGxpdCgnJyk7XHJcblxyXG4gICAgLy9wZWdhbmRvIHZhbG9yZXMgZGUgb3V0cm9zIGNvbXBvbmV0c1xyXG4gICAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcblxyXG5cclxuICAgIC8qZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKXtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpO1xyXG4gICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICBzZXRUaW1lKDAuMDUgKiA2MCk7XHJcblxyXG4gICAgfSovXHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpe1xyXG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNBY3RpdmUgJiYgdGltZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH1lbHNlIGlmKGlzQWN0aXZlICYmIHRpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaW5hbGl6b3UnKTtcclxuICAgICAgICAgICAgc2V0SGFzRmluZXNoZCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sIFtpc0FjdGl2ZSx0aW1lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlUmlndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgeyBoYXNGaW5pc2hlZCA/IChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgQ2ljbG8gZW5jZXJyYWRvICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICBpc0FjdGl2ZSA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gJHtzdHlsZXMuY291bnRkb3duQnV0dG9uU3RvcH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRDb3VudGRvd259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICBBYmFuZG9uYXIgY2ljbG9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydENvdW50ZG93bn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBJbmljaWFyIHVtIGNpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9