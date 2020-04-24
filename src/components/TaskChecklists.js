import React, { useState } from "react";
import Checklist from "./Checklist";
import { connect } from "react-redux";

const TaskChecklists = (props, { task, dispatch }) => {
  const [editChecklist, setEditChecklist] = useState({});
  const [del, setDel] = useState({});
  const handleDelete = (checklist) => {
    setDel(checklist);
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
          handleDelete={handleDelete}
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
