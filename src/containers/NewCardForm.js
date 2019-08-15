import React from "react";
import { connect } from "react-redux";

const NewCardForm = (props, { dispatch }) => {
  return (
    <div className="card-form-wrapper">
      <form onSubmit={() => props.handleSubmit()} className="card-form">
        <input />
        <button className="submit-card">Add Card</button>
      </form>
    </div>
  );
};
export default connect()(NewCardForm);
