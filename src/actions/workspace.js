export const clearWorkspace = () => ({
  type: "CLEAR_WORKSPACE",
});
export const setWorkspace = (workspace) => ({
  type: "SET_WORKSPACE",
  workspace,
});
export const updateCard = (card) => ({
  type: "UPDATE_CARD",
  card,
});
export const updateTask = (task) => ({
  type: "UPDATE_TASK",
  task,
});
export const addCard = (card) => ({
  type: "ADD_CARD",
  card,
});
export const addTask = (task) => ({
  type: "ADD_TASK",
  task,
});
export const clearEdit = () => ({
  type: "CLEAR_EDIT",
});
export const toggleEdit = () => ({
  type: "TOGGLE_EDIT",
});
export const updateWorkspace = (board) => ({
  type: "UPDATE_WORKSPACE",
  board,
});
export const positionNewTask = (position) => ({
  type: "POSITION_NEW_TASK",
  position,
});
export const fetchWorkspace = (data) => {
  return (dispatch) => {
    // dispatch(clearWorkspace());
    fetch(
      `http://localhost:3000/api/v1/user/${data.user.id}/board/${data.board.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setWorkspace({ board: JSONresponse })));
  };
};

export const postNewCard = (board, callback) => {
  return (dispatch) => {
    fetch(
      `http://localhost:3000/api/v1/board/${board.workspace.id}/cards/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({
          board_id: board.workspace.id,
          goal: board.goal,
          card_desc: "",
        }),
      }
    )
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(addCard(JSONresponse)));
    callback();
  };
};

export const fetchCard = (card) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/card/${card.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
  };
};

export const updateCardGoal = (card, goal) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/card/update/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        id: card.id,
        goal: goal,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(updateCard(JSONresponse));
      });
  };
};
export const archiveCard = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/card/update/${data.card.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        id: data.card.id,
        archived: true,
        date_archived: data.date_archived,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(updateCard(JSONresponse));
      });
  };
};
export const postNewTask = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/card/${data.card.id}/tasks/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        card_id: data.card.id,
        note: data.note,
        task_desc: "",
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(addTask(JSONresponse)));
  };
};
export const archiveTask = (task, callback) => {
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
        archived: `${true}`,
        date_archived: `${task.date_archived}`,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(updateTask(JSONresponse));
        callback();
      });
  };
};

export const updateTaskNote = (task, note) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/task/update/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        id: task.id,
        note: note,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(updateTask(JSONresponse));
      });
  };
};
export const saveTaskDesc = (task, desc) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/task/update/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        id: task.id,
        task_desc: desc,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(updateTask(JSONresponse));
      });
  };
};
export const starredBoard = (board) => {
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
        starred: `${!board.starred}`,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(updateWorkspace(JSONresponse));
      });
  };
};
