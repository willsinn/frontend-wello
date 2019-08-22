import React from "react";
import ProjectWorkspaceItem from "./ProjectWorkspaceItem";
import AddWorkspaceItemForm from "../containers/AddWorkspaceItemForm";
import AddCardItem from "../containers/AddCardItem";
import { connect } from "react-redux";

const ProjectWorkspaceList = props => {
  console.log(props.workspace.items);
  const renderItems = () => {
    if (props.workspace.items.length !== undefined) {
      return props.workspace.items.map(item => (
        <li className="wsp-list-item">
          <AddCardItem item={item} />
          <ProjectWorkspaceItem item={item} cards={item.cards} />
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
