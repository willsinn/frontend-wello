import React, { useState } from "react";
import { postNewChecklist } from "../actions/checklists";
import { connect } from "react-redux";

const AddChecklist = ({ task, closePopup, dispatch }) => {
  const [title, setTitle] = useState("Checklist");
  const handleChange = (e) => {
    e.persist();
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(postNewChecklist(task, title));
      setTitle("Checklist");
      closePopup();
    }
  };
  return (
    <div className="side-popover">
      <div className="no-back">
        <div className="side-popover-header">
          <span className="side-popover-header-title">Add Checklist</span>
          <button onClick={(e) => closePopup()} className="side-close-btn">
            ✕
          </button>
        </div>
        <div className="side-popover-body">
          <div className="add-checklist">
            <form className="add-checklist-form" onSubmit={handleSubmit}>
              <label className="id-checklist">Title</label>
              <input
                className="add-checklist-input"
                type="text"
                name="title"
                onChange={handleChange}
                value={title}
                required
              />
              <button
                className="checklist-btn add-list-btn"
                onClick={(e) => handleSubmit(e)}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(AddChecklist);
