import React, { useState } from "react";

const initialState = { note: "" };
const QuickTaskEditor = props => {
  const [note, setNote] = useState(props.editNote);
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
      <span
        className="close-quick-editor-icon"
        onClick={e => props.closeQuickEditor(e)}
      >
        ✕
      </span>
      <div className="quick-edit-wrap">
        <div className="quick-edit-task">
          <div className="quick-edit-details">
            <form onSubmit={handleSubmitTask}>
              <input
                className="quick-edit-input add-card-input"
                type="text"
                name="note"
                onChange={handleChange}
                value={note}
                required
              />
              <button className="add-list-btn" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTaskEditor;
