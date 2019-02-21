module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  }, function (arg) {
    return arg;
  });
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: compose, withState, withHandlers, lifecycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "./src/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _withState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withState */ "./src/withState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withState", function() { return _withState__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _withHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withHandlers */ "./src/withHandlers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withHandlers", function() { return _withHandlers__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifecycle */ "./src/lifecycle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return _lifecycle__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/lifecycle.js":
/*!**************************!*\
  !*** ./src/lifecycle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* eslint "react/display-name": "off" */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var handlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    return function (props) {
      var actualizedHandlers = typeof handlers === 'function' ? handlers(props) : handlers;
      var _actualizedHandlers$c = actualizedHandlers.componentDidMount,
          componentDidMount = _actualizedHandlers$c === void 0 ? function () {} : _actualizedHandlers$c,
          _actualizedHandlers$c2 = actualizedHandlers.componentDidUpdate,
          componentDidUpdate = _actualizedHandlers$c2 === void 0 ? function () {} : _actualizedHandlers$c2,
          _actualizedHandlers$c3 = actualizedHandlers.componentWillUnmount,
          componentWillUnmount = _actualizedHandlers$c3 === void 0 ? function () {} : _actualizedHandlers$c3;
      var prevProps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props);
      var loadCounter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
      Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        componentDidMount(props);
        return componentWillUnmount(props);
      }, []);
      Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        loadCounter.current += 1;

        if (loadCounter.current === 1) {
          return;
        }

        componentDidUpdate(props, prevProps.current);
        prevProps.current = props;
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
    };
  };
});

/***/ }),

/***/ "./src/withHandlers.js":
/*!*****************************!*\
  !*** ./src/withHandlers.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (function (handlers) {
  return function (Component) {
    return function (props) {
      var actualizedHandlers = typeof handlers === 'function' ? handlers(props) : handlers;
      var handlersProps = Object.keys(actualizedHandlers).reduce(function (acc, key) {
        acc[key] = actualizedHandlers[key](props);
        return acc;
      }, {});
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, handlersProps));
    };
  };
});

/***/ }),

/***/ "./src/withState.js":
/*!**************************!*\
  !*** ./src/withState.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* eslint "react/display-name": "off" */

/* harmony default export */ __webpack_exports__["default"] = (function (valueName, methodName, defaultValue) {
  return function (Component) {
    return function (props) {
      var _stateProps;

      var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue),
          _useState2 = _slicedToArray(_useState, 2),
          a = _useState2[0],
          b = _useState2[1];

      var stateProps = (_stateProps = {}, _defineProperty(_stateProps, valueName, a), _defineProperty(_stateProps, methodName, b), _stateProps);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, stateProps));
    };
  };
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });