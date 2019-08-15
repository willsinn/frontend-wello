import React, { useState } from "react";
import NewCardForm from "./NewCardForm";
import { connect } from "react-redux";

const AddCardItem = (props, { dispatch }) => {
  const [showing, setShowing] = useState(false);
  const handleSubmit = () => {
    setShowing(!showing);
  };
  return (
    <div className="add-card">
      {!showing ? (
        <button
          onClick={() => setShowing(!showing)}
          className="toggle-add-form"
        >
          + Add Card Task
        </button>
      ) : (
        <NewCardForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
};
export default connect()(AddCardItem);
