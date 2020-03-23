import React from "react";
import Task from "./Task";

const TaskList = props => {
  return (
    <div className="task-list">
      List Here: --->
      <Task card={props.card} />
    </div>
  );
};

export default TaskList;
