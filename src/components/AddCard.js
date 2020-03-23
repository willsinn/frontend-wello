import React, { useState } from "react";
import { connect } from "react-redux";
import { postWorkspaceCard } from "../actions/workspace";

const initialState = { goal: "" };
const AddCard = (props, { dispatch }) => {
  const [goal, setGoal] = useState(initialState);
  const clearState = e => {
    setGoal({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleChange = e => {
    e.persist();
    setGoal(e.target.value);
  };
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      props.dispatch(postWorkspaceCard({ goal, workspace: props.workspace }));
      props.updateDeck(goal);
      clearState(e);
    }
  };
  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <form onSubmit={handleSubmit}>
          <input
            className="add-card-input"
            type="text"
            name="goal"
            onChange={handleChange}
            value={goal.value}
            placeholder="input new list name"
            required
          />
          <button className="add-list-btn" type="submit">
            Add List
          </button>
          <button
            onClick={e => props.handleCloseForm(e)}
            className="close-add-btn"
          >
            ✕
          </button>
        </form>
      </div>
    </div>
  );
};
export default connect()(AddCard);
