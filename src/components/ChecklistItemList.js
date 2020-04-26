import React, { useState } from "react";
import ChecklistItem from "./ChecklistItem";

const ChecklistItemList = ({ items }) => {
  const [hovering, setHovering] = useState({ id: undefined });
  const [editing, setEditing] = useState({});
  const handleHoveringItem = (e, tarItem) => {
    setHovering({ id: tarItem.id });
  };
  const handleEditing = (e, item) => {
    setEditing(item);
  };
  const renderChecklistItems = () => {
    if (items && items.length > 0) {
      return items.map((item) => {
        return (
          <ChecklistItem
            key={item.id}
            item={item}
            hovering={hovering}
            editing={editing}
            handleEditing={handleEditing}
            handleHoveringItem={handleHoveringItem}
          />
        );
      });
    }
  };
  return (
    <div className="checklist-body">
      <div className="checklist-progress">
        <span className="checklist-progress-percentage"></span>
        <div className="checklist-progress-bar"></div>
      </div>
      <div
        className="checklist-items-list"
        onMouseLeave={(e) => setHovering({ id: undefined })}
      >
        {renderChecklistItems()}
      </div>
    </div>
  );
};

export default ChecklistItemList;
