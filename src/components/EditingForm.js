import React, { useState } from "react";
import { updateCard } from "../actions/workspace";
import { connect } from "react-redux";

const EditingForm = props => {
  const [input, setInput] = useState(props.subject);
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      return props.dispatch(
        updateCard({
          id: props.card.id,
          key: "subject",
          value: input
        }),
        props.handleSave(input)
      );
    }
  };
  const handleChange = e => {
    e.persist();
    setInput(e.target.value);
  };
  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        className="n-w form-input"
        type="text"
        name="input"
        onChange={handleChange}
        value={input}
      />
      <button className="card-save-btn" type="submit">
        save
      </button>
    </form>
  );
};

export default connect()(EditingForm);
