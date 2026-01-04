/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  background: #f4f4f5;
  color: #111827;
}

#app {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

/* Sidebar */

.sidebar {
  background: #111827;
  color: #e5e7eb;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar h1 {
  margin: 0 0 1rem;
  font-size: 1.4rem;
}

#project-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}

.project-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.6rem;
  border-radius: 0.4rem;
  cursor: pointer;
}

.project-item.active {
  background: #374151;
}

.project-name {
  flex: 1;
}

.project-delete {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
}

/* Main */

.main {
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-header h2 {
  margin: 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

/* Buttons */

.primary-btn,
.secondary-btn {
  border-radius: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
}

.primary-btn {
  background: #2563eb;
  color: white;
}

.primary-btn:hover {
  filter: brightness(1.05);
}

.secondary-btn {
  background: #e5e7eb;
  color: #111827;
}

/* Todo list */

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.todo-item {
  background: white;
  border-radius: 0.6rem;
  padding: 0.6rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-left: 4px solid transparent;
}

.todo-main {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.todo-title {
  font-weight: 600;
}

.todo-meta {
  font-size: 0.8rem;
  color: #6b7280;
}

.todo-actions {
  margin-left: auto;
  display: flex;
  gap: 0.4rem;
}

.todo-details {
  font-size: 0.85rem;
  color: #4b5563;
}

.hidden {
  display: none;
}

/* Priority colors */

.priority-low {
  border-left-color: #10b981;
}

.priority-medium {
  border-left-color: #f59e0b;
}

.priority-high {
  border-left-color: #ef4444;
}

.todo-completed .todo-title {
  text-decoration: line-through;
  color: #9ca3af;
}

/* Modal */

.modal {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 1.2rem 1.5rem;
  border-radius: 0.7rem;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.modal-content h3 {
  margin: 0 0 0.4rem;
}

.modal-content label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  gap: 0.3rem;
}

.modal-content input,
.modal-content textarea,
.modal-content select {
  padding: 0.3rem 0.5rem;
  border-radius: 0.4rem;
  border: 1px solid #d1d5db;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
}

`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT;cACY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA,YAAY;;AAEZ;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;EACtB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA,SAAS;;AAET;EACE,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA,YAAY;;AAEZ;;EAEE,qBAAqB;EACrB,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA,oBAAoB;;AAEpB;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA,UAAU;;AAEV;EACE,eAAe;EACf,QAAQ;EACR,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,WAAW;AACb;;AAEA;;;EAGE,sBAAsB;EACtB,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,WAAW;AACb","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    sans-serif;\n  background: #f4f4f5;\n  color: #111827;\n}\n\n#app {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  min-height: 100vh;\n}\n\n/* Sidebar */\n\n.sidebar {\n  background: #111827;\n  color: #e5e7eb;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.sidebar h1 {\n  margin: 0 0 1rem;\n  font-size: 1.4rem;\n}\n\n#project-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1rem;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.4rem 0.6rem;\n  border-radius: 0.4rem;\n  cursor: pointer;\n}\n\n.project-item.active {\n  background: #374151;\n}\n\n.project-name {\n  flex: 1;\n}\n\n.project-delete {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n}\n\n/* Main */\n\n.main {\n  padding: 1.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-header h2 {\n  margin: 0;\n}\n\n.actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\n/* Buttons */\n\n.primary-btn,\n.secondary-btn {\n  border-radius: 0.5rem;\n  padding: 0.4rem 0.9rem;\n  border: none;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n\n.primary-btn {\n  background: #2563eb;\n  color: white;\n}\n\n.primary-btn:hover {\n  filter: brightness(1.05);\n}\n\n.secondary-btn {\n  background: #e5e7eb;\n  color: #111827;\n}\n\n/* Todo list */\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n\n.todo-item {\n  background: white;\n  border-radius: 0.6rem;\n  padding: 0.6rem 0.9rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  border-left: 4px solid transparent;\n}\n\n.todo-main {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n\n.todo-title {\n  font-weight: 600;\n}\n\n.todo-meta {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n\n.todo-actions {\n  margin-left: auto;\n  display: flex;\n  gap: 0.4rem;\n}\n\n.todo-details {\n  font-size: 0.85rem;\n  color: #4b5563;\n}\n\n.hidden {\n  display: none;\n}\n\n/* Priority colors */\n\n.priority-low {\n  border-left-color: #10b981;\n}\n\n.priority-medium {\n  border-left-color: #f59e0b;\n}\n\n.priority-high {\n  border-left-color: #ef4444;\n}\n\n.todo-completed .todo-title {\n  text-decoration: line-through;\n  color: #9ca3af;\n}\n\n/* Modal */\n\n.modal {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-content {\n  background: white;\n  padding: 1.2rem 1.5rem;\n  border-radius: 0.7rem;\n  min-width: 300px;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n\n.modal-content h3 {\n  margin: 0 0 0.4rem;\n}\n\n.modal-content label {\n  display: flex;\n  flex-direction: column;\n  font-size: 0.9rem;\n  gap: 0.3rem;\n}\n\n.modal-content input,\n.modal-content textarea,\n.modal-content select {\n  padding: 0.3rem 0.5rem;\n  border-radius: 0.4rem;\n  border: 1px solid #d1d5db;\n}\n\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.4rem;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../getDayOfYear.js */ "./node_modules/date-fns/getDayOfYear.js");
/* harmony import */ var _getISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getISOWeek.js */ "./node_modules/date-fns/getISOWeek.js");
/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
/* harmony import */ var _getWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getWeek.js */ "./node_modules/date-fns/getWeek.js");
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");
/* harmony import */ var _lightFormatters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lightFormatters.js */ "./node_modules/date-fns/_lib/format/lightFormatters.js");









const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_6__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_4__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_6__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_js__WEBPACK_IMPORTED_MODULE_3__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_6__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_js__WEBPACK_IMPORTED_MODULE_0__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_6__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_6__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_6__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_6__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_6__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(+date / 1000);
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(+date, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_5__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/normalizeDates.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/normalizeDates.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeDates: () => (/* binding */ normalizeDates)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


function normalizeDates(context, ...dates) {
  const normalize = _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");


/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date)
    return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js");





/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_1__.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_3__.startOfDay)(laterDate_);
  const earlierStartOfDay = (0,_startOfDay_js__WEBPACK_IMPORTED_MODULE_3__.startOfDay)(earlierDate_);

  const laterTimestamp =
    +laterStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__.getTimezoneOffsetInMilliseconds)(laterStartOfDay);
  const earlierTimestamp =
    +earlierStartOfDay - (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_0__.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / _constants_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/format.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_3__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultLocale.js */ "./node_modules/date-fns/locale/en-US.js");
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/format/formatters.js */ "./node_modules/date-fns/_lib/format/formatters.js");
/* harmony import */ var _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/format/longFormatters.js */ "./node_modules/date-fns/_lib/format/longFormatters.js");
/* harmony import */ var _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/protectedTokens.js */ "./node_modules/date-fns/_lib/protectedTokens.js");
/* harmony import */ var _isValid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.js */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_6__.toDate)(date, options?.in);

  if (!(0,_isValid_js__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_3__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_4__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_4__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_4__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInCalendarDays.js */ "./node_modules/date-fns/differenceInCalendarDays.js");
/* harmony import */ var _startOfYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfYear.js */ "./node_modules/date-fns/startOfYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link getDayOfYear} function options.
 */

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_2__.toDate)(date, options?.in);
  const diff = (0,_differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_0__.differenceInCalendarDays)(_date, (0,_startOfYear_js__WEBPACK_IMPORTED_MODULE_1__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.js */ "./node_modules/date-fns/startOfISOWeekYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getISOWeek} function options.
 */

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_3__.toDate)(date, options?.in);
  const diff = +(0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link getISOWeekYear} function options.
 */

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_2__.toDate)(date, options?.in);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getWeek.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.js */ "./node_modules/date-fns/startOfWeekYear.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */
function getWeek(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_3__.toDate)(date, options?.in);
  const diff = +(0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_3__.toDate)(date, options?.in);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfWeek)(firstWeekOfThisYear, options);

  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/isDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isValid.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.js */ "./node_modules/date-fns/isDate.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  return !((!(0,_isDate_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") || isNaN(+(0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date)));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // [TODO] -- I challenge you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // [TODO] -- I challenge you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // [TODO] I challenge you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js");
/* harmony import */ var _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js");
/* harmony import */ var _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js");
/* harmony import */ var _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.js */ "./node_modules/date-fns/locale/en-US/_lib/localize.js");
/* harmony import */ var _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.js */ "./node_modules/date-fns/locale/en-US/_lib/match.js");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn.js");
/* harmony import */ var _lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/parseISO.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/parseISO.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseISO: () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");




/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  const invalidDate = () => (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in, NaN);

  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);

  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(+date)) return invalidDate();

  const timestamp = +date;
  let time = 0;
  let offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_2__.toDate)(0, options?.in);
    result.setFullYear(
      tmpDate.getUTCFullYear(),
      tmpDate.getUTCMonth(),
      tmpDate.getUTCDate(),
    );
    result.setHours(
      tmpDate.getUTCHours(),
      tmpDate.getUTCMinutes(),
      tmpDate.getUTCSeconds(),
      tmpDate.getUTCMilliseconds(),
    );
    return result;
  }

  return (0,_toDate_js__WEBPACK_IMPORTED_MODULE_2__.toDate)(timestamp + time + offset, options?.in);
}

const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/,
};

const dateRegex =
  /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex =
  /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length,
      );
    }
  }

  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" +
      (4 + additionalDigits) +
      "})|(\\d{2}|[+-]\\d{" +
      (2 + additionalDigits) +
      "})$)",
  );

  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return { year: NaN, restDateString: "" };

  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length),
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);

  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);

  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (
      !validateDate(year, month, day) ||
      !validateDayOfYearDate(year, dayOfYear)
    ) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return (
    hours * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute + seconds * 1000
  );
}

function parseTimeUnit(value) {
  return (value && parseFloat(value.replace(",", "."))) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;

  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;

  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = (captures[3] && parseInt(captures[3])) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_js__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function validateDate(year, month, date) {
  return (
    month >= 0 &&
    month <= 11 &&
    date >= 1 &&
    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  );
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return (
    seconds >= 0 &&
    seconds < 60 &&
    minutes >= 0 &&
    minutes < 60 &&
    hours >= 0 &&
    hours < 25
  );
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseISO);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");


/**
 * The {@link startOfISOWeek} function options.
 */

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date, options) {
  return (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { ...options, weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
/* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");




/**
 * The {@link startOfISOWeekYear} function options.
 */

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date, options) {
  const year = (0,_getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getISOWeekYear)(date, options);
  const fourthOfJanuary = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
/* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfYear} function options.
 */

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date, options) {
  const date_ = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeUI: () => (/* binding */ initializeUI)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parseISO.js");
// src/modules/dom.js



let pm; // projectManager
let storageRef;

let projectListEl;
let currentProjectTitleEl;
let todoListEl;
let addProjectBtn;
let addTodoBtn;

let todoModal;
let todoModalTitle;
let todoForm;
let todoTitleInput;
let todoDescriptionInput;
let todoDueDateInput;
let todoPrioritySelect;
let todoCancelBtn;

// To know whether we're editing or creating
let editContext = null; // { projectIndex, todoIndex } or null

function formatDueDate(dueDate) {
  if (!dueDate) return "No due date";
  const parsed = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parseISO)(dueDate);
  if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isValid)(parsed)) return dueDate;
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(parsed, "MMM d, yyyy");
}

function openTodoModal(mode, projectIndex = null, todoIndex = null) {
  if (mode === "create") {
    todoModalTitle.textContent = "New Todo";
    todoForm.reset();
    editContext = null;
  } else if (mode === "edit") {
    todoModalTitle.textContent = "Edit Todo";
    editContext = { projectIndex, todoIndex };
    const todo = pm.projects[projectIndex].todos[todoIndex];
    todoTitleInput.value = todo.title;
    todoDescriptionInput.value = todo.description;
    todoDueDateInput.value = todo.dueDate || "";
    todoPrioritySelect.value = todo.priority || "low";
  }

  todoModal.classList.remove("hidden");
}

function closeTodoModal() {
  todoModal.classList.add("hidden");
  editContext = null;
}

function handleTodoFormSubmit(e) {
  e.preventDefault();

  const title = todoTitleInput.value.trim();
  const description = todoDescriptionInput.value.trim();
  const dueDate = todoDueDateInput.value; // 'YYYY-MM-DD'
  const priority = todoPrioritySelect.value;

  if (!title) return;

  const todoData = {
    title,
    description,
    dueDate,
    priority,
  };

  if (editContext === null) {
    // create new
    pm.addTodoToCurrent(todoData);
  } else {
    // update existing
    pm.updateTodo(editContext.projectIndex, editContext.todoIndex, todoData);
  }

  storageRef.save(pm.projects);
  renderTodos();
  closeTodoModal();
}

function renderProjects() {
  projectListEl.innerHTML = "";

  pm.projects.forEach((project, index) => {
    const li = document.createElement("li");
    li.classList.add("project-item");
    if (index === pm.currentProjectIndex) li.classList.add("active");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("project-name");
    nameSpan.textContent = project.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("project-delete");
    deleteBtn.textContent = "×";

    // Click to switch project (but not when clicking the delete button)
    nameSpan.addEventListener("click", () => {
      pm.setCurrentProject(index);
      storageRef.save(pm.projects);
      renderProjects();
      renderTodos();
    });

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      pm.deleteProject(index);
      storageRef.save(pm.projects);
      renderProjects();
      renderTodos();
    });

    li.appendChild(nameSpan);
    li.appendChild(deleteBtn);
    projectListEl.appendChild(li);
  });

  currentProjectTitleEl.textContent = pm.getCurrentProject().name;
}

function renderTodos() {
  const project = pm.getCurrentProject();
  currentProjectTitleEl.textContent = project.name;
  todoListEl.innerHTML = "";

  if (project.todos.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "No todos yet. Add one!";
    todoListEl.appendChild(emptyMsg);
    return;
  }

  pm.projects.forEach((proj, pIndex) => {
    if (pIndex !== pm.currentProjectIndex) return;
    proj.todos.forEach((todo, tIndex) => {
      const item = document.createElement("div");
      item.classList.add("todo-item");
      item.dataset.projectIndex = pIndex;
      item.dataset.todoIndex = tIndex;

      if (todo.priority === "low") item.classList.add("priority-low");
      if (todo.priority === "medium") item.classList.add("priority-medium");
      if (todo.priority === "high") item.classList.add("priority-high");
      if (todo.completed) item.classList.add("todo-completed");

      const main = document.createElement("div");
      main.classList.add("todo-main");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;

      checkbox.addEventListener("change", () => {
        pm.toggleTodoCompleted(pIndex, tIndex);
        storageRef.save(pm.projects);
        renderTodos();
      });

      const textWrapper = document.createElement("div");

      const titleEl = document.createElement("div");
      titleEl.classList.add("todo-title");
      titleEl.textContent = todo.title;

      const metaEl = document.createElement("div");
      metaEl.classList.add("todo-meta");
      metaEl.textContent = `${formatDueDate(todo.dueDate)} • Priority: ${
        todo.priority
      }`;

      textWrapper.appendChild(titleEl);
      textWrapper.appendChild(metaEl);

      const actions = document.createElement("div");
      actions.classList.add("todo-actions");

      const detailsBtn = document.createElement("button");
      detailsBtn.classList.add("secondary-btn");
      detailsBtn.textContent = "Details";

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("secondary-btn");
      deleteBtn.textContent = "Delete";

      actions.appendChild(detailsBtn);
      actions.appendChild(deleteBtn);

      main.appendChild(checkbox);
      main.appendChild(textWrapper);
      main.appendChild(actions);

      const details = document.createElement("div");
      details.classList.add("todo-details", "hidden");
      details.innerHTML = `
        <p><strong>Description:</strong> ${
          todo.description || "No description"
        }</p>
        <p><strong>Notes:</strong> ${todo.notes || "None"}</p>
        <button class="primary-btn todo-edit-btn">Edit</button>
      `;

      // Toggle details
      detailsBtn.addEventListener("click", () => {
        details.classList.toggle("hidden");
      });

      // Delete
      deleteBtn.addEventListener("click", () => {
        pm.deleteTodo(pIndex, tIndex);
        storageRef.save(pm.projects);
        renderTodos();
      });

      // Edit (open modal)
      details
        .querySelector(".todo-edit-btn")
        .addEventListener("click", () => {
          openTodoModal("edit", pIndex, tIndex);
        });

      item.appendChild(main);
      item.appendChild(details);
      todoListEl.appendChild(item);
    });
  });
}

function initializeUI(projectManager, storage) {
  pm = projectManager;
  storageRef = storage;

  projectListEl = document.getElementById("project-list");
  currentProjectTitleEl = document.getElementById("current-project-title");
  todoListEl = document.getElementById("todo-list");
  addProjectBtn = document.getElementById("add-project-btn");
  addTodoBtn = document.getElementById("add-todo-btn");

  todoModal = document.getElementById("todo-modal");
  todoModalTitle = document.getElementById("todo-modal-title");
  todoForm = document.getElementById("todo-form");
  todoTitleInput = document.getElementById("todo-title");
  todoDescriptionInput = document.getElementById("todo-description");
  todoDueDateInput = document.getElementById("todo-dueDate");
  todoPrioritySelect = document.getElementById("todo-priority");
  todoCancelBtn = document.getElementById("todo-cancel-btn");

  // Event listeners
  addProjectBtn.addEventListener("click", () => {
    const name = prompt("Project name:");
    if (!name) return;
    pm.addProject(name);
    storageRef.save(pm.projects);
    renderProjects();
    renderTodos();
  });

  addTodoBtn.addEventListener("click", () => {
    openTodoModal("create");
  });

  todoCancelBtn.addEventListener("click", () => {
    closeTodoModal();
  });

  todoForm.addEventListener("submit", handleTodoFormSubmit);

  // Close modal if user clicks outside the content
  todoModal.addEventListener("click", (e) => {
    if (e.target === todoModal) {
      closeTodoModal();
    }
  });

  // Initial render
  renderProjects();
  renderTodos();
}



/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
// src/modules/project.js

function createProject(name) {
  return {
    name,
    todos: [],
  };
}



/***/ }),

/***/ "./src/modules/projectManager.js":
/*!***************************************!*\
  !*** ./src/modules/projectManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectManager: () => (/* binding */ projectManager)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
// src/modules/projectManager.js




const projectManager = {
  projects: [],
  currentProjectIndex: 0,

  getCurrentProject() {
    return this.projects[this.currentProjectIndex];
  },

  addProject(name) {
    if (!name) return;
    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);
    this.projects.push(project);
    this.currentProjectIndex = this.projects.length - 1;
  },

  deleteProject(index) {
    if (index < 0 || index >= this.projects.length) return;

    this.projects.splice(index, 1);

    if (this.projects.length === 0) {
      // Always keep at least one project
      this.projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)("Inbox"));
      this.currentProjectIndex = 0;
    } else if (this.currentProjectIndex >= this.projects.length) {
      this.currentProjectIndex = this.projects.length - 1;
    }
  },

  setCurrentProject(index) {
    if (index < 0 || index >= this.projects.length) return;
    this.currentProjectIndex = index;
  },

  addTodoToCurrent(todoData) {
    const project = this.getCurrentProject();
    const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(todoData);
    project.todos.push(todo);
  },

  deleteTodo(projectIndex, todoIndex) {
    const project = this.projects[projectIndex];
    if (!project) return;
    if (todoIndex < 0 || todoIndex >= project.todos.length) return;
    project.todos.splice(todoIndex, 1);
  },

  updateTodo(projectIndex, todoIndex, updatedFields) {
    const project = this.projects[projectIndex];
    if (!project) return;
    const todo = project.todos[todoIndex];
    if (!todo) return;
    Object.assign(todo, updatedFields);
  },

  toggleTodoCompleted(projectIndex, todoIndex) {
    const project = this.projects[projectIndex];
    if (!project) return;
    const todo = project.todos[todoIndex];
    if (!todo) return;
    todo.completed = !todo.completed;
  },
};



/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
// src/modules/storage.js

const STORAGE_KEY = "todo-projects";

const storage = {
  save(projects) {
    try {
      const json = JSON.stringify(projects);
      localStorage.setItem(STORAGE_KEY, json);
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }
  },

  load() {
    try {
      const json = localStorage.getItem(STORAGE_KEY);
      if (!json) return null;
      return JSON.parse(json);
    } catch (err) {
      console.error("Error loading from localStorage", err);
      return null;
    }
  },
};



/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
// src/modules/todo.js

function createTodo({
  title = "",
  description = "",
  dueDate = "",
  priority = "low",
  notes = "",
  checklist = [],
  completed = false,
} = {}) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    completed,
  };
}



/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projectManager */ "./src/modules/projectManager.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todo */ "./src/modules/todo.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
// src/index.js








function loadFromStorage() {
  const saved = _modules_storage__WEBPACK_IMPORTED_MODULE_4__.storage.load();
  if (!saved || !Array.isArray(saved) || saved.length === 0) {
    // No saved data -> create default project
    const defaultProject = (0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.createProject)("Inbox");
    _modules_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.projects.push(defaultProject);
    _modules_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.currentProjectIndex = 0;
    return;
  }

  // Rebuild Project and Todo objects from plain JSON
  saved.forEach((projData) => {
    const project = (0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.createProject)(projData.name);
    if (Array.isArray(projData.todos)) {
      projData.todos.forEach((todoData) => {
        project.todos.push((0,_modules_todo__WEBPACK_IMPORTED_MODULE_3__.createTodo)(todoData));
      });
    }
    _modules_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.projects.push(project);
  });

  _modules_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager.currentProjectIndex = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();
  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_5__.initializeUI)(_modules_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectManager, _modules_storage__WEBPACK_IMPORTED_MODULE_4__.storage);
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sdUZBQXVGLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBLE9BQU8sd0VBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsV0FBVyx3RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILFNBQVMsd0VBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsT0FBTyx3RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxhQUFhLHdFQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFMMEQ7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O1VDeEI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFNEI7QUFDOEI7QUFDUjtBQUNOO0FBQ0E7QUFDQzs7QUFFN0M7QUFDQSxnQkFBZ0IscURBQU87QUFDdkI7QUFDQTtBQUNBLDJCQUEyQiwrREFBYTtBQUN4QyxJQUFJLG1FQUFjO0FBQ2xCLElBQUksbUVBQWM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLCtEQUFhO0FBQ2pDO0FBQ0E7QUFDQSwyQkFBMkIseURBQVU7QUFDckMsT0FBTztBQUNQO0FBQ0EsSUFBSSxtRUFBYztBQUNsQixHQUFHOztBQUVILEVBQUUsbUVBQWM7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMERBQVksQ0FBQyxtRUFBYyxFQUFFLHFEQUFPO0FBQ3RDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvZm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL25vcm1hbGl6ZURhdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0RGF5T2ZZZWFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrWWVhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZUlTTy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrWWVhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrWWVhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZlllYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjU7XG4gIGNvbG9yOiAjMTExODI3O1xufVxuXG4jYXBwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjBweCAxZnI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBTaWRlYmFyICovXG5cbi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogIzExMTgyNztcbiAgY29sb3I6ICNlNWU3ZWI7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uc2lkZWJhciBoMSB7XG4gIG1hcmdpbjogMCAwIDFyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4jcHJvamVjdC1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuLnByb2plY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzM3NDE1MTtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gIGZsZXg6IDE7XG59XG5cbi5wcm9qZWN0LWRlbGV0ZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM5Y2EzYWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTWFpbiAqL1xuXG4ubWFpbiB7XG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4taGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi8qIEJ1dHRvbnMgKi9cblxuLnByaW1hcnktYnRuLFxuLnNlY29uZGFyeS1idG4ge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjlyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnByaW1hcnktYnRuIHtcbiAgYmFja2dyb3VuZDogIzI1NjNlYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJpbWFyeS1idG46aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNSk7XG59XG5cbi5zZWNvbmRhcnktYnRuIHtcbiAgYmFja2dyb3VuZDogI2U1ZTdlYjtcbiAgY29sb3I6ICMxMTE4Mjc7XG59XG5cbi8qIFRvZG8gbGlzdCAqL1xuXG4udG9kby1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjZyZW07XG59XG5cbi50b2RvLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICBwYWRkaW5nOiAwLjZyZW0gMC45cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNHJlbTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnRvZG8tbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC42cmVtO1xufVxuXG4udG9kby10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b2RvLW1ldGEge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM2YjcyODA7XG59XG5cbi50b2RvLWFjdGlvbnMge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjRyZW07XG59XG5cbi50b2RvLWRldGFpbHMge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjNGI1NTYzO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogUHJpb3JpdHkgY29sb3JzICovXG5cbi5wcmlvcml0eS1sb3cge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzEwYjk4MTtcbn1cblxuLnByaW9yaXR5LW1lZGl1bSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjU5ZTBiO1xufVxuXG4ucHJpb3JpdHktaGlnaCB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZWY0NDQ0O1xufVxuXG4udG9kby1jb21wbGV0ZWQgLnRvZG8tdGl0bGUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICM5Y2EzYWY7XG59XG5cbi8qIE1vZGFsICovXG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjhyZW07XG59XG5cbi5tb2RhbC1jb250ZW50IGgzIHtcbiAgbWFyZ2luOiAwIDAgMC40cmVtO1xufVxuXG4ubW9kYWwtY29udGVudCBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBnYXA6IDAuM3JlbTtcbn1cblxuLm1vZGFsLWNvbnRlbnQgaW5wdXQsXG4ubW9kYWwtY29udGVudCB0ZXh0YXJlYSxcbi5tb2RhbC1jb250ZW50IHNlbGVjdCB7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcbn1cblxuLm1vZGFsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDAuNHJlbTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVDtjQUNZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUEsWUFBWTs7QUFFWjs7RUFFRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiAjZjRmNGY1O1xcbiAgY29sb3I6ICMxMTE4Mjc7XFxufVxcblxcbiNhcHAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjYwcHggMWZyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kOiAjMTExODI3O1xcbiAgY29sb3I6ICNlNWU3ZWI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnNpZGViYXIgaDEge1xcbiAgbWFyZ2luOiAwIDAgMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwIDAgMXJlbTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICMzNzQxNTE7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzljYTNhZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4taGVhZGVyIGgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG5cXG4ucHJpbWFyeS1idG4sXFxuLnNlY29uZGFyeS1idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDAuOXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucHJpbWFyeS1idG4ge1xcbiAgYmFja2dyb3VuZDogIzI1NjNlYjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByaW1hcnktYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTtcXG59XFxuXFxuLnNlY29uZGFyeS1idG4ge1xcbiAgYmFja2dyb3VuZDogI2U1ZTdlYjtcXG4gIGNvbG9yOiAjMTExODI3O1xcbn1cXG5cXG4vKiBUb2RvIGxpc3QgKi9cXG5cXG4udG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjZyZW07XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxuICBwYWRkaW5nOiAwLjZyZW0gMC45cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNHJlbTtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50b2RvLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNnJlbTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRvZG8tbWV0YSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjNmI3MjgwO1xcbn1cXG5cXG4udG9kby1hY3Rpb25zIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIGNvbG9yOiAjNGI1NTYzO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFByaW9yaXR5IGNvbG9ycyAqL1xcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMGI5ODE7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmNTllMGI7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4udG9kby1jb21wbGV0ZWQgLnRvZG8tdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogIzljYTNhZjtcXG59XFxuXFxuLyogTW9kYWwgKi9cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjdyZW07XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjhyZW07XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGgzIHtcXG4gIG1hcmdpbjogMCAwIDAuNHJlbTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBpbnB1dCxcXG4ubW9kYWwtY29udGVudCB0ZXh0YXJlYSxcXG4ubW9kYWwtY29udGVudCBzZWxlY3Qge1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7XFxufVxcblxcbi5tb2RhbC1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAwLjRyZW07XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrLmpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLmpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRXZWVrWWVhci5qc1wiO1xuXG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLmpzXCI7XG5pbXBvcnQgeyBsaWdodEZvcm1hdHRlcnMgfSBmcm9tIFwiLi9saWdodEZvcm1hdHRlcnMuanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC50cnVuYygrZGF0ZSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKCtkYXRlLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5qc1wiO1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgbGlnaHRGb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gXCJ5eVwiID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gXCJNXCIgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXREYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0SG91cnMoKSAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09IFwiYW1cIiA/IFwiYS5tLlwiIDogXCJwLm0uXCI7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0U2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGgudHJ1bmMoXG4gICAgICBtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSxcbiAgICApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuIiwiY29uc3QgZGF0ZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCB0aW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwicHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwicHBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJwcHBwXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIGNvbnN0IGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIGNvbnN0IHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIGxldCBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXRcbiAgICAucmVwbGFjZShcInt7ZGF0ZX19XCIsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSlcbiAgICAucmVwbGFjZShcInt7dGltZX19XCIsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIsXG59O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVEYXRlcyhjb250ZXh0LCAuLi5kYXRlcykge1xuICBjb25zdCBub3JtYWxpemUgPSBjb25zdHJ1Y3RGcm9tLmJpbmQoXG4gICAgbnVsbCxcbiAgICBjb250ZXh0IHx8IGRhdGVzLmZpbmQoKGRhdGUpID0+IHR5cGVvZiBkYXRlID09PSBcIm9iamVjdFwiKSxcbiAgKTtcbiAgcmV0dXJuIGRhdGVzLm1hcChub3JtYWxpemUpO1xufVxuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cnMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2libGUgYnkgMTAwIGFuZCBub3QgZGl2aXNpYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tU3ltYm9sXG4gKiBAc3VtbWFyeSBTeW1ib2wgZW5hYmxpbmcgRGF0ZSBleHRlbnNpb25zIHRvIGluaGVyaXQgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZS5cbiAqXG4gKiBUaGUgc3ltYm9sIGlzIHVzZWQgdG8gZW5hYmxlIHRoZSBgY29uc3RydWN0RnJvbWAgZnVuY3Rpb24gdG8gY29uc3RydWN0IGEgZGF0ZVxuICogdXNpbmcgYSByZWZlcmVuY2UgZGF0ZSBhbmQgYSB2YWx1ZS4gSXQgYWxsb3dzIHRvIHRyYW5zZmVyIGV4dHJhIHByb3BlcnRpZXNcbiAqIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRoZSBuZXcgZGF0ZS4gSXQncyB1c2VmdWwgZm9yIGV4dGVuc2lvbnMgbGlrZVxuICogW2BUWkRhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdHopIHRoYXQgYWNjZXB0IGEgdGltZSB6b25lIGFzXG4gKiBhIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICovXG5leHBvcnQgY29uc3QgY29uc3RydWN0RnJvbVN5bWJvbCA9IFN5bWJvbC5mb3IoXCJjb25zdHJ1Y3REYXRlRnJvbVwiKTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb21TeW1ib2wgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogU3RhcnRpbmcgZnJvbSB2My43LjAsIGl0IGFsbG93cyB0byBjb25zdHJ1Y3QgYSBkYXRlIHVzaW5nIGBbU3ltYm9sLmZvcihcImNvbnN0cnVjdERhdGVGcm9tXCIpXWBcbiAqIGVuYWJsaW5nIHRvIHRyYW5zZmVyIGV4dHJhIHByb3BlcnRpZXMgZnJvbSB0aGUgcmVmZXJlbmNlIGRhdGUgdG8gdGhlIG5ldyBkYXRlLlxuICogSXQncyB1c2VmdWwgZm9yIGV4dGVuc2lvbnMgbGlrZSBbYFRaRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy90eilcbiAqIHRoYXQgYWNjZXB0IGEgdGltZSB6b25lIGFzIGEgY29uc3RydWN0b3IgYXJndW1lbnQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20vZGF0ZS1mbnNcIjtcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlPihkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnN0cnVjdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKTtcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBkYXRlKHZhbHVlKTtcblxuICBpZiAoZGF0ZSAmJiB0eXBlb2YgZGF0ZSA9PT0gXCJvYmplY3RcIiAmJiBjb25zdHJ1Y3RGcm9tU3ltYm9sIGluIGRhdGUpXG4gICAgcmV0dXJuIGRhdGVbY29uc3RydWN0RnJvbVN5bWJvbF0odmFsdWUpO1xuXG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcblxuICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLmpzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVEYXRlcyB9IGZyb20gXCIuL19saWIvbm9ybWFsaXplRGF0ZXMuanNcIjtcbmltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHBhcmFtIGxhdGVyRGF0ZSAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZWFybGllckRhdGUgLSBUaGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIG9iamVjdFxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhsYXRlckRhdGUsIGVhcmxpZXJEYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IFtsYXRlckRhdGVfLCBlYXJsaWVyRGF0ZV9dID0gbm9ybWFsaXplRGF0ZXMoXG4gICAgb3B0aW9ucz8uaW4sXG4gICAgbGF0ZXJEYXRlLFxuICAgIGVhcmxpZXJEYXRlLFxuICApO1xuXG4gIGNvbnN0IGxhdGVyU3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkobGF0ZXJEYXRlXyk7XG4gIGNvbnN0IGVhcmxpZXJTdGFydE9mRGF5ID0gc3RhcnRPZkRheShlYXJsaWVyRGF0ZV8pO1xuXG4gIGNvbnN0IGxhdGVyVGltZXN0YW1wID1cbiAgICArbGF0ZXJTdGFydE9mRGF5IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhsYXRlclN0YXJ0T2ZEYXkpO1xuICBjb25zdCBlYXJsaWVyVGltZXN0YW1wID1cbiAgICArZWFybGllclN0YXJ0T2ZEYXkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGVhcmxpZXJTdGFydE9mRGF5KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgobGF0ZXJUaW1lc3RhbXAgLSBlYXJsaWVyVGltZXN0YW1wKSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLmpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLmpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLmpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZC5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcbmV4cG9ydCB7IGZvcm1hdHRlcnMsIGxvbmdGb3JtYXR0ZXJzIH07XG5cbi8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuY29uc3QgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9XG4gIC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuY29uc3QgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuY29uc3QgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xuY29uc3QgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuZXhwb3J0IHsgZm9ybWF0IGFzIGZvcm1hdERhdGUgfTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGFsaWFzIGZvcm1hdERhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXIpKS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcblxuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3Qgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZlllYXIuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0RGF5T2ZZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXkgb2YgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRJU09XZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldElTT1dlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShfZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShfZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZXZWVrKF9kYXRlLCBvcHRpb25zKSAtICtzdGFydE9mV2Vla1llYXIoX2RhdGUsIG9wdGlvbnMpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWs7XG4iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4gfHwgZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmICgrX2RhdGUgPj0gK3N0YXJ0T2ZOZXh0WWVhcikge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmICgrX2RhdGUgPj0gK3N0YXJ0T2ZUaGlzWWVhcikge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiLi9pc0RhdGUuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRpYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgcmV0dXJuICEoKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHx8IGlzTmFOKCt0b0RhdGUoZGF0ZSkpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn1cbiIsIi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zPy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiBcInN0YW5kYWxvbmVcIjtcblxuICAgIGxldCB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJmb3JtYXR0aW5nXCIgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9XG4gICAgICAgIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBbVE9ET10gLS0gSSBjaGFsbGVuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBbVE9ET10gLS0gSSBjaGFsbGVuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIFtUT0RPXSBJIGNoYWxsZW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UuanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcuanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLmpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2guanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLmpzXCI7XG5cbmNvbnN0IGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiBcIkVFRUUsIE1NTU0gZG8sIHlcIixcbiAgbG9uZzogXCJNTU1NIGRvLCB5XCIsXG4gIG1lZGl1bTogXCJNTU0gZCwgeVwiLFxuICBzaG9ydDogXCJNTS9kZC95eXl5XCIsXG59O1xuXG5jb25zdCB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICBsb25nOiBcImg6bW06c3MgYSB6XCIsXG4gIG1lZGl1bTogXCJoOm1tOnNzIGFcIixcbiAgc2hvcnQ6IFwiaDptbSBhXCIsXG59O1xuXG5jb25zdCBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxuICBzaG9ydDogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxufTtcbiIsImNvbnN0IGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogXCJQXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UmVsYXRpdmUgPSAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSA9PlxuICBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG4iLCJpbXBvcnQgeyBidWlsZExvY2FsaXplRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4uanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLmpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5qc1wiO1xuXG5jb25zdCBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xuY29uc3QgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG5cbmNvbnN0IG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaSxcbn07XG5jb25zdCBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2ksXG59O1xuY29uc3QgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldLFxufTtcblxuY29uc3QgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXG59O1xuY29uc3QgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFtcbiAgICAvXmovaSxcbiAgICAvXmYvaSxcbiAgICAvXm0vaSxcbiAgICAvXmEvaSxcbiAgICAvXm0vaSxcbiAgICAvXmovaSxcbiAgICAvXmovaSxcbiAgICAvXmEvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcblxuICBhbnk6IFtcbiAgICAvXmphL2ksXG4gICAgL15mL2ksXG4gICAgL15tYXIvaSxcbiAgICAvXmFwL2ksXG4gICAgL15tYXkvaSxcbiAgICAvXmp1bi9pLFxuICAgIC9eanVsL2ksXG4gICAgL15hdS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV0sXG59O1xuXG5jb25zdCBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbn07XG5jb25zdCBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2ksXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogKHZhbHVlKSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxuICB9KSxcblxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gICAgdmFsdWVDYWxsYmFjazogKGluZGV4KSA9PiBpbmRleCArIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHtcbiAgbWlsbGlzZWNvbmRzSW5Ib3VyLFxuICBtaWxsaXNlY29uZHNJbk1pbnV0ZSxcbn0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBwYXJzZUlTT30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICBjb25zdCBpbnZhbGlkRGF0ZSA9ICgpID0+IGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4sIE5hTik7XG5cbiAgY29uc3QgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnM/LmFkZGl0aW9uYWxEaWdpdHMgPz8gMjtcbiAgY29uc3QgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuXG4gIGxldCBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIGNvbnN0IHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKCtkYXRlKSkgcmV0dXJuIGludmFsaWREYXRlKCk7XG5cbiAgY29uc3QgdGltZXN0YW1wID0gK2RhdGU7XG4gIGxldCB0aW1lID0gMDtcbiAgbGV0IG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSByZXR1cm4gaW52YWxpZERhdGUoKTtcbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSByZXR1cm4gaW52YWxpZERhdGUoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0bXBEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdG9EYXRlKDAsIG9wdGlvbnM/LmluKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoXG4gICAgICB0bXBEYXRlLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ01vbnRoKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ0RhdGUoKSxcbiAgICApO1xuICAgIHJlc3VsdC5zZXRIb3VycyhcbiAgICAgIHRtcERhdGUuZ2V0VVRDSG91cnMoKSxcbiAgICAgIHRtcERhdGUuZ2V0VVRDTWludXRlcygpLFxuICAgICAgdG1wRGF0ZS5nZXRVVENTZWNvbmRzKCksXG4gICAgICB0bXBEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpLFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB0b0RhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCwgb3B0aW9ucz8uaW4pO1xufVxuXG5jb25zdCBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC8sXG59O1xuXG5jb25zdCBkYXRlUmVnZXggPVxuICAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbmNvbnN0IHRpbWVSZWdleCA9XG4gIC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbmNvbnN0IHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVTdHJpbmdzID0ge307XG4gIGNvbnN0IGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIGxldCB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoXG4gICAgICAgIGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLFxuICAgICAgICBkYXRlU3RyaW5nLmxlbmd0aCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICBjb25zdCB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCBcIlwiKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFxuICAgIFwiXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pfChcXFxcZHsyfXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pJClcIixcbiAgKTtcblxuICBjb25zdCBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4geyB5ZWFyOiBOYU4sIHJlc3REYXRlU3RyaW5nOiBcIlwiIH07XG5cbiAgY29uc3QgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgY29uc3QgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICBjb25zdCBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgY29uc3QgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIGNvbnN0IGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICBjb25zdCB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIGNvbnN0IGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKFxuICAgICAgIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fFxuICAgICAgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIGNvbnN0IGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIGNvbnN0IGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDBcbiAgKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZShcIixcIiwgXCIuXCIpKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09IFwiWlwiKSByZXR1cm4gMDtcblxuICBjb25zdCBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcblxuICBjb25zdCBzaWduID0gY2FwdHVyZXNbMV0gPT09IFwiK1wiID8gLTEgOiAxO1xuICBjb25zdCBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgY29uc3QgbWludXRlcyA9IChjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkpIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIGNvbnN0IGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5jb25zdCBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIChcbiAgICBtb250aCA+PSAwICYmXG4gICAgbW9udGggPD0gMTEgJiZcbiAgICBkYXRlID49IDEgJiZcbiAgICBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIHNlY29uZHMgPj0gMCAmJlxuICAgIHNlY29uZHMgPCA2MCAmJlxuICAgIG1pbnV0ZXMgPj0gMCAmJlxuICAgIG1pbnV0ZXMgPCA2MCAmJlxuICAgIGhvdXJzID49IDAgJiZcbiAgICBob3VycyA8IDI1XG4gICk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBwYXJzZUlTTztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZkRheX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZJU09XZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgLi4ub3B0aW9ucywgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZJU09XZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlXyA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGRhdGVfLnNldEZ1bGxZZWFyKGRhdGVfLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBkYXRlXy5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGVfO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZZZWFyO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcblxuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogU3RhcnRpbmcgZnJvbSB2My43LjAsIGl0IGNsb25lcyBhIGRhdGUgdXNpbmcgYFtTeW1ib2wuZm9yKFwiY29uc3RydWN0RGF0ZUZyb21cIildYFxuICogZW5hYmxpbmcgdG8gdHJhbnNmZXIgZXh0cmEgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZSB0byB0aGUgbmV3IGRhdGUuXG4gKiBJdCdzIHVzZWZ1bCBmb3IgZXh0ZW5zaW9ucyBsaWtlIFtgVFpEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3R6KVxuICogdGhhdCBhY2NlcHQgYSB0aW1lIHpvbmUgYXMgYSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCwgY29udGV4dCkge1xuICAvLyBbVE9ET10gR2V0IHJpZCBvZiBgdG9EYXRlYCBvciBgY29uc3RydWN0RnJvbWA/XG4gIHJldHVybiBjb25zdHJ1Y3RGcm9tKGNvbnRleHQgfHwgYXJndW1lbnQsIGFyZ3VtZW50KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHNyYy9tb2R1bGVzL2RvbS5qc1xuXG5pbXBvcnQgeyBmb3JtYXQsIGlzVmFsaWQsIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmxldCBwbTsgLy8gcHJvamVjdE1hbmFnZXJcbmxldCBzdG9yYWdlUmVmO1xuXG5sZXQgcHJvamVjdExpc3RFbDtcbmxldCBjdXJyZW50UHJvamVjdFRpdGxlRWw7XG5sZXQgdG9kb0xpc3RFbDtcbmxldCBhZGRQcm9qZWN0QnRuO1xubGV0IGFkZFRvZG9CdG47XG5cbmxldCB0b2RvTW9kYWw7XG5sZXQgdG9kb01vZGFsVGl0bGU7XG5sZXQgdG9kb0Zvcm07XG5sZXQgdG9kb1RpdGxlSW5wdXQ7XG5sZXQgdG9kb0Rlc2NyaXB0aW9uSW5wdXQ7XG5sZXQgdG9kb0R1ZURhdGVJbnB1dDtcbmxldCB0b2RvUHJpb3JpdHlTZWxlY3Q7XG5sZXQgdG9kb0NhbmNlbEJ0bjtcblxuLy8gVG8ga25vdyB3aGV0aGVyIHdlJ3JlIGVkaXRpbmcgb3IgY3JlYXRpbmdcbmxldCBlZGl0Q29udGV4dCA9IG51bGw7IC8vIHsgcHJvamVjdEluZGV4LCB0b2RvSW5kZXggfSBvciBudWxsXG5cbmZ1bmN0aW9uIGZvcm1hdER1ZURhdGUoZHVlRGF0ZSkge1xuICBpZiAoIWR1ZURhdGUpIHJldHVybiBcIk5vIGR1ZSBkYXRlXCI7XG4gIGNvbnN0IHBhcnNlZCA9IHBhcnNlSVNPKGR1ZURhdGUpO1xuICBpZiAoIWlzVmFsaWQocGFyc2VkKSkgcmV0dXJuIGR1ZURhdGU7XG4gIHJldHVybiBmb3JtYXQocGFyc2VkLCBcIk1NTSBkLCB5eXl5XCIpO1xufVxuXG5mdW5jdGlvbiBvcGVuVG9kb01vZGFsKG1vZGUsIHByb2plY3RJbmRleCA9IG51bGwsIHRvZG9JbmRleCA9IG51bGwpIHtcbiAgaWYgKG1vZGUgPT09IFwiY3JlYXRlXCIpIHtcbiAgICB0b2RvTW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiTmV3IFRvZG9cIjtcbiAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgIGVkaXRDb250ZXh0ID0gbnVsbDtcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcImVkaXRcIikge1xuICAgIHRvZG9Nb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJFZGl0IFRvZG9cIjtcbiAgICBlZGl0Q29udGV4dCA9IHsgcHJvamVjdEluZGV4LCB0b2RvSW5kZXggfTtcbiAgICBjb25zdCB0b2RvID0gcG0ucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0b2RvSW5kZXhdO1xuICAgIHRvZG9UaXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcbiAgICB0b2RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb0R1ZURhdGVJbnB1dC52YWx1ZSA9IHRvZG8uZHVlRGF0ZSB8fCBcIlwiO1xuICAgIHRvZG9Qcmlvcml0eVNlbGVjdC52YWx1ZSA9IHRvZG8ucHJpb3JpdHkgfHwgXCJsb3dcIjtcbiAgfVxuXG4gIHRvZG9Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRvZG9Nb2RhbCgpIHtcbiAgdG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGVkaXRDb250ZXh0ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9kb0Zvcm1TdWJtaXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGl0bGUgPSB0b2RvVGl0bGVJbnB1dC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUudHJpbSgpO1xuICBjb25zdCBkdWVEYXRlID0gdG9kb0R1ZURhdGVJbnB1dC52YWx1ZTsgLy8gJ1lZWVktTU0tREQnXG4gIGNvbnN0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5U2VsZWN0LnZhbHVlO1xuXG4gIGlmICghdGl0bGUpIHJldHVybjtcblxuICBjb25zdCB0b2RvRGF0YSA9IHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICB9O1xuXG4gIGlmIChlZGl0Q29udGV4dCA9PT0gbnVsbCkge1xuICAgIC8vIGNyZWF0ZSBuZXdcbiAgICBwbS5hZGRUb2RvVG9DdXJyZW50KHRvZG9EYXRhKTtcbiAgfSBlbHNlIHtcbiAgICAvLyB1cGRhdGUgZXhpc3RpbmdcbiAgICBwbS51cGRhdGVUb2RvKGVkaXRDb250ZXh0LnByb2plY3RJbmRleCwgZWRpdENvbnRleHQudG9kb0luZGV4LCB0b2RvRGF0YSk7XG4gIH1cblxuICBzdG9yYWdlUmVmLnNhdmUocG0ucHJvamVjdHMpO1xuICByZW5kZXJUb2RvcygpO1xuICBjbG9zZVRvZG9Nb2RhbCgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgcHJvamVjdExpc3RFbC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHBtLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICBpZiAoaW5kZXggPT09IHBtLmN1cnJlbnRQcm9qZWN0SW5kZXgpIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZWxldGVcIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCLDl1wiO1xuXG4gICAgLy8gQ2xpY2sgdG8gc3dpdGNoIHByb2plY3QgKGJ1dCBub3Qgd2hlbiBjbGlja2luZyB0aGUgZGVsZXRlIGJ1dHRvbilcbiAgICBuYW1lU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcG0uc2V0Q3VycmVudFByb2plY3QoaW5kZXgpO1xuICAgICAgc3RvcmFnZVJlZi5zYXZlKHBtLnByb2plY3RzKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICByZW5kZXJUb2RvcygpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHBtLmRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgICAgc3RvcmFnZVJlZi5zYXZlKHBtLnByb2plY3RzKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICByZW5kZXJUb2RvcygpO1xuICAgIH0pO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQobmFtZVNwYW4pO1xuICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgcHJvamVjdExpc3RFbC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xuXG4gIGN1cnJlbnRQcm9qZWN0VGl0bGVFbC50ZXh0Q29udGVudCA9IHBtLmdldEN1cnJlbnRQcm9qZWN0KCkubmFtZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb3MoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBwbS5nZXRDdXJyZW50UHJvamVjdCgpO1xuICBjdXJyZW50UHJvamVjdFRpdGxlRWwudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHRvZG9MaXN0RWwuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAocHJvamVjdC50b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVtcHR5TXNnLnRleHRDb250ZW50ID0gXCJObyB0b2RvcyB5ZXQuIEFkZCBvbmUhXCI7XG4gICAgdG9kb0xpc3RFbC5hcHBlbmRDaGlsZChlbXB0eU1zZyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcG0ucHJvamVjdHMuZm9yRWFjaCgocHJvaiwgcEluZGV4KSA9PiB7XG4gICAgaWYgKHBJbmRleCAhPT0gcG0uY3VycmVudFByb2plY3RJbmRleCkgcmV0dXJuO1xuICAgIHByb2oudG9kb3MuZm9yRWFjaCgodG9kbywgdEluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcbiAgICAgIGl0ZW0uZGF0YXNldC5wcm9qZWN0SW5kZXggPSBwSW5kZXg7XG4gICAgICBpdGVtLmRhdGFzZXQudG9kb0luZGV4ID0gdEluZGV4O1xuXG4gICAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gXCJsb3dcIikgaXRlbS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbG93XCIpO1xuICAgICAgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIGl0ZW0uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LW1lZGl1bVwiKTtcbiAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09PSBcImhpZ2hcIikgaXRlbS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaGlnaFwiKTtcbiAgICAgIGlmICh0b2RvLmNvbXBsZXRlZCkgaXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1jb21wbGV0ZWRcIik7XG5cbiAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwidG9kby1tYWluXCIpO1xuXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XG5cbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBwbS50b2dnbGVUb2RvQ29tcGxldGVkKHBJbmRleCwgdEluZGV4KTtcbiAgICAgICAgc3RvcmFnZVJlZi5zYXZlKHBtLnByb2plY3RzKTtcbiAgICAgICAgcmVuZGVyVG9kb3MoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGNvbnN0IHRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGl0bGVFbC5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgIHRpdGxlRWwudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gICAgICBjb25zdCBtZXRhRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWV0YUVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW1ldGFcIik7XG4gICAgICBtZXRhRWwudGV4dENvbnRlbnQgPSBgJHtmb3JtYXREdWVEYXRlKHRvZG8uZHVlRGF0ZSl9IOKAoiBQcmlvcml0eTogJHtcbiAgICAgICAgdG9kby5wcmlvcml0eVxuICAgICAgfWA7XG5cbiAgICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlRWwpO1xuICAgICAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQobWV0YUVsKTtcblxuICAgICAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWFjdGlvbnNcIik7XG5cbiAgICAgIGNvbnN0IGRldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKFwic2Vjb25kYXJ5LWJ0blwiKTtcbiAgICAgIGRldGFpbHNCdG4udGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcblxuICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwic2Vjb25kYXJ5LWJ0blwiKTtcbiAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGV0YWlsc0J0bik7XG4gICAgICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0ZXh0V3JhcHBlcik7XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuXG4gICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcInRvZG8tZGV0YWlsc1wiLCBcImhpZGRlblwiKTtcbiAgICAgIGRldGFpbHMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8cD48c3Ryb25nPkRlc2NyaXB0aW9uOjwvc3Ryb25nPiAke1xuICAgICAgICAgIHRvZG8uZGVzY3JpcHRpb24gfHwgXCJObyBkZXNjcmlwdGlvblwiXG4gICAgICAgIH08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+Tm90ZXM6PC9zdHJvbmc+ICR7dG9kby5ub3RlcyB8fCBcIk5vbmVcIn08L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5LWJ0biB0b2RvLWVkaXQtYnRuXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgYDtcblxuICAgICAgLy8gVG9nZ2xlIGRldGFpbHNcbiAgICAgIGRldGFpbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIERlbGV0ZVxuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHBtLmRlbGV0ZVRvZG8ocEluZGV4LCB0SW5kZXgpO1xuICAgICAgICBzdG9yYWdlUmVmLnNhdmUocG0ucHJvamVjdHMpO1xuICAgICAgICByZW5kZXJUb2RvcygpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEVkaXQgKG9wZW4gbW9kYWwpXG4gICAgICBkZXRhaWxzXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZWRpdC1idG5cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgb3BlblRvZG9Nb2RhbChcImVkaXRcIiwgcEluZGV4LCB0SW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgaXRlbS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gICAgICB0b2RvTGlzdEVsLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVVSShwcm9qZWN0TWFuYWdlciwgc3RvcmFnZSkge1xuICBwbSA9IHByb2plY3RNYW5hZ2VyO1xuICBzdG9yYWdlUmVmID0gc3RvcmFnZTtcblxuICBwcm9qZWN0TGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG4gIGN1cnJlbnRQcm9qZWN0VGl0bGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1wcm9qZWN0LXRpdGxlXCIpO1xuICB0b2RvTGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RcIik7XG4gIGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcbiAgYWRkVG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tYnRuXCIpO1xuXG4gIHRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1tb2RhbFwiKTtcbiAgdG9kb01vZGFsVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbW9kYWwtdGl0bGVcIik7XG4gIHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm1cIik7XG4gIHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXRpdGxlXCIpO1xuICB0b2RvRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcbiAgdG9kb0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kdWVEYXRlXCIpO1xuICB0b2RvUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcHJpb3JpdHlcIik7XG4gIHRvZG9DYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tY2FuY2VsLWJ0blwiKTtcblxuICAvLyBFdmVudCBsaXN0ZW5lcnNcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU6XCIpO1xuICAgIGlmICghbmFtZSkgcmV0dXJuO1xuICAgIHBtLmFkZFByb2plY3QobmFtZSk7XG4gICAgc3RvcmFnZVJlZi5zYXZlKHBtLnByb2plY3RzKTtcbiAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIHJlbmRlclRvZG9zKCk7XG4gIH0pO1xuXG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuVG9kb01vZGFsKFwiY3JlYXRlXCIpO1xuICB9KTtcblxuICB0b2RvQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xvc2VUb2RvTW9kYWwoKTtcbiAgfSk7XG5cbiAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVUb2RvRm9ybVN1Ym1pdCk7XG5cbiAgLy8gQ2xvc2UgbW9kYWwgaWYgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgY29udGVudFxuICB0b2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0b2RvTW9kYWwpIHtcbiAgICAgIGNsb3NlVG9kb01vZGFsKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBJbml0aWFsIHJlbmRlclxuICByZW5kZXJQcm9qZWN0cygpO1xuICByZW5kZXJUb2RvcygpO1xufVxuXG4iLCIvLyBzcmMvbW9kdWxlcy9wcm9qZWN0LmpzXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHRvZG9zOiBbXSxcbiAgfTtcbn1cblxuIiwiLy8gc3JjL21vZHVsZXMvcHJvamVjdE1hbmFnZXIuanNcblxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0TWFuYWdlciA9IHtcbiAgcHJvamVjdHM6IFtdLFxuICBjdXJyZW50UHJvamVjdEluZGV4OiAwLFxuXG4gIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuY3VycmVudFByb2plY3RJbmRleF07XG4gIH0sXG5cbiAgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QobmFtZSk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHRoaXMuY3VycmVudFByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgfSxcblxuICBkZWxldGVQcm9qZWN0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnByb2plY3RzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgaWYgKHRoaXMucHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBBbHdheXMga2VlcCBhdCBsZWFzdCBvbmUgcHJvamVjdFxuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKGNyZWF0ZVByb2plY3QoXCJJbmJveFwiKSk7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50UHJvamVjdEluZGV4ID49IHRoaXMucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0SW5kZXggPSB0aGlzLnByb2plY3RzLmxlbmd0aCAtIDE7XG4gICAgfVxuICB9LFxuXG4gIHNldEN1cnJlbnRQcm9qZWN0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnByb2plY3RzLmxlbmd0aCkgcmV0dXJuO1xuICAgIHRoaXMuY3VycmVudFByb2plY3RJbmRleCA9IGluZGV4O1xuICB9LFxuXG4gIGFkZFRvZG9Ub0N1cnJlbnQodG9kb0RhdGEpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKHRvZG9EYXRhKTtcbiAgICBwcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XG4gIH0sXG5cbiAgZGVsZXRlVG9kbyhwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF07XG4gICAgaWYgKCFwcm9qZWN0KSByZXR1cm47XG4gICAgaWYgKHRvZG9JbmRleCA8IDAgfHwgdG9kb0luZGV4ID49IHByb2plY3QudG9kb3MubGVuZ3RoKSByZXR1cm47XG4gICAgcHJvamVjdC50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgfSxcblxuICB1cGRhdGVUb2RvKHByb2plY3RJbmRleCwgdG9kb0luZGV4LCB1cGRhdGVkRmllbGRzKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XTtcbiAgICBpZiAoIXByb2plY3QpIHJldHVybjtcbiAgICBjb25zdCB0b2RvID0gcHJvamVjdC50b2Rvc1t0b2RvSW5kZXhdO1xuICAgIGlmICghdG9kbykgcmV0dXJuO1xuICAgIE9iamVjdC5hc3NpZ24odG9kbywgdXBkYXRlZEZpZWxkcyk7XG4gIH0sXG5cbiAgdG9nZ2xlVG9kb0NvbXBsZXRlZChwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF07XG4gICAgaWYgKCFwcm9qZWN0KSByZXR1cm47XG4gICAgY29uc3QgdG9kbyA9IHByb2plY3QudG9kb3NbdG9kb0luZGV4XTtcbiAgICBpZiAoIXRvZG8pIHJldHVybjtcbiAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcbiAgfSxcbn07XG5cbiIsIi8vIHNyYy9tb2R1bGVzL3N0b3JhZ2UuanNcblxuY29uc3QgU1RPUkFHRV9LRVkgPSBcInRvZG8tcHJvamVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSB7XG4gIHNhdmUocHJvamVjdHMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBqc29uKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgdG8gbG9jYWxTdG9yYWdlXCIsIGVycik7XG4gICAgfVxuICB9LFxuXG4gIGxvYWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSk7XG4gICAgICBpZiAoIWpzb24pIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBmcm9tIGxvY2FsU3RvcmFnZVwiLCBlcnIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LFxufTtcblxuIiwiLy8gc3JjL21vZHVsZXMvdG9kby5qc1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh7XG4gIHRpdGxlID0gXCJcIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICBkdWVEYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcImxvd1wiLFxuICBub3RlcyA9IFwiXCIsXG4gIGNoZWNrbGlzdCA9IFtdLFxuICBjb21wbGV0ZWQgPSBmYWxzZSxcbn0gPSB7fSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgY2hlY2tsaXN0LFxuICAgIGNvbXBsZXRlZCxcbiAgfTtcbn1cblxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIHNyYy9pbmRleC5qc1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL21vZHVsZXMvdG9kb1wiO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVVJIH0gZnJvbSBcIi4vbW9kdWxlcy9kb21cIjtcblxuZnVuY3Rpb24gbG9hZEZyb21TdG9yYWdlKCkge1xuICBjb25zdCBzYXZlZCA9IHN0b3JhZ2UubG9hZCgpO1xuICBpZiAoIXNhdmVkIHx8ICFBcnJheS5pc0FycmF5KHNhdmVkKSB8fCBzYXZlZC5sZW5ndGggPT09IDApIHtcbiAgICAvLyBObyBzYXZlZCBkYXRhIC0+IGNyZWF0ZSBkZWZhdWx0IHByb2plY3RcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJJbmJveFwiKTtcbiAgICBwcm9qZWN0TWFuYWdlci5wcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdEluZGV4ID0gMDtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBSZWJ1aWxkIFByb2plY3QgYW5kIFRvZG8gb2JqZWN0cyBmcm9tIHBsYWluIEpTT05cbiAgc2F2ZWQuZm9yRWFjaCgocHJvakRhdGEpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qRGF0YS5uYW1lKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9qRGF0YS50b2RvcykpIHtcbiAgICAgIHByb2pEYXRhLnRvZG9zLmZvckVhY2goKHRvZG9EYXRhKSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MucHVzaChjcmVhdGVUb2RvKHRvZG9EYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcHJvamVjdE1hbmFnZXIucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfSk7XG5cbiAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3RJbmRleCA9IDA7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbG9hZEZyb21TdG9yYWdlKCk7XG4gIGluaXRpYWxpemVVSShwcm9qZWN0TWFuYWdlciwgc3RvcmFnZSk7XG59KTtcblxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==