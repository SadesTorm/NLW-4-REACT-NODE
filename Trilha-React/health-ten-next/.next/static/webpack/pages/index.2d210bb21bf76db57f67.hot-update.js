webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Countdown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Countdown_countdownContainer__3pqLs{\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Rajdhani;\r\n    font-weight: 600;\r\n    color: var(--title);\r\n}\r\n\r\n.Countdown_countdownContainer__3pqLs > div{\r\n    flex: 1 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    background: var(--white);\r\n    box-shadow: 0 0 60px rgba(0,0,0, 0.5);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.Countdown_countdownContainer__3pqLs > div span{\r\n    flex: 1 1;\r\n}\r\n.Countdown_countdownContainer__3pqLs > div span{\r\n    border-right: 1px solid #f0f1f3;\r\n}\r\n.Countdown_countdownContainer__3pqLs > div span{\r\n    border-left: 1px solid #f0f1f3;\r\n}\r\n\r\n.Countdown_countdownContainer__3pqLs > span{\r\n    font-size: 6.25rem;\r\n    margin: 0 0.5rem;\r\n}\r\n\r\n.Countdown_countdownButton__2cSHU{\r\n    width: 100%;\r\n    height: 5rem;\r\n\r\n    margin-top: 2rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: var(--blue);\r\n    color: var(--white);\r\n\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.Countdown_countdownButton__2cSHU:not(:disable):hover{\r\n    background: var(--blue-dark);\r\n}\r\n\r\n.Countdown_countdownButtonStop__1R33M{\r\n \r\n    background: var(--white);\r\n    color: var(--title);\r\n\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.Countdown_countdownButtonStop__1R33M:hover{\r\n    background: var(--red);\r\n    color: var(--white)\r\n}\r\n\r\n.Countdown_countdownButtonFinish__1BuzL{\r\n    \r\n    background: var(--green);\r\n    color: var(--white);\r\n    transition: background-color 0.3;\r\n}\r\n\r\n.Countdown_countdownButtonFinish__1BuzL:hover{\r\n    background: var(--green);\r\n    color: var(--white)\r\n}", "",{"version":3,"sources":["webpack://src/styles/components/Countdown.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,SAAO;IACP,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,wBAAwB;IACxB,qCAAqC;IACrC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,SAAO;AACX;AACA;IACI,+BAA+B;AACnC;AACA;IACI,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,gBAAgB;;IAEhB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;;IAEnB,kBAAkB;IAClB,gBAAgB;;IAEhB,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;;IAEI,wBAAwB;IACxB,mBAAmB;;IAEnB,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;IACtB;AACJ;;AAEA;;IAEI,wBAAwB;IACxB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;IACxB;AACJ","sourcesContent":[".countdownContainer{\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: Rajdhani;\r\n    font-weight: 600;\r\n    color: var(--title);\r\n}\r\n\r\n.countdownContainer > div{\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n    background: var(--white);\r\n    box-shadow: 0 0 60px rgba(0,0,0, 0.5);\r\n    border-radius: 5px;\r\n    font-size: 8.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.countdownContainer > div span{\r\n    flex: 1;\r\n}\r\n.countdownContainer > div span{\r\n    border-right: 1px solid #f0f1f3;\r\n}\r\n.countdownContainer > div span{\r\n    border-left: 1px solid #f0f1f3;\r\n}\r\n\r\n.countdownContainer > span{\r\n    font-size: 6.25rem;\r\n    margin: 0 0.5rem;\r\n}\r\n\r\n.countdownButton{\r\n    width: 100%;\r\n    height: 5rem;\r\n\r\n    margin-top: 2rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: var(--blue);\r\n    color: var(--white);\r\n\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.countdownButton:not(:disable):hover{\r\n    background: var(--blue-dark);\r\n}\r\n\r\n.countdownButtonStop{\r\n \r\n    background: var(--white);\r\n    color: var(--title);\r\n\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.countdownButtonStop:hover{\r\n    background: var(--red);\r\n    color: var(--white)\r\n}\r\n\r\n.countdownButtonFinish{\r\n    \r\n    background: var(--green);\r\n    color: var(--white);\r\n    transition: background-color 0.3;\r\n}\r\n\r\n.countdownButtonFinish:hover{\r\n    background: var(--green);\r\n    color: var(--white)\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"countdownContainer": "Countdown_countdownContainer__3pqLs",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"countdownButtonStop": "Countdown_countdownButtonStop__1R33M",
	"countdownButtonFinish": "Countdown_countdownButtonFinish__1BuzL"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx3Q0FBd0Msc0JBQXNCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLDRCQUE0QixLQUFLLG1EQUFtRCxrQkFBa0Isc0JBQXNCLDRCQUE0QixzQ0FBc0MscUNBQXFDLDhDQUE4QywyQkFBMkIsMEJBQTBCLDJCQUEyQixLQUFLLHdEQUF3RCxrQkFBa0IsS0FBSyxvREFBb0Qsd0NBQXdDLEtBQUssb0RBQW9ELHVDQUF1QyxLQUFLLG9EQUFvRCwyQkFBMkIseUJBQXlCLEtBQUssMENBQTBDLG9CQUFvQixxQkFBcUIsNkJBQTZCLDBCQUEwQiw0QkFBNEIsZ0NBQWdDLGdDQUFnQyw0QkFBNEIsK0JBQStCLHlCQUF5Qiw4Q0FBOEMsS0FBSyw4REFBOEQscUNBQXFDLEtBQUssOENBQThDLHNDQUFzQyw0QkFBNEIsOENBQThDLEtBQUssb0RBQW9ELCtCQUErQixnQ0FBZ0MsZ0RBQWdELHlDQUF5Qyw0QkFBNEIseUNBQXlDLEtBQUssc0RBQXNELGlDQUFpQyxnQ0FBZ0MsT0FBTywyR0FBMkcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sNkNBQTZDLHNCQUFzQiw0QkFBNEIsOEJBQThCLHlCQUF5Qiw0QkFBNEIsS0FBSyxrQ0FBa0MsZ0JBQWdCLHNCQUFzQiw0QkFBNEIsc0NBQXNDLHFDQUFxQyw4Q0FBOEMsMkJBQTJCLDBCQUEwQiwyQkFBMkIsS0FBSyx1Q0FBdUMsZ0JBQWdCLEtBQUssbUNBQW1DLHdDQUF3QyxLQUFLLG1DQUFtQyx1Q0FBdUMsS0FBSyxtQ0FBbUMsMkJBQTJCLHlCQUF5QixLQUFLLHlCQUF5QixvQkFBb0IscUJBQXFCLDZCQUE2QiwwQkFBMEIsNEJBQTRCLGdDQUFnQyxnQ0FBZ0MsNEJBQTRCLCtCQUErQix5QkFBeUIsOENBQThDLEtBQUssNkNBQTZDLHFDQUFxQyxLQUFLLDZCQUE2QixzQ0FBc0MsNEJBQTRCLDhDQUE4QyxLQUFLLG1DQUFtQywrQkFBK0IsZ0NBQWdDLCtCQUErQix5Q0FBeUMsNEJBQTRCLHlDQUF5QyxLQUFLLHFDQUFxQyxpQ0FBaUMsZ0NBQWdDLG1CQUFtQjtBQUNuMUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZDIxMGJiMjFiZjc2ZGI1N2Y2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvdW50ZG93bl9jb3VudGRvd25Db250YWluZXJfXzNwcUxze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogUmFqZGhhbmk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxyXFxufVxcclxcblxcclxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdntcXHJcXG4gICAgZmxleDogMSAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsMCwwLCAwLjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogOC41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiBzcGFue1xcclxcbiAgICBmbGV4OiAxIDE7XFxyXFxufVxcclxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiBzcGFue1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcclxcbn1cXHJcXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYgc3BhbntcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBzcGFue1xcclxcbiAgICBmb250LXNpemU6IDYuMjVyZW07XFxyXFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVOm5vdCg6ZGlzYWJsZSk6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uU3RvcF9fMVIzM017XFxyXFxuIFxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25TdG9wX18xUjMzTTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKVxcclxcbn1cXHJcXG5cXHJcXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkZpbmlzaF9fMUJ1ekx7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zO1xcclxcbn1cXHJcXG5cXHJcXG4uQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkZpbmlzaF9fMUJ1ekw6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2Qjs7SUFFN0Isd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQU87QUFDWDtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsZ0JBQWdCOztJQUVoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLG1CQUFtQjs7SUFFbkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnRkb3duQ29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogUmFqZGhhbmk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxyXFxufVxcclxcblxcclxcbi5jb3VudGRvd25Db250YWluZXIgPiBkaXZ7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwwLDAsIDAuNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiA4LjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFue1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW57XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxyXFxufVxcclxcbi5jb3VudGRvd25Db250YWluZXIgPiBkaXYgc3BhbntcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQ29udGFpbmVyID4gc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQnV0dG9ue1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQnV0dG9uOm5vdCg6ZGlzYWJsZSk6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5jb3VudGRvd25CdXR0b25TdG9we1xcclxcbiBcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jb3VudGRvd25CdXR0b25TdG9wOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpXFxyXFxufVxcclxcblxcclxcbi5jb3VudGRvd25CdXR0b25GaW5pc2h7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duQnV0dG9uRmluaXNoOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSlcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY291bnRkb3duQ29udGFpbmVyXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHNcIixcblx0XCJjb3VudGRvd25CdXR0b25cIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVVwiLFxuXHRcImNvdW50ZG93bkJ1dHRvblN0b3BcIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uU3RvcF9fMVIzM01cIixcblx0XCJjb3VudGRvd25CdXR0b25GaW5pc2hcIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uRmluaXNoX18xQnV6TFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=