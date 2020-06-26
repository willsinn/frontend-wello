export const setArchives = (data) => ({
  type: "SET_ARCHIVES",
  data,
});
export const removeArchive = (data) => ({
  type: "REMOVE_ARCHIVE",
  data,
});
export const restoreTask = (task) => {
  return (dispatch) => {
    dispatch(removeArchive(task));
    fetch(`http://localhost:3000/api/v1/task/update/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        id: `${task.id}`,
        archived: false,
        date_archived: "",
      }),
    }).then((response) => response.json());
  };
};
export const restoreCard = (card) => {
  return (dispatch) => {
    dispatch(removeArchive(card));
    fetch(`http://localhost:3000/api/v1/card/update/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        id: `${card.id}`,
        archived: false,
        date_archived: "",
      }),
    }).then((response) => response.json());
  };
};
