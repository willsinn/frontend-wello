import React from "react";
import NavBar from "./containers/NavBar";
import HomePage from "./containers/HomePage";
import ProfilePage from "./containers/ProfilePage";
import Board from "./containers/Board";
import LoginForm from "./components/LoginForm";
import { connect } from "react-redux";
import "./App.css";

const App = ({ user, activePg }) => {
  console.log("active page", activePg);
  console.log("this is the current user", user);

  return (
    <>
      <LoginForm />
      {/* <NavBar />
      {(() => {
        switch (activePg) {
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
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    activePg: state.userReducer.activePg,
  };
};

export default connect(mapStateToProps)(App);
