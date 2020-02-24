import React from "react";
import NavBar from "./containers/NavBar";
import HomePage from "./containers/HomePage";
import ProfilePage from "./containers/ProfilePage";
import Board from "./containers/Board";
import { connect } from "react-redux";
import "./App.css";

const App = props => {
  // console.log(props.activePg);
  console.log(props.workspace);

  return (
    <>
      <NavBar />
      {(() => {
        switch (props.activePg) {
          case "home":
            return <HomePage />;
          case "board":
            return <Board workspace={props.workspace} />;
          case "profile":
            return <ProfilePage />;
          default:
            return <HomePage />;
        }
      })()}
    </>
  );
};

const mapStateToProps = ({
  userReducer: activePg,
  workspaceReducer: workspace
}) => ({
  activePg: activePg.activePg,
  workspace: workspace.workspace
});
export default connect(mapStateToProps)(App);
