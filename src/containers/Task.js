import React, { useState } from "react";
import LabelsList from "./LabelsList";
import { connect } from "react-redux";

const Task = ({
  task,
  labels,
  taskLabels,
  handleRenderTaskWindow,
  handleRenderQuickEditor,
  todos,
  finishedTodos,
}) => {
  const [visible, setVisible] = useState(false);
  console.log(todos, finishedTodos);
  return (
    <div
      className="task-item task-item-details"
      onMouseEnter={(e) => setVisible(true)}
      onMouseLeave={(e) => setVisible(false)}
    >
      <div className="task-item-note">
        <LabelsList tLabels={labels} taskedLabels={taskLabels} tId={task.id} />
        <div
          className="open-task-window"
          onClick={(e) => handleRenderTaskWindow(task)}
        >
          {task.note}
          <div
            className="todo-tracker"
            style={{
              backgroundColor:
                finishedTodos === todos && todos !== 0
                  ? "#61bd4f"
                  : "transparent",
            }}
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
