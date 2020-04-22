import React, { useState } from "react";
import TaskWindowDescription from "./TaskWindowDescription";
import { updateTaskNote } from "../actions/workspace";
import { connect } from "react-redux";

const initialState = { note: "" };

const TaskWindow = ({
  cardGoal,
  editTask,
  handleCloseWindow,
  handleUpdateEditTask,
  dispatch,
}) => {
  const [task, setTask] = useState({});
  const [note, setNote] = useState(initialState);

  const handleNoteEdit = () => {
    setTask(editTask);
    setNote(editTask.note);
  };
  const clearState = (e) => {
    setNote({ ...initialState });
    setTask({});
  };
  const handleChange = (e) => {
    e.persist();
    setNote(e.target.value);
  };
  const handleSave = () => {
    if (editTask.note === note || task.id === undefined) {
      clearState();
    } else {
      handleUpdateEditTask(note);
      dispatch(updateTaskNote(task, note));
      clearState();
    }
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      handleUpdateEditTask(note);
      dispatch(updateTaskNote(task, note));
      clearState(e);
    }
  };
  return (
    <div className="window-modal">
      <div className="task-window">
        <div className="close-task-window" onClick={(e) => handleCloseWindow()}>
          ✕
        </div>
        <div className="task-detail-window">
          <div className="task-window-header">
            {task.id === undefined ? (
              <h1 className="card-text" onClick={(e) => handleNoteEdit()}>
                {editTask.note}
              </h1>
            ) : (
              <form className="edit-note-form" onSubmit={handleSubmit}>
                <input
                  className="edit-input"
                  type="text"
                  name="note"
                  onChange={handleChange}
                  value={note}
                  required
                />
              </form>
            )}
            <div className="task-window-text">
              <span>in list </span>
              <span className="task-window-list-name">{cardGoal}</span>
            </div>
          </div>
          <div className="task-window-body" onClick={handleSave}>
            <TaskWindowDescription />
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect()(TaskWindow);
