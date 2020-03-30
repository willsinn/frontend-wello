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
      Hi its the QuickTaskEditor
    </div>
  );
};

export default QuickTaskEditor;
