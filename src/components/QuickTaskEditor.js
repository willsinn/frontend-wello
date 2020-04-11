import React, { useState } from "react";

const initialState = { note: "" };
const QuickTaskEditor = ({ editNote, closeQuickEditor }) => {
  const [note, setNote] = useState(editNote);
  const clearState = e => {
    setNote({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleChange = e => {
    e.persist();
    setNote(e.target.value);
  };
  const handleSubmitTask = e => {
    if (e) {
      e.preventDefault();
      clearState(e);
    }
  };
  console.log(note);
  return (
    <div className="quick-task-editor">
      <div className="quick-edit-task">
        <div className="quick-edit-details">
          <form onSubmit={handleSubmitTask}>
            <textarea
              dir="auto"
              style={{
                overflow: "hidden",
                overflowWrap: "break-word",
                resize: "none",
                height: "90px"
              }}
              className="quick-edit-textarea"
              type="text"
              name="note"
              onChange={handleChange}
              value={note}
              required
            />
            <button className="save-task-note" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="quick-task-editor-buttons">
        <button>Hi</button>
        <button>Hi</button>
        <button>Hi</button>
        <button>Hi</button>
        <button>Hi</button>
      </div>
    </div>
  );
};

export default QuickTaskEditor;
