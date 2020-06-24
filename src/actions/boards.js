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

export const fetchUserBoards = (userId, callback) => {
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
        dispatch(
          setBoards({ boards: JSONresponse, user_id: userId }, () => callback())
        )
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
// export const deleteBoard = (board) => ({
//   type: "DELETE_BOARD",
//   board: board,
// });
export const archiveBoard = (data) => {
  return (dispatch) => {
    // dispatch(
    //   updateBoard({
    //     ...data.board,
    //     archived: true,
    //     date_archived: data.dateArchived,
    //   })
    // );
    fetch(`http://localhost:3000/api/v1/board/update/${data.board.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        board_id: `${data.board.id}`,
        archived: `${!data.board.archived}`,
        date_archived: `${data.dateArchived}`,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateBoard(JSONresponse)));
  };
};
export const updateBoardBackground = (board, background) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/board/update/${board.id}`, {
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
export const removeStarred = (board) => {
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
        starred: false,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateBoard(JSONresponse)));
  };
};
