export const setBoards = boardsData => ({
  type: "SET_BOARDS",
  payload: boardsData
});

export const addNewBoard = boardData => ({
  type: "ADD_NEW_BOARD",
  board: boardData
});

export const fetchUserBoards = data => {
  return dispatch => {
    fetch("http://localhost:3000/user/1/boards", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(setBoards(JSONresponse)));
  };
};
export const postNewBoard = (newBoard, dispatch) => {
  return dispatch => {
    console.log(newBoard);
    fetch("http://localhost:3000/user/1/boards/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        title: newBoard.title,
        background: newBoard.background,
        team_name: newBoard.team
      })
    })
      .then(response => response.json())
      .then(JSONresponse => dispatch(addNewBoard(JSONresponse)));
  };
};
export const deleteBoard = board => ({
  type: "DELETE_BOARD",
  board: board
});
export const deleteBoardWorkspace = (workspace, dispatch) => {
  console.log(workspace);
  return dispatch => {
    fetch(`http://localhost:3000/board/delete/${workspace.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: workspace.id, user_id: workspace.user_id })
    }).then(response => dispatch(deleteBoard(workspace)));
  };
};
