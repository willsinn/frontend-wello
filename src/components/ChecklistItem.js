import React from "react";

const ChecklistItem = ({ item }) => {
  console.log("c", item);

  return (
    <div className="checklist-item">
      <div className="checklist-item-check-box"></div>
      <div className="checklist-item-details">
        <div className="checklist-item-row">
          <div className="checklist-item-text-and-controls checklist-item-details">
            <span className="checklist-item-details-text">{item.item}</span>
            <div class="checklist-item-controls">
              <div class="checklist-item-menu js-open-menu">
                <span class="checklist-icon-sm icon-sm icon-overflow-menu-horizontal">
                  ...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistItem;
