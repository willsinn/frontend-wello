import React, { useState } from "react";
import { connect } from "react-redux";
import { postNewCardTask } from "../actions/task";

const initialState = { note: "" };
const AddTask = (props, { dispatch }) => {
  const [note, setNote] = useState(initialState);
  const clearState = e => {
    setNote({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleChange = e => {
    e.persist();
    setNote(e.target.value);
  };
  const handleSubmitTask = e => {
    if (e) {
      e.preventDefault();
      props.dispatch(postNewCardTask({ note, card: props.card }));
      clearState(e);
    }
  };
  return (
    <div className="task-item-wrap">
      <div className="task-item card-item">
        <form onSubmit={handleSubmitTask}>
          <input
            className="add-card-input"
            type="text"
            name="note"
            onChange={handleChange}
            value={note.value}
            placeholder="Enter note for this task..."
            required
          />
          <button className="add-list-btn" type="submit">
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

export default connect()(AddTask);
