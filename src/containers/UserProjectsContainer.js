import React from "react";
import TilesList from "../components/TilesList";
import { connect } from "react-redux";
import { setNull } from "../actions/user";

const UserProjectsContainer = ({ dispatch }) => {
  return (
    <div
      onClick={e => dispatch(setNull())}
      id="userprojects"
      className="container"
    >
      <TilesList />
    </div>
  );
};

export default connect()(UserProjectsContainer);
