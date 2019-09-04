import React, { useState } from "react";
import { updateItemTitle } from "../actions/workspace";
import { connect } from "react-redux";

const EditItemTitleForm = props => {
  const [input, setInput] = useState(props.objective);
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      props.dispatch(
        updateItemTitle({
          id: props.item.id,
          key: "objective",
          value: input
        }),
        props.handleSave(e)
      );
    }
  };
  const handleChange = e => {
    e.persist();
    setInput(e.target.value);
  };
  console.log(input);
  return (
    <form
      className="item-menu-edit-form"
      onSubmit={handleSubmit}
      onMouseLeave={handleSubmit}
    >
      <input
        className="item-menu-form-input"
        type="text"
        name="input"
        onChange={handleChange}
        value={input}
      />
    </form>
  );
};

export default connect()(EditItemTitleForm);
