import React, { useState } from "react";
import { connect } from "react-redux";
import { postNewCard } from "../actions/workspace";

const initialState = { goal: "" };
const AddCardForm = ({ workspace, handleCloseCardForm, dispatch }) => {
  const [goal, setGoal] = useState(initialState);
  const clearState = (e) => {
    setGoal({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleChange = (e) => {
    e.persist();
    setGoal(e.target.value);
  };
  const handleSubmitCard = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(
        postNewCard({ goal, workspace: workspace }, () =>
          handleCloseCardForm(e)
        )
      );
      clearState(e);
    }
  };
  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <form onSubmit={handleSubmitCard}>
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
            onClick={(e) => handleCloseCardForm(e)}
            className="close-add-btn"
          >
            ✕
          </button>
        </form>
      </div>
    </div>
  );
};
export default connect()(AddCardForm);
