import React, { useState } from "react";
import TaskList from "../components/TaskList";

const Card = ({
  card,
  workspace,
  cardMenu,
  actionCard,
  handleCloseCardMenu,
  handleOpenCardMenu
}) => {
  // console.log(cardMenu, actionCard);
  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <div className="card-item-content">
          <div className="card-item-header">
            <span className="edit-card-title">
              <h2 className="card-text">{card.goal}</h2>
            </span>

            <span
              onClick={e => handleOpenCardMenu(e, card)}
              className="card-icon"
            >
              <span
                className="icon-sm"
                style={{ position: "relative", right: "-9px", top: "1px" }}
              >
                ...
              </span>
            </span>
            {cardMenu && actionCard.id === card.id ? (
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
                    <button
                      className="option-title js-member-profile"
                      data-tab="profile"
                    >
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
                      className="option-title js-member-cards"
                      data-tab="cards"
                    >
                      <span>Archive List...</span>
                    </button>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <TaskList card={card} />
        </div>
      </div>
    </div>
  );
};

export default Card;
