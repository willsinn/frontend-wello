(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"));

// Module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.user-projects.full-page {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.user.right-side {\n  display: flex;\n  flex-direction: column;\n}\n\n.projects.middle-tiles {\n  display: flex;\n  width: 100vw;\n  height: 75%;\n  flex-direction: row-reverse;\n  position: absolute;\n  bottom: 0;\n}\n\n.top-toolbar {\n  display: flex;\n  justify-content: space-between;\n  min-height: 40px;\n  padding: 15px;\n}\n.list-item {\n  height: 45px;\n  width: 225px;\n  border: 0.75px solid black;\n  border-radius: 2.5px;\n  margin-top: 5.5px;\n  margin-bottom: 5.5px;\n  background: white;\n}\n.project-list-title {\n  height: 100%;\n  font-size: 16px;\n  font-size: 22px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin-left: 20px;\n}\n.project-list {\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 280px;\n  background: #8fc2ea52;\n  border: 0.75px solid black;\n  border-radius: 4px;\n  padding: 15px 0 15px 0;\n  z-index: 1;\n}\n\n.toolbar-btn {\n  height: 37.5px;\n  width: 77.5px;\n  border: 2px outset #d3e4eb;\n}\n.toolbar-btn:hover {\n  border: 2px inset white;\n  background-color: #d3e4eb;\n}\n\n.create-project.form {\n  background-color: black;\n  color: white;\n  border: 3px solid white;\n  border-radius: 6px;\n  height: 110px;\n  width: 250px;\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.tool.wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.form.wrapper {\n  z-index: 2;\n  border-radius: 2px;\n}\n.project-list.wrapper {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: inherit;\n}\n.project-tiles.container {\n  width: 82.5%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n}\n\n.project.tile {\n  height: 95px;\n  display: flex;\n  width: 23%;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0 1.5% 8px 0;\n  border-radius: 6px;\n  border: 0.75px solid black;\n  background: white;\n}\n.project-title {\n  padding: 10px 0 0 10px;\n  font-size: 2em;\n  font-weight: bold;\n  color: #1a232b;\n}\n.c-p.input-box {\n  height: 30px;\n  font-size: 18px;\n  border-radius: 3px;\n  text-align: center;\n}\n.form-submit {\n  margin-right: 110px;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_UserProjectsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/UserProjectsContainer */ "./src/containers/UserProjectsContainer.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/App.js";




const App = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_UserProjectsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App); // import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

/***/ }),

/***/ "./src/actions/project.js":
/*!********************************!*\
  !*** ./src/actions/project.js ***!
  \********************************/
/*! exports provided: setProjects, addNewProject, fetchUserProjects, fetchPostProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProjects", function() { return setProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewProject", function() { return addNewProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserProjects", function() { return fetchUserProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostProject", function() { return fetchPostProject; });
const setProjects = projectsData => ({
  type: "SET_PROJECTS",
  payload: projectsData
});
const addNewProject = projectData => ({
  type: "ADD_NEW_PROJECT",
  project: projectData
});
const fetchUserProjects = data => {
  return dispatch => {
    fetch("http://localhost:3000/user/1/projects", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      console.log(response);

      if (response.ok) {
        return response.json();
      } else {
        response.throw();
      }
    }).then(JSONresponse => dispatch(setProjects(JSONresponse)));
  };
};
const fetchPostProject = data => {
  fetch("http://localhost:3000/user/1/projects/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user_id: 1,
      title: data["data"].title
    })
  }).then(response => response.json()).then(JSONresponse => {
    console.log(JSONresponse);
    debugger;
  });
};

/***/ }),

/***/ "./src/actions/user.js":
/*!*****************************!*\
  !*** ./src/actions/user.js ***!
  \*****************************/
/*! exports provided: fetchUser, setUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
const fetchUser = data => {
  return dispatch => {
    fetch("http://localhost:3000/user/1", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        response.throw();
      }
    }).then(JSONresponse => console.log(JSONresponse));
  };
};
const setUser = userData => ({
  type: "SET_USER",
  payload: userData
}); // this action returns an anonymous function that is handled by
// redux-thunk (an example middleware). you are guaranteed that
// you will have access to state and dispatch here.
// which means, when your request finishes, you can dispatch another action.
// here we dispatch a NEW action so that the reducer can take the
// response data, which is found here. called `response`.

/***/ }),

/***/ "./src/components/LeftSidebarProjectsList.js":
/*!***************************************************!*\
  !*** ./src/components/LeftSidebarProjectsList.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LeftSidebarProjectsListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeftSidebarProjectsListItem */ "./src/components/LeftSidebarProjectsListItem.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/components/LeftSidebarProjectsList.js";




const LeftSidebarProjectsList = props => {
  const renderItems = () => {
    if (props.projects.length > 0) {
      return [...props.projects].map(project => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LeftSidebarProjectsListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: project.id,
        project: project,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      }));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-list dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, renderItems());
};

const mapStateToProps = ({
  projectsReducer: projects
}) => ({
  projects: projects.projects
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(LeftSidebarProjectsList));

/***/ }),

