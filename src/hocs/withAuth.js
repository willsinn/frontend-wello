import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { fetchCurrentUser } from "../actions/user";

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      console.log(
        "%c INSIDE COMPONENT DID MOUNT FOR AUTH HOC",
        "color: purple"
      );
      if (localStorage.getItem("jwt") && !this.props.loggedIn)
        this.props.fetchCurrentUser();
    }

    render() {
      console.log("%c INSIDE RENDER FOR HOC", "color: green");
      if (localStorage.getItem("jwt") && this.props.loggedIn) {
        return <WrappedComponent />;
      } else if (
        localStorage.getItem("jwt") &&
        (this.props.authenticatingUser || !this.props.loggedIn)
      ) {
        return <div> Wello is loading your boards...</div>;
      } else {
        return <Redirect to="/login" />;
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.userReducer.loggedIn,
      authenticatingUser: state.userReducer.authenticatingUser,
    };
  };

  const mapDispatchToProps = { fetchCurrentUser: fetchCurrentUser };
  return connect(mapStateToProps, mapDispatchToProps)(AuthorizedComponent);
};

export default withAuth;
