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
  console.log(task, desc);

  return (
    <div className="task-window-desc">
      <div className="module-header">
        <h3 className="module-title">Description</h3>
        <div className="editable-desc">
          <button className="edit-desc-btn">Edit</button>
        </div>
      </div>

      {!editable ? (
        <div className="module-body" onClick={(e) => setEditable(true)}>
          {!task.task_desc ? (
            <div className="desc-placeholder">
              <p>Add a more detailed description...</p>
            </div>
          ) : (
            <p className="curr-desc">{task.task_desc}</p>
          )}
        </div>
      ) : (
        <div className="editing">
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
          <button onClick={handleSubmit}>Save</button>
        </div>
      )}
    </div>
  );
};
export default connect()(TaskWindowDescription);
