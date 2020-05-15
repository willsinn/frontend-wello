import React from "react";
import NavBar from "./containers/NavBar";
import HomePage from "./containers/HomePage";
import ProfilePage from "./containers/ProfilePage";
import Board from "./containers/Board";
import { connect } from "react-redux";
import "./App.css";

import LoginForm from "./containers/LoginForm";
import SignupForm from "./containers/SignupForm";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

const App = (props) => {
  // console.log(props.activePg);
  //console.log(props.workspace);

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />

        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </Switch>
      {/* {(() => {
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
      })()} */}
    </>
  );
};

const mapStateToProps = ({
  userReducer: activePg,
  workspaceReducer: workspace,
}) => ({
  activePg: activePg.activePg,
  workspace: workspace.workspace,
});
export default connect(mapStateToProps)(App);
//withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected
