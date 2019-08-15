import React, { useState } from "react";
import { connect } from "react-redux";
import { postWorkspaceItem } from "../actions/workspace";

const initialState = { objective: "" };
const AddWorkspaceCardForm = (props, { dispatch }) => {
  const [objective, setObjective] = useState(initialState);
  const clearState = e => {
    debugger;
    setObjective({ ...initialState });
    e.target.firstElementChild.value = "";
  };
  const handleChange = event => {
    event.persist();
    setObjective(event.target.value);
  };
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      props.dispatch(
        postWorkspaceItem({
          workspace: props.workspace,
          objective: objective
        })
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
          placeholder="Input New Project Title"
          required
        />
        <button className="n-w form-submit">List Objective</button>
      </form>
      FORM
    </div>
  );
};
export default connect()(AddWorkspaceCardForm);
