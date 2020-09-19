import React, { useState } from "react";
import TaskWindowDescription from "../components/TaskWindowDescription";
import TaskChecklists from "../components/TaskChecklists";
import AddChecklist from "../components/AddChecklist";
import LabelMenu from "./LabelMenu";
import LabelsList from "./LabelsList";
import { updateTaskNote } from "../actions/workspace";
import { connect } from "react-redux";

const initialState = { note: "" };

const TaskWindow = ({
  cardGoal,
  editTask,
  taskLabels,
  labels,
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
  const closePopup = () => {
    setSidebtn("");
  };
  const openLabelMenu = () => {
    setSidebtn("labels");
  };
  return (
    <div className="window-modal">
      <div className="task-window-wrap">
        <div className="task-window">
          <div
            className="close-task-window"
            onClick={(e) => handleCloseWindow()}
          >
            ✕
          </div>
          <div className="task-detail-window">
            <div className="task-window-header">
              <span className="task-window-icon" />
              <div>
                {task.id === undefined ? (
                  <h1
                    className="card-text"
                    onClick={(e) => handleNoteEdit()}
                    style={{ margin: "0 0 8px 0" }}
                  >
                    {editTask.note}
                  </h1>
                ) : (
                  <form className="edit-note-form" onSubmit={handleSubmit}>
                    <textarea
                      className="card-text edit-textarea"
                      style={{ margin: "0 0 8px 0" }}
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
            <LabelsList
              winLabels={labels}
              windowLabels={taskLabels}
              windowId={editTask.id}
              openLabelMenu={openLabelMenu}
            />
            <div className="task-window-body" onClick={handleSave}>
              <div className="body-left-window">
                <TaskWindowDescription editTask={editTask} />
                <TaskChecklists taskId={editTask.id} />
              </div>

              <div className="task-window-sidebar">
                <h3 className="sidebar-title">add to task</h3>

                <div
                  className="sidebar-btn"
                  onClick={(e) => setSidebtn("labels")}
                >
                  Labels
                </div>
                {sidebtn === "labels" ? (
                  <div
                    style={{
                      position: "fixed",
                      top: "35%",
                      left: "55%",
                      zIndex: "1",
                    }}
                  >
                    <LabelMenu closePopup={closePopup} taskId={editTask.id} />
                  </div>
                ) : null}

                {sidebtn === "checklist" ? (
                  <div
                    style={{
                      position: "fixed",
                      top: "48%",
                      left: "55%",
                      zIndex: "1",
                    }}
                  >
                    <AddChecklist task={editTask} closePopup={closePopup} />
                  </div>
                ) : null}
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    labels: state.labelsReducer.labels,
    taskLabels: state.labelsReducer.taskLabels,
  };
};
export default connect(mapStateToProps)(TaskWindow);
