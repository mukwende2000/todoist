/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Barlow/Barlow-Medium.ttf */ "./src/Barlow/Barlow-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: balow;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: balow;\n}\nimg {\n    max-width: 100%;\n    max-height: 100%;\n}\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #CDC0D5;\n    padding: 1rem;\n}\n.fa-bars {\n    font-size: 2rem;\n    cursor: pointer;\n}\n.logo-img, .logo-text {\n    width: 100px;\n    justify-content: space-between;\n    display: none;\n}\n.auth {\n    display: flex;\n}\n.auth .email {\n    margin-right: 2rem;\n    display: none;\n}\n.auth button {\n    padding: .5rem;\n    border: none;\n    cursor: pointer;\n}\nmain {\n    display: flex;\n}\n.menu {\n    background-color: #EFF8FB;\n    padding: 3rem;\n    position: fixed;\n    top: 65px;\n    bottom: 0;\n    left: -270px;\n    transition: all .3s;\n}\n.menu li {\n    margin: 1rem 0;\n    font-weight: bold;\n    font-size: 1.3rem;\n    cursor: pointer;\n    list-style: none;\n    transition: all .4s;\n}\n.menu li:not(:last-child):hover {\n    color: coral;\n}\n.menu > ul li:last-child li {\n    margin: 1rem;\n    font-size: 1rem;\n    color: grey;\n}\n.menu > ul li:last-child li:hover {\n    color: rgb(223, 152, 126);\n}\n.active {\n    left: 0;\n}\n.todo-list {\n    width: 100%;\n    padding: 2rem;\n}\n.header {\n    display: flex;\n    justify-content: space-between; \n    width: 83%;\n}\n\n.todos ul li {\n    padding-block: .2rem;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid rgb(201, 240, 255);\n    border-top: 1px solid rgb(201, 240, 255);\n    cursor: pointer;\n}\n.todos ul li:hover .right .options {\n    opacity: 1;\n}\n.todo p {\n    margin: 0 1rem;\n}\n.date {\n    margin: 0 1.5rem;\n    color: red;\n}\n.options i {\n    color: grey;\n    transition: .2s;\n}\n.options i:first-child {\n    margin-right: .5rem;\n}\n.options {\n    opacity: 0;\n}\n.options i:hover {\n    color: black;\n    font-size: 1.07rem;\n}\n.todo, .right {\n    display: flex;\n}\n.wrapper {\n    width: 90%;\n    padding: 1rem;\n    position: fixed;\n    margin: auto;\n    left: 5%;\n    top: 40%;\n    border: 2px solid skyblue;\n    border-radius: 20px;\n    display: none;\n}\ninput {\n    border-radius: 10px;\n    border: none;\n    font-size: 1.3rem;\n}\n.wrapper > input:last-of-type {\n    width: 70%;\n}\ninput:focus {\n    outline: none;\n}\n.wrapper > input:nth-child(2) {\n    margin: 1rem 0;\n}\n.wrapper > div:first-of-type input {\n    border: 1px solid skyblue;\n    padding: .4rem;\n    margin-bottom: .3rem;\n}\n.wrapper button {\n    cursor: pointer;\n    border: 1px solid skyblue;\n    border-radius: 10px;\n    font-size: 1.3rem;\n    padding: .4rem;\n}\n.popupBtn {\n    font-size: 3rem;\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 50%;\n    position: fixed;\n    right: 50px;\n    bottom: 50px;\n    cursor: pointer;\n}\n.message {\n    color: red;\n    font-style: italic;\n}\n@media(min-width: 768px) {\n    .menu {\n        left: 0;\n    }\n    .fa-bars {\n        display: none;\n    }\n    .auth .email {\n        display: initial;\n    }\n    .todo-list {\n        width: 60%;\n        margin: auto 300px;\n        outline: 1px solid coral;\n    }\n    .date {\n        margin-right: 5rem;\n    }\n    .logo-img, .logo-text {\n        display: initial;\n    }\n    .logo-img {\n        width: 30px;\n    }\n    .wrapper {\n        display: block;\n        position: initial;\n        width: 30%;\n        margin: 10px;\n    }\n    .popupBtn, .cancelBtn {\n        display: none;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,4CAAsC;AAC1C;AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;AACjB;AACA;IACI,eAAe;IACf,eAAe;AACnB;AACA;IACI,YAAY;IACZ,8BAA8B;IAC9B,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,cAAc;IACd,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,eAAe;IACf,SAAS;IACT,SAAS;IACT,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,eAAe;IACf,WAAW;AACf;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,OAAO;AACX;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,8BAA8B;IAC9B,2CAA2C;IAC3C,wCAAwC;IACxC,eAAe;AACnB;AACA;IACI,UAAU;AACd;AACA;IACI,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,UAAU;AACd;AACA;IACI,WAAW;IACX,eAAe;AACnB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,UAAU;AACd;AACA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,UAAU;IACV,aAAa;IACb,eAAe;IACf,YAAY;IACZ,QAAQ;IACR,QAAQ;IACR,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,UAAU;AACd;AACA;IACI,aAAa;AACjB;AACA;IACI,cAAc;AAClB;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,oBAAoB;AACxB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;AACA;IACI,UAAU;IACV,kBAAkB;AACtB;AACA;IACI;QACI,OAAO;IACX;IACA;QACI,aAAa;IACjB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,UAAU;QACV,kBAAkB;QAClB,wBAAwB;IAC5B;IACA;QACI,kBAAkB;IACtB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,WAAW;IACf;IACA;QACI,cAAc;QACd,iBAAiB;QACjB,UAAU;QACV,YAAY;IAChB;IACA;QACI,aAAa;IACjB;AACJ","sourcesContent":["@font-face {\n    font-family: balow;\n    src: url('./Barlow/Barlow-Medium.ttf');\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: balow;\n}\nimg {\n    max-width: 100%;\n    max-height: 100%;\n}\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #CDC0D5;\n    padding: 1rem;\n}\n.fa-bars {\n    font-size: 2rem;\n    cursor: pointer;\n}\n.logo-img, .logo-text {\n    width: 100px;\n    justify-content: space-between;\n    display: none;\n}\n.auth {\n    display: flex;\n}\n.auth .email {\n    margin-right: 2rem;\n    display: none;\n}\n.auth button {\n    padding: .5rem;\n    border: none;\n    cursor: pointer;\n}\nmain {\n    display: flex;\n}\n.menu {\n    background-color: #EFF8FB;\n    padding: 3rem;\n    position: fixed;\n    top: 65px;\n    bottom: 0;\n    left: -270px;\n    transition: all .3s;\n}\n.menu li {\n    margin: 1rem 0;\n    font-weight: bold;\n    font-size: 1.3rem;\n    cursor: pointer;\n    list-style: none;\n    transition: all .4s;\n}\n.menu li:not(:last-child):hover {\n    color: coral;\n}\n.menu > ul li:last-child li {\n    margin: 1rem;\n    font-size: 1rem;\n    color: grey;\n}\n.menu > ul li:last-child li:hover {\n    color: rgb(223, 152, 126);\n}\n.active {\n    left: 0;\n}\n.todo-list {\n    width: 100%;\n    padding: 2rem;\n}\n.header {\n    display: flex;\n    justify-content: space-between; \n    width: 83%;\n}\n\n.todos ul li {\n    padding-block: .2rem;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid rgb(201, 240, 255);\n    border-top: 1px solid rgb(201, 240, 255);\n    cursor: pointer;\n}\n.todos ul li:hover .right .options {\n    opacity: 1;\n}\n.todo p {\n    margin: 0 1rem;\n}\n.date {\n    margin: 0 1.5rem;\n    color: red;\n}\n.options i {\n    color: grey;\n    transition: .2s;\n}\n.options i:first-child {\n    margin-right: .5rem;\n}\n.options {\n    opacity: 0;\n}\n.options i:hover {\n    color: black;\n    font-size: 1.07rem;\n}\n.todo, .right {\n    display: flex;\n}\n.wrapper {\n    width: 90%;\n    padding: 1rem;\n    position: fixed;\n    margin: auto;\n    left: 5%;\n    top: 40%;\n    border: 2px solid skyblue;\n    border-radius: 20px;\n    display: none;\n}\ninput {\n    border-radius: 10px;\n    border: none;\n    font-size: 1.3rem;\n}\n.wrapper > input:last-of-type {\n    width: 70%;\n}\ninput:focus {\n    outline: none;\n}\n.wrapper > input:nth-child(2) {\n    margin: 1rem 0;\n}\n.wrapper > div:first-of-type input {\n    border: 1px solid skyblue;\n    padding: .4rem;\n    margin-bottom: .3rem;\n}\n.wrapper button {\n    cursor: pointer;\n    border: 1px solid skyblue;\n    border-radius: 10px;\n    font-size: 1.3rem;\n    padding: .4rem;\n}\n.popupBtn {\n    font-size: 3rem;\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 50%;\n    position: fixed;\n    right: 50px;\n    bottom: 50px;\n    cursor: pointer;\n}\n.message {\n    color: red;\n    font-style: italic;\n}\n@media(min-width: 768px) {\n    .menu {\n        left: 0;\n    }\n    .fa-bars {\n        display: none;\n    }\n    .auth .email {\n        display: initial;\n    }\n    .todo-list {\n        width: 60%;\n        margin: auto 300px;\n        outline: 1px solid coral;\n    }\n    .date {\n        margin-right: 5rem;\n    }\n    .logo-img, .logo-text {\n        display: initial;\n    }\n    .logo-img {\n        width: 30px;\n    }\n    .wrapper {\n        display: block;\n        position: initial;\n        width: 30%;\n        margin: 10px;\n    }\n    .popupBtn, .cancelBtn {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addTodo.js":
/*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");
/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo */ "./src/components/todo.js");


