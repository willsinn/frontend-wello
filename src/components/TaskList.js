import React, { useState } from "react";
import Task from "../containers/Task";
import AddTask from "../components/AddTask";
import QuickTaskEditor from "../components/QuickTaskEditor";

const TaskList = ({ card }) => {
  const [addTask, setAddTask] = useState(false);
  const [editor, setEditor] = useState(false);
  const [editNote, setEditNote] = useState("");

  const closeQuickEditor = e => {
    setEditor(false);
    setEditNote("");
  };
  const renderQuickEditor = (e, taskNote) => {
    setEditNote(`${taskNote}`);
    setEditor(true);
  };
  const handleCloseTaskForm = e => {
    setAddTask(false);
  };
  const renderTasks = () => {
    if (card.tasks.length > 0) {
      return card.tasks.map(task => {
        console.log(task.archived);
        if (!task.archived) {
          return (
            <Task
              key={task.id}
              task={task}
              card={card.id}
              renderQuickEditor={renderQuickEditor}
            />
          );
        } else {
          return;
        }
      });
    }
  };
  return (
    <div className="task-list">
      {editor ? (
        <QuickTaskEditor
          editNote={editNote}
          closeQuickEditor={closeQuickEditor}
        />
      ) : null}
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
