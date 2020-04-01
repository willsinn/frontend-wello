import React from "react";

const QuickTaskEditor = props => {
  return (
    <div className="quick-task-editor">
      <span
        className="close-quick-editor-icon"
        onClick={e => props.closeQuickEditor(e)}
      >
        ✕
      </span>
      <div className="quick-edit-wrap">
        <div className="quick-edit-task">
          <div className="quick-edit-details">Hi its the QuickTaskEditor</div>
        </div>
      </div>
    </div>
  );
};

export default QuickTaskEditor;