const form = new _components_form__WEBPACK_IMPORTED_MODULE_0__["default"]()


const todos = []

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

    const todo = new _components_todo__WEBPACK_IMPORTED_MODULE_1__["default"](form.getTitle(), form.getDetail(), form.getDate(), form.getProject())
    todos.push(todo)
}


/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
class Form {
    constructor() {
        this.title = document.querySelector('.title-input')
        this.detail = document.querySelector('.details-input')
        this.date  = document.querySelector('.date-input')
        this.project = document.querySelector('.project-input')
    }
    show() {
        this.wrapper = document.querySelector('.wrapper')
        // this.wrapper = document.querySelector('.wrapper')
        this.wrapper.style.display = 'block'
    }
    hide() {
        this.wrapper = document.querySelector('.wrapper')
        this.wrapper.style.display = 'none'
    }
    getTitle() {
        return this.title.value
    }
    getDetail() {
        return this.detail.value
    }
    getDate() {
        return this.date.value
    }
    getProject() {
        return this.project.value
    }
    validate() {
        this.inputs = [this.title, this.detail, this.date, this.project]
        this.isValid = this.inputs.some(child => {
            return !child.value
        })
        return this.isValid
    }

}

/***/ }),

/***/ "./src/components/store.js":
/*!*********************************!*\
  !*** ./src/components/store.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Store)
/* harmony export */ });
class Store {
    static getTodo() {
            return JSON.parse(localStorage.getItem('todo'))
    }
    static storeTodo(array) {
        localStorage.setItem('todo', JSON.stringify(array))
    }
}

