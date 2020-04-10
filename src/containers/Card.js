import React, { useState } from "react";
import TaskList from "../components/TaskList";
import CardMenu from "./CardMenu";
import { connect } from "react-redux";

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
              <CardMenu handleCloseCardMenu={handleCloseCardMenu} />
            ) : null}
          </div>
          <TaskList card={card} />
        </div>
      </div>
    </div>
  );
};

export default Card;
