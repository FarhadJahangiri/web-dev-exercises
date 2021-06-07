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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\r\n// Retrieve the HTML elements that we need from the DOM.\r\nconst aInput = document.getElementById(\"a\");\r\nconst bInput = document.getElementById(\"b\");\r\nconst resultSpan = document.getElementById(\"result\");\r\n// Check that the HTML elements that we need exist, and that they are of the correct types.\r\nif (!(aInput instanceof HTMLInputElement)) {\r\n    throw new Error(\"No input element with id 'a' found\");\r\n}\r\nif (!(bInput instanceof HTMLInputElement)) {\r\n    throw new Error(\"No input element with id 'b' found\");\r\n}\r\nif (!(resultSpan instanceof HTMLSpanElement)) {\r\n    throw new Error(\"No span element with id 'result' found\");\r\n}\r\n/**\r\n * Adds two numbers.\r\n */\r\nconst add = (a, b) => a + b;\r\n/**\r\n * Reads the value of an input element as a number.\r\n *\r\n * If the value cannot be parsed as a number, `0` is returned.\r\n */\r\nconst readInt = (input) => {\r\n    const result = parseInt(input.value);\r\n    return isNaN(result) ? 0 : result;\r\n};\r\n/**\r\n * Updates the display of the result.\r\n */\r\nconst updateResult = () => {\r\n    const result = add(readInt(aInput), readInt(bInput));\r\n    resultSpan.textContent = result.toString();\r\n};\r\naInput.addEventListener(\"input\", updateResult);\r\nbInput.addEventListener(\"input\", updateResult);\r\n// Compute the result on page load.\r\nupdateResult();\r\n\n\n//# sourceURL=webpack://04-addition/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;