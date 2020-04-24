export const setLists = (checklists) => ({
  type: "SET_LISTS",
  checklists,
});
export const addList = (checklist) => ({
  type: "ADD_LIST",
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
        title: title,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(addList(JSONresponse));
        callback();
      });
  };
};
