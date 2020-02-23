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
      .then(response => response.json())
      .then(JSONresponse => dispatch(setProjects(JSONresponse)));
  };
};
export const postNewBoard = (newBoard, dispatch) => {
  return dispatch => {
    console.log(newBoard);
    fetch("http://localhost:3000/user/1/projects/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        title: newBoard.title
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
    fetch(`http://localhost:3000/project/delete/${workspace.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: workspace.id, user_id: workspace.user_id })
    }).then(response => dispatch(deleteProject(workspace)));
  };
};
