import React, { useState } from "react";
import { connect } from "react-redux";
import { postNewProject } from "../actions/project";

const initialState = {};

const AddProjectForm = ({ dispatch }) => {
  const [input, setInput] = useState(initialState);
  const clearInput = () => {
    setInput({ ...initialState });
  };
  const handleInputChange = event => {
    event.persist();
    setInput(input => ({
      ...input,
      [event.target.name]: event.target.value
    }));
  };
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      dispatch(postNewProject({ newProject: input.title }, clearInput()));
    }
  };
  console.log(input.projectTitle);
  return (
    <div className="new-project-form">
      <form className="create-project form container" onSubmit={handleSubmit}>
        <div className="c-p form-input">
          <input
            className="c-p input-box"
            type="text"
            name="title"
            onChange={handleInputChange}
            value={input.projectTitle}
            placeholder="Input Project Title"
            required
          />
        </div>
        <button className="toolbar-btn form-submit" type="submit">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default connect()(AddProjectForm);
