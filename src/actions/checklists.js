export const setLists = (checklists) => ({
  type: "SET_LISTS",
  checklists,
});
export const addList = (checklist) => ({
  type: "ADD_LIST",
  checklist,
});
export const addListItem = (item) => ({
  type: "ADD_LIST_ITEM",
  item,
});
export const updateChecklist = (checklist) => ({
  type: "UPDATE_CHECKLIST",
  checklist,
});
export const removeChecklist = (checklist) => ({
  type: "REMOVE_CHECKLIST",
  checklist,
});
export const postNewChecklist = (task, title) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/task/${task.id}/checklists/new`, {
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
      .then((JSONresponse) => dispatch(addList(JSONresponse)));
  };
};
export const fetchChecklists = (task) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/task/${task.id}/checklists`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setLists(JSONresponse)));
  };
};
export const saveChecklistTitle = (checklist, title) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/checklists/${checklist.id}/update`, {
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

export const deleteChecklist = (checklist) => {
  return (dispatch) => {
    dispatch(removeChecklist(checklist));
    fetch(`http://localhost:3000/checklists/${checklist.id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: checklist.id,
      }),
    });
  };
};
export const postNewListItem = (checklist, item) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/checklist/${checklist.id}/item/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        checklist_id: checklist.id,
        item: item,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(addListItem(JSONresponse)));
  };
};
