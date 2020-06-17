import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
      </Switch>
    </>
  );
};
export default withRouter(App);
