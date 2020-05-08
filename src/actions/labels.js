export const setLabels = (labels) => ({
  type: "SET_LABELS",
  labels,
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
