import React from "react";
import { connect } from "react-redux";
import { fetchArchived } from "../actions/archived";

const Archived = ({ dispatch }) => {
  const renderArchived = () => {
    dispatch(fetchArchived());
  };
  return <div>{renderArchived()}}Hello this is archived</div>;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Archived);
