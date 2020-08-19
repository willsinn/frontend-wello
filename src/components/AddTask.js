import React from "react";
import { connect } from "react-redux";
import {
  postNewTask,
  saveAddValue,
  setCurrentAdding,
} from "../actions/workspace";

const AddTask = ({ card, addValue, dispatch }) => {
  const clearState = (e) => {
    dispatch(setCurrentAdding(null));
    dispatch(saveAddValue(""));
    // e.target.firstElementChild.value = "";
  };
  const handleChange = (e) => {
    e.persist();
    dispatch(saveAddValue(e.target.value));
  };
  const handleSubmitTask = (e) => {
    if (e) {
      const note = addValue;
      e.preventDefault();
      dispatch(postNewTask({ note, card: card }));
      clearState(e);
    }
  };
  console.log(addValue);
  return (
    <div className="task-item-wrap">
      <form onSubmit={handleSubmitTask} style={{ marginBottom: "4px" }}>
        <textarea
          className="add-task-textarea"
          type="text"
          name="note"
          onChange={handleChange}
          value={addValue}
          placeholder="Enter note for this task..."
          required
        />
        <button className="add-list-btn" type="submit">
          Add Task
        </button>
        <button
          onClick={() => dispatch(setCurrentAdding(null))}
          className="close-add-btn"
        >
          ✕
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    addValue: state.workspaceReducer.addValue,
  };
};
export default connect(mapStateToProps)(AddTask);
