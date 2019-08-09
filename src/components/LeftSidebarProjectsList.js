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

// const renderProjects = () => {
//   const userProjects = props.projects[0];
//
//   return userProjects.map(project => {
//     let projectTitle = project.title;
//     let projectDescription = project.description;
//     let nullProjectCounter = 1;
//     if (projectTitle === null) {
//       projectTitle = `Project ${nullProjectCounter}. Great strategy for keeping your memory sharp!`;
//       nullProjectCounter += 1;
//     }
//     if (projectDescription === null) {
//       projectDescription =
//         "Nothings ever set in stone - be water my friend -";
//     }
//     return (
//       <div className="list-item">
//         <div className="project-list-title">{projectTitle}</div>
//       </div>
//     );
//   });
// };
