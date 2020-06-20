import React from "react";
const ArchiveTask = ({ taskArchive }) => {
  return (
    <div className="archive-item-content straight-row-content">
      <div className="straight-row-content">
        <div>
          <span className="archive-item-info">Task noted</span>
          <span className="archive-item-info archive-title-text">{`${taskArchive.note}`}</span>
        </div>
      </div>
      <div className="straight-row-content a-right">
        <span className="archive-title-info">{taskArchive.date_archived}</span>
        <div className="restore-archived">
          <button>
            <span className="restore-btn-text">restore</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ArchiveTask;
