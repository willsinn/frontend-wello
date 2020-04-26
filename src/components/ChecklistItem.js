import React, { useState } from "react";
import EditChecklistItem from "./EditChecklistItem";

const ChecklistItem = ({
  item,
  hovering,
  editing,
  menu,
  handleHoveringItem,
  handleEditing,
  handleCloseEditing,
  renderMenu,
}) => {
  return (
    <div
      className="checklist-item"
      onMouseEnter={(e) => handleHoveringItem(e, item)}
    >
      <div className="checklist-item-check-box"></div>
      <div className="checklist-item-details">
        <div className="checklist-item-row">
          {editing.id === item.id ? (
            <EditChecklistItem
              item={item}
              editing={editing}
              handleCloseEditing={handleCloseEditing}
            />
          ) : (
            <div
              className="checklist-item-text-and-controls checklist-item-details"
              onClick={(e) => handleEditing(e, item)}
            >
              <span className="checklist-item-details-text">{item.item}</span>
            </div>
          )}
          <div>
            {hovering.id === item.id ? (
              <div
                className="checklist-item-controls"
                onClick={(e) => renderMenu(item)}
              >
                <div className="checklist-item-menu js-open-menu">
                  <span className="checklist-icon-sm icon-sm icon-overflow-menu-horizontal">
                    ...
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {menu.id && menu.id === item.id ? (
        <div className="checklist-menu">{menu.item}</div>
      ) : null}
    </div>
  );
};

export default ChecklistItem;