/***/ }),

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElements */ "./src/createElements.js");



class Todo {
    constructor(title, details, dueDate, projectName) {
        this.title = title
        this.details = details
        this.dueDate = dueDate
        this.projectName = projectName
        this.underUpdate = false
    }
    createTodo() {
        const todo = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div')
        todo.className = 'todo'
        const input = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('input')
        input.type = 'checkbox'
        input.name = 'todo'

        const p = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('p')
        p.textContent = this.title

        const right = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div')
        right.className = 'right'
        const date = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div')
        date.className = 'date'
        date.textContent = this.dueDate

        const options = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div')
        options.className = 'options'
        const deleteBtn = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('i')
        deleteBtn.className = 'fa-solid fa-trash-can'
        deleteBtn.classList.add('delete')

        const editBtn = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('i')
        editBtn.className = 'fa-regular fa-pen-to-square'
        editBtn.classList.add('edit')

        options.appendChild(editBtn)
        options.appendChild(deleteBtn)

        right.appendChild(date)
        right.appendChild(options)
        todo.appendChild(input)
        todo.appendChild(p)

        const li = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('li')
        li.appendChild(todo)
        li.appendChild(right)

        return li
    }
}

/***/ }),

/***/ "./src/components/todoListHeader.js":
/*!******************************************!*\
  !*** ./src/components/todoListHeader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoListHeader)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElements */ "./src/createElements.js");

class ToDoListHeader {
    constructor() {
    }
    createHeader(target) {
        this.h2 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('h2')
        this.h3 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('h3')
        this.h2.textContent = target.textContent
        this.h3.textContent = 'Due Date'
        return {h2: this.h2, h3: this.h3}
    }
}

/***/ }),

/***/ "./src/createElements.js":
/*!*******************************!*\
  !*** ./src/createElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElements)
/* harmony export */ });
function createElements(elementName) {
    const element = document.createElement(elementName)
    return element
}

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/createElements.js");


const projects = document.querySelector('.projects')
const projectsArray = ['Chores', 'Coding']

function createProject(todo) {
    const isAbsent = projectsArray.every(project => {
        return project !== todo.projectName
    })
    
    if(isAbsent) {
        const newProject = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('li')
        newProject.className = 'project'
        newProject.textContent = todo.projectName
        projectsArray.push(newProject.textContent)
        
        projects.appendChild(newProject)
    }
}

/***/ }),

/***/ "./src/deleteTodo.js":
/*!***************************!*\
  !*** ./src/deleteTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodo */ "./src/addTodo.js");

const ul = document.querySelector('.todos ul')
function deleteTodo(todo) {
    const todosArray = [...ul.children]
    _addTodo__WEBPACK_IMPORTED_MODULE_0__.todos.splice(todosArray.indexOf(todo), 1)
    console.log(todo)
    console.log(_addTodo__WEBPACK_IMPORTED_MODULE_0__.todos)
    ul.innerHTML = ''
    _addTodo__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(todo => {
        const myTodo = todo.createTodo()
        ul.appendChild(myTodo)
    })
}

/***/ }),

/***/ "./src/editTodo.js":
/*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyEdit": () => (/* binding */ applyEdit),
/* harmony export */   "initializeEdit": () => (/* binding */ initializeEdit)
/* harmony export */ });
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodo */ "./src/addTodo.js");

const ul = document.querySelector('.todos ul')
const title = document.querySelector('.title-input')
const detail = document.querySelector('.details-input')
const date  = document.querySelector('.date-input')
const project = document.querySelector('.project-input')

function initializeEdit(todo) {
    const todosArray = [...ul.children]
    const currentTodo = _addTodo__WEBPACK_IMPORTED_MODULE_0__.todos[todosArray.indexOf(todo)]
    currentTodo.underUpdate = true
    title.value = currentTodo.title
    detail.value = currentTodo.details
    date.value = currentTodo.dueDate
    project.value = currentTodo.projectName
    title.focus()
}

function applyEdit() {
    _addTodo__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(todo => {
        if(todo.underUpdate) {
            todo.title = title.value
            todo.details = detail.value
            todo.dueDate = date.value
            todo.projectName = project.value
            todo.underUpdate = false
        }

        ul.innerHTML = ''
        _addTodo__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(todo => {
        const myTodo = todo.createTodo()
        ul.appendChild(myTodo)
    })
    })
}



/***/ }),

