import React from "react";
import { connect } from "react-redux";
import { restoreTask } from "../actions/archives";

const ArchiveItemTask = ({ taskArchive, dispatch }) => {
  const handleTaskRestore = (e) => {
    if (e) {
      dispatch(restoreTask(taskArchive));
    }
  };

  return (
    <li className="archives-list-item">
      <div className="main-archive" style={{ height: "100%", display: "flex" }}>
        <span className="archive-item-label" style={{ alignSelf: "center" }}>
          TASK:
        </span>
        <span className="archive-title-text archive-item-info">{`${taskArchive.note}`}</span>
      </div>
      <div className="archive-status">
        <span className="archive-item-label">ARCHIVED:</span>
        <span className="archive-title-info">{taskArchive.date_archived}</span>
      </div>
      <div className="restore-archived">
        <button className="restore-btn" onClick={(e) => handleTaskRestore(e)}>
          <span className="archive-item-label restore-btn-text">RESTORE</span>
        </button>
      </div>
    </li>
  );
};
export default connect()(ArchiveItemTask);
