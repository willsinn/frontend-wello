import React, { useState } from "react";
import NewCardForm from "./NewCardForm";

const initialState = "";
const AddCardMessage = props => {
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
            item={props.item}
            handleSubmitToggle={handleSubmitToggle}
          />
        )}
      </div>
    </div>
  );
};

export default AddCardMessage;
