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
              <div className="card-menu-modal">
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
          <TaskList card={card} renderQuickEditor={renderQuickEditor} />
        </div>
      </div>
    </div>
  );
};

export default Card;
