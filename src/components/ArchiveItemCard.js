import React from "react";
import { connect } from "react-redux";
import { restoreCard } from "../actions/archives";

const ArchiveItemCard = ({ cardArchive, dispatch }) => {
  const handleCardRestore = (e) => {
    if (e) {
      dispatch(restoreCard(cardArchive));
    }
  };
  return (
    <li className="archives-list-item">
      <div className="nested-posi main-archive">
        <span className="archive-item-label">CARD:</span>
        <span className="archive-title-text archive-item-info">{`${cardArchive.goal}`}</span>
      </div>
      <div className="archive-status">
        <span className="archive-item-label">ARCHIVED:</span>
        <span className="archive-title-info">{cardArchive.date_archived}</span>
      </div>
      <div className="restore-archived">
        <button className="restore-btn" onClick={(e) => handleCardRestore(e)}>
          <span className="archive-item-label restore-btn-text">RESTORE</span>
        </button>
      </div>
    </li>
  );
};
export default connect()(ArchiveItemCard);
