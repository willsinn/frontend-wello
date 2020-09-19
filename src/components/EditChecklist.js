import React, { useState } from "react";
import { saveChecklistTitle } from "../actions/checklists";
import { connect } from "react-redux";

const EditChecklist = ({ editChecklist, handleCloseEditing, dispatch }) => {
  const [title, setTitle] = useState(editChecklist.title);
  const handleChange = (e) => {
    e.persist(e);
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(saveChecklistTitle(editChecklist, title));
      handleCloseEditing();
    }
  };
  return (
    <div className="editing">
      <div>
        <form
          className="description-form"
          style={{ height: "54px" }}
          onSubmit={handleSubmit}
        >
          <textarea
            className="edit-checklist"
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </form>
      </div>
      <div style={{ marginBottom: "8px" }}>
        <button
          className="add-list-btn"
          style={{ paddingLeft: "12px", paddingRight: "12px", margin: "0" }}
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="close-add-btn"
          style={{ paddingLeft: "12px" }}
          onClick={handleCloseEditing}
        >
          ✕
        </button>
      </div>
    </div>
  );
};
export default connect()(EditChecklist);
