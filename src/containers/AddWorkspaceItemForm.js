import React, { useState } from "react";
import { connect } from "react-redux";
import { postWorkspaceItem } from "../actions/workspace";

const initialState = { objective: "" };
const AddWorkspaceItemForm = (props, { dispatch }) => {
  const [objective, setObjective] = useState(initialState);
  const clearState = e => {
    setObjective({ ...initialState });
  };
  const handleChange = event => {
    event.persist();
    setObjective(event.target.value);
  };
  const handleSubmit = e => {
    const newItem = {
      item: {
        project_id: props.project_id,
        objective: objective
      }
    };

    if (e) {
      console.log(objective);
      e.preventDefault();
      props.dispatch(
        postWorkspaceItem({
          project_id: props.project_id,
          objective: objective
        }),
        clearState(e)
      );
    }
  };
  console.log(objective, props);
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
const mapDispatchToProps = dispatch => {};
export default connect()(AddWorkspaceItemForm);
