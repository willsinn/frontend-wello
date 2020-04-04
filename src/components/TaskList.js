import React, { useState } from "react";
import Task from "../containers/Task";
import AddTask from "../components/AddTask";

const TaskList = props => {
  const [addTask, setAddTask] = useState(false);
  const handleCloseTaskForm = e => {
    setAddTask(false);
  };
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
  return (
    <div className="task-list">
      {renderTasks()}
      {!addTask ? (
        <div className="task-composer" onClick={e => setAddTask(true)}>
          <span className="open-task-composer">
            <span
              style={{
                fontSize: "22px",
                fontWeight: "300",
                padding: "0 4px"
              }}
            >
              +
            </span>
            Add another task
          </span>
        </div>
      ) : (
        <AddTask handleCloseTaskForm={handleCloseTaskForm} card={props.card} />
      )}
    </div>
  );
};

export default TaskList;
