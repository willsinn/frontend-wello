import React, { useState } from "react";
import TaskArchiveItem from "./TaskArchiveItem";

const CardArchiveItem = ({ cardArchive }) => {
  const [renderT, setRenderT] = useState(false);
  const renderCardTasks = () => {
    if (cardArchive.tasks && cardArchive.tasks.length > 0) {
      return cardArchive.tasks.map((task) => (
        <TaskArchiveItem
          key={`task-${task.id}`}
          archiveType={"task"}
          taskArchive={task}
        />
      ));
    }
  };
  return (
    <>
      <li className="archives-list-item">
        <div className="archive-item-content straight-row-content">
          <div className="straight-row-content a-left">
            <span className="archive-item-label">CARD</span>
            <span className="archive-item-info archive-title-text">{`${cardArchive.goal}`}</span>
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
                <span className="archive-item-label archive-item-info">
                  TASKS
                </span>
              </div>
            ) : null}
          </div>

          <div className="straight-row-content a-right">
            <span className="archive-item-label">ARCHIVED</span>
            <span className="archive-title-info">
              {cardArchive.date_archived}
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
      {cardArchive.tasks && renderT ? (
        <div className="archive-item-nested-list">
          <ul className="archive-list">{renderCardTasks()}</ul>
        </div>
      ) : null}
    </>
  );
};
export default CardArchiveItem;
