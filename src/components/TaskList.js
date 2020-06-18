import React, { useState } from "react";
import Task from "../containers/Task";
import AddTask from "../components/AddTask";
import TaskWindow from "../containers/TaskWindow";
import QuickTaskEditor from "../components/QuickTaskEditor";
import { connect } from "react-redux";
import { fetchChecklists } from "../actions/checklists";
import { positionNewTask } from "../actions/workspace";

const TaskList = ({ card, position, dispatch }) => {
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
    dispatch(fetchChecklists(task));
    setWindow(true);
  };
  const handleCloseWindow = () => {
    setEditTask({});
    setWindow(false);
  };

  const renderTasks = () => {
    if (card && card.tasks && card.tasks.length > 0) {
      return card.tasks.map((task) => {
        if (!task.archived) {
          return (
            <Task
              key={task.id}
              task={task}
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
          cardGoal={card.goal}
          editTask={editTask}
          handleCloseWindow={handleCloseWindow}
          handleUpdateEditTask={handleUpdateEditTask}
        />
      ) : null}
      {position === "first" ? <AddTask card={card} /> : null}
      {renderTasks()}
      {position === "last" ? (
        <AddTask card={card} />
      ) : (
        <div
          className="task-composer"
          onClick={(e) => dispatch(positionNewTask("last"))}
        >
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
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    position: state.workspaceReducer.position,
  };
};
export default connect(mapStateToProps)(TaskList);
