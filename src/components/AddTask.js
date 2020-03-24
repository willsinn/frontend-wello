import React, { useState } from "react";

const initialState = { note: "" };
const AddTask = props => {
  const [note, setNote] = useState(initialState);
  const clearState = e => {
    setNote({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleChange = e => {
    e.persist();
    setNote(e.target.value);
  };
  console.log(note);
  return (
    <div className="task-item-wrap">
      <div className="task-item card-item">
        <form onSubmit>
          <input
            className="add-card-input"
            type="text"
            name="note"
            onChange={handleChange}
            value={note.value}
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
