import React, { useState } from "react";
import Item from "../containers/Item";

const ItemsList = ({ items }) => {
  const [hovering, setHovering] = useState({ id: undefined });
  const [editItem, setEditItem] = useState({});
  const [menu, setMenu] = useState({});
  const renderMenu = (item) => {
    setMenu(item);
  };
  const closeMenu = () => {
    setMenu({});
  };
  const handleHoveringItem = (e, tarItem) => {
    setHovering({ id: tarItem.id });
  };
  const handleEditing = (item) => {
    setEditItem(item);
  };
  const handleCloseEditing = (e) => {
    setEditItem({});
    setMenu({});
  };
  const renderChecklistItems = () => {
    if (items.length > 0) {
      return items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            hovering={hovering}
            editItem={editItem}
            menu={menu}
            handleEditing={handleEditing}
            handleHoveringItem={handleHoveringItem}
            handleCloseEditing={handleCloseEditing}
            closeMenu={closeMenu}
            renderMenu={renderMenu}
          />
        );
      });
    }
  };
  const renderPercentage = () => {
    let correctCount = 0;

    if (items.length > 0) {
      items.forEach((item) => {
        if (item.completed) {
          correctCount++;
        }
      });
    }
    const percent = correctCount / items.length;
    return Math.trunc(percent * 100);
  };
  return (
    <div className="checklist-body">
      <div className="checklist-progress">
        <span className="checklist-progress-percentage">
          {renderPercentage()}%
        </span>
        <div className="checklist-progress-bar">
          {renderPercentage() === 100 ? (
            <div className="finished-progress"></div>
          ) : (
            <div
              className="percentage-progress"
              style={{ width: `${renderPercentage()}%` }}
            ></div>
          )}
        </div>
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

export default ItemsList;
