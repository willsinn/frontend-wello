import React, { useState } from "react";
import LabelsList from "./LabelsList";
import QuickTaskEditor from "../components/QuickTaskEditor";
import TaskWindow from "./TaskWindow";

import { connect } from "react-redux";

const Task = ({
  task,
  labels,
  taskLabels,
  handleRenderTaskWindow,
  handleRenderQuickEditor,
  handleCloseQuickEditor,
  todos,
  editor,
  window,
  editTask,
  finishedTodos,
  handleCloseWindow,
  handleUpdateEditTask,
  card,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="task-item task-item-details"
      onMouseEnter={(e) => setVisible(true)}
      onMouseLeave={(e) => setVisible(false)}
    >
      {editor && !window && editTask.id === task.id ? (
        <div className="quick-task-editor" />
      ) : null}
      {editor && !window ? (
        <div className="quick-task-editor-wrapper">
          {editTask.id === task.id ? (
            <>
              <div
                className="close-quick-editor-icon"
                onClick={(e) => handleCloseQuickEditor()}
              >
                ✕
              </div>
              <div className="quick-edit-cont">
                <QuickTaskEditor
                  editTask={editTask}
                  handleCloseQuickEditor={handleCloseQuickEditor}
                />
              </div>
            </>
          ) : null}
        </div>
      ) : null}
      <div className="task-item-note">
        <LabelsList tLabels={labels} taskedLabels={taskLabels} tId={task.id} />
        <div
          className="open-task-window"
          onClick={(e) => handleRenderTaskWindow(task)}
        >
          {task.note}
          <div
            className="todo-tracker"
            style={
              finishedTodos === 0
                ? { display: "none" }
                : {
                    backgroundColor:
                      finishedTodos === todos ? "#61bd4f" : "transparent",
                  }
            }
          >
            <i
              className="fa fa-check-square-o todo-tracker-icon"
              aria-hidden="true"
              style={{
                color:
                  finishedTodos === todos && todos !== 0 ? "white" : "#6b778c",
              }}
            ></i>
            <div
              className="todo-tracker-num"
              style={{
                color:
                  finishedTodos === todos && todos !== 0 ? "white" : "#6b778c",
              }}
            >
              {finishedTodos}/{todos}
            </div>
          </div>
        </div>
        {visible ? (
          <span
            className="edit-task-item-btn"
            onClick={(e) => handleRenderQuickEditor(task)}
          >
            ✎
          </span>
        ) : null}
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
export default connect(mapStateToProps)(Task);
