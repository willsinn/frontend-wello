import React from "react";
import { connect } from "react-redux";

const Archives = ({ boards }) => {
  console.log(boards);

  const renderArchivedBoards = () => {
    if (boards && boards.length > 0) {
      const archived = [];
      boards.forEach((board) => {
        if (board.archived) {
          return archived.push(board);
        }
      });
    }
  };
  const renderArchivedCards = () => {};
  const renderArchivedTasks = () => {};

  return <div>Hello this is archived</div>;
};

const mapStateToProps = (state) => {
  return {
    boards: state.boardsReducer.boards,
  };
};

export default connect(mapStateToProps)(Archives);
