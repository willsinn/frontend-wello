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
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(removeArchive(JSONresponse)));
  };
};
export const restoreCard = (card) => {
  return (dispatch) => {
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
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(removeArchive(JSONresponse)));
  };
};
export const restoreBoard = (board) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/board/update/${board.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        id: `${board.id}`,
        archived: false,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(removeArchive(JSONresponse)));
  };
};
// export const setBoardArchives = (data) => ({
//   type: "SET_BOARD_ARCHIVES",
//   data,
// });
// export const setCardArchives = (data) => ({
//   type: "SET_CARD_ARCHIVES",
//   data,
// });
// export const setTaskArchives = (data) => ({
//   type: "SET_TASK_ARCHIVES",
//   data,
// });
