import React, { useState } from "react";
import { archiveTask, updateTaskNote } from "../actions/workspace";
import { connect } from "react-redux";
import LabelMenu from "../containers/LabelMenu";

const initialState = { note: "" };
const QuickTaskEditor = ({ editTask, handleCloseQuickEditor, dispatch }) => {
  const [renderMenu, setRenderMenu] = useState(false);
  const [note, setNote] = useState(editTask.note);
  const clearState = (e) => {
    setNote({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleChange = (e) => {
    e.persist();
    setNote(e.target.value);
  };
  const handleSubmitTask = (e) => {
    if (e) {
      dispatch(updateTaskNote(editTask, note));
      e.preventDefault();
      clearState(e);
      handleCloseQuickEditor(e);
    }
  };
  const closePopup = () => {
    setRenderMenu(false);
  };
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
              height: "90px",
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
        <div style={{ position: "absolute", top: "32px", right: "-224px" }}>
          {renderMenu ? (
            <LabelMenu closePopup={closePopup} taskId={editTask.id} />
          ) : null}
        </div>

        <button
          className="quick-task-edit-btn"
          onClick={(e) => setRenderMenu(true)}
        >
          Edit Label
        </button>
        <button
          onClick={(e) =>
            dispatch(archiveTask(editTask, () => handleCloseQuickEditor(e)))
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
