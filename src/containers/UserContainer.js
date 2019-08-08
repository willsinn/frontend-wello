import React from "react";

const UserContainer = props => {
  return (
    <div className="user top-page container">
      <h1>{props.name}</h1>
    </div>
  );
};

export default UserContainer;
