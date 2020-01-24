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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(htmlElements) {\n        this.htmlElements = htmlElements;\n    }\n\n    html(arg) {\n        debugger\n        if (arg === undefined){\n            // debugger\n            return this.htmlElements[0].innerHTML;\n        } else {\n            // debugger\n            this.htmlElements.forEach( (el)=> {\n                el.innerHTML = arg;\n            });\n            return this.htmlElements;\n        }\n    }\n\n    empty() {\n        return this.html(\"\");\n     \n    }\n\n    append(arg) {\n        if (arg instanceof HTMLElement) {\n            this.htmlElements.forEach( (el)=> {\n                // debugger\n                el.innerHTML += arg.outerHTML;\n            });\n        } else { \n            this.htmlElements.forEach( (el)=> {\n                el.innerHTML += arg;\n            });\n        }\n\n        return this.htmlElements;\n    }\n\n    attr(prop, val){\n\n        if (val === undefined){\n            return this.htmlElements[0].getAttribute(prop);\n        }else{\n            this.htmlElements.forEach( (el) => {\n                el.setAttribute(prop, val);\n            });\n            return this.htmlElements;\n        }\n    }\n\n    addClass(name){\n        this.htmlElements.forEach( (el) => {\n            el.className.length === 0 ? el.className = name : el.className += ` ${name}`;\n            // el.className += name;\n        });\n        return this.htmlElements;\n    }\n\n    removeClass(name){\n        this.htmlElements.forEach( (el) => {\n            const classes_array = el.className.split(\" \");\n            const new_classes = classes_array.filter( (x) => x !== name );\n            el.className = new_classes.join(\" \");\n        });\n        return this.htmlElements;\n    }\n\n    // ul.append(li)\n    children(selector){\n        selector = new DOMNodeCollection([selector]);\n        let arr = [];\n        this.htmlElements.forEach( (el) => {\n            // debugger\n            arr = arr.concat(Array.from(el.children)); //Array.from because el.children is array-like not an actual array;\n            // arr.push(el.children);\n        });\n        if (selector){\n            debugger\n            arr = arr.filter((x) => x === selector);\n        }\n\n        return new DOMNodeCollection(arr);\n\n    }\n\n    parent () {\n        let arr = [];\n        this.htmlElements.forEach( (el) => {\n            debugger\n            if (!arr.includes(el.parentNode)){\n                arr.push(el.parentNode); //Array.from because el.children is array-like not an actual array;\n            // arr.push(el.children);\n            }\n        });\n        if (selector){\n            debugger\n            arr = arr.filter((x) => x === selector);\n        }\n        return new DOMNodeCollection(arr);\n    }\n\n    find (selector) {\n        let arr =[];\n        this.htmlElements.forEach( (el) => {\n            // let els = el.querySelectorAll(selector)\n            // \n            arr = arr.concat(Array.from(el.querySelectorAll(selector)));\n        });\n        return new DOMNodeCollection(arr);\n\n\n    }\n\n    remove(){\n\n    }\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nconst $l = function(selector) {\n    // debugger\n    if (selector instanceof HTMLElement) {\n        return new DomNodeCollection([selector]);\n    } else {\n        const els = document.querySelectorAll(selector);\n        const nodes = Array.from(els);\n        return new DomNodeCollection(nodes);\n    }\n};\n\nwindow.$l = $l;\n\n\n// let c = $l('div');\n// c.html(\"chicken\");\n// c.html();\n\n// console.log($l('div').html())\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });