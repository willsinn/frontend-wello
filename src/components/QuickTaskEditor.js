import React, { useState } from "react";
import { archiveTask, updateTaskNote } from "../actions/workspace";
import { getCurrentDate } from "../utils";
import { connect } from "react-redux";
import LabelMenu from "../containers/LabelMenu";

const initialState = { note: "" };
const QuickTaskEditor = ({
  editor,
  editTask,
  handleCloseQuickEditor,
  dispatch,
}) => {
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
      <div className="task-details">
        <form
          onSubmit={handleSubmitTask}
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            overflowWrap: "anywhere",
            minHeight: "90px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <textarea
            style={{
              overflowWrap: "anywhere",
              height: "100%",
              minHeight: "90px",
              display: "flex",
              flexWrap: "wrap",
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
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: "32px", right: "-224px" }}>
          {renderMenu ? (
            <LabelMenu
              closePopup={closePopup}
              taskId={editTask.id}
              absLabel={"absLabel"}
            />
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
            dispatch(
              archiveTask(
                { id: editTask.id, date_archived: getCurrentDate() },
                () => handleCloseQuickEditor(e)
              )
            )
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
