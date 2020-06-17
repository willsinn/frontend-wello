import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
// import * as actions from '../actions'
import { fetchCurrentUser } from "../actions/user";

const withAuth = ({
  WrappedComponent,
  authenticatingUser,
  loggedIn,
  dispatch,
}) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      debugger;
      console.log("%c AUTH-HOC useEffect", "color: purple");
      if (localStorage.getItem("jwt") && !loggedIn)
        dispatch(fetchCurrentUser());
    }

    render() {
      if (localStorage.getItem("jwt") && loggedIn) {
        return <WrappedComponent />;
      } else if (
        localStorage.getItem("jwt") &&
        (authenticatingUser || !loggedIn)
      ) {
        return <div>Hi I'm Loading</div>;
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
  // const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
  //   return {
  //     fetchCurrentUser: () => dispatch(fetchCurrentUser()), //dispatch is automagically provided by redux
  //   }
  // }

  // const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
  // const connectedAuthorizedComponent = connectedToReduxHOC(AuthorizedComponent)
  // return connectedAuthorizedComponent

  return connect(mapStateToProps)(AuthorizedComponent);
};

export default withAuth;
