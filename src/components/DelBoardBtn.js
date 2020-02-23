import React from "react";
import { connect } from "react-redux";
import { deleteBoardWorkspace } from "../actions/boards";
import { clearWorkspace } from "../actions/workspace";

const DelBoardBtn = (props, { dispatch }) => {
  const handleDelete = e => {
    props.dispatch(deleteBoardWorkspace(props.workspace));
    props.dispatch(clearWorkspace());
  };
  return (
    <button onClick={e => handleDelete(e)} className="navbar-btn">
      <span className="del-icon icon" />
    </button>
  );
};

export default connect()(DelBoardBtn);
