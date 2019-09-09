import React from "react";
import ProjectListItem from "./ProjectListItem";
import { connect } from "react-redux";
import { setNull } from "../actions/user";

const SidebarList = (props, { dispatch }) => {
  const renderItems = () => {
    if (props.projects.length > 0) {
      return props.projects.map(project => (
        <li key={project.id} className="list-item">
          <div className="project-list-title">
            <ProjectListItem key={project.id} project={project} />
          </div>
        </li>
      ));
    }
  };
  return (
    <div className="sidebar-wrapper">
      <ul
        className="sidebar-list dropdown"
        onMouseLeave={() => props.dispatch(setNull())}
      >
        {renderItems()}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ projectsReducer: projects }) => ({
  projects: projects.projects
});
export default connect(mapStateToProps)(SidebarList);
