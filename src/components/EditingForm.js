import React, { useState } from "react";
import { connect } from "react-redux";

const EditingForm = props => {
  const [input, setInput] = useState(props.value);
  const handleSave = e => {
    if (e) {
    }
  };
  const handleChange = e => {
    e.persist();
  };
  return (
    <form onSubmit={handleSave}>
      <input type="text" onChange={handleChange} value={input.value} />
      <button type="submit">save</button>
    </form>
  );
};

export default connect()(EditingForm);
