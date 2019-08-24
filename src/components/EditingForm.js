import React, { useState } from "react";
import { connect } from "react-redux";

const EditingForm = props => {
  const [input, setInput] = useState(props["value"]);
  const handleSave = e => {
    if (e) {
    }
  };
  const handleChange = e => {
    e.persist();
  };
  return (
    <form onSubmit={handleSave}>
      <input type="text" name="input" onChange={handleChange} value={input} />
      <button value="submit" type="submit">
        save
      </button>
    </form>
  );
};

export default connect()(EditingForm);
