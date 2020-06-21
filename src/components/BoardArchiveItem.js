import React, { useState } from "react";
import CardArchiveItem from "./CardArchiveItem";

const BoardArchiveItem = ({ boardArchive }) => {
  const [render, setRender] = useState(false);
  const renderBoardCards = () => {
    if (boardArchive.cards && boardArchive.cards.length > 0) {
      return boardArchive.cards.map((card) => (
        <CardArchiveItem key={`board-card-${card.id}`} cardArchive={card} />
      ));
    }
  };
  return (
    <div className="archive-item-content straight-row-content">
      <div className="straight-row-content a-left">
        <span className="archive-item-info">Board</span>
        <span className="archive-item-info archive-title-text">{`${boardArchive.title}`}</span>
        <div className="straight-row-content a-left">
          {boardArchive.cards.length > 0 ? (
            <div>
              <button
                className="action-dropdown-btn"
                onClick={(e) => setRender(!render)}
              >
                {render ? (
                  <span className="open-info-btn">⌃</span>
                ) : (
                  <span className="open-info-btn">hihi</span>
                )}
              </button>
              <span className="archive-item-info">cards</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="straight-row-content a-right">
        <span>Archived: </span>
        <span className="archive-title-info">{boardArchive.date_archived}</span>
        <div className="restore-archived">
          <button>
            <span className="restore-btn-text">restore</span>
          </button>
        </div>
      </div>
      <div className="archive-item-nested-list">
        {render ? renderBoardCards() : null}
      </div>
    </div>
  );
};
export default BoardArchiveItem;
