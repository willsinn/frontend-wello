import React from "react";
import ProjectListItem from "./ProjectListItem";
import { connect } from "react-redux";
import { setNull } from "../actions/user";

const SidebarList = (props, { dispatch }) => {
  const renderItems = () => {
    if (props.projects.length > 0) {
      return [...props.projects].map(project => (
        <li onClick={e => props.dispatch(setNull(e))} className="list-item">
          <div className="project-list-title">
            <ProjectListItem key={project.id} project={project} />
          </div>
        </li>
      ));
    }
  };
  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-list dropdown">{renderItems()}</ul>
    </div>
  );
};
const mapStateToProps = ({ projectsReducer: projects }) => ({
  projects: projects.projects
});
export default connect(mapStateToProps)(SidebarList);
