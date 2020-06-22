import React, { useState } from "react";
import TaskArchiveItem from "./TaskArchiveItem";

const CardArchiveItem = ({ cardArchive, archiveType }) => {
  const [renderT, setRenderT] = useState(false);
  const renderCardTasks = () => {
    if (cardArchive.tasks && cardArchive.tasks.length > 0) {
      return cardArchive.tasks.map((task) => (
        <TaskArchiveItem
          key={`task-${task.id}`}
          archiveType={"nested"}
          taskArchive={task}
        />
      ));
    }
  };
  console.log(cardArchive, archiveType);

  return (
    <>
      <li className="archives-list-item">
        <div className="archive-item-content straight-row-content">
          <div className="full-archive">
            <div className="main-archive">
              <span className="archive-item-label">CARD</span>
              <span className="archive-title-text archive-item-info">{`${cardArchive.goal}`}</span>
            </div>
            <div className="render-nested-info">
              {cardArchive.tasks.length > 0 ? (
                <span className="archive-item-label">
                  {renderT ? (
                    <button
                      className="closed-info-btn"
                      onClick={(e) => setRenderT(!renderT)}
                    >
                      <span className="action-dropdown-icon">⌃</span>
                    </button>
                  ) : (
                    <button
                      className="closed-info-btn"
                      onClick={(e) => setRenderT(!renderT)}
                    >
                      <span className="action-dropdown-icon">⌃</span>
                    </button>
                  )}
                  TASKS
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
        </div>
        {archiveType === "nested" ? null : (
          <div className="restore-archived">
            <button className="restore-btn">
              <span className="archive-item-label restore-btn-text">
                RESTORE
              </span>
            </button>
          </div>
        )}
      </li>
      {cardArchive.tasks && renderT ? (
        <div className="archive-item-nested-list">
          <ul className="archive-list">{renderCardTasks()}</ul>
        </div>
      ) : null}
    </>
  );
};
export default CardArchiveItem;
