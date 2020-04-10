export const clearWorkspace = () => ({ type: "CLEAR_WORKSPACE" });
export const setWorkspace = workspace => ({
  type: "SET_WORKSPACE",
  workspace
});
export const deleteCard = card => ({
  type: "DELETE_CARD",
  card
});
export const updateCard = card => ({
  type: "UPDATE_CARD",
  card
});
export const addCard = card => ({
  type: "ADD_CARD",
  card
});
export const addTask = task => ({
  type: "ADD_TASK",
  task
});
export const clearEdit = () => ({ type: "CLEAR_EDIT" });
export const toggleEdit = () => ({
  type: "TOGGLE_EDIT"
});
export const fetchWorkspace = (board, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/user/1/board/${board.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(JSONresponse => {
        dispatch(setWorkspace({ board: JSONresponse }));
      });
  };
};
export const updateBoard = (board, dispatch) => {
  console.log(board);
  return dispatch => {
    fetch("http://localhost:3000/user/1/board/1/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: board.id,
        user_id: board.user_id,
        title: board.title,
        board_desc: board.board_desc,
        background: board.background,
        team_name: board.team_name,
        cards: board.cards
      })
    });
  };
};
export const postNewCard = (board, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/board/${board.workspace.id}/cards/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        board_id: board.workspace.id,
        goal: board.goal,
        card_desc: ""
      })
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(addCard(JSONresponse)));
  };
};
export const deleteWorkspaceCard = (card, dispatch) => {
  return dispatch => {
    dispatch(deleteCard(card));
    fetch(`http://localhost:3000/cards/delete/${card.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: card.id
      })
    });
  };
};

export const fetchCard = (card, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/card/${card.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(updateCard(JSONresponse)));
  };
};

export const deleteTask = (task, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/tasks/delete/${task["id"]}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: task["id"]
      })
    }).then(response => dispatch(fetchCard({ id: task["task_id"] })));
  };
};
export const archiveCard = card => {
  return dispatch => {
    fetch(`http://localhost:3000/card/update/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: card.id,
        archived: true
      })
    }).then(response => console.log(response));
  };
};
export const updateTask = task => {
  debugger;
  return dispatch => {
    fetch(`http://localhost:3000/task/update/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: task.id,
        [task.key]: task.value
      })
    });
    // .then(response => console.log(response));
  };
};
export const archiveTask = task => {
  return dispatch => {
    fetch(`http://localhost:3000/task/update/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: task.id,
        archived: true
      })
    });
    // .then(response => console.log(response));
  };
};
export const postNewTask = (card, callback) => {
  return dispatch => {
    fetch(`http://localhost:3000/card/${card.card.id}/tasks/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        card_id: card.card.id,
        note: card.note
      })
    })
      .then(response => response.json())
      .then(JSONresponse => {
        dispatch(addTask(JSONresponse));
        callback();
      });
  };
};