/***/ "./src/populateTodo.js":
/*!*****************************!*\
  !*** ./src/populateTodo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateTodo)
/* harmony export */ });
const ul = document.querySelector('.todos ul')
function populateTodo(array) {
    ul.innerHTML = ''
    array.forEach(todo => {
        const myTodo = todo.createTodo()
        ul.appendChild(myTodo)
    })
}

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_todoListHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/todoListHeader */ "./src/components/todoListHeader.js");
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodo */ "./src/addTodo.js");
/* harmony import */ var _populateTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateTodo */ "./src/populateTodo.js");



const todoListHeader = new _components_todoListHeader__WEBPACK_IMPORTED_MODULE_0__["default"]()
const header = document.querySelector('.header')
const ul = document.querySelector('.todos ul')

const projectsArray = ['Chores', 'Coding']
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e) {
    const myHeader = todoListHeader.createHeader(e.target)
    header.innerHTML = ''
    header.appendChild(myHeader.h2)
    header.appendChild(myHeader.h3)       

    if(projectsArray.includes(e.target.textContent)) {
        const newArray = _addTodo__WEBPACK_IMPORTED_MODULE_1__.todos.filter(todo => {
            return todo.projectName === e.target.textContent
        })
        ;(0,_populateTodo__WEBPACK_IMPORTED_MODULE_2__["default"])(newArray)
        
    } else if(e.target.textContent === 'Home') {
        (0,_populateTodo__WEBPACK_IMPORTED_MODULE_2__["default"])(_addTodo__WEBPACK_IMPORTED_MODULE_1__.todos)
    } else if(e.target.textContent === 'Today') {
        const newArray = _addTodo__WEBPACK_IMPORTED_MODULE_1__.todos.filter(todo => {
            return todo.dueDate.slice(8) == new Date().getDate()
        })
       ;(0,_populateTodo__WEBPACK_IMPORTED_MODULE_2__["default"])(newArray)
    }
}

/***/ }),

/***/ "./src/Barlow/Barlow-Medium.ttf":
/*!**************************************!*\
  !*** ./src/Barlow/Barlow-Medium.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4afdc134fc10b739bab.ttf";

/***/ }),

/***/ "./src/images/logo.webp":
/*!******************************!*\
  !*** ./src/images/logo.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c85c0d169c74dc08e1a.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_logo_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.webp */ "./src/images/logo.webp");
/* harmony import */ var _components_todoListHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todoListHeader */ "./src/components/todoListHeader.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addTodo */ "./src/addTodo.js");
/* harmony import */ var _deleteTodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleteTodo */ "./src/deleteTodo.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route */ "./src/route.js");
/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editTodo */ "./src/editTodo.js");
/* harmony import */ var _populateTodo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./populateTodo */ "./src/populateTodo.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/store */ "./src/components/store.js");













// window.addEventListener('DOMContentLoaded', () => {
//     if(localStorage.getItem('todo')) {
        
//         const storedTodos = Store.getTodo()
//         storedTodos.forEach(todo => {
//             todos.push(todo)
//         })
//         console.log(todos)
//         // populateTodo(todos)
//     }
// })
    

const logoImg = document.querySelector('.logo-img')
const menu = document.querySelector('.menu')
const burger = document.querySelector('.fa-bars')
const links = document.querySelectorAll('.link')
const popupBtn = document.querySelector('.popupBtn')

const addTaskBtn = document.querySelector('.addTaskBtn')
const cancelBtn = document.querySelector('.cancelBtn')
const editTaskBtn = document.querySelector('.editTaskBtn')

logoImg.src = _images_logo_webp__WEBPACK_IMPORTED_MODULE_1__
const toDoListHeader = new _components_todoListHeader__WEBPACK_IMPORTED_MODULE_2__["default"]()
const form = new _components_form__WEBPACK_IMPORTED_MODULE_3__["default"]()

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
})
links.forEach(link => {
    link.addEventListener('click', _route__WEBPACK_IMPORTED_MODULE_6__["default"])
})
addTaskBtn.addEventListener('click', () => {
    ;(0,_addTodo__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_populateTodo__WEBPACK_IMPORTED_MODULE_8__["default"])(_addTodo__WEBPACK_IMPORTED_MODULE_4__.todos)
    ;(0,_createProject__WEBPACK_IMPORTED_MODULE_9__["default"])(_addTodo__WEBPACK_IMPORTED_MODULE_4__.todos[_addTodo__WEBPACK_IMPORTED_MODULE_4__.todos.length - 1])
    _components_store__WEBPACK_IMPORTED_MODULE_10__["default"].storeTodo(_addTodo__WEBPACK_IMPORTED_MODULE_4__.todos)
})

popupBtn.addEventListener('click', form.show)
cancelBtn.addEventListener('click', form.hide)
editTaskBtn.addEventListener('click', _editTodo__WEBPACK_IMPORTED_MODULE_7__.applyEdit)

document.addEventListener('click', (e) => {
    if(hasClass(e.target, 'delete')) {
        (0,_deleteTodo__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target.parentElement.parentElement.parentElement)
    } else if(hasClass(e.target, 'edit')) {
        (0,_editTodo__WEBPACK_IMPORTED_MODULE_7__.initializeEdit)(e.target.parentElement.parentElement.parentElement)
    } else if(hasClass(e.target, 'project')) {
        (0,_route__WEBPACK_IMPORTED_MODULE_6__["default"])(e)
    }
})

