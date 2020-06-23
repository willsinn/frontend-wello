import React, { useState } from "react";
import CardArchiveItem from "./CardArchiveItem";
import { connect } from "react-redux";
import { restoreBoard } from "../actions/archives";

const BoardArchiveItem = ({ boardArchive, dispatch, archiveType }) => {
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
  const handleBoardRestore = (e) => {
    if (e) {
      dispatch(restoreBoard(boardArchive));
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
            <div className="render-nested-info">
              {boardArchive.cards.length > 0 ? (
                <span className="archive-item-label">
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
                  CARDS
                </span>
              ) : null}
            </div>
            <div className="archive-status">
              <span className="archive-item-label">ARCHIVED</span>
              <span className="archive-title-info">
                {boardArchive.date_archived}
              </span>
            </div>
          </div>
        </div>
        <div className="restore-archived">
          <button
            className="restore-btn"
            onClick={(e) => handleBoardRestore(e)}
          >
            <span className="archive-item-label restore-btn-text">RESTORE</span>
          </button>
        </div>
      </li>
      {boardArchive.cards.length > 0 && render ? (
        <ul className="archive-item-nested-list">{renderBoardCards()}</ul>
      ) : null}
    </>
  );
};
export default connect()(BoardArchiveItem);
