import React, { useState } from "react";
import Checklist from "./Checklist";
import { connect } from "react-redux";

const TaskChecklists = (props, { task, checklists, dispatch }) => {
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
  console.log(task, "Task Checklists", editChecklist);

  const renderChecklists = () => {
    if (props.checklists && props.checklists.length > 0) {
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
    } else {
      return;
    }
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
