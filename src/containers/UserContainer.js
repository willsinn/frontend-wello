import React from "react";
import { connect } from "react-redux";

const UserContainer = props => {
  console.log(props.user);
  return <div>User</div>;
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user.user
});
export default connect(mapStateToProps)(UserContainer);
