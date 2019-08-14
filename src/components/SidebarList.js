import React from "react";
import { connect } from "react-redux";
import ProjectListItem from "./ProjectListItem";

const SidebarList = props => {
  const renderItems = () => {
    if (props.projects.length > 0) {
      return [...props.projects].map(project => (
        <li className="list-item">
          <div className="project-list-title">
            <ProjectListItem key={project.id} project={project} />
          </div>
        </li>
      ));
    }
  };
  return <ul className="project-list dropdown">{renderItems()}</ul>;
};
const mapStateToProps = ({ projectsReducer: projects }) => ({
  projects: projects.projects
});
export default connect(mapStateToProps)(SidebarList);
