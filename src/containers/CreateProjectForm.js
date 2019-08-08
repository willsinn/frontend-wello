import React, { useState } from "react";
import useCreateProjectForm from "./CustomHooks";

const CreateProjectForm = props => {
  const { inputs, handleInputChange, handleSubmit } = useCreateProjectForm();

  return (
    <form className="create-project form container" onSubmit={handleSubmit}>
      <div className="c-p form-input">
        <label className="c-p input-label">Project Name</label>
        <input
          className="c-p input-box"
          type="text"
          name="projectName"
          onChange={handleInputChange}
          value={inputs.name}
        />
      </div>
      <div className="c-p form-input">
        <label className="c-p input-label">Description</label>
        <input
          className="c-p input-box"
          type="text"
          name="projectDescription"
          onChange={handleInputChange}
          value={inputs.description}
        />
      </div>
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProjectForm;
