export const clearWorkspace = () => ({
  type: "CLEAR_WORKSPACE"
});
export const setWorkspace = workspace => ({
  type: "SET_WORKSPACE",
  workspace
});
export const updateBoard = board => ({
  type: "UPDATE_BOARD",
  board
});
export const updateCard = card => ({
  type: "UPDATE_CARD",
  card
});
export const updateTask = task => ({
  type: "UPDATE_TASK",
  task
});
export const addCard = card => ({
  type: "ADD_CARD",
  card
});
export const addTask = task => ({
  type: "ADD_TASK",
  task
});
export const clearEdit = () => ({
  type: "CLEAR_EDIT"
});
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
        dispatch(setWorkspace({
          board: JSONresponse
        }));
      });
  };
};
export const updateBoardBackground = (board, background) => {
  return dispatch => {
    fetch(`http://localhost:3000/board/${board.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: board.id,
        background: background
      })
    });
  }
};
export const starredBoard = board => {
  debugger;
  return dispatch => {
    fetch(`http://localhost:3000/board/${board.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: board.id,
        starred: true
      })
    });
  }
};
export const postNewCard = (board, callback) => {
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
    callback();
  };
};

export const fetchCard = (card, dispatch) => {
  return dispatch => {
    fetch(`http://localhost:3000/card/${card.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  };
};

export const updateCardGoal = (card, goal) => {
  return dispatch => {
    fetch(`http://localhost:3000/card/update/${card.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          id: card.id,
          goal: goal
        })
      })
      .then(response => response.json())
      .then(JSONresponse => {
        dispatch(updateCard(JSONresponse));
      });
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
      })
      .then(response => response.json())
      .then(JSONresponse => {
        dispatch(updateCard(JSONresponse));
      });
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
export const archiveTask = (task, callback) => {
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
      })
      .then(response => response.json())
      .then(JSONresponse => {
        dispatch(updateTask(JSONresponse));
        callback();
      });
  };
};

export const updateTaskNote = (task, note) => {
  console.log(task);
  return dispatch => {
    fetch(`http://localhost:3000/task/update/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          id: task.id,
          note: note
        })
      })
      .then(response => response.json())
      .then(JSONresponse => {
        dispatch(updateTask(JSONresponse));
      });
  };
};