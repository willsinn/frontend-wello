import React from "react";

const Checklist = ({ checklist }) => {
  return (
    <div className="checklist">
      <div className="task-window-desc">
        <div className="module-header" style={{ margin: "0 0 4px 40px" }}>
          <h3 className="module-title">{checklist.title}</h3>
          <div className="module-btns">
            <button className="sidebar-btn">Hide Completed Items</button>
            <button className="sidebar-btn">Delete</button>
          </div>
        </div>
        <div className="module-body"></div>
      </div>
    </div>
  );
};

export default Checklist;
