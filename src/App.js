import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
  // console.log("active page", activePg);
  // console.log("this is the current user", user);
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </>
  );
};
export default withRouter(App);
