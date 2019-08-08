import React from "react";
import CreateProjectForm from "./CreateProjectForm";

const UserContainer = props => {
  return (
    <div className="user top-page container">
      <CreateProjectForm />
      <h1>{props.name}</h1>
    </div>
  );
};

export default UserContainer;
