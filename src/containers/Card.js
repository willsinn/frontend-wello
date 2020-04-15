import React, { useState } from "react";
import TaskList from "../components/TaskList";
import CardMenu from "./CardMenu";
import { connect } from "react-redux";

const initialState = { goal: "" };
const Card = ({
  card,
  workspace,
  cardMenu,
  actionCard,
  handleCloseCardMenu,
  handleOpenCardMenu,
  dispatch
}) => {
  const [editCard, setEditCard] = useState({});
  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <div className="card-item-content">
          <div className="card-item-header">
            <span className="edit-card-title">
              {editCard.id === undefined ? (
                <h2 className="card-text" onClick={e => setEditCard(card)}>
                  {card.goal}
                </h2>
              ) : (
                <input />
              )}
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
              <CardMenu card={card} handleCloseCardMenu={handleCloseCardMenu} />
            ) : null}
          </div>
          <TaskList card={card} />
        </div>
      </div>
    </div>
  );
};

export default Card;
