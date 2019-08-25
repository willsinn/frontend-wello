import React from "react";
import NavBar from "./containers/NavBar";
import "./App.css";
import UserProjectsContainer from "./containers/UserProjectsContainer";
import ProjectWorkspace from "./containers/ProjectWorkspace";
import { connect } from "react-redux";

const App = props => {
  return (
    <>
      <NavBar />
      {props.workspace.id !== undefined ? (
        <ProjectWorkspace
          workspace={props.workspace}
          projectId={props.workspace.id}
        />
      ) : (
        <UserProjectsContainer />
      )}
    </>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace
});
export default connect(mapStateToProps)(App);
