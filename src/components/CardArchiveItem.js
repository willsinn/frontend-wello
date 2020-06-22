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
      {archiveType === "nested" ? (
        <li className="archives-list-item">
          <div className="archive-item-content straight-row-content">
            <div className="full-archive">
              <div className="main-archive">
                <span className="archive-item-label">CARD</span>
                <span className="archive-item-info archive-title-text">{`${cardArchive.goal}`}</span>
              </div>
              <span className="action-dropdown-icon">TASKS</span>
            </div>
          </div>
        </li>
      ) : (
        <>
          <li className="archives-list-item">
            <div className="archive-item-content straight-row-content">
              <div className="full-archive">
                <div className="main-archive">
                  <span className="archive-item-label">BOARD</span>
                  <span className="archive-title-text archive-item-info">{`${cardArchive.goal}`}</span>
                </div>
                {cardArchive.tasks.length > 0 ? (
                  <div className="render-nested-info">
                    {renderT ? (
                      <button
                        className="closed-info-btn"
                        onClick={(e) => setRenderT(!renderT)}
                      >
                        <span className="open-info-btn">⌃</span>
                      </button>
                    ) : (
                      <button
                        className="closed-info-btn"
                        onClick={(e) => setRenderT(!renderT)}
                      >
                        <span className="render-action">⌃</span>
                      </button>
                    )}
                    <span className="archive-item-label">TASKS</span>
                  </div>
                ) : null}
              </div>

              <div className="archive-status">
                <span className="archive-item-label">ARCHIVED</span>
                <span className="archive-title-info">
                  {cardArchive.date_archived}
                </span>
              </div>
            </div>
            <div className="restore-archived">
              <button>
                <span className="archive-item-label restore-btn-text">
                  RESTORE
                </span>
              </button>
            </div>
          </li>
          {cardArchive.tasks && renderT ? (
            <div className="archive-item-nested-list">
              <ul className="archive-list">{renderCardTasks()}</ul>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};
export default CardArchiveItem;
