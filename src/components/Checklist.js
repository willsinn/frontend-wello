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
  handleConfirmDelete,
  handleCancelDelete,
  dispatch,
}) => {
  const handleDelete = (e) => {
    dispatch(deleteChecklist(checklist, dispatch));
    handleCancelDelete(e);
  };
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
                onClick={(e) => handleConfirmDelete(checklist)}
              >
                Delete
              </button>
            </div>
          </div>
        )}

        <div className="checklist-progress">
          <span className="checklist-progress-percentage"></span>
          <div className="checklist-progress-bar"></div>
        </div>

        <div className="module-body"></div>
      </div>
      {del.id && del.id === checklist.id ? (
        <div className="side-popover" style={{ top: "248px", right: "4em" }}>
          <div className="no-back">
            <div className="side-popover-header">
              <span className="side-popover-header-title">
                Delete {checklist.title}?
              </span>
              <button
                onClick={(e) => handleCancelDelete(e)}
                className="side-close-btn"
              >
                ✕
              </button>
              <div></div>
              <div className="side-popover-body">
                <div>
                  <div
                    style={{
                      height: "110px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>
                      Deleting a checklist is permanent and there is no way to
                      get it back.
                    </p>
                    <button
                      className="del-checklist-btn"
                      onClick={(e) => handleDelete()}
                    >
                      Delete Checklist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default connect()(Checklist);
