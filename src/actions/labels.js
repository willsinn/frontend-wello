import { getUrl } from "../utils.js";
const fetchUrl = getUrl();

export const setLabels = (labels) => ({
  type: "SET_LABELS",
  labels,
});
export const setTaskLabels = (task_labels) => ({
  type: "SET_TASK_LABELS",
  task_labels,
});
export const updateLabel = (label) => ({
  type: "UPDATE_LABEL",
  label,
});
export const addTaskLabel = (taskLabel) => ({
  type: "ADD_TASK_LABEL",
  taskLabel,
});
export const removeTaskLabel = (taskLabelId) => ({
  type: "REMOVE_TASK_LABEL",
  taskLabelId,
});
export const fetchLabels = (task) => {
  return (dispatch) => {
    fetch(`${fetchUrl}/api/v1/labels`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setLabels(JSONresponse)));
  };
};
export const fetchTaskLabels = () => {
  return (dispatch) => {
    fetch(`${fetchUrl}/api/v1/task_labels`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setTaskLabels(JSONresponse)));
  };
};
export const editLabelName = (label, name) => {
  return (dispatch) => {
    fetch(`${fetchUrl}/api/v1/label/${label.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ id: label.id, name: name }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateLabel(JSONresponse)));
  };
};
export const createTaskLabel = (labelId, taskId) => {
  return (dispatch) => {
    fetch(`${fetchUrl}/api/v1/task/${taskId}/label/${labelId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ id: labelId, task_id: taskId }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(addTaskLabel(JSONresponse)));
  };
};
export const deleteTaskLabel = (taskLabelId) => {
  return (dispatch) => {
    dispatch(removeTaskLabel(taskLabelId));
    fetch(`${fetchUrl}/api/v1/task_label/${taskLabelId}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ task_label_id: taskLabelId }),
    });
  };
};
export const newUserLabel = (userId) => {
  debugger;
  return (dispatch) => {
    fetch(`${fetchUrl}/api/v1/label/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ user_id: userId, color: "orange" }),
    })
      .then((r) => r.json())
      .then((JSONresponse) => console.log(JSONresponse));
  };
};
