import React from "react";
import useCreateProjectForm from "./CustomHooks";

const CreateProjectForm = props => {
  const { inputs, handleInputChange, handleSubmit } = useCreateProjectForm();

  return (
    <form className="create-project form container" onSubmit={handleSubmit}>
      <div className="c-p form-input">
        <input
          className="c-p input-box"
          type="text"
          name="title"
          onChange={handleInputChange}
          value={inputs.projectTitle}
          placeholder="Input Project Title"
          required
        />
      </div>
      <button className="toolbar-btn form-submit" type="submit">
        Create Project
      </button>
    </form>
  );
};

export default CreateProjectForm;
