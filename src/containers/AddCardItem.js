import React, { useState } from "react";
import NewCardForm from "./NewCardForm";
import { connect } from "react-redux";
import { fetchWorkspace } from "../actions/workspace";

const AddCardItem = (props, { dispatch }) => {
  const [showing, setShowing] = useState(false);
  const handleClick = e => {};
  return (
    <div className="wsp-title">
      <div className="add-card">
        {!showing ? (
          <button
            onClick={() => setShowing(!showing)}
            className="toggle-add-form"
          >
            + Add Card Task
          </button>
        ) : (
          <NewCardForm handleClick={handleClick} item={props.item} />
        )}
      </div>
    </div>
  );
};
export default connect()(AddCardItem);
