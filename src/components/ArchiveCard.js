import React, { useState } from "react";

const ArchiveCard = ({ cardArchive }) => {
  const [render, setRender] = useState(false);
  //   const handleRenderClick = (e) => {
  //     if (e) {
  //       setRender(!render);
  //     }
  //   };
  return (
    <div className="archive-item-content straight-row-content">
      <div className="straight-row-content a-left">
        <span className="archive-item-info">Card</span>
        <span className="archive-item-info archive-title-text">{`${cardArchive.goal}`}</span>
        {cardArchive.task.length > 0 ? (
          <div className="straight-row-content a-left">
            {render ? (
              <div className="dropdown-btn">
                <span
                  className="open-info-btn"
                  onClick={(e) => setRender(!render)}
                >
                  ⌃
                </span>
              </div>
            ) : (
              <div className="dropdown-btn">
                <span
                  className="render-action"
                  onClick={(e) => setRender(!render)}
                >
                  ⌃
                </span>
              </div>
            )}
            <span className="archive-item-info">tasks</span>
          </div>
        ) : null}
      </div>

      <div className="straight-row-content a-right">
        <span className="archive-title-info">{cardArchive.date_archived}</span>
        <div className="restore-archived">
          <button>
            <span className="restore-btn-text">restore</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ArchiveCard;
