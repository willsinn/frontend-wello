import React from "react";

const Task = props => {
  return <div className="task-item"> Card of {props.task.note}</div>;
};

export default Task;
