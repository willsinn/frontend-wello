import React from "react";

const Checklist = ({ checklist }) => {
  return (
    <div className="checklist">
      <div className="task-window-desc">
        <div className="module-header">
          <h3 className="module-title">{checklist.title}</h3>
          <button>Hide Completed Items</button>
          <button>Delete</button>
        </div>
        <div className="module-body"></div>
      </div>
    </div>
  );
};

export default Checklist;
