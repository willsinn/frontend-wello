import React from "react";
import { connect } from "react-redux";
import { fetchAllArchived } from "../actions/archives";

const Archives = ({ boards, archives, dispatch }) => {
  const renderArchivedBoards = () => {
    if (boards && boards.length > 0) {
      const userId = boards[0].user_id;
      debugger;
      dispatch(fetchAllArchived({ user_id: userId }));

      //   const archived = boards.filter((board) => board.archived === true);
      //   if (archived.length > 0) {
      //     dispatch(setBoardsArchives({ boards: archived }));
      //   }
      //   boards.map((board) => {
      //     const boardId = board.id;
      //     return boardId;
      //   });
      // }
      // console.log(archives);
    }
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
