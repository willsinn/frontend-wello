import React from "react";
import { connect } from "react-redux";
import { deleteBoardWorkspace } from "../actions/boards";
import { clearWorkspace } from "../actions/workspace";

const DelBoardBtn = (props, { dispatch }) => {
  const handleDelete = e => {
    props.dispatch(clearWorkspace());
    props.dispatch(deleteBoardWorkspace(props.board));
  };
  return (
    <ul className="board-menu-nav-list">
      <li onClick={e => handleDelete(e)} className="board-menu-nav-item">
        <span className="board-menu-nav-btn">
          <div className="del-icon menu-icon" />
          <span className="">Delete Board...</span>
        </span>
      </li>
    </ul>
  );
};

export default connect()(DelBoardBtn);
