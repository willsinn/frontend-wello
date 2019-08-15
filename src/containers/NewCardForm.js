import React, { useState } from "react";
import { connect } from "react-redux";

const NewCardForm = (props, { dispatch }) => {
  return (
    <div className="card-form-wrapper">
      <input />
      <button className="submit-card">Add Card</button>
    </div>
  );
};
export default connect()(NewCardForm);
