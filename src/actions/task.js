export const setTask = taskData => ({
  type: "SET_TASK",
  payload: taskData
});
export const fetchTask = (task, dispatch) => {
  return dispatch => {
    fetch("", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(setTask(JSONresponse)));
  };
};
