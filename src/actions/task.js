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
      }
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(setTask(JSONresponse)));
  };
};

export const postNewCardTask = (card, dispatch) => {
  // console.log(card, card.note);
  return dispatch => {
    fetch(`http://localhost:3000/card/${card.card.id}/tasks/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        note: card.note,
        card_id: card.card.id
      })
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(fetchTask({ id: JSONresponse.card_id })));
  };
};
