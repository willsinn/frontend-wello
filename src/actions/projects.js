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
    fetch("https://backend-wello.herokuapp.com/user/1/projects", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(setProjects(JSONresponse)));
  };
};
export const postNewProject = (title, dispatch) => {
  return dispatch => {
    console.log(title);
    fetch("https://backend-wello.herokuapp.com/user/1/projects/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        title: title.title
      })
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(addNewProject(JSONresponse)));
  };
};
export const deleteProject = project => ({
  type: "DELETE_PROJECT",
  project: project
});
export const deleteProjectWorkspace = (workspace, dispatch) => {
  return dispatch => {
    fetch(
      `https://backend-wello.herokuapp.com/project/delete/${workspace.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: workspace.id, user_id: workspace.user_id })
      }
    ).then(response => dispatch(deleteProject(workspace)));
  };
};
