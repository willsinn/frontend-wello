import React, { useState } from "react";
import EditChecklist from "./EditChecklist";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";
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
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState(false);
  const handleDelete = (e) => {
    dispatch(deleteChecklist(checklist, dispatch));
    handleCancelDelete(e);
  };
  const handleCloseAdd = (e) => {
    setActive(false);
  };
  const renderIncomplete = (e) => {
    console.log(checklist.items);
    const incompleteItems = checklist.items.filter(
      (item) => item.complete === false
    );
    console.log(incompleteItems);
    if (incompleteItems.length === 0) {
      return "All Complete";
    }

    if (incompleteItems.length > 0) {
      return <ItemsList items={incompleteItems} />;
    }
  };
  return (
    <div className="checklist">
      {editChecklist.id && checklist.id === editChecklist.id ? (
        <EditChecklist
          editChecklist={editChecklist}
          handleCloseEditing={handleCloseEditing}
        />
      ) : (
        <div className="checklist-header">
          <span className="check-mark-icon" />

          <h3
            className="checklist-title"
            onClick={(e) => handleEditTitle(checklist)}
          >
            {checklist.title}
          </h3>
          <div className="checklist-btns">
            <button
              className="sidebar-btn"
              style={{ marginRight: "8px" }}
              onClick={(e) => setFilter(!filter)}
            >
              Hide Completed Items
            </button>
            <button
              className="sidebar-btn"
              onClick={(e) => handleConfirmDelete(checklist)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
      {renderIncomplete()}
      <ItemsList items={checklist.items} />
      {!active ? (
        <div className="checklist-add-new-item">
          <button className="sidebar-btn" onClick={(e) => setActive(true)}>
            Add an item
          </button>
        </div>
      ) : (
        <AddItem checklist={checklist} handleCloseAdd={handleCloseAdd} />
      )}
      {del.id && del.id === checklist.id ? (
        <div className="side-popover" style={{ top: "248px", right: "15%" }}>
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
