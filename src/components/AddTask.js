import React, { useState } from "react";
import { connect } from "react-redux";
import { postNewTask } from "../actions/workspace";

const initialState = { note: "" };
const AddTask = ({
  card,
  addToLast,
  addToFirst,
  dispatch,
  handleCloseTaskForm,
}) => {
  const [note, setNote] = useState(initialState);
  const clearState = (e) => {
    setNote({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleChange = (e) => {
    e.persist();
    setNote(e.target.value);
  };
  const handleSubmitTask = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(postNewTask({ note, card: card }, () => handleCloseTaskForm(e)));
      clearState(e);
      //handleCloseTaskForm(e)
    }
  };
  // CREATE METHOD TO ORGANIZE AND RETURN TASKS IN ORDER
  // 1. add column order:int, first task is set at 1000
  // 2. addFirst takes lowest order:num (first elem in array) and creates a new task with lowestOrderNum - 1;
  // 3. addLast does the opposite
  // 4. the two states are passed into AddTask to help determine where the user addedTask
  return (
    <div className="task-item-wrap">
      <form onSubmit={handleSubmitTask}>
        <textarea
          className="add-task-textarea"
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
          onClick={(e) => handleCloseTaskForm(e)}
          className="close-add-btn"
        >
          ✕
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTask);
