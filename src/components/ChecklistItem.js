import React from "react";

const ChecklistItem = ({ item, hovering, handleHoveringItem }) => {
  console.log("c", item, hovering);

  return (
    <div
      className="checklist-item"
      onMouseEnter={(e) => handleHoveringItem(e, item)}
    >
      <div className="checklist-item-check-box"></div>
      <div className="checklist-item-details">
        <div className="checklist-item-row">
          <div className="checklist-item-text-and-controls checklist-item-details">
            <span className="checklist-item-details-text">{item.item}</span>
          </div>
          <div>
            {hovering.id === item.id ? (
              <div class="checklist-item-controls">
                <div class="checklist-item-menu js-open-menu">
                  <span class="checklist-icon-sm icon-sm icon-overflow-menu-horizontal">
                    ...
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistItem;
