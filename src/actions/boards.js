export const setBoards = (boardsData) => ({
  type: "SET_BOARDS",
  payload: boardsData,
});
export const updateBoard = (board) => ({
  type: "UPDATE_BOARD",
  board,
});
export const addNewBoard = (boardData) => ({
  type: "ADD_NEW_BOARD",
  board: boardData,
});

export const fetchUserBoards = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/user/1/boards", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setBoards(JSONresponse)));
  };
};
export const postNewBoard = (newBoard, dispatch) => {
  return (dispatch) => {
    console.log(newBoard);
    fetch("http://localhost:3000/api/v1/user/1/boards/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        title: newBoard.title,
        background: newBoard.background,
        team_name: newBoard.team,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(addNewBoard(JSONresponse)));
  };
};
export const deleteBoard = (board) => ({
  type: "DELETE_BOARD",
  board: board,
});
export const deleteBoardWorkspace = (board, dispatch) => {
  console.log(board.id, board);
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/user/1/board/${board.id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ board_id: `${board.id}` }),
    }).then((response) => dispatch(deleteBoard(board)));
  };
};
export const updateBoardBackground = (board, background) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/board/${board.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: board.id,
        background: background,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(updateBoard(JSONresponse));
      });
  };
};
export const starredBoard = (board) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/board/${board.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: board.id,
        starred: true,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        dispatch(updateBoard(JSONresponse));
      });
  };
};
