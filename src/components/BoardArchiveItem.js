import React, { useState } from "react";
import CardArchiveItem from "./CardArchiveItem";

const BoardArchiveItem = ({ boardArchive, archiveType }) => {
  const [render, setRender] = useState(false);
  const renderBoardCards = () => {
    if (boardArchive.cards && boardArchive.cards.length > 0) {
      return boardArchive.cards.map((card) => (
        <CardArchiveItem
          key={`card-${card.id}`}
          archiveType={"nested"}
          cardArchive={card}
        />
      ));
    }
  };
  return (
    <>
      <li className="archives-list-item">
        <div className="archive-item-content straight-row-content">
          <div className="full-archive">
            <div className="main-archive">
              <span className="archive-item-label">BOARD</span>
              <span className="archive-title-text archive-item-info">{`${boardArchive.title}`}</span>
            </div>
            {boardArchive.cards.length > 0 ? (
              <div className="render-nested-info">
                {render ? (
                  <button
                    className="closed-info-btn"
                    onClick={(e) => setRender(!render)}
                  >
                    <span className="action-dropdown-icon">⌃</span>
                  </button>
                ) : (
                  <button
                    className="open-info-btn"
                    onClick={(e) => setRender(!render)}
                  >
                    <span className="action-dropdown-icon">⌃</span>
                  </button>
                )}
                <span className="archive-item-label">CARDS</span>
              </div>
            ) : null}
          </div>
          <div className="archived-status">
            <span className="archive-item-label">ARCHIVED</span>
            <span className="archive-title-info">
              {boardArchive.date_archived}
            </span>
          </div>
          <div className="restore-archived">
            <button>
              <span className="archive-item-label restore-btn-text">
                RESTORE
              </span>
            </button>
          </div>
        </div>
      </li>
      {boardArchive.cards && render ? (
        <div className="archive-item-nested-list">
          <ul className="archive-list">{renderBoardCards()}</ul>
        </div>
      ) : null}
    </>
  );
};
export default BoardArchiveItem;
