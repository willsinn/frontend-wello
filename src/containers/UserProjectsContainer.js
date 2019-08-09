import React from "react";
import Toolbar from "./Toolbar";
import ProjectTilesContainer from "./ProjectTilesContainer";

const UserProjectsContainer = props => {
  return (
    <div className="user-projects full-page container">
      <Toolbar />
      <ProjectTilesContainer />
    </div>
  );
};

export default UserProjectsContainer;
