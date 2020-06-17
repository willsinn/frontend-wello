import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = ({ user, activePg, workspace }) => {
  // console.log("active page", activePg);
  // console.log("this is the current user", user);

  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
      {/* {user === null ? (
        <LoginForm />
      ) : (
          <NavBar />
          {(() => {
            switch (activePg) {
              case "home":
                return <HomePage />;
              case "board":
                return <Board workspace={workspace} />;
              case "profile":
                return <ProfilePage />;
              default:
                return <HomePage />;
            }
          })()}
      )} */}
    </>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     user: state.userReducer.user,
//     activePg: state.userReducer.activePg,
//     workspace: state.workspaceReducer.workspace,
//   };
// };

export default withRouter(App);
