import React, { useState } from "react";
import { updateTaskNote } from "../actions/workspace";
import { connect } from "react-redux";

const initialState = { note: "" };

const TaskWindow = ({
  editTask,
  handleCloseWindow,
  handleUpdateEditTask,
  dispatch,
}) => {
  const [task, setTask] = useState({});
  const [note, setNote] = useState(initialState);
  const handleCloseEdit = () => {
    setTask({});
    setNote("");
  };
  const handleNoteEdit = () => {
    setTask(editTask);
    setNote(editTask.note);
  };
  const clearState = (e) => {
    setNote({ ...initialState });
    setTask({});
    e.target.firstElementChild.value = "";
  };
  const handleChange = (e) => {
    e.persist();
    setNote(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(updateTaskNote(task, note));
      clearState(e);
    }
  };
  console.log(task, note, editTask.note);

  return (
    <div className="window-modal">
      <div className="task-window">
        <div className="close-task-window" onClick={(e) => handleCloseWindow()}>
          ✕
        </div>
        <div className="task-detail-window">
          <div className="task-window-header">{editTask.note}</div>
          {task.id === undefined ? (
            <h2 className="card-text" onClick={(e) => handleNoteEdit()}>
              {editTask.note}
            </h2>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                className="edit-card-input"
                type="text"
                name="note"
                onChange={handleChange}
                value={note}
                required
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default connect()(TaskWindow);
