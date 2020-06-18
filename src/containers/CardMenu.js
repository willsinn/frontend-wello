import React from "react";
import { connect } from "react-redux";
import { archiveCard } from "../actions/workspace";

const CardMenu = ({ card, handleCloseCardMenu, dispatch }) => {
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
      </div>
      <hr style={{ marginTop: "0" }} />
      <ul>
        <li className="option-item">
          <button className="option-title js-member-profile" data-tab="profile">
            <span>Add Card...</span>
          </button>
        </li>
        <li className="option-item">
          <button
            className="option-title js-member-activity active"
            data-tab="cards"
          >
            <span>Copy List...</span>
          </button>
        </li>
        <li className="option-item">
          <button
            onClick={(e) => dispatch(archiveCard(card))}
            className="option-title js-member-cards"
            data-tab="cards"
          >
            <span>Archive List...</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default connect()(CardMenu);
