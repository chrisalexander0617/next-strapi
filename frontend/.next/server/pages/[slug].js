"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/user/Documents/business/software/next-blog/front-end/pages/[slug].js\";\n\n\nfunction Post({\n  post\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: post.Title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: post.Content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\nasync function getStaticPaths() {\n  const res = await fetch('http://localhost:1337/posts');\n  const posts = await res.json();\n  const paths = posts.map(post => ({\n    params: {\n      slug: post.Slug\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const {\n    slug\n  } = params;\n  const URL = `http://localhost:1337/posts?Slug=${slug}`;\n  const res = await fetch(URL);\n  const data = await res.json();\n  const post = data[0];\n  return {\n    props: {\n      post\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxJQUFULENBQWM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFkLEVBQXFCO0FBQ2hDLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBTUEsSUFBSSxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBQUlELElBQUksQ0FBQ0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQU1IO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNuQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDZCQUFELENBQXZCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFwQjtBQUVBLFFBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdULElBQUQsS0FBVztBQUMvQlUsSUFBQUEsTUFBTSxFQUFFO0FBQUNDLE1BQUFBLElBQUksRUFBRVgsSUFBSSxDQUFDWTtBQUFaO0FBRHVCLEdBQVgsQ0FBVixDQUFkO0FBSUEsU0FBTztBQUNKSixJQUFBQSxLQURJO0FBRUpLLElBQUFBLFFBQVEsRUFBRTtBQUZOLEdBQVA7QUFJSDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUosRUFBQUE7QUFBRixDQUE5QixFQUEwQztBQUM3QyxRQUFNO0FBQUNDLElBQUFBO0FBQUQsTUFBU0QsTUFBZjtBQUNBLFFBQU1LLEdBQUcsR0FBSSxvQ0FBbUNKLElBQUssRUFBckQ7QUFDQSxRQUFNUCxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDVSxHQUFELENBQXZCO0FBQ0EsUUFBTUMsSUFBSSxHQUFFLE1BQU1aLEdBQUcsQ0FBQ0csSUFBSixFQUFsQjtBQUVBLFFBQU1QLElBQUksR0FBR2dCLElBQUksQ0FBQyxDQUFELENBQWpCO0FBRUEsU0FBTztBQUNIQyxJQUFBQSxLQUFLLEVBQUM7QUFDRmpCLE1BQUFBO0FBREU7QUFESCxHQUFQO0FBS0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9wYWdlcy9bc2x1Z10uanM/NDYyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtwb3N0fSl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+e3Bvc3QuVGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8cD57cG9zdC5Db250ZW50fTwvcD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wb3N0cycpXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XG4gICAgICAgIHBhcmFtczoge3NsdWc6IHBvc3QuU2x1Z31cbiAgICB9KSlcblxuICAgIHJldHVybiB7XG4gICAgICAgcGF0aHMsIFxuICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgICBjb25zdCB7c2x1Z30gPSBwYXJhbXM7XG4gICAgY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wb3N0cz9TbHVnPSR7c2x1Z31gO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFVSTCk7XG4gICAgY29uc3QgZGF0YT0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnN0IHBvc3QgPSBkYXRhWzBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgcG9zdFxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsIlRpdGxlIiwiQ29udGVudCIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJwb3N0cyIsImpzb24iLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsInNsdWciLCJTbHVnIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIlVSTCIsImRhdGEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[slug].js"));
module.exports = __webpack_exports__;

})();