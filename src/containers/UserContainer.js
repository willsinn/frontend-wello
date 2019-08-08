import React from "react";
import { connect } from "react-redux";

const UserContainer = props => {
  const currentUser = props.user;
  return (
    <div className="user top-page container">
      <h1>{currentUser.name}</h1>
    </div>
  );
};

const mapStateToProps = ({ userReducer: user }) => ({
  user: user.user
});
export default connect(mapStateToProps)(UserContainer);
