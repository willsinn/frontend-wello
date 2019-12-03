import React from "react";
import ProjectListItem from "../components/ProjectListItem";
import { connect } from "react-redux";

const BoardsTiled = props => {
  const renderTiles = () => {
    if (props.projects.length > 0) {
      return [...props.projects].map(project => (
        <li key={project.id} className="project-tile">
          <div className="project-title">
            <ProjectListItem project={project} />
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
export default connect(mapStateToProps)(BoardsTiled);
