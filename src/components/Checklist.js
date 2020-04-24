import React, { useState } from "react";
import EditChecklist from "./EditChecklist";
import { deleteChecklist } from "../actions/checklists";
import { connect } from "react-redux";

const Checklist = ({
  del,
  checklist,
  editChecklist,
  handleEditTitle,
  handleCloseEditing,
  handleDelete,
  dispatch,
}) => {
  return (
    <div className="checklist">
      <div className="task-window-desc">
        {editChecklist.id && checklist.id === editChecklist.id ? (
          <EditChecklist
            checklist={checklist}
            handleCloseEditing={handleCloseEditing}
          />
        ) : (
          <div className="module-header" style={{ margin: "0 0 4px 40px" }}>
            <h3
              className="module-title"
              onClick={(e) => handleEditTitle(checklist)}
            >
              {checklist.title}
            </h3>
            <div className="module-btns">
              <button className="sidebar-btn">Hide Completed Items</button>
              <button
                className="sidebar-btn"
                onClick={(e) => handleDelete(checklist)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
        <div className="no-back">
          {del.id && del.id === checklist.id ? (
            <div
              className="side-popover"
              style={{ top: "248px", right: "2em" }}
            >
              <div>Are you sure you wanna delete {del.title}</div>
            </div>
          ) : null}
        </div>
        <div className="module-body"></div>
      </div>
    </div>
  );
};

export default connect()(Checklist);
