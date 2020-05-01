import React from "react";
import EditItem from "../components/EditItem";
import { deleteItem } from "../actions/checklists";
import { connect } from "react-redux";

const Item = ({
  item,
  hovering,
  editItem,
  menu,
  handleHoveringItem,
  handleEditing,
  handleCloseEditing,
  closeMenu,
  renderMenu,
  dispatch,
}) => {
  const handleDelete = () => {
    closeMenu();
    dispatch(deleteItem(item));
  };
  return (
    <div
      className="checklist-item"
      onMouseEnter={(e) => handleHoveringItem(e, item)}
    >
      <div className="checklist-item-check-box"></div>
      <div className="checklist-item-details">
        <div className="checklist-item-row">
          {editItem.id && item.id === editItem.id ? (
            <EditItem
              editItem={editItem}
              handleCloseEditing={handleCloseEditing}
            />
          ) : (
            <div
              className="checklist-item-text-and-controls checklist-item-details"
              onClick={(e) => handleEditing(item)}
            >
              <span className="checklist-item-details-text">{item.detail}</span>
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
            {menu.id === item.id ? (
              <div className="checklist-menu">
                <div className="side-popover-header-title">Item Actions</div>
                <div className="checklist-menu-body">
                  <div className="checklist-menu-item">
                    <span className="checklist-menu-item-text">
                      Convert to Card
                    </span>
                  </div>
                  <div
                    className="checklist-menu-item"
                    onClick={(e) => handleDelete()}
                  >
                    <span className="checklist-menu-item-text">Delete</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(Item);
