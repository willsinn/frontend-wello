import React from "react";
import Task from "../containers/Task";

const TaskList = props => {
  const renderTasks = () => {
    if (props.card.tasks.length > 0) {
      return props.card.tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            card={props.card.id}
            renderQuickEditor={props.renderQuickEditor}
          />
        );
      });
    }
  };
  console.log(props.card);
  return (
    <div className="task-list">
      List Here: --->
      {renderTasks()}
    </div>
  );
};

export default TaskList;
