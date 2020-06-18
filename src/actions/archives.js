export const setBoardsArchives = (boards) => ({
  type: "SET_ARCHIVES",
  boards,
});
export const setCardsArchives = (cards) => ({
  type: "SET_CARDS_ARCHIVES",
  cards,
});

export const fetchAllCards = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/board/${data.board_id}/cards`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setCardsArchives(JSONresponse)));
  };
};
