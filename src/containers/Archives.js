import React from "react";
import { connect } from "react-redux";
import { fetchArchives } from "../actions/archives";

const Archives = ({ dispatch, user }) => {
  console.log(user);

  const renderArchives = () => {
    dispatch(fetchArchives());
  };
  return <div>Hello this is archived</div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Archives);
