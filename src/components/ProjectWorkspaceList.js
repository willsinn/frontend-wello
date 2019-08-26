import React from "react";
import WorkspaceItem from "./WorkspaceItem";
import AddWorkspaceItemForm from "../containers/AddWorkspaceItemForm";
import ItemDeleteBtn from "./ItemDeleteBtn";
import { connect } from "react-redux";

const ProjectWorkspaceList = props => {
  const mapItems = itemsArray => {
    return itemsArray.map(item => {
      return (
        <li className="wsp-list-item">
          <WorkspaceItem item={item} />
          <div className="workspace-item-control">
            <span className="item-control-name">{item.objective}</span>
            <span className="item-control-delete">
              <ItemDeleteBtn />
            </span>
          </div>
        </li>
      );
    });
  };
  const renderItems = () => {
    if (props.workspace.items.length !== undefined) {
      const array = props.workspace.items;
      if (
        props.updatedItem.id !== undefined &&
        props.updatedItem.project_id !== props.workspace.id
      ) {
        const newArray = [...props.workspace.items, props.updatedItem];
        return mapItems(newArray);
      }
      return mapItems(array);
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
