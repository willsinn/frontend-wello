import React from "react";

const UserContainer = props => {
  return (
    <div className="user top-page container">
      <h1>{props.name}</h1>
    </div>
  );
};

const mapStateToProps = ({ userReducer: user }) => ({
  user: user.user
});
export default UserContainer;
