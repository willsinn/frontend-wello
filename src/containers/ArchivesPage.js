import React from "react";
import { connect } from "react-redux";
import { setArchived } from "../actions/archives";

const ArchivesPage = ({ boards, dispatch }) => {
  console.log(boards);
  return <div>{dispatch(setArchived({ boards }))}</div>;
};

export default connect()(ArchivesPage);
