import React from "react";
import ProjectWorkspaceItem from "./ProjectWorkspaceItem";
import AddWorkspaceItemForm from "../containers/AddWorkspaceItemForm";
import ItemDeleteBtn from "./ItemDeleteBtn";
import { connect } from "react-redux";

const ProjectWorkspaceList = props => {
  const mapItems = itemsArray => {
    return itemsArray.map(item => (
      <li className="wsp-list-item">
        <ProjectWorkspaceItem item={item} cards={item.cards} />
        <div className="workspace-item-control">
          <span className="item-control-name">{item.objective}</span>
          <span className="item-control-delete">
            <ItemDeleteBtn />
          </span>
        </div>
      </li>
    ));
  };
  const renderItems = () => {
    console.log(props.workspace.items);
    if (props.workspace.items.length !== undefined) {
      const array = [...props.workspace.items];
      if (props.updatedItem.id === undefined) {
        return mapItems(array);
      } else {
        const updated = [...array, props.updatedItem];
        return mapItems(updated);
      }
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
  updatedItem: workspace.updatedItem,
  editingCard: workspace.editingCard
});

export default connect(mapStateToProps)(ProjectWorkspaceList);
