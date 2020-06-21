import React, { useState } from "react";

const CardArchiveItem = ({ cardArchive }) => {
  const [renderT, setRenderT] = useState(false);

  return (
    <>
      {cardArchive.archived ? (
        <div className="archive-item-content straight-row-content">
          <div className="straight-row-content a-left">
            <span className="archive-item-info">Card</span>
            <span className="archive-item-info archive-title-text">{`${cardArchive.goal}`}</span>
            <div className="straight-row-content a-left">
              {cardArchive.tasks.length > 0 ? (
                <div>
                  <button
                    className="dropdown-btn"
                    onClick={(e) => setRenderT(!renderT)}
                  >
                    {renderT ? (
                      <span className="open-info-btn">⌃</span>
                    ) : (
                      <span className="render-action">hihi</span>
                    )}
                  </button>
                  <span className="archive-item-info">tasks</span>
                </div>
              ) : null}
            </div>
          </div>

          <div className="straight-row-content a-right">
            <span className="archive-title-info">
              {cardArchive.date_archived}
            </span>
            <div className="restore-archived">
              <button>
                <span className="restore-btn-text">restore</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>hihi in unarchived</div>
      )}
    </>
  );
};
export default CardArchiveItem;
