import React from "react";
import { toggleCardForm } from "../actions/workspace";
import { connect } from "react-redux";

const NewCardForm = (props, { dispatch }) => {
  return (
    <div className="card-form-wrapper">
      <input />
      <button
        onClick={() => props.dispatch(toggleCardForm())}
        className="submit-card"
      >
        Add Card
      </button>
    </div>
  );
};
export default connect()(NewCardForm);
