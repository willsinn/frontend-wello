import React, { useState } from "react";
import Task from "../containers/Task";
import AddTask from "../components/AddTask";

const TaskList = ({ card, editNote, closeQuickEditor, renderQuickEditor }) => {
  const [addTask, setAddTask] = useState(false);
  const handleCloseTaskForm = e => {
    setAddTask(false);
  };
  const renderTasks = () => {
    if (card.tasks.length > 0) {
      return card.tasks.map(task => {
        return (
          <Task
            key={task.id}
            task={task}
            card={card.id}
            renderQuickEditor={renderQuickEditor}
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
        <AddTask handleCloseTaskForm={handleCloseTaskForm} card={card} />
      )}
    </div>
  );
};

export default TaskList;
