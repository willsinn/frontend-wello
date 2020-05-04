import React, { useState } from "react";
import Checklist from "./Checklist";
import { connect } from "react-redux";

const TaskChecklists = ({ checklists, dispatch }) => {
  const [editChecklist, setEditChecklist] = useState({});
  const [del, setDel] = useState({});
  const handleConfirmDelete = (checklist) => {
    setDel(checklist);
  };
  const handleCancelDelete = () => {
    setDel({});
  };

  const handleCloseEditing = () => {
    setEditChecklist({});
  };

  const handleEditTitle = (checklist) => {
    setEditChecklist(checklist);
  };
  const renderChecklists = () => {
    if (checklists && checklists.length > 0) {
      return checklists.map((checklist) => {
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
    }
  };
  return <div className="checklists-container">{renderChecklists()}</div>;
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
