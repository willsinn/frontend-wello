import React, { useState } from "react";
import { connect } from "react-redux";

const TaskWindowDescription = ({ taskDesc }) => {
  const [desc, setDesc] = useState(taskDesc);
  const [editable, setEditable] = useState(false);
  const handleChange = (e) => {
    e.persist(e);
    setDesc(e.target.value);
  };
  const handleSave = (e) => {
    if (e) {
      e.preventDefault();
    }
  };

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
          {!taskDesc ? (
            <div className="desc-placeholder">
              <p>Add a more detailed description...</p>
            </div>
          ) : (
            { taskDesc }
          )}
        </div>
      ) : (
        <div className="editing">
          <form>
            <textarea
              className="description-field"
              placeholder="Add a more detailed description…"
              type="text"
              name="desc"
              value={desc}
              onChange={(e) => handleChange(e)}
            />
          </form>
          <button onClick={(e) => handleSave()}>Save</button>
        </div>
      )}
    </div>
  );
};
export default connect()(TaskWindowDescription);
