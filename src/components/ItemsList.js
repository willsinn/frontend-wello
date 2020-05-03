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
    const completed = 0;

    return completed;
  };
  return (
    <div className="checklist-body">
      <div className="checklist-progress">
        <span className="checklist-progress-percentage">
          {renderPercentage()}%
        </span>
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

export default ItemsList;
