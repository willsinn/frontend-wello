import React, { useState } from "react";
import LabelsList from "./LabelsList";
import QuickTaskEditor from "../components/QuickTaskEditor";

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
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="task-item task-item-details"
      onMouseEnter={(e) => setVisible(true)}
      onMouseLeave={(e) => setVisible(false)}
      style={editor !== task.id ? { zIndex: "0" } : { zIndex: "1" }}
    >
      {editor && !window && editTask.id === task.id ? (
        <div className="quick-task-editor" />
      ) : null}
      <div
        className="quick-task-editor-wrapper"
        style={editor !== task.id ? { zIndex: "0" } : { zIndex: "100" }}
      >
        {editor === task.id ? (
          <>
            <div
              className="close-quick-editor-icon"
              onClick={(e) => handleCloseQuickEditor()}
            >
              ✕
            </div>
            <div className="quick-edit-cont">
              <QuickTaskEditor
                editor={editor}
                editTask={editTask}
                handleCloseQuickEditor={handleCloseQuickEditor}
              />
            </div>
          </>
        ) : null}
      </div>
      <div className="task-item-note">
        <LabelsList tLabels={labels} taskedLabels={taskLabels} tId={task.id} />
        <div
          className="open-task-window"
          onClick={(e) => handleRenderTaskWindow(e, task)}
          style={todos === 0 ? { margin: "0" } : {}}
        >
          {task.note}
          <div
            className="todo-tracker"
            style={
              todos === 0
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
            onClick={(e) => handleRenderQuickEditor(e, task)}
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
