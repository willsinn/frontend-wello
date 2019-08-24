import React, { useState } from "react";
import NewCardForm from "./NewCardForm";
import { connect } from "react-redux";
import { fetchWorkspace } from "../actions/workspace";

const initialState = "";
const AddCardMessage = (props, { dispatch }) => {
  const [showing, setShowing] = useState(false);
  const [subject, setSubject] = useState(initialState);
  const handleSubmitToggle = subject => {
    setShowing(!showing);
    setSubject(subject);
    setTimeout(() => {
      setSubject(initialState);
    }, 10000);
  };
  const success = (
    <div className="add-card-text-wrap">
      <span> Card </span>
      <span className="add-card-user-input">{subject}</span>
      <span>added to {props.item.objective}.</span>
    </div>
  );

  return (
    <div className="add-card-wrapper">
      <div className="add-card-message">{subject === "" ? null : success}</div>
      <div className="add-card">
        {!showing ? (
          <button
            onClick={() => setShowing(!showing)}
            className="toggle-add-form"
          >
            ADD CARD
          </button>
        ) : (
          <NewCardForm
            handleSubmitToggle={handleSubmitToggle}
            item={props.item}
          />
        )}
      </div>
    </div>
  );
};
export default connect()(AddCardMessage);
