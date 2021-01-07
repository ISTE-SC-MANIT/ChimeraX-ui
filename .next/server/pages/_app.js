module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "0zb8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "3lVe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */

/* eslint-disable */
// @ts-nocheck

/*
query AppViewerQuery {
  viewer {
    _id
    name
    id
    email
    phone
    registered
    strategy
    role
    step
    city
  }
}
*/
const node = function () {
  var v0 = [{
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "_id",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "registered",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "strategy",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "role",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "step",
      "storageKey": null
    }, {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "city",
      "storageKey": null
    }],
    "storageKey": null
  }];
  return {
    "fragment": {
      "argumentDefinitions": [],
      "kind": "Fragment",
      "metadata": null,
      "name": "AppViewerQuery",
      "selections": v0
      /*: any*/
      ,
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [],
      "kind": "Operation",
      "name": "AppViewerQuery",
      "selections": v0
      /*: any*/

    },
    "params": {
      "cacheID": "e0e58a83dae7e1e5d34e998cdafd8a9e",
      "id": null,
      "metadata": {},
      "name": "AppViewerQuery",
      "operationKind": "query",
      "text": "query AppViewerQuery {\n  viewer {\n    _id\n    name\n    id\n    email\n    phone\n    registered\n    strategy\n    role\n    step\n    city\n  }\n}\n"
    }
  };
}();

node.hash = '7be5cb1d9d55b49824ab835715576aa2';
/* harmony default export */ __webpack_exports__["default"] = (node);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "AV/6":
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "LOvr":
/***/ (function(module, exports) {

module.exports = require("react-relay-network-modern");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Ybr5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/createMuiTheme");

/***/ }),

/***/ "ZUWB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eKd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return themeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultSecondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return themeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toggleMode; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
// import { createMuiTheme } from '@material-ui/core';
// import { blue } from '@material-ui/core/colors';
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: blue[500],
//     },
//     type: 'dark',
//   },
// });
// export default theme;



const themeProps = {
  MuiTextField: {
    variant: "outlined",
    margin: "dense"
  }
};
const defaultPrimary = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["blue"][500];
const defaultSecondary = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["orange"][500];
const defaultMode = "light";
const themeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({
  mode: "light",
  primary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["blue"][500],
  secondary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["blue"][500],
  toggleMode: () => {
    /* Do nothing */
  },
  updateColors: () => {
    /* Do nothing */
  }
});
function toggleMode(setTheme) {
  setTheme(oldTheme => {
    return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
      props: themeProps,
      palette: {
        primary: {
          main: oldTheme.palette.primary.main
        },
        secondary: {
          main: oldTheme.palette.primary.main
        },
        type: oldTheme.palette.type === "dark" ? "light" : "dark"
      }
    });
  });
  return;
}

/***/ }),

/***/ "edCo":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles/createMuiTheme"
var createMuiTheme_ = __webpack_require__("Ybr5");
var createMuiTheme_default = /*#__PURE__*/__webpack_require__.n(createMuiTheme_);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/LinearProgress"
var LinearProgress_ = __webpack_require__("0zb8");
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "@material-ui/lab/Alert"
var Alert_ = __webpack_require__("ZUWB");
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);

// EXTERNAL MODULE: external "regenerator-runtime/runtime"
var runtime_ = __webpack_require__("edCo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/components/loadingScreen.tsx
var loadingScreen = __webpack_require__("xXu5");

// CONCATENATED MODULE: ./src/components/relay/queries/AppViewerQuery.ts
var _AppViewerQuery;

const AppViewerQuery = _AppViewerQuery !== void 0 ? _AppViewerQuery : _AppViewerQuery = __webpack_require__("3lVe");
/* harmony default export */ var queries_AppViewerQuery = (AppViewerQuery);
// EXTERNAL MODULE: external "react-relay"
var external_react_relay_ = __webpack_require__("iuEU");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "relay-runtime"
var external_relay_runtime_ = __webpack_require__("AV/6");

// EXTERNAL MODULE: external "react-relay-network-modern"
var external_react_relay_network_modern_ = __webpack_require__("LOvr");

// CONCATENATED MODULE: ./src/components/relay/environment.ts



const makeEnvironment = () => {
  const token = external_js_cookie_default.a.get("token");
  const network = new external_react_relay_network_modern_["RelayNetworkLayer"]([Object(external_react_relay_network_modern_["urlMiddleware"])({
    url: () => Promise.resolve(`${"http://localhost:8080"}/graphql`)
  }), Object(external_react_relay_network_modern_["authMiddleware"])({
    token: token,
    prefix: "",
    // default
    header: "authorization"
  }), Object(external_react_relay_network_modern_["errorMiddleware"])({
    logger: console.error,
    prefix: "[Relay Network]: "
  })]);
  return new external_relay_runtime_["Environment"]({
    network: network,
    store: new external_relay_runtime_["Store"](new external_relay_runtime_["RecordSource"]())
  });
};
// EXTERNAL MODULE: ./src/components/theme/index.ts
var theme = __webpack_require__("eKd7");

// CONCATENATED MODULE: ./src/pages/_app.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const useStyles = Object(styles_["makeStyles"])(theme => ({
  linearLoading: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.modal + 1
  },
  error: {
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    padding: theme.spacing(1, 3)
  }
}));

