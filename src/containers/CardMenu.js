import React from "react";
import { connect } from "react-redux";
import { archiveCard } from "../actions/workspace";
import { getCurrentDate } from "../utils";

const CardMenu = ({ card, handleCloseCardMenu, dispatch }) => {
  const handleAddFirstClick = (e) => {
    if (e) {
      dispatch(archiveCard({ card, date_archived: getCurrentDate() }));
      handleCloseCardMenu(e);
    }
  };
  return (
    <div className="card-menu-modal">
      <div className="dropdown-title" style={{ margin: "0" }}>
        <div className="dropdown-label">List Actions</div>
        <div className="dropdown-title-close">
          <button>
            <span
              onClick={(e) => handleCloseCardMenu(e)}
              className="dropdown-title-close-btn"
            >
              ×
            </span>
          </button>
        </div>
        <hr />
        <div className="option-item">
          <button
            onClick={(e) => handleAddFirstClick(e)}
            className="option-title js-member-cards"
            data-tab="cards"
          >
            <span>Archive List...</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default connect()(CardMenu);
