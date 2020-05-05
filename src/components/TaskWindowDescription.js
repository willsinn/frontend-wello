import React, { useState } from "react";
import { saveTaskDesc } from "../actions/workspace";

import { connect } from "react-redux";

const TaskWindowDescription = ({ editTask, dispatch }) => {
  const [desc, setDesc] = useState(editTask.task_desc);
  const [editable, setEditable] = useState(false);
  const handleChange = (e) => {
    e.persist(e);
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(saveTaskDesc(editTask, desc));
      setEditable(false);
    }
  };
  const handleExitEditable = (e) => {
    setEditable(false);
    setDesc(editTask.task_desc);
  };
  return (
    <div className="task-window-desc">
      <div className="module-header">
        <span className="desc-icon" />
        <h3 className="module-title">Description</h3>
        <div className="editable-desc">
          {desc.length > 0 && !editable ? (
            <button
              className="edit-desc-btn"
              onClick={(e) => setEditable(true)}
            >
              Edit
            </button>
          ) : null}
        </div>
      </div>

      {!editable ? (
        <div className="module-body">
          {desc.length > 0 ? (
            <p className="curr-desc" onClick={(e) => setEditable(true)}>
              {desc}
            </p>
          ) : (
            <div className="desc-placeholder">
              <p onClick={(e) => setEditable(true)}>
                Add a more detailed description...
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="editing">
          <form className="description-form" onSubmit={handleSubmit}>
            <textarea
              className="description-field"
              type="text"
              name="desc"
              value={desc}
              onChange={(e) => handleChange(e)}
            />
          </form>
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
      )}
    </div>
  );
};
export default connect()(TaskWindowDescription);
