import React from "react";

const TaskArchiveItem = ({ taskArchive }) => {
  return (
    <li className="archives-list-item">
      <div className="archive-item-content straight-row-content">
        <div className="straight-row-content">
          <div className="render-nested-info">
            <span className="archive-item-label">TASK</span>
            <span className="archive-title-text archive-item-info">{` ${taskArchive.note}`}</span>
          </div>
        </div>
        <div className="straight-row-content a-right">
          <span className="archive-title-info">
            {taskArchive.date_archived}
          </span>
          <div className="restore-archived">
            <button>
              <span className="archive-item-label restore-btn-text">
                RESTORE
              </span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TaskArchiveItem;
