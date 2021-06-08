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

eval("\r\n// const appDiv = document.getElementById(\"app\");\r\n// if (!(appDiv instanceof HTMLDivElement)) {\r\n// \tthrow new Error(\"No div with id 'app' found\");\r\n// }\r\n// let toDo: string[] = [\"Do Sport\", \"Eat\", \"Read\"];\r\n// const render = () => {\r\n// \tappDiv.innerHTML = \"\";\r\n// \tconst numbersUl = document.createElement(\"ul\");\r\n// \tfor (const number of toDo) {\r\n// \t\tconst numberLi = document.createElement(\"li\");\r\n// \t\tnumberLi.textContent = number.toString();\r\n// \t\tnumbersUl.appendChild(numberLi);\r\n// \t}\r\n// \tconst addInput = document.createElement(\"input\");\r\n// \taddInput.setAttribute(\"type\", \"string\");\r\n// \tconst addButton = document.createElement(\"input\");\r\n// \taddButton.setAttribute(\"type\", \"submit\");\r\n// \taddButton.setAttribute(\"value\", \"Add ToDos\");\r\n// \tconst addForm = document.createElement(\"form\");\r\n// \taddForm.appendChild(addInput);\r\n// \taddForm.appendChild(addButton);\r\n// \taddForm.addEventListener(\"submit\", (event) => {\r\n// \t\tevent.preventDefault();\r\n// \t\ttoDo.push((addInput.value));\r\n// \t\trender();\r\n// \t});\r\n// \tappDiv.appendChild(numbersUl);\r\n// \tappDiv.appendChild(addForm);\r\n// };\r\n// // Render the app on page load.\r\n// render();\r\nconst appDiv = document.getElementById(\"app\");\r\nif (!(appDiv instanceof HTMLDivElement)) {\r\n    throw new Error(\"No div with id 'app' found\");\r\n}\r\nconst todos = [\r\n    { job: \"Read\", done: true },\r\n    { job: \"eat\", done: true },\r\n    { job: \"doSport\", done: false }\r\n];\r\nconst render = () => {\r\n    appDiv.innerHTML = \"\";\r\n    const toDosUl = document.createElement(\"ul\");\r\n    for (const todo of todos) {\r\n        const toDosLi = document.createElement(\"li\");\r\n        toDosLi.textContent = todo.job;\r\n        toDosUl.appendChild(toDosLi);\r\n        const checkbox = document.createElement(\"input\");\r\n        checkbox.setAttribute(\"type\", \"checkbox\");\r\n        checkbox.checked = todo.done;\r\n        toDosUl.appendChild(checkbox);\r\n    }\r\n    const addInput = document.createElement(\"input\");\r\n    addInput.setAttribute(\"type\", \"string\");\r\n    const addButton = document.createElement(\"input\");\r\n    addButton.setAttribute(\"type\", \"submit\");\r\n    addButton.setAttribute(\"value\", \"Add ToDos\");\r\n    const addForm = document.createElement(\"form\");\r\n    addForm.appendChild(addInput);\r\n    addForm.appendChild(addButton);\r\n    addForm.addEventListener(\"submit\", (event) => {\r\n        event.preventDefault();\r\n        todos.push({ job: addInput.value, done: false });\r\n        render();\r\n    });\r\n    appDiv.appendChild(toDosUl);\r\n    appDiv.appendChild(addForm);\r\n};\r\nrender();\r\n\n\n//# sourceURL=webpack://05-array-sum/./src/main.ts?");

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