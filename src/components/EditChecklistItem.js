import React, { useState } from "react";
import { saveItemTitle } from "../actions/checklists";
import { connect } from "react-redux";

const EditChecklistItem = ({ item, handleCloseEditing, dispatch }) => {
  const [detail, setDetail] = useState(item.item);
  const handleChange = (e) => {
    e.persist(e);
    setDetail(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(saveItemTitle(item, detail));
      handleCloseEditing();
    }
  };
  return (
    <div className="editing-checklist-item">
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
            value={detail}
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

export default connect()(EditChecklistItem);
