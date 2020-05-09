export const setLabels = (labels) => ({
  type: "SET_LABELS",
  labels,
});
export const updateLabel = (label) => ({
  type: "UPDATE_LABEL",
  label,
});
export const fetchLabels = (task) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/labels`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setLabels(JSONresponse)));
  };
};
export const editLabelName = (label, name) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/label/${label.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: label.id, name: name }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateLabel(JSONresponse)));
  };
};
