import React, { useState } from "react";
import { saveChecklistTitle } from "../actions/checklists";
import { connect } from "react-redux";

const EditChecklist = ({ checklist, handleCloseEditing, dispatch }) => {
  const [title, setTitle] = useState(checklist.title);
  const handleChange = (e) => {
    e.persist(e);
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(saveChecklistTitle(checklist, title));
      handleCloseEditing();
    }
  };

  return (
    <div className="editing">
      <div style={{ margin: "4px 0" }}>
        <form
          className="description-form"
          style={{ height: "54px" }}
          onSubmit={handleSubmit}
        >
          <textarea
            className="edit-checklist"
            placeholder="Add a more detailed description…"
            type="text"
            name="desc"
            value={title}
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
      <div>
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
