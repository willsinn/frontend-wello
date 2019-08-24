import React, { useState } from "react";
import { connect } from "react-redux";
import { postNewCard } from "../actions/workspace";

const initialState = { subject: "" };
const NewCardForm = (props, { dispatch }) => {
  const [subject, setSubject] = useState(initialState);
  const clearSubject = e => {
    setSubject({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleSubjectChange = e => {
    e.persist();
    setSubject(e.target.value);
  };
  const handleCardSubmit = e => {
    e.preventDefault();
    props.dispatch(
      postNewCard(
        { subject, item: props.item },
        props.handleSubmitToggle(subject)
      ),
      clearSubject(e)
    );
  };
  return (
    <div className="card-form-wrapper">
      <form onSubmit={handleCardSubmit} className="card-form">
        <input
          className="card-form-input box"
          type="text"
          name="subject"
          onChange={handleSubjectChange}
          value={subject.value}
          placeholder=" Card Subject"
          required
        />
        <button className="submit-card" type="submit">
          +
        </button>
      </form>
    </div>
  );
};
export default connect()(NewCardForm);
