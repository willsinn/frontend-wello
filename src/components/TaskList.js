import React, { useState } from "react";
import Task from "../containers/Task";
import AddTask from "../components/AddTask";
import QuickTaskEditor from "../components/QuickTaskEditor";

const TaskList = ({ card }) => {
  const [addTask, setAddTask] = useState(false);
  const [editor, setEditor] = useState(false);
  const [editTask, setEditTask] = useState({});

  const closeQuickEditor = (e) => {
    setEditor(false);
    setEditTask({});
  };
  const renderQuickEditor = (e, task) => {
    setEditTask(task);
    setEditor(true);
  };
  const handleCloseTaskForm = (e) => {
    setAddTask(false);
  };
  const renderTasks = () => {
    if (card && card.tasks && card.tasks.length > 0) {
      return card.tasks.map((task) => {
        if (!task.archived) {
          return (
            <Task
              key={task.id}
              task={task}
              card={card.id}
              editor={editor}
              renderQuickEditor={renderQuickEditor}
            />
          );
        } else {
          return null;
        }
      });
    }
  };
  return (
    <div className="task-list">
      {editor ? (
        <div className="quick-task-editor-wrapper">
          <div
            className="close-quick-editor-icon"
            onClick={(e) => closeQuickEditor(e)}
          >
            ✕
          </div>
          <QuickTaskEditor
            editTask={editTask}
            closeQuickEditor={closeQuickEditor}
          />
        </div>
      ) : null}

      {renderTasks()}
      {!addTask ? (
        <div className="task-composer" onClick={(e) => setAddTask(true)}>
          <span className="open-task-composer">
            <span
              style={{
                fontSize: "22px",
                fontWeight: "300",
                padding: "0 4px",
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
