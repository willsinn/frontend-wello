export const clearWorkspace = () => ({ type: "CLEAR_WORKSPACE" });

export const setWorkspace = workspaceData => ({
  type: "SET_WORKSPACE",
  workspace: workspaceData
});
export const fetchWorkspace = (project, dispatch) => {
  return dispatch => {
    fetch(
      `http://localhost:3000/user/${project.user_id}/project/${project.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(JSONresponse => {
        dispatch(setWorkspace({ project: JSONresponse }));
      });
  };
};

export const addWorkspaceItem = item => ({
  type: "ADD_WORKSPACE_ITEM",
  item: item
});

export const postWorkspaceItem = (item, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/project/${item.project_id}/items/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        project_id: item.project_id,
        objective: item.objective
      })
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(addWorkspaceItem(JSONresponse)));
  };
};
