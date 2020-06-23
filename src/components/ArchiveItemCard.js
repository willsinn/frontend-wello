import React, { useState } from "react";
import ArchiveItemTask from "./ArchiveItemTask";
import { connect } from "react-redux";
import { restoreCard } from "../actions/archives";

const ArchiveItemCard = ({ cardArchive, dispatch, archiveType }) => {
  const [renderT, setRenderT] = useState(false);
  const renderCardTasks = () => {
    if (cardArchive.tasks && cardArchive.tasks.length > 0) {
      const lastTask = cardArchive.tasks[cardArchive.tasks.length - 1];
      return cardArchive.tasks.map((task) => (
        <ArchiveItemTask
          key={`task-${task.id}`}
          lastTaskId={lastTask.id}
          archiveType={"nested"}
          taskArchive={task}
        />
      ));
    }
  };
  const handleCardRestore = (e) => {
    if (e) {
      dispatch(restoreCard(cardArchive));
    }
  };
  return (
    <>
      <li className="archives-list-item">
        <div className="archive-item-content straight-row-content">
          <div className="full-archive">
            <div className="nested-posi main-archive">
              {archiveType === "nested" ? null : (
                <span className="archive-item-label">CARD</span>
              )}
              <span className="archive-title-text archive-item-info">{`${cardArchive.goal}`}</span>
            </div>
            <div className="nested-posi render-nested-info">
              {cardArchive.tasks.length > 0 ? (
                <span className="archive-item-label">
                  {renderT ? (
                    <button
                      className="render-active render-tasks-btn"
                      onClick={(e) => setRenderT(!renderT)}
                    >
                      <span className="action-dropdown-icon">⌃</span>
                    </button>
                  ) : (
                    <button
                      className="render-tasks-btn"
                      onClick={(e) => setRenderT(!renderT)}
                    >
                      <span className="action-dropdown-icon">⌃</span>
                    </button>
                  )}
                  TASKS
                  {renderT ? (
                    <button
                      className="render-active render-tasks-btn"
                      onClick={(e) => setRenderT(!renderT)}
                    >
                      <span className="action-dropdown-icon">⌃</span>
                    </button>
                  ) : null}
                </span>
              ) : null}
            </div>
            {archiveType === "nested" ? null : (
              <div className="archive-status">
                <span className="archive-item-label">ARCHIVED</span>
                <span className="archive-title-info">
                  {cardArchive.date_archived}
                </span>
              </div>
            )}
          </div>
          {cardArchive.tasks && renderT ? (
            <ul className="card-nested-tasks">{renderCardTasks()}</ul>
          ) : null}
        </div>

        {archiveType === "nested" ? null : (
          <div className="restore-archived">
            <button
              className="restore-btn"
              onClick={(e) => handleCardRestore(e)}
            >
              <span className="archive-item-label restore-btn-text">
                RESTORE
              </span>
            </button>
          </div>
        )}
      </li>
    </>
  );
};
export default connect()(ArchiveItemCard);
