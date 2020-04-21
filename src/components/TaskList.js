import React, { useState } from "react";
import Task from "../containers/Task";
import AddTask from "../components/AddTask";
import TaskWindow from "../components/TaskWindow";
import QuickTaskEditor from "../components/QuickTaskEditor";

const TaskList = ({ card }) => {
  const [addTask, setAddTask] = useState(false);
  const [editor, setEditor] = useState(false);
  const [window, setWindow] = useState(false);
  const [editTask, setEditTask] = useState({});
  const handleUpdateEditTask = (note) => {
    setEditTask({ ...editTask, note });
  };
  const handleRenderQuickEditor = (task) => {
    setEditTask(task);
    setEditor(true);
  };
  const handleCloseQuickEditor = () => {
    setEditTask({});
    setEditor(false);
  };
  const handleRenderTaskWindow = (task) => {
    setEditTask(task);
    setWindow(true);
  };
  const handleCloseWindow = () => {
    setEditTask({});
    setWindow(false);
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
              handleRenderTaskWindow={handleRenderTaskWindow}
              handleRenderQuickEditor={handleRenderQuickEditor}
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
      {editor && !window ? <div className="quick-task-editor" /> : null}

      {editor && !window ? (
        <div className="quick-task-editor-wrapper">
          <div
            className="close-quick-editor-icon"
            onClick={(e) => handleCloseQuickEditor()}
          >
            ✕
          </div>
          <QuickTaskEditor
            editTask={editTask}
            handleCloseQuickEditor={handleCloseQuickEditor}
          />
        </div>
      ) : null}

      {window && !editor ? (
        <TaskWindow
          editTask={editTask}
          handleCloseWindow={handleCloseWindow}
          handleUpdateEditTask={handleUpdateEditTask}
        />
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
