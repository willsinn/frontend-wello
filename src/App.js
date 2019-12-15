import React from "react";
import NavBar from "./containers/NavBar";
import HomePage from "./containers/HomePage";
import ProfilePage from "./containers/ProfilePage";
import Board from "./containers/Board";
import { connect } from "react-redux";
import "./App.css";

const App = props => {
  console.log(props.activePg["activePg"]);
  return (
    <>
      <NavBar />
      {(() => {
        switch (props.activePg["activePg"]) {
          case "home":
            return <HomePage />;
          case "board":
            return <Board />;
          case "profile":
            return <ProfilePage />;
          default:
            return <HomePage />;
        }
      })()}
    </>
  );
};
// const mapStateToProps = ({ workspaceReducer: workspace }) => ({
//   workspace: workspace.workspace
// });
const mapStateToProps = ({ userReducer: activePg }) => ({
  activePg: activePg.activePg
});
export default connect(mapStateToProps)(App);