function hasClass  (element, className) {
    return element.classList.contains(className)
} 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFzQyxnREFBUzs7QUFFL0M7QUFDQTtBQUNBLFFBQVEsdURBQVU7QUFDbEIsTUFBTTtBQUNOLFFBQVEseURBQWM7QUFDdEIsTUFBTTtBQUNOLFFBQVEsa0RBQUs7QUFDYjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvaXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2lzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9pc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9pc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2lzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2lzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9pc3QvLi9zcmMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vc3JjL2NvbXBvbmVudHMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kb2lzdC8uL3NyYy9jb21wb25lbnRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2lzdC8uL3NyYy9jb21wb25lbnRzL3RvZG9MaXN0SGVhZGVyLmpzIiwid2VicGFjazovL3RvZG9pc3QvLi9zcmMvY3JlYXRlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2lzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9pc3QvLi9zcmMvZGVsZXRlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vc3JjL2VkaXRUb2RvLmpzIiwid2VicGFjazovL3RvZG9pc3QvLi9zcmMvcG9wdWxhdGVUb2RvLmpzIiwid2VicGFjazovL3RvZG9pc3QvLi9zcmMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2lzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9pc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9pc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2lzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9pc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2lzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvaXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0Jhcmxvdy9CYXJsb3ctTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYmFsb3c7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGJhbG93O1xcbn1cXG5pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NEQzBENTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLmZhLWJhcnMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxvZ28taW1nLCAubG9nby10ZXh0IHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hdXRoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmF1dGggLmVtYWlsIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYXV0aCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkY4RkI7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA2NXB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IC0yNzBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuLm1lbnUgbGkge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxufVxcbi5tZW51IGxpOm5vdCg6bGFzdC1jaGlsZCk6aG92ZXIge1xcbiAgICBjb2xvcjogY29yYWw7XFxufVxcbi5tZW51ID4gdWwgbGk6bGFzdC1jaGlsZCBsaSB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuLm1lbnUgPiB1bCBsaTpsYXN0LWNoaWxkIGxpOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigyMjMsIDE1MiwgMTI2KTtcXG59XFxuLmFjdGl2ZSB7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi50b2RvLWxpc3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICAgIHdpZHRoOiA4MyU7XFxufVxcblxcbi50b2RvcyB1bCBsaSB7XFxuICAgIHBhZGRpbmctYmxvY2s6IC4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjAxLCAyNDAsIDI1NSk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjAxLCAyNDAsIDI1NSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvZG9zIHVsIGxpOmhvdmVyIC5yaWdodCAub3B0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi50b2RvIHAge1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG59XFxuLmRhdGUge1xcbiAgICBtYXJnaW46IDAgMS41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4ub3B0aW9ucyBpIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG59XFxuLm9wdGlvbnMgaTpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XFxufVxcbi5vcHRpb25zIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLm9wdGlvbnMgaTpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjA3cmVtO1xcbn1cXG4udG9kbywgLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLndyYXBwZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbGVmdDogNSU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5pbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi53cmFwcGVyID4gaW5wdXQ6bGFzdC1vZi10eXBlIHtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4ud3JhcHBlciA+IGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ud3JhcHBlciA+IGRpdjpmaXJzdC1vZi10eXBlIGlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2t5Ymx1ZTtcXG4gICAgcGFkZGluZzogLjRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC4zcmVtO1xcbn1cXG4ud3JhcHBlciBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAuNHJlbTtcXG59XFxuLnBvcHVwQnRuIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGJvdHRvbTogNTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLm1lbnUge1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcbiAgICAuZmEtYmFycyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5hdXRoIC5lbWFpbCB7XFxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgICB9XFxuICAgIC50b2RvLWxpc3Qge1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIG1hcmdpbjogYXV0byAzMDBweDtcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBjb3JhbDtcXG4gICAgfVxcbiAgICAuZGF0ZSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxuICAgIH1cXG4gICAgLmxvZ28taW1nLCAubG9nby10ZXh0IHtcXG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgLmxvZ28taW1nIHtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICB9XFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxuICAgIC5wb3B1cEJ0biwgLmNhbmNlbEJ0biB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsNENBQXNDO0FBQzFDO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJDQUEyQztJQUMzQyx3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvdztcXG4gICAgc3JjOiB1cmwoJy4vQmFybG93L0Jhcmxvdy1NZWRpdW0udHRmJyk7XFxufVxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBiYWxvdztcXG59XFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREMwRDU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbi5mYS1iYXJzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5sb2dvLWltZywgLmxvZ28tdGV4dCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYXV0aCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5hdXRoIC5lbWFpbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmF1dGggYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGOEZCO1xcbiAgICBwYWRkaW5nOiAzcmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNjVweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAtMjcwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcbi5tZW51IGxpIHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbn1cXG4ubWVudSBsaTpub3QoOmxhc3QtY2hpbGQpOmhvdmVyIHtcXG4gICAgY29sb3I6IGNvcmFsO1xcbn1cXG4ubWVudSA+IHVsIGxpOmxhc3QtY2hpbGQgbGkge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcbi5tZW51ID4gdWwgbGk6bGFzdC1jaGlsZCBsaTpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMjIzLCAxNTIsIDEyNik7XFxufVxcbi5hY3RpdmUge1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4udG9kby1saXN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxcbiAgICB3aWR0aDogODMlO1xcbn1cXG5cXG4udG9kb3MgdWwgbGkge1xcbiAgICBwYWRkaW5nLWJsb2NrOiAuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIwMSwgMjQwLCAyNTUpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIwMSwgMjQwLCAyNTUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2RvcyB1bCBsaTpob3ZlciAucmlnaHQgLm9wdGlvbnMge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4udG9kbyBwIHtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxufVxcbi5kYXRlIHtcXG4gICAgbWFyZ2luOiAwIDEuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLm9wdGlvbnMgaSB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcbi5vcHRpb25zIGk6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xcbn1cXG4ub3B0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5vcHRpb25zIGk6aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4wN3JlbTtcXG59XFxuLnRvZG8sIC5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi53cmFwcGVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGxlZnQ6IDUlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgc2t5Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4ud3JhcHBlciA+IGlucHV0Omxhc3Qtb2YtdHlwZSB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLndyYXBwZXIgPiBpbnB1dDpudGgtY2hpbGQoMikge1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLndyYXBwZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSBpbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNreWJsdWU7XFxuICAgIHBhZGRpbmc6IC40cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuM3JlbTtcXG59XFxuLndyYXBwZXIgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogLjRyZW07XFxufVxcbi5wb3B1cEJ0biB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiA1MHB4O1xcbiAgICBib3R0b206IDUwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lc3NhZ2Uge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5tZW51IHtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG4gICAgLmZhLWJhcnMge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuYXV0aCAuZW1haWwge1xcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcXG4gICAgfVxcbiAgICAudG9kby1saXN0IHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBtYXJnaW46IGF1dG8gMzAwcHg7XFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgY29yYWw7XFxuICAgIH1cXG4gICAgLmRhdGUge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbiAgICB9XFxuICAgIC5sb2dvLWltZywgLmxvZ28tdGV4dCB7XFxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgICB9XFxuICAgIC5sb2dvLWltZyB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgfVxcbiAgICAud3JhcHBlciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xcbiAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcbiAgICAucG9wdXBCdG4sIC5jYW5jZWxCdG4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtXCJcbmltcG9ydCBUb2RvIGZyb20gXCIuL2NvbXBvbmVudHMvdG9kb1wiXG5jb25zdCBmb3JtID0gbmV3IEZvcm0oKVxuXG5cbmV4cG9ydCBjb25zdCB0b2RvcyA9IFtdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKGZvcm0uZ2V0VGl0bGUoKSwgZm9ybS5nZXREZXRhaWwoKSwgZm9ybS5nZXREYXRlKCksIGZvcm0uZ2V0UHJvamVjdCgpKVxuICAgIHRvZG9zLnB1c2godG9kbylcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0JylcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1pbnB1dCcpXG4gICAgICAgIHRoaXMuZGF0ZSAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1pbnB1dCcpXG4gICAgICAgIHRoaXMucHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWlucHV0JylcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKVxuICAgICAgICAvLyB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpXG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpXG4gICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZS52YWx1ZVxuICAgIH1cbiAgICBnZXREZXRhaWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRldGFpbC52YWx1ZVxuICAgIH1cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRlLnZhbHVlXG4gICAgfVxuICAgIGdldFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3QudmFsdWVcbiAgICB9XG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRzID0gW3RoaXMudGl0bGUsIHRoaXMuZGV0YWlsLCB0aGlzLmRhdGUsIHRoaXMucHJvamVjdF1cbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5pbnB1dHMuc29tZShjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWNoaWxkLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldFRvZG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpKVxuICAgIH1cbiAgICBzdGF0aWMgc3RvcmVUb2RvKGFycmF5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKVxuICAgIH1cbn0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudHMgZnJvbSBcIi4uL2NyZWF0ZUVsZW1lbnRzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHNcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcbiAgICAgICAgdGhpcy51bmRlclVwZGF0ZSA9IGZhbHNlXG4gICAgfVxuICAgIGNyZWF0ZVRvZG8oKSB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVFbGVtZW50cygnZGl2JylcbiAgICAgICAgdG9kby5jbGFzc05hbWUgPSAndG9kbydcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50cygnaW5wdXQnKVxuICAgICAgICBpbnB1dC50eXBlID0gJ2NoZWNrYm94J1xuICAgICAgICBpbnB1dC5uYW1lID0gJ3RvZG8nXG5cbiAgICAgICAgY29uc3QgcCA9IGNyZWF0ZUVsZW1lbnRzKCdwJylcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHRoaXMudGl0bGVcblxuICAgICAgICBjb25zdCByaWdodCA9IGNyZWF0ZUVsZW1lbnRzKCdkaXYnKVxuICAgICAgICByaWdodC5jbGFzc05hbWUgPSAncmlnaHQnXG4gICAgICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGVtZW50cygnZGl2JylcbiAgICAgICAgZGF0ZS5jbGFzc05hbWUgPSAnZGF0ZSdcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRoaXMuZHVlRGF0ZVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVFbGVtZW50cygnZGl2JylcbiAgICAgICAgb3B0aW9ucy5jbGFzc05hbWUgPSAnb3B0aW9ucydcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlRWxlbWVudHMoJ2knKVxuICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXRyYXNoLWNhbidcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUVsZW1lbnRzKCdpJylcbiAgICAgICAgZWRpdEJ0bi5jbGFzc05hbWUgPSAnZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlJ1xuICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKVxuXG4gICAgICAgIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXG5cbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICAgICAgcmlnaHQuYXBwZW5kQ2hpbGQob3B0aW9ucylcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZChwKVxuXG4gICAgICAgIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudHMoJ2xpJylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocmlnaHQpXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfVxufSIsImltcG9ydCBjcmVhdGVFbGVtZW50cyBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudHNcIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb0xpc3RIZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICBjcmVhdGVIZWFkZXIodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuaDIgPSBjcmVhdGVFbGVtZW50cygnaDInKVxuICAgICAgICB0aGlzLmgzID0gY3JlYXRlRWxlbWVudHMoJ2gzJylcbiAgICAgICAgdGhpcy5oMi50ZXh0Q29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudFxuICAgICAgICB0aGlzLmgzLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJ1xuICAgICAgICByZXR1cm4ge2gyOiB0aGlzLmgyLCBoMzogdGhpcy5oM31cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudHMoZWxlbWVudE5hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSlcbiAgICByZXR1cm4gZWxlbWVudFxufSIsImltcG9ydCBjcmVhdGVFbGVtZW50cyBmcm9tIFwiLi9jcmVhdGVFbGVtZW50c1wiXG5cbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0FycmF5ID0gWydDaG9yZXMnLCAnQ29kaW5nJ11cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0b2RvKSB7XG4gICAgY29uc3QgaXNBYnNlbnQgPSBwcm9qZWN0c0FycmF5LmV2ZXJ5KHByb2plY3QgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdCAhPT0gdG9kby5wcm9qZWN0TmFtZVxuICAgIH0pXG4gICAgXG4gICAgaWYoaXNBYnNlbnQpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZUVsZW1lbnRzKCdsaScpXG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gJ3Byb2plY3QnXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSB0b2RvLnByb2plY3ROYW1lXG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0LnRleHRDb250ZW50KVxuICAgICAgICBcbiAgICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdClcbiAgICB9XG59IiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuL2FkZFRvZG8nXG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcyB1bCcpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICBjb25zdCB0b2Rvc0FycmF5ID0gWy4uLnVsLmNoaWxkcmVuXVxuICAgIHRvZG9zLnNwbGljZSh0b2Rvc0FycmF5LmluZGV4T2YodG9kbyksIDEpXG4gICAgY29uc29sZS5sb2codG9kbylcbiAgICBjb25zb2xlLmxvZyh0b2RvcylcbiAgICB1bC5pbm5lckhUTUwgPSAnJ1xuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IG15VG9kbyA9IHRvZG8uY3JlYXRlVG9kbygpXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKG15VG9kbylcbiAgICB9KVxufSIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vYWRkVG9kb1wiXG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcyB1bCcpXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpXG5jb25zdCBkZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1pbnB1dCcpXG5jb25zdCBkYXRlICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWlucHV0JylcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbnB1dCcpXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVFZGl0KHRvZG8pIHtcbiAgICBjb25zdCB0b2Rvc0FycmF5ID0gWy4uLnVsLmNoaWxkcmVuXVxuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gdG9kb3NbdG9kb3NBcnJheS5pbmRleE9mKHRvZG8pXVxuICAgIGN1cnJlbnRUb2RvLnVuZGVyVXBkYXRlID0gdHJ1ZVxuICAgIHRpdGxlLnZhbHVlID0gY3VycmVudFRvZG8udGl0bGVcbiAgICBkZXRhaWwudmFsdWUgPSBjdXJyZW50VG9kby5kZXRhaWxzXG4gICAgZGF0ZS52YWx1ZSA9IGN1cnJlbnRUb2RvLmR1ZURhdGVcbiAgICBwcm9qZWN0LnZhbHVlID0gY3VycmVudFRvZG8ucHJvamVjdE5hbWVcbiAgICB0aXRsZS5mb2N1cygpXG59XG5cbmZ1bmN0aW9uIGFwcGx5RWRpdCgpIHtcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBpZih0b2RvLnVuZGVyVXBkYXRlKSB7XG4gICAgICAgICAgICB0b2RvLnRpdGxlID0gdGl0bGUudmFsdWVcbiAgICAgICAgICAgIHRvZG8uZGV0YWlscyA9IGRldGFpbC52YWx1ZVxuICAgICAgICAgICAgdG9kby5kdWVEYXRlID0gZGF0ZS52YWx1ZVxuICAgICAgICAgICAgdG9kby5wcm9qZWN0TmFtZSA9IHByb2plY3QudmFsdWVcbiAgICAgICAgICAgIHRvZG8udW5kZXJVcGRhdGUgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdWwuaW5uZXJIVE1MID0gJydcbiAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgbXlUb2RvID0gdG9kby5jcmVhdGVUb2RvKClcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobXlUb2RvKVxuICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHtpbml0aWFsaXplRWRpdCwgYXBwbHlFZGl0fSIsImNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zIHVsJylcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlVG9kbyhhcnJheSkge1xuICAgIHVsLmlubmVySFRNTCA9ICcnXG4gICAgYXJyYXkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgbXlUb2RvID0gdG9kby5jcmVhdGVUb2RvKClcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobXlUb2RvKVxuICAgIH0pXG59IiwiaW1wb3J0IFRvRG9MaXN0SGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvdG9kb0xpc3RIZWFkZXJcIlxuaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi9hZGRUb2RvXCJcbmltcG9ydCBwb3B1bGF0ZVRvZG8gZnJvbSBcIi4vcG9wdWxhdGVUb2RvXCJcbmNvbnN0IHRvZG9MaXN0SGVhZGVyID0gbmV3IFRvRG9MaXN0SGVhZGVyKClcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKVxuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MgdWwnKVxuXG5jb25zdCBwcm9qZWN0c0FycmF5ID0gWydDaG9yZXMnLCAnQ29kaW5nJ11cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBteUhlYWRlciA9IHRvZG9MaXN0SGVhZGVyLmNyZWF0ZUhlYWRlcihlLnRhcmdldClcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gJydcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobXlIZWFkZXIuaDIpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG15SGVhZGVyLmgzKSAgICAgICBcblxuICAgIGlmKHByb2plY3RzQXJyYXkuaW5jbHVkZXMoZS50YXJnZXQudGV4dENvbnRlbnQpKSB7XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRvZG8ucHJvamVjdE5hbWUgPT09IGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgICAgIH0pXG4gICAgICAgIHBvcHVsYXRlVG9kbyhuZXdBcnJheSlcbiAgICAgICAgXG4gICAgfSBlbHNlIGlmKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnSG9tZScpIHtcbiAgICAgICAgcG9wdWxhdGVUb2RvKHRvZG9zKVxuICAgIH0gZWxzZSBpZihlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ1RvZGF5Jykge1xuICAgICAgICBjb25zdCBuZXdBcnJheSA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0b2RvLmR1ZURhdGUuc2xpY2UoOCkgPT0gbmV3IERhdGUoKS5nZXREYXRlKClcbiAgICAgICAgfSlcbiAgICAgICBwb3B1bGF0ZVRvZG8obmV3QXJyYXkpXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGltZzEgZnJvbSAnLi9pbWFnZXMvbG9nby53ZWJwJ1xuaW1wb3J0IFRvRG9MaXN0SGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy90b2RvTGlzdEhlYWRlcidcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJ1xuaW1wb3J0IGFkZFRvZG8gZnJvbSAnLi9hZGRUb2RvJ1xuaW1wb3J0IGRlbGV0ZVRvZG8gZnJvbSAnLi9kZWxldGVUb2RvJ1xuaW1wb3J0IHJvdXRlIGZyb20gJy4vcm91dGUnXG5pbXBvcnQgeyBhcHBseUVkaXQsaW5pdGlhbGl6ZUVkaXQgfSBmcm9tICcuL2VkaXRUb2RvJ1xuaW1wb3J0IHBvcHVsYXRlVG9kbyBmcm9tICcuL3BvcHVsYXRlVG9kbydcbmltcG9ydCB7IHRvZG9zIH0gZnJvbSAnLi9hZGRUb2RvJ1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9jcmVhdGVQcm9qZWN0J1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vY29tcG9uZW50cy9zdG9yZSdcblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4vLyAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSkge1xuICAgICAgICBcbi8vICAgICAgICAgY29uc3Qgc3RvcmVkVG9kb3MgPSBTdG9yZS5nZXRUb2RvKClcbi8vICAgICAgICAgc3RvcmVkVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbi8vICAgICAgICAgICAgIHRvZG9zLnB1c2godG9kbylcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgY29uc29sZS5sb2codG9kb3MpXG4vLyAgICAgICAgIC8vIHBvcHVsYXRlVG9kbyh0b2Rvcylcbi8vICAgICB9XG4vLyB9KVxuICAgIFxuXG5jb25zdCBsb2dvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28taW1nJylcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtYmFycycpXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rJylcbmNvbnN0IHBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwQnRuJylcblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrQnRuJylcbmNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxCdG4nKVxuY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRhc2tCdG4nKVxuXG5sb2dvSW1nLnNyYyA9IGltZzFcbmNvbnN0IHRvRG9MaXN0SGVhZGVyID0gbmV3IFRvRG9MaXN0SGVhZGVyKClcbmNvbnN0IGZvcm0gPSBuZXcgRm9ybSgpXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG59KVxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm91dGUpXG59KVxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRUb2RvKClcbiAgICBwb3B1bGF0ZVRvZG8odG9kb3MpXG4gICAgY3JlYXRlUHJvamVjdCh0b2Rvc1t0b2Rvcy5sZW5ndGggLSAxXSlcbiAgICBTdG9yZS5zdG9yZVRvZG8odG9kb3MpXG59KVxuXG5wb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm0uc2hvdylcbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm0uaGlkZSlcbmVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwbHlFZGl0KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYoaGFzQ2xhc3MoZS50YXJnZXQsICdkZWxldGUnKSkge1xuICAgICAgICBkZWxldGVUb2RvKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KVxuICAgIH0gZWxzZSBpZihoYXNDbGFzcyhlLnRhcmdldCwgJ2VkaXQnKSkge1xuICAgICAgICBpbml0aWFsaXplRWRpdChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudClcbiAgICB9IGVsc2UgaWYoaGFzQ2xhc3MoZS50YXJnZXQsICdwcm9qZWN0JykpIHtcbiAgICAgICAgcm91dGUoZSlcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBoYXNDbGFzcyAgKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG59ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==