import React from "react";
import { connect } from "react-redux";
import { setUser } from "../actions/index.js";

const UserProjectsContainer = props => {
  console.log(props.user);
  return <div>UserProjects, </div>;
};
const mapStateToProps = ({ userReducer: user }) => ({
  user
});
export default connect(mapStateToProps)(UserProjectsContainer);
