import React, { useState } from "react";
import { saveTaskDesc } from "../actions/workspace";

import { connect } from "react-redux";

const EditChecklist = ({ checklist, dispatch }) => {
  const [title, setTitle] = useState(checklist.title);
  const [editable, setEditable] = useState(false);
  const handleChange = (e) => {
    e.persist(e);
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(saveTaskDesc(checklist, title));
      setEditable(false);
    }
  };
  const handleExitEditable = (e) => {
    setEditable(false);
    setTitle(checklist.title);
  };

  return (
    <div className="editing">
      <div>
        <form className="description-form" onSubmit={handleSubmit}>
          <textarea
            className="description-field"
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
        <button className="close-add-btn" onClick={handleExitEditable}>
          ✕
        </button>
      </div>
    </div>
  );
};
export default connect()(EditChecklist);
