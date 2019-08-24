import React from "react";
import ProjectWorkspaceItem from "./ProjectWorkspaceItem";
import AddWorkspaceItemForm from "../containers/AddWorkspaceItemForm";
import ItemDeleteBtn from "./ItemDeleteBtn";

import { connect } from "react-redux";

const ProjectWorkspaceList = props => {
  console.log(props.workspace.newCard);
  const renderItems = () => {
    if (props.workspace.items.length !== undefined) {
      return [...props.workspace.items].map(item => (
        <li className="wsp-list-item">
          <ProjectWorkspaceItem
            item={item}
            cards={item.cards}
            newCard={props.workspace.newCard}
          />
          <div className="workspace-item-control">
            <span className="item-control-name">{item.objective}</span>
            <span className="item-control-delete">
              <ItemDeleteBtn />
            </span>
          </div>
        </li>
      ));
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
  workspace: workspace.workspace
});

export default connect(mapStateToProps)(ProjectWorkspaceList);
