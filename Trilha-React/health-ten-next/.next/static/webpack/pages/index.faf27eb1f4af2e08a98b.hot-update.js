webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\Projetos Rocketseat\\NLW-4-REACT-NODE\\Trilha-React\\health-ten-next\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();




function Countdown() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CowntodownContext"]),
      resetCountdown = _useContext.resetCountdown,
      minutes = _useContext.minutes,
      seconds = _useContext.seconds,
      isActive = _useContext.isActive,
      hasFinished = _useContext.hasFinished,
      startCountdown = _useContext.startCountdown; //se a string so conter um caracter, pega o começo e add o 0 (padStart) depois divide (.split(''))


  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRigth = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(D_Projetos_Rocketseat_NLW_4_REACT_NODE_Trilha_React_health_ten_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRigth = _String$padStart$spli4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRigth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRigth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }, this) : isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, " ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonStop),
      onClick: resetCountdown,
      children: "Abandonar ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      onClick: startCountdown,
      children: "Iniciar um ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

_s(Countdown, "bSaM2XzefzkyxpkUT4OCaARnY2Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCJdLCJuYW1lcyI6WyJDb3VudGRvd24iLCJ1c2VDb250ZXh0IiwiQ293bnRvZG93bkNvbnRleHQiLCJyZXNldENvdW50ZG93biIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInN0YXJ0Q291bnRkb3duIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWd0aCIsInNlY29uZExlZnQiLCJzZWNvbmRSaWd0aCIsInN0eWxlcyIsImNvdW50ZG93bkNvbnRhaW5lciIsImNvdW50ZG93bkJ1dHRvbiIsImNvdW50ZG93bkJ1dHRvblN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSU8sU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLG9CQUd5Q0Msd0RBQVUsQ0FBQ0MsNEVBQUQsQ0FIbkQ7QUFBQSxNQUVoQkMsY0FGZ0IsZUFFaEJBLGNBRmdCO0FBQUEsTUFHbkJDLE9BSG1CLGVBR25CQSxPQUhtQjtBQUFBLE1BR1ZDLE9BSFUsZUFHVkEsT0FIVTtBQUFBLE1BR0RDLFFBSEMsZUFHREEsUUFIQztBQUFBLE1BR1NDLFdBSFQsZUFHU0EsV0FIVDtBQUFBLE1BR3NCQyxjQUh0QixlQUdzQkEsY0FIdEIsRUFJeEI7OztBQUp3Qiw4QkFLU0MsTUFBTSxDQUFDTCxPQUFELENBQU4sQ0FBZ0JNLFFBQWhCLENBQXlCLENBQXpCLEVBQTJCLEdBQTNCLEVBQWdDQyxLQUFoQyxDQUFzQyxFQUF0QyxDQUxUO0FBQUE7QUFBQSxNQUtqQkMsVUFMaUI7QUFBQSxNQUtOQyxXQUxNOztBQUFBLCtCQU1TSixNQUFNLENBQUNKLE9BQUQsQ0FBTixDQUFnQkssUUFBaEIsQ0FBeUIsQ0FBekIsRUFBMkIsR0FBM0IsRUFBZ0NDLEtBQWhDLENBQXNDLEVBQXRDLENBTlQ7QUFBQTtBQUFBLE1BTWpCRyxVQU5pQjtBQUFBLE1BTU5DLFdBTk07O0FBZ0J4QixzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQyw4RUFBTSxDQUFDQyxrQkFBdkI7QUFBQSw4QkFFSTtBQUFBLGdDQUNJO0FBQUEsb0JBQU9MO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUFBLGdDQUNJO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQWdCTVIsV0FBVyxnQkFFVDtBQUNBLGNBQVEsTUFEUjtBQUVBLGVBQVMsRUFBRVMsOEVBQU0sQ0FBQ0UsZUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUyxHQWFaWixRQUFRLGdCQUNMO0FBQ0EsVUFBSSxFQUFDLFFBREw7QUFFQSxlQUFTLFlBQUtVLDhFQUFNLENBQUNFLGVBQVosY0FBK0JGLDhFQUFNLENBQUNHLG1CQUF0QyxDQUZUO0FBR0EsYUFBTyxFQUFFaEIsY0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGdCQVlMO0FBQ0ksVUFBSSxFQUFDLFFBRFQ7QUFFSSxlQUFTLEVBQUVhLDhFQUFNLENBQUNFLGVBRnRCO0FBR0ksYUFBTyxFQUFFVixjQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMERIOztHQTFFZVIsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYWYyN2ViMWY0YWYyZTA4YTk4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvd250b2Rvd25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCkge1xyXG5cclxuICAgIGNvbnN0IHsgcmVzZXRDb3VudGRvd24sXHJcbiAgICAgICAgIG1pbnV0ZXMsIHNlY29uZHMsIGlzQWN0aXZlLCBoYXNGaW5pc2hlZCwgc3RhcnRDb3VudGRvd24gfSA9IHVzZUNvbnRleHQoQ293bnRvZG93bkNvbnRleHQpO1xyXG4gICAgLy9zZSBhIHN0cmluZyBzbyBjb250ZXIgdW0gY2FyYWN0ZXIsIHBlZ2EgbyBjb21lw6dvIGUgYWRkIG8gMCAocGFkU3RhcnQpIGRlcG9pcyBkaXZpZGUgKC5zcGxpdCgnJykpXHJcbiAgICBjb25zdCBbbWludXRlTGVmdCxtaW51dGVSaWd0aF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwnMCcpLnNwbGl0KCcnKTtcclxuICAgIGNvbnN0IFtzZWNvbmRMZWZ0LHNlY29uZFJpZ3RoXSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCcwJykuc3BsaXQoJycpO1xyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlUmlndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgeyBoYXNGaW5pc2hlZCA/IChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgQ2ljbG8gZW5jZXJyYWRvICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICBpc0FjdGl2ZSA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gJHtzdHlsZXMuY291bnRkb3duQnV0dG9uU3RvcH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRDb3VudGRvd259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICBBYmFuZG9uYXIgY2ljbG9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydENvdW50ZG93bn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBJbmljaWFyIHVtIGNpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9