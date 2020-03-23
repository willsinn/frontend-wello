import React from "react";

const AddTask = props => {
  return (
    <div className="task-item-wrap">
      <div className="task-item card-item">
        <form onSubmit>
          <input
            className="add-card-input"
            type="text"
            name="goal"
            value=""
            placeholder="Enter note for this task..."
            required
          />
          <button onClick className="add-list-btn" type="submit">
            Add Task
          </button>
          <button
            onClick={e => props.handleCloseTaskForm(e)}
            className="close-add-btn"
          >
            ✕
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
