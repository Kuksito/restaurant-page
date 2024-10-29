/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! 4.jpg */ \"./src/4.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://localhost:8080/ */\n\n*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    box-sizing: border-box;\n}\n\n.header{\n    display: flex;\n    background-color: #333;\n    height: 10vh;\n    width: 100vw;\n    position: fixed;\n    padding-left: 30px;\n    z-index: 3;\n}\n\n.nav{\n    display: flex;\n    gap: 20px;\n    margin-left: 20px;\n}\n\n.nav-btn{\n    background: none;\n    border: none;\n    color: #fff;\n    font-size: 1.2rem;\n    cursor: pointer;\n    transition: .3s ease-in-out;\n}\n\n.nav-btn:hover{\n    color: #2ecc71;\n}\n\n.content{\n    position: relative;\n    top: 93px;\n}\n\n\n.title-wrapper{\n    background-color: #3c6b45;\n    color: #fff;\n    font-size: 1.3rem;\n    text-align: center;\n    padding: 50px 0;\n}\n\n.news{\n    display: grid;\n    gap: 20px;\n    justify-items: center;\n    margin-bottom: 250px;\n}\n\n.news-title{\n    margin-top: 50px;\n    font-size: 2.7rem;\n}\n\n.news-info{\n    display: flex;\n    width: min-content;\n    gap: 30px;\n}\n\n.info-block{\n    margin-bottom: 10px;\n    padding-bottom: 30px;\n    position: relative;\n    width: 370px;\n    background: linear-gradient(#40bf5638 50%, #cc2e61 50%, #2ecc71);\n    display: grid;\n    justify-items: center;\n    border-radius: 15px;\n    cursor: pointer;\n    background-size: 100% 200%;\n    transition: background .5s;\n}\n\n.info-block:hover{\n    background-position: 100% 100%;\n}\n\n.info-block:hover .bold-text{\n    color: #fff;\n}\n\n.text{\n    margin-top: 5px;\n    padding: 5px 0;\n}\n\n.bold-text{\n    font-weight: bold;\n    width: 330px;\n    text-align: center;\n}\n\n.news-btn{\n    background: none;\n    color: red;\n    border: 2px solid red;\n    border-radius: 25px;\n    font-size: 1rem;\n    font-weight: bold;\n    width: 10vw;\n    padding: 15px;\n    margin-bottom: 50px;\n    cursor: pointer;\n    transition: .3s ease-in-out;\n}\n\n.news-btn:hover{\n    background-color: red;\n    color: #fff;\n}\n\n.img{\n    width: 350px;\n    height: 450px;\n    margin-top: 10px;\n    border-radius: 15px;\n}\n\n.fixed-photo{\n    width: 100%;\n    height: 80vh;\n    position: relative;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.fixed-photo-sub{\n    width: 57vw;\n    background-color: #333333e3;\n    position: relative;\n    top: 75px;\n    margin: 0 auto;\n}\n\n.p-fixed{\n    color: #fff;\n    font-size: 2rem;\n    width: 600px;\n    margin: 0 auto;\n    padding: 40px 0;\n    text-align: center;\n}\n\n.bg-img{\n    width: 100vw;\n    height: 100%;\n}\n\n.schedule{\n    background-color: #be7a3b;\n    color: #fff;\n    font-size: 1.7rem;\n    width: 57vw;\n    height: 40vh;\n    margin-top: 50px;\n}\n\n.schedule-title{\n    width: 215px;\n    margin: 65px auto 0;\n    font-weight: bold;\n}\n\n.list{\n    text-align: left;\n    width: fit-content;\n    margin: 30px auto 0;\n    list-style: none;\n}\n\n.list .item:not(:last-child){\n    margin-bottom: 10px;\n}\n\n.item-span{\n    color: #6f111c;\n}\n\n.menu-container{\n    display: grid;\n    justify-items: center;\n    gap: 15px;\n    margin-top: 50px;\n    padding-bottom: 80px;\n    width: 50vw;\n    background-color: #547375;\n    border-radius: 20px;\n}\n\n.menu-title{\n    color: #fff;\n    text-align: center;\n    padding: 10px;\n    font-size: 3rem;\n    margin-top: 30px;\n}\n\n.menu-span{\n    color: #fff;\n    width: 370px;\n    position: absolute;\n    bottom: 179px;\n    background: #0b2b20bf;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    transition: background .3s;\n}\n\n.info-block:hover .menu-span{\n    background: linear-gradient(#0b2b20bf 12%, #17b981bf 76%);\n}\n\n.contact{\n    color: #fff;\n    background-color: #213d2fd9;\n    font-size: 2rem;\n    padding: 0 20px;\n}\n\n.contact:first-child{\n    padding-top: 20px;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n}\n\n.contact:last-child{\n    padding-bottom: 20px;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactsPage: () => (/* binding */ createContactsPage)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\nfunction createContactsPage(){\n    const mainContainer = (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)().mainContainer;\n    const mainBlock = (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)().subContainer;\n    const title = (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)().subTitle;\n    const text = document.createElement('div');\n    mainBlock.append(title, text);\n    mainContainer.append(mainBlock);\n    title.textContent = 'CONTACTS';\n    text.innerHTML = '<p class=\"contact\">Director: tel - 000-000-00</p><p class=\"contact\">Manager: tel - 000-000-00</p> <p class=\"contact\">Chef: tel - 000-000-00</p> <p class=\"contact\">Location: st.Sacred Heart, 12</p>';\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contacts.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBlock: () => (/* binding */ createBlock),\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _one_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one.jpg */ \"./src/one.jpg\");\n/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.jpg */ \"./src/2.jpg\");\n/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3.jpg */ \"./src/3.jpg\");\n\n\n\n\nconst createHomePage = () => {    \n    const titleWrapper = document.createElement('div');\n    const title = document.createElement('h2');\n    const newsContainer = document.createElement('div');\n    const newsTitle = document.createElement('h1');\n    const newsInfoContainer = document.createElement('div');\n    const image = document.createElement(\"img\");\n    const imageTwo = document.createElement(\"img\");\n    const imageThree = document.createElement(\"img\");\n    const newsBtn = document.createElement('button');\n    const fixedContainer = document.createElement('div');\n    const fixedContainerSub = document.createElement('div');\n    const fixedPara = document.createElement('p');\n    const scheduleContainer = document.createElement('div');\n    const scheduleTitle = document.createElement('p');\n    const scheduleList = document.createElement('ul');\n    titleWrapper.classList.add('title-wrapper');\n    title.classList.add('title');\n    newsContainer.classList.add('news');\n    newsTitle.classList.add('news-title');\n    newsInfoContainer.classList.add('news-info');\n    image.classList.add('img');\n    imageTwo.classList.add('img');\n    imageThree.classList.add('img');\n    newsBtn.classList.add('news-btn');\n    fixedContainer.classList.add('fixed-photo');\n    fixedContainerSub.classList.add('fixed-photo-sub');\n    fixedPara.classList.add('p-fixed');\n    scheduleContainer.classList.add('schedule');\n    scheduleTitle.classList.add('schedule-title');\n    scheduleList.classList.add('list');\n    image.src = _one_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    imageTwo.src = _2_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    imageThree.src = _3_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    title.innerHTML = `Best experience <br> Best view`;\n    newsTitle.textContent = 'News of Restaurant';\n    newsBtn.textContent = 'ALL NEWS';\n    fixedPara.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus suscipit officia soluta nulla natus eos! Facere distinctio rerum a natus consequatur, suscipit maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veniam minus ipsum excepturi magni alias, distinctio rerum molestiae maxime recusandae hic voluptate, dolore nisi nihil deleniti quasi accusamus, illum labore? Laboriosam tempora alias ut placeat, pariatur maiores neque ipsum aliquam, non, itaque ad incidunt. Aut voluptates voluptatem saepe facere ratione tenetur sit, suscipit quae?';\n    scheduleTitle.textContent = 'Working hours:';\n    content.prepend(titleWrapper);\n    content.append(newsContainer);\n    titleWrapper.append(title);\n    fixedContainer.append(fixedContainerSub);\n    fixedContainerSub.append(fixedPara);\n    scheduleContainer.append(scheduleTitle, scheduleList);\n    newsContainer.append(newsTitle, newsInfoContainer, newsBtn, fixedContainer, scheduleContainer);\n\n    for(let i = 1; i < 4; i++){\n        const block = createBlock().infoBlock;\n        block.setAttribute('id', `${i}`);\n        const blockValue = block.id;\n\n        if(blockValue === \"1\"){\n            block.prepend(image);\n        }\n        if(blockValue === \"2\"){\n           block.prepend(imageTwo);\n        }\n        if(blockValue === \"3\"){\n            block.prepend(imageThree);\n        }\n        newsInfoContainer.append(block);\n        block.append(createBlock().spanInfo, createBlock().paraBoldText, createBlock().paraLightText);\n    };\n\n    for(let k = 0; k < 5; k++){\n        const listItem = document.createElement('li');\n        listItem.setAttribute('id', k);\n        if(listItem.id === \"0\"){\n            const itemSpan = document.createElement('span');\n            itemSpan.classList.add('item-span');\n            itemSpan.textContent = 'sanitary day';\n            listItem.textContent = 'Mo: ';\n            listItem.append(itemSpan);\n        }\n        if(listItem.id === \"1\"){\n            listItem.textContent = 'Tu-Th: 1pm - 11pm';\n        } \n        if(listItem.id === \"2\"){\n            listItem.textContent = 'Fr: 1pm - 12pm';\n        } \n        if(listItem.id === \"3\"){\n            listItem.textContent = 'Sa: 3pm - 12pm';\n        } \n        if(listItem.id === \"4\"){\n            listItem.textContent = 'Su: 1pm -11pm';\n        }\n        scheduleList.append(listItem);\n    };\n};\n\nfunction createBlock() {\n    const infoBlock = document.createElement('div');\n    const spanInfo = document.createElement('span');\n    const paraBoldText = document.createElement('p');\n    const paraLightText = document.createElement('p');\n    infoBlock.classList.add('info-block');\n    spanInfo.classList.add('span-info', 'text');\n    paraBoldText.classList.add('bold-text', 'text');\n    paraLightText.classList.add('light-text', 'text');\n    spanInfo.textContent = 'some data';\n    paraBoldText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio dolorem temporibus.';\n    paraLightText.textContent = 'Lorem ipsum dolor sit amet.';\n    return {infoBlock, spanInfo, paraBoldText, paraLightText};\n};\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.js */ \"./src/contacts.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\nconst navBtns = document.querySelectorAll('[data-btn]');\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\n\nfunction removeContent(){\n    const content = document.querySelector('#content');\n    content.textContent = '';\n}\n\nnavBtns.forEach(btn => {\n    const btnValue = btn.dataset.btn;\n    btn.addEventListener('click', () => {\n        if(parseInt(btnValue) === 0){\n            removeContent();\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\n        }\n        if(parseInt(btnValue) === 1){\n            removeContent();\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)();\n        }\n        if(parseInt(btnValue) === 2){\n            removeContent();\n            (0,_contacts_js__WEBPACK_IMPORTED_MODULE_2__.createContactsPage)();\n        }\n    })\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContainer: () => (/* binding */ createContainer),\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\n/* harmony import */ var _food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.jpg */ \"./src/food.jpg\");\n/* harmony import */ var _drinks_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drinks.jpg */ \"./src/drinks.jpg\");\n/* harmony import */ var _wine_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wine.jpg */ \"./src/wine.jpg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\n\n\nfunction createContainer() {\n    const mainContainer = document.createElement('div');\n    const subContainer = document.createElement('div');\n    const subTitle = document.createElement('h1');\n    subTitle.classList.add('menu-title');\n    subContainer.classList.add('menu-container');\n    mainContainer.classList.add('news');\n    content.append(mainContainer);\n    return {mainContainer, subContainer, subTitle};\n};\n\nfunction createMenuPage(){\n    const mainContainer = createContainer().mainContainer;\n    const menuTitle = createContainer().subTitle;\n    const menuContainer = createContainer().subContainer;\n    const imgOne = document.createElement('img');\n    const imgTwo = document.createElement('img');\n    const imgThree = document.createElement('img');\n    imgOne.classList.add('img');\n    imgTwo.classList.add('img');\n    imgThree.classList.add('img');\n    menuTitle.textContent = 'MENU';\n    imgOne.src = _food_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    imgTwo.src = _drinks_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    imgThree.src = _wine_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    menuContainer.append(menuTitle);\n    mainContainer.append(menuContainer);\n\n    for(let i = 0; i < 3; i++){\n        const menuBlock = (0,_home_js__WEBPACK_IMPORTED_MODULE_3__.createBlock)().infoBlock;\n        const spanInfo = (0,_home_js__WEBPACK_IMPORTED_MODULE_3__.createBlock)().spanInfo;\n        const paraBoldText = (0,_home_js__WEBPACK_IMPORTED_MODULE_3__.createBlock)().paraBoldText;\n        menuBlock.setAttribute('id', `${i}`);\n        const blockValue = menuBlock.id;\n\n        spanInfo.classList.add('menu-span');\n\n        if(blockValue === \"0\"){\n            spanInfo.textContent = 'FOOD';\n            menuBlock.prepend(imgOne);\n        }\n        if(blockValue === \"1\"){\n            spanInfo.textContent = 'BAR';\n            menuBlock.prepend(imgTwo);\n        }\n        if(blockValue === \"2\"){\n            spanInfo.textContent = 'WINE';\n            menuBlock.prepend(imgThree);\n        }\n        menuContainer.append(menuBlock);\n        menuBlock.append(spanInfo, paraBoldText);\n    };\n};\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/2.jpg":
/*!*******************!*\
  !*** ./src/2.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"706cd2afcd2a4f799957.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/2.jpg?");

/***/ }),

/***/ "./src/3.jpg":
/*!*******************!*\
  !*** ./src/3.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b7f9d9fe5ada3a267ce.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/3.jpg?");

/***/ }),

/***/ "./src/4.jpg":
/*!*******************!*\
  !*** ./src/4.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53c0afbd5f7ea79c7018.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/4.jpg?");

/***/ }),

/***/ "./src/drinks.jpg":
/*!************************!*\
  !*** ./src/drinks.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"defedc85e104cbeb958c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/drinks.jpg?");

/***/ }),

/***/ "./src/food.jpg":
/*!**********************!*\
  !*** ./src/food.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f826b878a481e070bcae.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/food.jpg?");

/***/ }),

/***/ "./src/one.jpg":
/*!*********************!*\
  !*** ./src/one.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"80fdb6bed157cd308da8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/one.jpg?");

/***/ }),

/***/ "./src/wine.jpg":
/*!**********************!*\
  !*** ./src/wine.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29b5c3b78551e0f8d15f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/wine.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;