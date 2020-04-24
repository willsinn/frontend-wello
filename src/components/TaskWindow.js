import React, { useState } from "react";
import TaskWindowDescription from "./TaskWindowDescription";
import TaskChecklist from "./TaskChecklist";
import AddChecklist from "./AddChecklist";
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
  const [sidebtn, setSidebtn] = useState("");

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
  console.log(sidebtn);

  return (
    <div className="window-modal">
      <div className="task-window">
        <div className="close-task-window" onClick={(e) => handleCloseWindow()}>
          ✕
        </div>
        <div className="task-detail-window">
          <div className="task-window-header">
            <div>
              {task.id === undefined ? (
                <h1
                  className="card-text"
                  style={{
                    fontSize: "1.70em",
                    minHeight: "28px",
                    height: "28px",
                    margin: "0",
                  }}
                  onClick={(e) => handleNoteEdit()}
                >
                  {editTask.note}
                </h1>
              ) : (
                <form className="edit-note-form" onSubmit={handleSubmit}>
                  <input
                    className="edit-input"
                    style={{ fontSize: "1.7em" }}
                    type="text"
                    name="note"
                    onChange={handleChange}
                    value={note}
                    required
                  />
                </form>
              )}
            </div>
            <div className="task-window-text">
              <span>in list </span>
              <span className="task-window-list-name">{cardGoal}</span>
            </div>
          </div>
          <div className="task-window-body" onClick={handleSave}>
            <div className="body-right-window">
              <TaskWindowDescription task={editTask} />
              <TaskChecklist task={editTask} />
            </div>
            <div className="task-window-sidebar">
              <h3 className="sidebar-title">add to task</h3>

              {sidebtn === "label" ? (
                <div className="side-popover">
                  <div className="no-back">
                    <div className="side-popover-header">
                      <span className="side-popover-header-title">
                        Add Checklist
                      </span>
                      <button
                        onClick={(e) => setSidebtn("")}
                        className="side-close-btn"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="side-popover-body">
                      <AddChecklist />
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="sidebar-btn" onClick={(e) => setSidebtn("label")}>
                Labels
              </div>

              <div
                className="sidebar-btn"
                onClick={(e) => setSidebtn("checklist")}
              >
                Checklist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect()(TaskWindow);
