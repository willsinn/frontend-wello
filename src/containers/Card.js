import React, { useState } from "react";
import TaskList from "../components/TaskList";
import QuickTaskEditor from "../components/QuickTaskEditor";

const Card = props => {
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
  console.log(props.cardMenu);
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
              <h2 className="card-text">{props.card.goal}</h2>
            </span>

            <span
              onClick={e => props.handleOpenCardMenu(e, props.card)}
              className="card-icon"
            >
              <span
                className="icon-sm"
                style={{ position: "relative", right: "-9px", top: "1px" }}
              >
                ...
              </span>
            </span>
            {props.cardMenu ? <div>Hi This is the card menu</div> : null}
          </div>
          <TaskList card={props.card} renderQuickEditor={renderQuickEditor} />
        </div>
      </div>
    </div>
  );
};

export default Card;
