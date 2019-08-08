import React from "react";
import { connect } from "react-redux";

const ProjectList = props => {
  const renderProjects = () => {};
  return (
    <div className="user top-page container">
      <h1>{props.name}</h1>
    </div>
  );
};

export default ProjectList;
