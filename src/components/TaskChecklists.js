import React, { useState } from "react";
import Checklist from "./Checklist";
import { deleteChecklist } from "../actions/checklists";
import { connect } from "react-redux";

const TaskChecklists = (props, { task, dispatch }) => {
  const [editChecklist, setEditChecklist] = useState({});
  const [del, setDel] = useState({});
  const handleConfirmDelete = (checklist) => {
    setDel(checklist);
  };
  const handleCancelDelete = () => {
    setDel({});
  };
  const handleDelete = (checklist) => {
    dispatch(deleteChecklist(checklist));
    setDel({});
  };
  const handleCloseEditing = () => {
    setEditChecklist({});
  };

  const handleEditTitle = (checklist) => {
    setEditChecklist(checklist);
  };
  const renderChecklists = () => {
    return props.checklists.map((checklist) => {
      return (
        <Checklist
          key={checklist.id}
          del={del}
          checklist={checklist}
          editChecklist={editChecklist}
          handleEditTitle={handleEditTitle}
          handleCloseEditing={handleCloseEditing}
          handleConfirmDelete={handleConfirmDelete}
          handleCancelDelete={handleCancelDelete}
        />
      );
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
