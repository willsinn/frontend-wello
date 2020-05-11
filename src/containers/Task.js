import React, { useState } from "react";
import LabelsList from "./LabelsList";
import { connect } from "react-redux";

const Task = ({
  task,
  labels,
  taskLabels,
  handleRenderTaskWindow,
  handleRenderQuickEditor,
}) => {
  const [visible, setVisible] = useState(false);

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
