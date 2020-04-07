import React, { useState } from "react";
import TaskList from "../components/TaskList";
import QuickTaskEditor from "../components/QuickTaskEditor";

const Card = ({
  card,
  workspace,
  cardMenu,
  actionCard,
  handleCloseCardMenu,
  handleOpenCardMenu
}) => {
  const [editor, setEditor] = useState(false);
  const [editNote, setEditNote] = useState("");

  const closeQuickEditor = e => {
    setEditor(false);
    setEditNote("");
  };
  const renderQuickEditor = (e, taskNote) => {
    setEditNote(`${taskNote}`);
    setEditor(true);
  };
  // console.log(cardMenu, actionCard);
  return (
    <div className="card-item-wrap">
      <div className="card-item">
        {editor ? (
          <QuickTaskEditor
            editNote={editNote}
            closeQuickEditor={closeQuickEditor}
          />
        ) : null}
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
              <div className="card-menu-popup">Hi This is the card menu</div>
            ) : null}
          </div>
          <TaskList card={card} renderQuickEditor={renderQuickEditor} />
        </div>
      </div>
    </div>
  );
};

export default Card;
