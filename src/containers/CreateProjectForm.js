import React, { useState } from "react";

const CreateProjectForm = props => {
  const [name, setName] = useState("");
  return (
    <form className="create-project input container">
      <input type="text" onChange={e => setName(e.target.value)} value="" />
      <input type="submit" value="Create New Project" />
      <h1>Projects</h1>
    </form>
  );
};

export default CreateProjectForm;
