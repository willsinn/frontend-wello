import React from "react";
import { connect } from "react-redux";
import { restoreBoard } from "../actions/boards";

const ArchiveItemBoard = ({ boardArchive, dispatch }) => {
  const handleBoardRestore = (e) => {
    if (e) {
      dispatch(restoreBoard(boardArchive));
    }
  };

  return (
    <li className="archives-list-item">
      <div className="main-archive">
        <span className="archive-item-label">BOARD:</span>
        <span className="archive-title-text archive-item-info">{`${boardArchive.title}`}</span>
      </div>
      <div>
        <span className="archive-item-label">ARCHIVED:</span>
        <span className="archive-title-info">{boardArchive.date_archived}</span>
      </div>
      <div className="restore-archived">
        <button className="restore-btn" onClick={(e) => handleBoardRestore(e)}>
          <span className="archive-item-label restore-btn-text">RESTORE</span>
        </button>
      </div>
    </li>
  );
};
export default connect()(ArchiveItemBoard);
