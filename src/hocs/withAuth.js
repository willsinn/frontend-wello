import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
// import * as actions from '../actions'
import { fetchCurrentUser } from "../actions/user";
import { Loader } from "semantic-ui-react";

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
        return <Loader active inline="centered" />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  }

  const mapStateToProps = (reduxStoreState) => {
    return {
      loggedIn: reduxStoreState.usersReducer.loggedIn,
      authenticatingUser: reduxStoreState.usersReducer.authenticatingUser,
    };
  };
  // const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
  //   return {
  //     fetchCurrentUser: () => dispatch(fetchCurrentUser()), //dispatch is automagically provided by redux
  //   }
  // }
  const mapDispatchToProps = { fetchCurrentUser: fetchCurrentUser };

  // const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
  // const connectedAuthorizedComponent = connectedToReduxHOC(AuthorizedComponent)
  // return connectedAuthorizedComponent

  return connect(mapStateToProps, mapDispatchToProps)(AuthorizedComponent);
};

export default withAuth;
