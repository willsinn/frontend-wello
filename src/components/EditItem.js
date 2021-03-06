import React, { useState } from "react";
import { saveItemDetail } from "../actions/checklists";
import { connect } from "react-redux";

const EditItem = ({ editItem, handleCloseEditing, dispatch }) => {
  const [detail, setDetail] = useState(editItem.detail);
  const handleChange = (e) => {
    e.persist(e);
    setDetail(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(saveItemDetail(editItem, detail));
      handleCloseEditing();
    }
  };
  return (
    <div className="editing-checklist-item">
      <div style={{ margin: "4px 0" }}>
        <form className="" style={{ height: "54px" }} onSubmit={handleSubmit}>
          <textarea
            className="edit-item"
            type="text"
            name="detail"
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
          onClick={(e) => handleCloseEditing(e)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default connect()(EditItem);
