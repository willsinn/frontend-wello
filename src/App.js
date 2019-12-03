import React from "react";
import NavBar from "./containers/NavBar";
import "./App.css";
import UserProjectsContainer from "./containers/UserProjectsContainer";
import Board from "./containers/Board";
import { connect } from "react-redux";

const App = props => {
  return (
    <>
      <NavBar />
      {props.workspace.id !== undefined ? (
        <Board workspace={props.workspace} projectId={props.workspace.id} />
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
