import React, { useEffect } from "react";
import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import ProjectsContainer from "./ProjectsContainer";

const userUrl = "http://localhost:3000/user/1";

const UserProjectsContainer = props => {
  const currentUser = props.user;
  // useEffect(() => {
  //   fetch(userUrl, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  //     .then(r => r.json())
  //     .then(userData => {
  //       props.setUser({ payload: userData });
  //     });
  // }, []);
  return (
    <div className="user-projects full-page container">
      <Toolbar />
      <ProjectsContainer />
    </div>
  );
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user.user
});
export default connect(mapStateToProps)(UserProjectsContainer);
