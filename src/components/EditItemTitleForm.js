import React, { useState } from "react";
import { updateItemTitle } from "../actions/workspace";
import { connect } from "react-redux";

const EditItemTitleForm = props => {
  const [input, setInput] = useState(props.subject);
  console.log("hi");
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      return props.dispatch(
        updateItemTitle({
          id: props.item.id,
          key: "subject",
          value: input
        })
      );
    }
  };
  const handleChange = e => {
    e.persist();
    setInput(e.target.value);
  };
  console.log(input);
  return (
    <form className="item-menu-edit-form" onSubmit={handleSubmit}>
      <input
        className="item-menu form-input"
        type="text"
        name="input"
        onChange={handleChange}
        value={input}
      />
    </form>
  );
};

export default connect()(EditItemTitleForm);
