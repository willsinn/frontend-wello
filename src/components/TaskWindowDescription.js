import React, { useState } from "react";
import { connect } from "react-redux";

const TaskWindowDescription = ({ taskDesc }) => {
  const [desc, setDesc] = useState({});
  console.log(desc);

  return (
    <div className="task-window-desc">
      <div className="module-header">
        <h3 className="module-title">Description</h3>
        <div className="editable-desc">
          <button className="edit-desc-btn">Edit</button>
        </div>
      </div>

      {desc ? (
        <div className="module-body" onClick={(e) => setDesc("")}>
          {!taskDesc ? (
            <div className="desc-placeholder">
              <p>Add a more detailed description...</p>
            </div>
          ) : (
            { taskDesc }
          )}
        </div>
      ) : (
        console.log("exists")
      )}
    </div>
  );
};
export default connect()(TaskWindowDescription);
