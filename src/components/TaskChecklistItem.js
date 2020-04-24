import React from "react";

const TaskChecklistItem = ({ checklist }) => {
  return (
    <div className="task-window-desc">
      <div className="module-header">
        <h3 className="module-title">{checklist.title}</h3>
      </div>
    </div>
  );
};

export default TaskChecklistItem;
