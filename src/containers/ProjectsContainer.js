import React, { useEffect } from "react";
import ProjectTileList from "../components/ProjectTileList";
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
        props.setProjects({ type: "SET_PROJECTS", projectsData });
      });
  }, []);
  return (
    <div className="project bottom-page container">
      <h1>Projects</h1>
      <ProjectTileList />
    </div>
  );
};
const mapDispatchToProps = {
  setProjects
};
export default connect(
  null,
  mapDispatchToProps
)(ProjectsContainer);
