import React, { useState } from "react";
import { connect } from "react-redux";
import { postNewProject } from "../actions/projects";

const initialState = { title: "" };
const NewProjectForm = ({ dispatch }) => {
  const [title, setTitle] = useState(initialState);
  const clearTitle = e => {
    setTitle({ ...initialState });
    e.target.firstElementChild.firstElementChild.value = "";
  };
  const handleTitleChange = event => {
    event.persist();
    setTitle(event.target.value);
  };
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      dispatch(postNewProject({ title }), clearTitle(e));
    }
  };

  return (
    <div className="new-project-form">
      <form className="create-project form container" onSubmit={handleSubmit}>
        <div className="c-p form-input">
          <input
            className="c-p input-box"
            type="text"
            name="title"
            onChange={handleTitleChange}
            value={title.value}
            placeholder="Input New Project Title"
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

export default connect()(NewProjectForm);