/***/ "./src/components/LeftSidebarProjectsListItem.js":
/*!*******************************************************!*\
  !*** ./src/components/LeftSidebarProjectsListItem.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/components/LeftSidebarProjectsListItem.js";


const LeftSidebarProjectsListItem = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-list-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.project.title));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSidebarProjectsListItem);

/***/ }),

/***/ "./src/components/ProjectTile.js":
/*!***************************************!*\
  !*** ./src/components/ProjectTile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/components/ProjectTile.js";


const ProjectTile = props => {
  console.log(props.project);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.project.title));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectTile);

/***/ }),

/***/ "./src/containers/CreateProjectForm.js":
/*!*********************************************!*\
  !*** ./src/containers/CreateProjectForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/project */ "./src/actions/project.js");


var _jsxFileName = "/Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/containers/CreateProjectForm.js";




const CreateProjectForm = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        _useState2 = Object(_Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        input = _useState2[0],
        setInput = _useState2[1];

  const handleInputChange = event => {
    event.persist();
    setInput(input => Object(_Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, {
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      Object(_actions_project__WEBPACK_IMPORTED_MODULE_4__["fetchPostProject"])({
        data: input
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "create-project form container",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "c-p form-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "c-p input-box",
    type: "text",
    name: "title",
    onChange: handleInputChange,
    value: input.projectTitle,
    placeholder: "Input Project Title",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "toolbar-btn form-submit",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Create Project"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, {
  fetchPostProject: _actions_project__WEBPACK_IMPORTED_MODULE_4__["fetchPostProject"]
})(CreateProjectForm));

/***/ }),

/***/ "./src/containers/ProjectTilesContainer.js":
/*!*************************************************!*\
  !*** ./src/containers/ProjectTilesContainer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProjectTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectTile */ "./src/components/ProjectTile.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/containers/ProjectTilesContainer.js";




const ProjectTilesContainer = props => {
  const renderTiles = () => {
    if (props.projects.length > 0) {
      return [...props.projects].map(project => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProjectTile__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: project.id,
        project: project,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      }));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "projects middle-tiles container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-tiles container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, renderTiles()));
};

const mapStateToProps = ({
  projectsReducer: projects
}) => ({
  projects: projects.projects
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ProjectTilesContainer));

/***/ }),

/***/ "./src/containers/Toolbar.js":
/*!***********************************!*\
  !*** ./src/containers/Toolbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateProjectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateProjectForm */ "./src/containers/CreateProjectForm.js");
/* harmony import */ var _components_LeftSidebarProjectsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LeftSidebarProjectsList */ "./src/components/LeftSidebarProjectsList.js");

var _jsxFileName = "/Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/containers/Toolbar.js";




const Toolbar = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        projects = _useState2[0],
        setShowing = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState4 = Object(_Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        projectForm = _useState4[0],
        setOpen = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "top-toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "toolbar-btn",
    onClick: () => setShowing(!projects),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, " ", "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "toolbar-btn",
    onClick: () => setOpen(!projectForm),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, " ", "New Project", " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tool wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "project-list wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, projects ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LeftSidebarProjectsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, " ", projectForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateProjectForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./src/containers/UserProjectsContainer.js":
/*!*************************************************!*\
  !*** ./src/containers/UserProjectsContainer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar */ "./src/containers/Toolbar.js");
/* harmony import */ var _ProjectTilesContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectTilesContainer */ "./src/containers/ProjectTilesContainer.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/containers/UserProjectsContainer.js";




const UserProjectsContainer = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-projects full-page container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toolbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectTilesContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProjectsContainer);

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background.633b697f.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/userReducer */ "./src/reducers/userReducer.js");
/* harmony import */ var _reducers_projectsReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/projectsReducer */ "./src/reducers/projectsReducer.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/user */ "./src/actions/user.js");
/* harmony import */ var _actions_project__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/project */ "./src/actions/project.js");
var _jsxFileName = "/Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/index.js";













const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  userReducer: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_8__["default"],
  projectsReducer: _reducers_projectsReducer__WEBPACK_IMPORTED_MODULE_9__["default"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
console.log("%c INITIAL REDUX STORE", "color: purple", store.getState());
store.dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_11__["fetchUser"])());
store.dispatch(Object(_actions_project__WEBPACK_IMPORTED_MODULE_12__["fetchUserProjects"])());
react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}))), document.getElementById("root"));
_serviceWorker__WEBPACK_IMPORTED_MODULE_10__["unregister"]();

/***/ }),

/***/ "./src/reducers/projectsReducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/projectsReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");

const defaultState = {
  projects: []
};

const projectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return Object(_Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        projects: action.payload
      });

    case "ADD_NEW_PROJECT":
      return Object(_Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        projects: action.project
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (projectsReducer);

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");

const defaultState = {
  user: null,
  userId: null
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return Object(_Users_WillSinn_Desktop_dev_independent_projects_Wello_frontend_wello_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        user: action.payload,
        userId: action.payload.id
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/WillSinn/Desktop/dev/independent/projects/Wello/frontend-wello/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map