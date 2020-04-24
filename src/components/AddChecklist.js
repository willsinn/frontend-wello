import React, { useState } from "react";
import { postNewChecklist } from "../actions/checklists";
import { connect } from "react-redux";

const AddChecklist = ({ task, dispatch }) => {
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
    }
  };
  return (
    <div className="add-checklist">
      <form className="add-checklist-form" onSubmit={handleSubmit}>
        <label for="id-checklist">Title</label>
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
  );
};

export default connect()(AddChecklist);
