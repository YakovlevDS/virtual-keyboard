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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/random */ \"./src/modules/random.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/db */ \"./src/modules/db.js\");\n/* harmony import */ var _modules_renderSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderSlider */ \"./src/modules/renderSlider.js\");\n\r\n\r\n\r\n\r\n\r\nconst len = _modules_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length\r\n\r\n\r\n;(0,_modules_popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    // const t = getRandom(7)\r\n    // const l = getRandomArr(3, len);\r\n    // const s = getNextRandomArr([2, 3, 4], 3, len);\r\n    // console.log('Value: ', s, l, t);\r\n;(0,_modules_renderSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://shelter/./src/index.js?");

/***/ }),

/***/ "./src/modules/db.js":
/*!***************************!*\
  !*** ./src/modules/db.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dataPets = [{\r\n        'id': 0,\r\n        \"name\": \"Jennifer\",\r\n        \"img\": \"../../assets/images/pets-jennifer.png\",\r\n        \"type\": \"Dog\",\r\n        \"breed\": \"Labrador\",\r\n        \"description\": \"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.\",\r\n        \"age\": \"2 months\",\r\n        \"inoculations\": [\"none\"],\r\n        \"diseases\": [\"none\"],\r\n        \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n        'id': 1,\r\n        \"name\": \"Sophia\",\r\n        \"img\": \"../../assets/images/pets-sophia.png\",\r\n        \"type\": \"Dog\",\r\n        \"breed\": \"Shih tzu\",\r\n        \"description\": \"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\",\r\n        \"age\": \"1 month\",\r\n        \"inoculations\": [\"parvovirus\"],\r\n        \"diseases\": [\"none\"],\r\n        \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n        'id': 2,\r\n        \"name\": \"Woody\",\r\n        \"img\": \"../../assets/images/pets-woody.png\",\r\n        \"type\": \"Dog\",\r\n        \"breed\": \"Golden Retriever\",\r\n        \"description\": \"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.\",\r\n        \"age\": \"3 years 6 months\",\r\n        \"inoculations\": [\"adenovirus\", \"distemper\"],\r\n        \"diseases\": [\"right back leg mobility reduced\"],\r\n        \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n        'id': 3,\r\n        \"name\": \"Scarlett\",\r\n        \"img\": \"../../assets/images/pets-scarlett.png\",\r\n        \"type\": \"Dog\",\r\n        \"breed\": \"Jack Russell Terrier\",\r\n        \"description\": \"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.\",\r\n        \"age\": \"3 months\",\r\n        \"inoculations\": [\"parainfluenza\"],\r\n        \"diseases\": [\"none\"],\r\n        \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n        'id': 4,\r\n        \"name\": \"Katrine\",\r\n        \"img\": \"../../assets/images/pets-katrine.png\",\r\n        \"type\": \"Cat\",\r\n        \"breed\": \"British Shorthair\",\r\n        \"description\": \"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.\",\r\n        \"age\": \"6 months\",\r\n        \"inoculations\": [\"panleukopenia\"],\r\n        \"diseases\": [\"none\"],\r\n        \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n        'id': 5,\r\n        \"name\": \"Timmy\",\r\n        \"img\": \"../../assets/images/pets-timmy.png\",\r\n        \"type\": \"Cat\",\r\n        \"breed\": \"British Shorthair\",\r\n        \"description\": \"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.\",\r\n        \"age\": \"2 years 3 months\",\r\n        \"inoculations\": [\"calicivirus\", \"viral rhinotracheitis\"],\r\n        \"diseases\": [\"kidney stones\"],\r\n        \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n        'id': 6,\r\n        \"name\": \"Freddie\",\r\n        \"img\": \"../../assets/images/pets-freddie.png\",\r\n        \"type\": \"Cat\",\r\n        \"breed\": \"British Shorthair\",\r\n        \"description\": \"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.\",\r\n        \"age\": \"2 months\",\r\n        \"inoculations\": [\"rabies\"],\r\n        \"diseases\": [\"none\"],\r\n        \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n        'id': 7,\r\n        \"name\": \"Charly\",\r\n        \"img\": \"../../assets/images/pets-charly.png\",\r\n        \"type\": \"Dog\",\r\n        \"breed\": \"Jack Russell Terrier\",\r\n        \"description\": \"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.\",\r\n        \"age\": \"8 years\",\r\n        \"inoculations\": [\"bordetella bronchiseptica\", \"leptospirosis\"],\r\n        \"diseases\": [\"deafness\", \"blindness\"],\r\n        \"parasites\": [\"lice\", \"fleas\"]\r\n    }\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataPets);\n\n//# sourceURL=webpack://shelter/./src/modules/db.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popup = () => {\r\n    const closePopupBtn = document.querySelector('.popup-card__close')\r\n    const overlayPopup = document.querySelector('.popup-overlay')\r\n    const petPopup = document.querySelector('.popup-card')\r\n    const wrapPopup = document.querySelector('.wrap-popup')\r\n    const petCards = document.querySelectorAll('.slider-card')\r\n\r\n    const closePopup = () => {\r\n        wrapPopup.classList.remove('show')\r\n        overlayPopup.classList.remove('show')\r\n    }\r\n\r\n    const renderPopup = ({ name, type, img, breed, description, inoculations, diseases, parasites }) => {\r\n        const popupBlock = `\r\n    <div class=\"popup-card__img\">\r\n        <img src=${img} alt=${type}>\r\n    </div>\r\n    <div class=\"popup-card__describe\">\r\n        <h2 class=\"describe__heading\">${name}</h2>\r\n        <p class=\"describe__subheading\">${type} - ${breed}</p>\r\n        <p class=\"describe__text\">${description}</p>\r\n        <ul class=\"describe__list\">\r\n           <li class=\"describe__item\"><span>Age:</span>&nbsp;${type}</li>\r\n           <li class=\"describe__item\"><span>Inoculations:</span>&nbsp;${inoculations}</li>\r\n           <li class=\"describe__item\"><span>Diseases:</span>&nbsp;${diseases}</li>\r\n           <li class=\"describe__item\"><span>Parasites:</span>&nbsp;${parasites}</li>\r\n        </ul>\r\n    </div>\r\n    `\r\n\r\n        petPopup.insertAdjacentHTML(\"beforeend\", popupBlock)\r\n    }\r\n\r\n    const showPetCard = (e) => {\r\n        const card = e.target.closest(\".slider-card\")\r\n        const key = +card.dataset.card\r\n\r\n        petPopup.innerHTML = \"\";\r\n        renderPopup(dataPets[key])\r\n        wrapPopup.classList.add('show')\r\n        overlayPopup.classList.add('show')\r\n    }\r\n\r\n    petCards.forEach(card => card.addEventListener(\"click\", e => showPetCard(e)))\r\n    overlayPopup.addEventListener(\"click\", closePopup);\r\n    closePopupBtn.addEventListener(\"click\", closePopup);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://shelter/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/random.js":
/*!*******************************!*\
  !*** ./src/modules/random.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNextRandomArr\": () => (/* binding */ getNextRandomArr),\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom),\n/* harmony export */   \"getRandomArr\": () => (/* binding */ getRandomArr)\n/* harmony export */ });\nconst getRandom = (max, min = 0) => ~~(Math.random() * (max - min + 1)) + min;\r\n\r\nconst getRandomArr = (n = 3, len) => {\r\n    let arr = []\r\n    let val\r\n    let l = 0\r\n    while (l < n) {\r\n        val = getRandom(len - 1);\r\n        if (!arr.includes(val)) {\r\n            arr.push(val)\r\n            l++\r\n        }\r\n    }\r\n    return arr\r\n}\r\n\r\nconst getNextRandomArr = (prevArr, n = 3, len) => {\r\n    if (prevArr.length > n) { prevArr = prevArr.slice(3, 6) } else {\r\n        console.log('norm ');\r\n    }\r\n    console.log('Value: ', prevArr);\r\n    let temp = []\r\n    let arr = []\r\n    let val\r\n    let l = 0\r\n    arr = prevArr\r\n\r\n    while (l < n) {\r\n        val = getRandom(len - 1);\r\n        if (!arr.includes(val)) {\r\n            arr.push(val);\r\n            temp.push(val);\r\n            l++\r\n        }\r\n    }\r\n\r\n    return temp\r\n}\n\n//# sourceURL=webpack://shelter/./src/modules/random.js?");

