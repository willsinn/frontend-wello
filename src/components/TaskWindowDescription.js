import React, { useState } from "react";
import { saveTaskDesc } from "../actions/workspace";

import { connect } from "react-redux";

const TaskWindowDescription = ({ task, dispatch }) => {
  const [desc, setDesc] = useState(task.task_desc);
  const [editable, setEditable] = useState(false);
  const handleChange = (e) => {
    e.persist(e);
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(saveTaskDesc(task, desc));
      setEditable(false);
    }
  };
  const handleExitEditable = (e) => {
    setEditable(false);
    setDesc(task.task_desc);
  };
  console.log(task, desc);

  return (
    <div className="task-window-desc">
      <div className="module-header">
        <h3 className="module-title">Description</h3>
        {desc && !editable ? (
          <div className="editable-desc" onClick={(e) => setEditable(true)}>
            <button className="edit-desc-btn">Edit</button>
          </div>
        ) : null}
      </div>

      {!editable ? (
        <div className="module-body" onClick={(e) => setEditable(true)}>
          {!desc ? (
            <div className="desc-placeholder">
              <p>Add a more detailed description...</p>
            </div>
          ) : (
            <p className="curr-desc">{desc}</p>
          )}
        </div>
      ) : (
        <div className="editing">
          <div>
            <form className="description-form" onSubmit={handleSubmit}>
              <textarea
                className="description-field"
                placeholder="Add a more detailed description…"
                type="text"
                name="desc"
                value={desc}
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
      )}
    </div>
  );
};
export default connect()(TaskWindowDescription);
