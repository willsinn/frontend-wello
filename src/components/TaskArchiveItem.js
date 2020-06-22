import React from "react";
import { connect } from "react-redux";
import { restoreTask } from "../actions/archives";

const TaskArchiveItem = ({
  taskArchive,
  lastTaskId,
  archiveType,
  dispatch,
}) => {
  const renderNestedTasks = () => {
    return (
      <span className="archive-title-text archive-item-info">
        {`${taskArchive.note}`}
      </span>
    );
  };
  const handleTaskRestore = (e) => {
    if (e) {
      dispatch(restoreTask(taskArchive));
    }
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
            <button
              className="restore-btn"
              onClick={(e) => handleTaskRestore(e)}
            >
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
export default connect()(TaskArchiveItem);
