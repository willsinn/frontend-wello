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
export const setTasks = tasks => ({
  type: "SET_TASKS",
  tasks
});
export const clearEdit = () => ({ type: "CLEAR_EDIT" });
export const toggleEdit = () => ({
  type: "TOGGLE_EDIT"
});
export const fetchWorkspace = (board, dispatch) => {
  return dispatch => {
<<<<<<< HEAD
    fetch(
      `https://backend-wello.herokuapp.com/user/${project.user_id}/project/${
        project.id
      }`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
=======
    fetch(`http://localhost:3000/user/1/board/${board.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
>>>>>>> local
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
<<<<<<< HEAD
    fetch(
      `https://backend-wello.herokuapp.com/project/${
        project.workspace.id
      }/items/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          project_id: project.workspace.id,
          objective: project.objective
        })
      }
    )
      .then(response => response.json())
      .then(JSONresponse => dispatch(addItem(JSONresponse)));
=======
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
>>>>>>> local
  };
};
export const postWorkspaceCard = (board, dispatch) => {
  return dispatch => {
<<<<<<< HEAD
    dispatch(deleteItem(item));
    fetch(`https://backend-wello.herokuapp.com/items/delete/${item.id}`, {
=======
    fetch(`http://localhost:3000/board/${board.workspace.id}/cards/new`, {
>>>>>>> local
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        board_id: board.workspace.id,
        goal: board.goal
      })
    });
  };
};
export const deleteWorkspaceCard = (card, dispatch) => {
  return dispatch => {
<<<<<<< HEAD
    fetch(`https://backend-wello.herokuapp.com/item/${item.id}`, {
=======
    dispatch(deleteCard(card));
    fetch(`http://localhost:3000/cards/delete/${card.id}`, {
      method: "POST",
>>>>>>> local
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
<<<<<<< HEAD
    fetch(
      `https://backend-wello.herokuapp.com/item/${item.item.id}/cards/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          subject: item.subject,
          item_id: item.item.id
        })
      }
    )
=======
    fetch(`http://localhost:3000/card/${card.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
>>>>>>> local
      .then(response => response.json())
      .then(JSONresponse => dispatch(updateCard(JSONresponse)));
  };
};

export const deleteTask = (task, dispatch) => {
  return dispatch => {
<<<<<<< HEAD
    fetch(`https://backend-wello.herokuapp.com/cards/delete/${card["id"]}`, {
=======
    fetch(`http://localhost:3000/tasks/delete/${task["id"]}`, {
>>>>>>> local
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

export const updateTask = (task, dispatch) => {
  return dispatch => {
<<<<<<< HEAD
    fetch(`https://backend-wello.herokuapp.com/card/update/${card.id}`, {
=======
    fetch(`http://localhost:3000/task/update/${task.id}`, {
>>>>>>> local
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
<<<<<<< HEAD
export const updateItemTitle = (item, dispatch) => {
  return dispatch => {
    fetch(`https://backend-wello.herokuapp.com/item/update/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: item.id,
        [item.key]: item.value
      })
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(fetchItem({ id: item.id })));
  };
};
=======
>>>>>>> local
