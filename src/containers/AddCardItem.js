import React, { useState } from "react";
import NewCardForm from "./NewCardForm";
import { connect } from "react-redux";

const AddCardItem = (props, { dispatch }) => {
  return (
    <div className="add-card">
      <button className="toggle-add-form"> + Add Card Task </button>
      <NewCardForm />
    </div>
  );
};
export default connect()(AddCardItem);