/***/ }),

/***/ "./src/modules/renderCard.js":
/*!***********************************!*\
  !*** ./src/modules/renderCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCard = ({ id, name, type, img }) => {\r\n    const sliderWrap = document.querySelector('.slider-wrap')\r\n\r\n    const cardBlock = `\r\n<div class=\"slider-card\" data-card=${id}>\r\n   <div class=\"slider-card__img\">\r\n       <img src=${img} alt=${type}>\r\n   </div>\r\n   <div class=\"slider-card__text\">${name}</div>\r\n   <button type=\"button\" class=\"slider-card__btn\">Learn more</button>\r\n</div> `\r\n\r\n    sliderWrap.insertAdjacentHTML(\r\n        \"beforeend\", cardBlock)\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCard);\n\n//# sourceURL=webpack://shelter/./src/modules/renderCard.js?");

/***/ }),

/***/ "./src/modules/renderSlider.js":
/*!*************************************!*\
  !*** ./src/modules/renderSlider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCard */ \"./src/modules/renderCard.js\");\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random */ \"./src/modules/random.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./src/modules/db.js\");\n\r\n\r\n\r\n\r\nconst renderSlider = () => {\r\n    const sliderWrap = document.querySelector('.slider-wrap')\r\n    const arrowRight = document.querySelector('.arrow-right')\r\n    const arrowLeft = document.querySelector('.arrow-left')\r\n\r\n\r\n    const startSlides = (0,_random__WEBPACK_IMPORTED_MODULE_1__.getRandomArr)(3)\r\n    sliderWrap.innerHTML = \"\";\r\n    startSlides.forEach(ind => (0,_renderCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"][ind]))\r\n\r\n    arrowRight.addEventListener(\"click\", () => (0,_random__WEBPACK_IMPORTED_MODULE_1__.getNextRandomArr)(startSlides, 3));\r\n\r\n    arrowLeft.addEventListener(\"click\", () => (0,_random__WEBPACK_IMPORTED_MODULE_1__.getNextRandomArr)(startSlides, 3));\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSlider);\n\n//# sourceURL=webpack://shelter/./src/modules/renderSlider.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;