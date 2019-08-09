import React from "react";
import { connect } from "react-redux";
import LeftSidebarProjectsListItem from "./LeftSidebarProjectsListItem";

const LeftSidebarProjectsList = props => {
  const renderItems = () => {
    if (props.projects.length > 0) {
      return [...props.projects].map(project => (
        <LeftSidebarProjectsListItem key={project.id} project={project} />
      ));
    }
  };
  return <div className="project-list dropdown">{renderItems()}</div>;
};
const mapStateToProps = ({ projectsReducer: projects }) => ({
  projects: projects.projects
});
export default connect(mapStateToProps)(LeftSidebarProjectsList);
