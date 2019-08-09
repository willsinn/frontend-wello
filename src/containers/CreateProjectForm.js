import React, { useState } from "react";
import { connect } from "react-redux";
import { postNewProject } from "../actions/project";

const CreateProjectForm = ({ dispatch }) => {
  const [input, setInput] = useState({});
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
      dispatch(postNewProject({ newProject: input.title }));
      inputField = "";
    }
  };
  let inputField = input.projectTitle;
  return (
    <form className="create-project form container" onSubmit={handleSubmit}>
      <div className="c-p form-input">
        <input
          className="c-p input-box"
          type="text"
          name="title"
          onChange={handleInputChange}
          value={inputField}
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
const mapStateToProps = ({ projectsReducer: projects }) => ({
  projects: projects.projects
});
export default connect()(CreateProjectForm);
//
// fetch("http://localhost:3000/user/1/projects/new", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   },
//   body: JSON.stringify({
//     user_id: 1,
//     title: input.title
//   })
// })
//   .then(response => response.json())
//   .then(JSONresponse => {
//     console.log(JSONresponse);
//     dispatch(
//       addNewProject({
//         projectData: JSONresponse
//       })
//     );
//   });
