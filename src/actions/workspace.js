export const setWorkspace = workspaceData => ({
  type: "SET_WORKSPACE",
  workspace: workspaceData
});
export const clearWorkspace = () => ({ type: "CLEAR_WORKSPACE" });
export const fetchWorkspace = (project, dispatch) => {
  return dispatch => {
    fetch(
      `http://localhost:3000/user/${project.user_id}/projects/${project.id}`,
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
