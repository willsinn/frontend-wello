import React from "react";
import { connect } from "react-redux";
import { archiveCard } from "../actions/workspace";

const CardMenu = ({ card, handleCloseCardMenu, dispatch }) => {
  return (
    <div className="card-menu-modal">
      <div className="modal-header title">
        <div className="modal-header label">List Actions</div>
        <div className="modal-header close">
          <button>
            <span onClick={e => handleCloseCardMenu(e)}>×</span>
          </button>
        </div>
      </div>
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
            onClick={e => archiveCard(card)}
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
