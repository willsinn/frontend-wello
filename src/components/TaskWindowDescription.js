import React, { useState } from "react";
import { connect } from "react-redux";

const TaskWindowDescription = ({ taskDesc }) => {
  const [editable, setEditable] = useState({});
  return (
    <div className="task-window-desc">
      <div className="module-header">
        <h3 className="module-title">Description</h3>
        <div className="editable-desc">
          <button className="edit-desc-btn">Edit</button>
        </div>
      </div>

      {editable ? (
        <div className="module-body" onClick={(e) => setEditable("")}>
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
            />
          </form>
        </div>
      )}
    </div>
  );
};
export default connect()(TaskWindowDescription);
