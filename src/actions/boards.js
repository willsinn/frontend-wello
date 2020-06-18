export const setBoards = (boardsData) => ({
  type: "SET_BOARDS",
  boardsData,
});
export const updateBoard = (board) => ({
  type: "UPDATE_BOARD",
  board,
});
export const addNewBoard = (boardData) => ({
  type: "ADD_NEW_BOARD",
  board: boardData,
});

export const fetchUserBoards = (userId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/user/${userId}/boards`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((JSONresponse) =>
        dispatch(setBoards({ boards: JSONresponse, user_id: userId }))
      );
  };
};
export const postNewBoard = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/user/${data.user.id}/boards/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        user_id: data.user.id,
        title: data.board.title,
        background: data.board.background,
        team_name: data.board.team,
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
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
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
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
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
// export const starredBoard = (board) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/board/${board.id}/update`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//       },
//       body: JSON.stringify({
//         id: board.id,
//         starred: true,
//       }),
//     })
//       .then((response) => response.json())
//       .then((JSONresponse) => {
//         dispatch(updateBoard(JSONresponse));
//       });
//   };
// };
