import { fetchUrl } from "../utils.js";

export const clearWorkspace = () => ({
  type: "CLEAR_WORKSPACE",
});
export const toggleModal = () => ({
  type: "TOGGLE_MODAL",
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
export const setCurrentAdding = (cardId) => ({
  type: "SET_CURRENT_ADDING",
  cardId,
});
export const saveAddValue = (value) => ({
  type: "SAVE_ADD_VALUE",
  value,
});
export const closeAdding = () => ({
  type: "CLOSE_ADDING",
});
export const setCurrentDroppable = (payload) => ({
  type: "SET_CURRENT_DROPPABLE",
  payload,
});

export const fetchWorkspace = (data) => {
  return (dispatch) => {
    // dispatch(clearWorkspace());
    fetch(`${fetchUrl}/api/v1/user/${data.user.id}/board/${data.board.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setWorkspace({ board: JSONresponse })));
  };
};

export const postNewCard = (data, callback) => {
  return (dispatch) => {
    fetch(`${fetchUrl}/api/v1/board/${data.board_id}/cards/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        board_id: data.board_id,
        goal: data.goal,
        card_desc: "",
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(addCard(JSONresponse)));
    callback();
  };
};

export const fetchCard = (card) => {
  return (dispatch) => {
    fetch(`${fetchUrl}/api/v1/card/${card.id}`, {
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
    fetch(`${fetchUrl}/api/v1/card/update/${card.id}`, {
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
    fetch(`${fetchUrl}/api/v1/card/update/${data.card.id}`, {
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
    fetch(`${fetchUrl}/api/v1/card/${data.card.id}/tasks/new`, {
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
    fetch(`${fetchUrl}/api/v1/task/update/${task.id}`, {
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
    fetch(`${fetchUrl}/api/v1/task/update/${task.id}`, {
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
    fetch(`${fetchUrl}/api/v1/task/update/${task.id}`, {
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
    fetch(`${fetchUrl}/api/v1/board/update/${board.id}`, {
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
export const updateBoardDesc = (data) => {
  return (dispatch) => {
    fetch(`${fetchUrl}/api/v1/board/update/${data.workspace.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        id: data.workspace.id,
        board_desc: data.b_desc,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateWorkspace(JSONresponse)));
  };
};
export const updateBoardTitle = (data) => {
  return (dispatch) => {
    fetch(`${fetchUrl}/api/v1/board/update/${data.workspace.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        id: data.workspace.id,
        title: data.title,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateWorkspace(JSONresponse)));
  };
};
