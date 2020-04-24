export const setLists = (checklists) => ({
  type: "SET_LISTS",
  checklists,
});
export const addList = (checklist) => ({
  type: "ADD_LIST",
  checklist,
});
export const updateChecklist = (checklist) => ({
  type: "UPDATE_CHECKLIST",
  checklist,
});
export const postNewChecklist = (task, title) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/task/${task.id}/task_checklists/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        task_id: task.id,
        title: `${title}`,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(addList(JSONresponse));
      });
  };
};
export const fetchTaskChecklists = (task) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/task/${task.id}/task_checklists`)
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setLists(JSONresponse)));
  };
};
export const saveChecklistTitle = (checklist, title) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/task_checklists/${checklist.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: checklist.id,
        title: `${title}`,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateChecklist(JSONresponse)));
  };
};
