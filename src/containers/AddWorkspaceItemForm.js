import React, { useState } from "react";
import { connect } from "react-redux";
import { postWorkspaceItem } from "../actions/workspace";

const initialState = { objective: "" };
const AddWorkspaceItemForm = (props, { dispatch }) => {
  const [objective, setObjective] = useState(initialState);
  const clearState = e => {
    setObjective({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleChange = e => {
    e.persist();
    setObjective(e.target.value);
  };
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      props.dispatch(
        postWorkspaceItem({ objective, workspace: props.workspace })
      );
      clearState(e);
    }
  };
  return (
    <div className="new-workspace-item">
      <form onSubmit={handleSubmit} className="item-form">
        <input
          className="n-w form-input"
          type="text"
          name="objective"
          onChange={handleChange}
          value={objective.value}
          placeholder="   input new list name"
          required
        />
        <button className="n-w form-submit" type="submit">
          CREATE LIST
        </button>
      </form>
    </div>
  );
};
export default connect()(AddWorkspaceItemForm);
