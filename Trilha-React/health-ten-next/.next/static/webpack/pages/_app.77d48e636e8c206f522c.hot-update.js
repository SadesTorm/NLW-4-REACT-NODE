webpackHotUpdate_N_E("pages/_app",{

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
    lineNumber: 65,
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

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");


var _jsxFileName = "D:\\Projetos Rocketseat\\NLW-4-REACT-NODE\\Trilha-React\\health-ten-next\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__["ChallengesProvider"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_4__["CountdownProvider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQ293bnRvZG93bkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmVzaGQiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImNvdW50ZG93blRpbWVvdXQiLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInN0YXJ0Q291bnRkb3duIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBbUJPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0MsaUJBQVQsT0FBb0U7QUFBQTs7QUFBQSxNQUF0Q0MsUUFBc0MsUUFBdENBLFFBQXNDOztBQUV2RTtBQUZ1RSxvQkFHekNDLHdEQUFVLENBQUNDLG9FQUFELENBSCtCO0FBQUEsTUFHL0RDLGlCQUgrRCxlQUcvREEsaUJBSCtEOztBQUFBLGtCQUtoREMsc0RBQVEsQ0FBQyxPQUFPLEVBQVIsQ0FMd0M7QUFBQSxNQUtoRUMsSUFMZ0U7QUFBQSxNQUszREMsT0FMMkQ7O0FBQUEsbUJBTXhDRixzREFBUSxDQUFDLEtBQUQsQ0FOZ0M7QUFBQSxNQU1oRUcsUUFOZ0U7QUFBQSxNQU12REMsV0FOdUQ7O0FBQUEsbUJBT2xDSixzREFBUSxDQUFDLEtBQUQsQ0FQMEI7QUFBQSxNQU9oRUssV0FQZ0U7QUFBQSxNQU9uREMsYUFQbUQ7O0FBU3ZFLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLElBQUksR0FBRyxFQUFsQixDQUFoQjtBQUNBLE1BQU1TLE9BQU8sR0FBR1QsSUFBSSxHQUFHLEVBQXZCO0FBRUEsTUFBSVUsZ0JBQUo7O0FBRUEsV0FBU0MsY0FBVCxHQUF5QjtBQUVyQkMsZ0JBQVksQ0FBQ0YsZ0JBQUQsQ0FBWjtBQUNBUCxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FGLFdBQU8sQ0FBQyxPQUFPLEVBQVIsQ0FBUDtBQUVIOztBQUVELFdBQVNZLGNBQVQsR0FBeUI7QUFDckJWLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFFSDs7QUFFRFcseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR1osUUFBUSxJQUFJRixJQUFJLEdBQUcsQ0FBdEIsRUFBd0I7QUFDaEJVLHNCQUFnQixHQUFHSyxVQUFVLENBQUMsWUFBSTtBQUNsQ2QsZUFBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0gsT0FGZ0MsRUFFOUIsSUFGOEIsQ0FBN0I7QUFHUCxLQUpELE1BSU0sSUFBR0UsUUFBUSxJQUFJRixJQUFJLElBQUksQ0FBdkIsRUFBeUI7QUFDM0JnQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FaLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FGLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FMLHVCQUFpQjtBQUNwQjtBQUVKLEdBWlEsRUFZTixDQUFDSSxRQUFELEVBQVVGLElBQVYsQ0FaTSxDQUFUO0FBY0Esc0JBQ0kscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDQSxTQUFLLEVBQUU7QUFDSFcsb0JBQWMsRUFBZEEsY0FERztBQUVIRSxvQkFBYyxFQUFkQSxjQUZHO0FBR0hDLGVBQVMsRUFBVEEsK0NBSEc7QUFJSFIsYUFBTyxFQUFQQSxPQUpHO0FBS0hHLGFBQU8sRUFBUEEsT0FMRztBQU1ITCxpQkFBVyxFQUFYQSxXQU5HO0FBT0hGLGNBQVEsRUFBUkE7QUFQRyxLQURQO0FBQUEsY0FZS1A7QUFaTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBekRlRCxpQjs7S0FBQUEsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJoQjtBQUVBO0FBQ0E7O0FBRUEsU0FBU3dCLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBRXZDLHNCQUdFLHFFQUFDLDhFQUFEO0FBQUEsNEJBRUUscUVBQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBTUkscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSEY7QUFnQkQ7O0tBbEJRRixLO0FBb0JNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc3ZDQ4ZTYzNmU4YzIwNmY1MjJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENvd250b2Rvd25Db250ZXh0RGF0YXtcclxuXHJcbiAgICByZXNldENvdW50ZG93bjogKCkgPT4gdm9pZCxcclxuICAgIHN0YXJ0Q291bnRkb3duOiAoKSA9PiB2b2lkLFxyXG4gICAgdXNlRWZmZWN0LFxyXG4gICAgbWludXRlczogbnVtYmVyLFxyXG4gICAgc2Vjb25kczogbnVtYmVyLFxyXG4gICAgaGFzRmluaXNoZWQ6IGJvb2xlYW4sXHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhblxyXG5cclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBDb3dudG9kb3duUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvd250b2Rvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3dudG9kb3duQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93blByb3ZpZGVyKCB7IGNoaWxkcmVuIH0gOiBDb3dudG9kb3duUHJvdmlkZXJQcm9wcyApe1xyXG5cclxuICAgIC8vcGVnYW5kbyB2YWxvcmVzIGRlIG91dHJvcyBjb21wb25ldHNcclxuICAgIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbdGltZSxzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMDUgKiA2MCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5lc2hkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuXHJcbiAgICBsZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKXtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpO1xyXG4gICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICBzZXRUaW1lKDAuMDUgKiA2MCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCl7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpc0FjdGl2ZSAmJiB0aW1lID4gMCl7XHJcbiAgICAgICAgICAgICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZSh0aW1lIC0gMSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfWVsc2UgaWYoaXNBY3RpdmUgJiYgdGltZSA9PSAwKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbmFsaXpvdScpO1xyXG4gICAgICAgICAgICBzZXRIYXNGaW5lc2hkKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSwgW2lzQWN0aXZlLHRpbWVdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q293bnRvZG93bkNvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgcmVzZXRDb3VudGRvd24sXHJcbiAgICAgICAgICAgIHN0YXJ0Q291bnRkb3duLFxyXG4gICAgICAgICAgICB1c2VFZmZlY3QsXHJcbiAgICAgICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZSxcclxuXHJcbiAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0Nvd250b2Rvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XG5pbXBvcnQgeyBDb3VudGRvd25Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgXG4gIHJldHVybiAoXG4gIFxuXG4gICAgPENoYWxsZW5nZXNQcm92aWRlcj5cblxuICAgICAgPENvdW50ZG93blByb3ZpZGVyPlxuICAgICAgICBcbiAgICAgIDwvQ291bnRkb3duUHJvdmlkZXI+XG5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ2hhbGxlbmdlc1Byb3ZpZGVyPlxuICBcblxuXG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==