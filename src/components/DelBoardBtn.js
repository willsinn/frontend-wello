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
    <ul className="board-menu-nav-list">
      <li onClick={e => handleDelete(e)} className="board-menu-nav-item">
        <button className="board-menu-nav-btn">
          <span className="">Delete Board </span>
        </button>
      </li>
    </ul>
  );
};

export default connect()(DelBoardBtn);
