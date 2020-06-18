import React from "react";
import { connect } from "react-redux";
import { setArchives } from "../actions/archives";

const Archives = ({ boards, archives, dispatch }) => {
  const findArchivedObjects = () => {
    if (boards && boards.length > 0) {
      dispatch(setArchives(boards));
    }
  };
  return <div>{findArchivedObjects()}</div>;
};

const mapStateToProps = (state) => {
  return {
    boards: state.boardsReducer.boards,
    archives: state.archiveReducer.archives,
  };
};

export default connect(mapStateToProps)(Archives);
