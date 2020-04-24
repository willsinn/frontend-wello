import React from "react";
import Checklist from "./Checklist";
import { connect } from "react-redux";

const TaskChecklists = (props, { task, dispatch }) => {
  const renderChecklists = () => {
    return props.checklists.map((checklist) => {
      return <Checklist key={checklist.id} checklist={checklist} />;
    });
  };
  return <div>{renderChecklists()}</div>;
};

const mapStateToProps = (state) => {
  return {
    checklists: state.checklistsReducer.checklists,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskChecklists);
