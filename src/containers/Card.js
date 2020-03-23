import React, { useState } from "react";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

const Card = props => {
  const [addTask, setAddTask] = useState(false);

  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <div className="card-item-content">
          <div className="card-item-header">
            <span className="edit-card-title">
              <h2 className="card-text">{props.card.goal}</h2>
            </span>
            <span className="card-icon">
              <span
                className="icon-sm"
                style={{ position: "relative", right: "-9px", top: "1px" }}
              >
                ...
              </span>
            </span>
          </div>
          <TaskList card={props.card} />
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
            <AddTask card={props.card} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
