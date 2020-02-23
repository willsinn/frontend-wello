import React from "react";
import ProjectListItem from "../components/ProjectListItem";
import { connect } from "react-redux";

const HomeTiles = props => {
  const renderTiles = () => {
    if (props.projects.length > 0) {
      console.log(props.projects);
      return props.projects.map(project => (
        <li key={project.id} className="project-tile">
          <div className="project-title">
            <ProjectListItem key={project.id} project={project} />
          </div>
        </li>
      ));
    }
  };

  return (
    <div className="projects middle-tiles container">
      <ul className="project-tiles container">{renderTiles()}</ul>
    </div>
  );
};

const mapStateToProps = ({ projectsReducer: projects }) => ({
  projects: projects.projects
});
export default connect(mapStateToProps)(HomeTiles);
