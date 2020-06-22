import React from "react";

const TaskArchiveItem = ({ taskArchive, lastTaskId, archiveType }) => {
  const renderNestedTasks = () => {
    return (
      <span className="archive-title-text archive-item-info">
        {`${taskArchive.note}`}
      </span>
    );
  };

  console.log(lastTaskId, taskArchive.id);

  return (
    <>
      {archiveType === "nested" ? (
        <li>
          {renderNestedTasks()}
          {taskArchive.id === lastTaskId ? null : <span>, </span>}
        </li>
      ) : (
        <li className="archives-list-item">
          <div className="archive-item-content straight-row-content">
            <div className="full-archive">
              <div className="main-archive">
                <span className="archive-item-label">TASK</span>
                <span className="archive-title-text archive-item-info">{`${taskArchive.note}`}</span>
              </div>
              <div className="render-nested-info" />
              <div className="archive-status">
                <span className="archive-item-label">ARCHIVED</span>
                <span className="archive-title-info">
                  {taskArchive.date_archived}
                </span>
              </div>
            </div>
          </div>
          <div className="restore-archived">
            <button className="restore-btn">
              <span className="archive-item-label restore-btn-text">
                RESTORE
              </span>
            </button>
          </div>
        </li>
      )}
    </>
  );
};
export default TaskArchiveItem;
