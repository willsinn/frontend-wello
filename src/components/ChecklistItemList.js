import React from "react";
import ChecklistItem from "./ChecklistItem";

const ChecklistItemList = ({ items }) => {
  const renderChecklistItems = () => {
    if (items && items.length > 0) {
      return items.map((item) => {
        return <ChecklistItem key={item.id} item={item} />;
      });
    }
  };
  return (
    <div className="checklist-body">
      <div className="checklist-progress">
        <span className="checklist-progress-percentage"></span>
        <div className="checklist-progress-bar"></div>
      </div>
      <div className="checklist-items-list">{renderChecklistItems()}</div>
    </div>
  );
};

export default ChecklistItemList;
