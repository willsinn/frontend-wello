import React from "react";
import ProjectWorkspaceItem from "./ProjectWorkspaceItem";
import AddWorkspaceItemForm from "../containers/AddWorkspaceItemForm";
import ItemDeleteBtn from "./ItemDeleteBtn";

import { connect } from "react-redux";

const ProjectWorkspaceList = props => {
  const renderItems = () => {
    if (props.workspace.items.length !== undefined) {
      return [...props.workspace.items].map(item => {
        if (
          props.updatedItem.id !== undefined &&
          item.id === props.updatedItem.id
        ) {
          return (
            <li className="wsp-list-item">
              <ProjectWorkspaceItem
                item={item}
                updatedItem={props.updatedItem}
                updatedCards={props.updatedItem.cards}
              />
              <div className="workspace-item-control">
                <span className="item-control-name">{item.objective}</span>
                <span className="item-control-delete">
                  <ItemDeleteBtn />
                </span>
              </div>
            </li>
          );
        } else {
          return (
            <li className="wsp-list-item">
              <ProjectWorkspaceItem item={item} cards={item.cards} />
              <div className="workspace-item-control">
                <span className="item-control-name">{item.objective}</span>
                <span className="item-control-delete">
                  <ItemDeleteBtn />
                </span>
              </div>
            </li>
          );
        }
      });
    }
  };
  return (
    <div className="workspace-list-wrapper">
      <ul className="workspace-list">
        {renderItems()}
        <li className="wsp-list-item">
          <div className="wsp-title">
            <AddWorkspaceItemForm workspace={props.workspace} />
          </div>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace,
  updatedItem: workspace.updatedItem
});

export default connect(mapStateToProps)(ProjectWorkspaceList);
