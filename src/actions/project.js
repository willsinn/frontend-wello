export const setProjects = projectsData => ({
  type: "SET_PROJECTS",
  payload: projectsData
});

export const addNewProject = projectData => ({
  type: "ADD_NEW_PROJECT",
  project: projectData
});

export const fetchUserProjects = data => {
  return dispatch => {
    fetch("http://localhost:3000/user/1/projects", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          response.throw();
        }
      })
      .then(JSONresponse => dispatch(setProjects(JSONresponse)));
  };
};
export const postNewProject = (title, dispatch) => {
  return dispatch => {
    fetch("http://localhost:3000/user/1/projects/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        title: title.newProject
      })
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(addNewProject(JSONresponse)));
  };
};
export const fetchWorkspace = (project, dispatch) => {
  console.log(project);
  return dispatch => {};
};
