import React from "react";
import { connect } from "react-redux";
import { setBoardsArchives, fetchAllCards } from "../actions/archives";

const Archives = ({ boards, archives, dispatch }) => {
  const renderArchivedBoards = () => {
    if (boards && boards.length > 0) {
      debugger;
      const archived = boards.filter((board) => board.archived === true);
      if (archived.length > 0) {
        dispatch(setBoardsArchives({ boards: archived }));
      }
      boards.map((board) => {
        const boardId = board.id;
        dispatch(fetchAllCards({ board_id: boardId }));
        return boardId;
      });
    }
    console.log(archives);
  };
  const renderArchivedCards = () => {};
  const renderArchivedTasks = () => {};

  return <div>{renderArchivedBoards()}</div>;
};

const mapStateToProps = (state) => {
  return {
    boards: state.boardsReducer.boards,
    archives: state.archiveReducer.archives,
  };
};

export default connect(mapStateToProps)(Archives);
