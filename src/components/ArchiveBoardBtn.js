import React from "react";
import { connect } from "react-redux";
import { archiveBoard } from "../actions/boards";
import { clearWorkspace } from "../actions/workspace";
import { getCurrentDate } from "../utils";

const ArchiveBoardBtn = ({ board, dispatch }) => {
  const handleClick = (e) => {
    if (e) {
      let dateArchived = getCurrentDate();
      dispatch(archiveBoard({ board, dateArchived }));
      dispatch(clearWorkspace());
    }
  };
  return (
    <ul className="board-menu-nav-list">
      <li onClick={(e) => handleClick(e)} className="board-menu-nav-item">
        <span className="board-menu-nav-btn">
          <div className="del-icon menu-icon" />
          <div>
            <span className="">Archive board.</span>
          </div>
          <div>
            <span className="">
              This action also archives associated cards and tasks.
            </span>
          </div>
        </span>
      </li>
    </ul>
  );
};

export default connect()(ArchiveBoardBtn);
