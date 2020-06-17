import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import "./App.css";

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </Switch>
    </>
  );
};
export default withRouter(App);
