import React, { useState } from "react";
import { archiveTask, updateTaskNote } from "../actions/workspace";
import { connect } from "react-redux";

const initialState = { note: "" };
const QuickTaskEditor = ({ editTask, closeQuickEditor, dispatch }) => {
  const [note, setNote] = useState(editTask.note);
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
      dispatch(updateTaskNote(editTask, note));
      e.preventDefault();
      clearState(e);
      closeQuickEditor(e);
    }
  };
  console.log(note);
  return (
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
      <div className="quick-task-editor-buttons">
        <button className="quick-task-edit-btn"> Edit Label</button>
        <button
          onClick={e =>
            dispatch(archiveTask(editTask, () => closeQuickEditor(e)))
          }
          className="quick-task-edit-btn"
        >
          Archive
        </button>
      </div>
    </div>
  );
};

export default connect()(QuickTaskEditor);
