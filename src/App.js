import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginForm from "./components/LoginForm";
// import SignForm from "./components/SignForm";
import Board from "./containers/Board";

import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home" render={() => <Redirect to="/" />} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
        {/* <Route exact path="/signup" component={SignForm} /> */}
        <Route exact path="/board" component={Board} />
      </Switch>
    </>
  );
};
export default withRouter(App);