function Alert(props) {
  return __jsx(Alert_default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

const MyApp = ({
  Component,
  pageProps
}) => {
  const [success, setSuccess] = external_react_default.a.useState(false);
  const [errors, setError] = external_react_default.a.useState(false);
  const [successMsg, setSuccessMsg] = external_react_default.a.useState("");
  const [errorMsg, setErrorMsg] = external_react_default.a.useState("");
  const router = Object(router_["useRouter"])();
  const classes = useStyles();
  const paths = router.route.split("/");
  const first = paths[1];
  const isProtectedRoute = external_react_default.a.useMemo(() => {
    return first === "dashboard";
  }, [first]);
  const environment = external_react_default.a.useMemo(() => {
    if (first === "dashboard") return makeEnvironment();
    return null;
  }, [first]);
  /* Page loading animation */

  const [routeChange, setRouteChange] = external_react_default.a.useState(false);
  router_["Router"].events.on("routeChangeStart", () => {
    setRouteChange(true);
  });
  router_["Router"].events.on("routeChangeComplete", () => setRouteChange(false));
  router_["Router"].events.on("routeChangeError", () => setRouteChange(false));
  const [loading, setLoading] = external_react_default.a.useState(false);
  const [currentTheme, setCurrentTheme] = external_react_default.a.useState(() => createMuiTheme_default()({
    typography: {
      fontFamily: ['Montserrat', 'Roboto', 'sans-serif', 'Arial', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(',')
    },
    props: theme["e" /* themeProps */],
    palette: {
      primary: {
        main: theme["b" /* defaultPrimary */]
      },
      secondary: {
        main: theme["c" /* defaultSecondary */]
      },
      type: theme["a" /* defaultMode */]
    }
  }));

  const handleClose = event => {
    setSuccess(false);
    setError(false);
  };

  const setSuccessMessage = msg => {
    setSuccessMsg(msg);
    setSuccess(true);
  };

  const setErrorMessage = msg => {
    setErrorMsg(msg);
    setError(true);
  };
  /* Error reporting */


  return __jsx(styles_["ThemeProvider"], {
    theme: currentTheme
  }, __jsx(CssBaseline_default.a, null), __jsx(theme["d" /* themeContext */].Provider, {
    value: {
      mode: currentTheme.palette.type,
      primary: currentTheme.palette.primary.main,
      secondary: currentTheme.palette.secondary.main,
      toggleMode: () => Object(theme["f" /* toggleMode */])(setCurrentTheme),
      updateColors: () => {
        /* Do nothing */
      }
    }
  }, routeChange && __jsx(LinearProgress_default.a, {
    color: "secondary",
    className: classes.linearLoading
  }), !isProtectedRoute ? __jsx(external_react_default.a.Fragment, null, __jsx(Component, _extends({}, pageProps, {
    setSuccessMessage: setSuccessMessage,
    setErrorMessage: setErrorMessage
  })), __jsx(Snackbar_default.a, {
    open: success,
    autoHideDuration: 6000,
    onClose: handleClose
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success"
  }, successMsg)), __jsx(Snackbar_default.a, {
    open: errors,
    autoHideDuration: 6000,
    onClose: handleClose
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error"
  }, errorMsg))) : __jsx(external_react_relay_["QueryRenderer"], {
    environment: environment,
    query: queries_AppViewerQuery,
    variables: {},
    render: ({
      error,
      props,
      retry
    }) => {
      if (error) {
        setErrorMessage("Please log in to continue");
        router.push("/");
        return null;
      } else if (props) {
        return __jsx(external_react_default.a.Fragment, null, __jsx(Component, _extends({}, pageProps, {
          viewer: props.viewer,
          refetch: retry,
          environment: environment,
          setSuccessMessage: setSuccessMessage,
          setErrorMessage: setErrorMessage
        })), __jsx(Snackbar_default.a, {
          open: success,
          autoHideDuration: 3000,
          onClose: handleClose
        }, __jsx(Alert, {
          onClose: handleClose,
          severity: "success"
        }, successMsg)), __jsx(Snackbar_default.a, {
          open: errors,
          autoHideDuration: 3000,
          onClose: handleClose
        }, __jsx(Alert, {
          onClose: handleClose,
          severity: "error"
        }, errorMsg)));
      } else {
        return __jsx(loadingScreen["a" /* default */], {
          loading: true
        });
      }
    }
  })));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "iuEU":
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xXu5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZkBw");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    // background: fade(theme.palette.common.black, 0.5),
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: theme.zIndex.modal,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const LoadingScreen = ({
  loading
}) => {
  const classes = useStyles();
  return loading ? __jsx("section", {
    className: classes.root
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
    thickness: 4,
    size: 60 // style={{
    //     color: "#fff"
    // }}

  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    mt: 2,
    ml: -9
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h3",
    align: "center"
  }, "Loading ....")))) : null;
};

/* harmony default export */ __webpack_exports__["a"] = (LoadingScreen);

/***/ })

/******/ });