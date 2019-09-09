webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.4d45e45ece9894dfbd13.hot-update.js.map