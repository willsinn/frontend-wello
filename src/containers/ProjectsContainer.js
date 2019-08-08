import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setProjects } from "../actions/project";

const ProjectsContainer = props => {
  useEffect(() => {
    fetch("http://localhost:3000/user/1/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(projectsData => {
        console.log(projectsData);
        debugger;
      });
  }, []);
  return (
    <div className="project bottom-page container">
      <h1>Projects</h1>
    </div>
  );
};

export default ProjectsContainer;
