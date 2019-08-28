import React from "react";
import WorkspaceItem from "./WorkspaceItem";
import AddWorkspaceItemForm from "../containers/AddWorkspaceItemForm";
import ItemDeleteBtn from "./ItemDeleteBtn";
import { setItems } from "../actions/workspace";
import { connect } from "react-redux";

const ProjectWorkspaceList = props => {
  const mapItems = array =>
    props.items.map(item => (
      <li
        key={`project${item.id}${props.workspace.id}`}
        className="wsp-list-item"
      >
        <WorkspaceItem item={item} />
        <div className="workspace-item-control">
          <span className="item-control-name">{item.objective}</span>
          <span className="item-control-delete">
            <ItemDeleteBtn />
          </span>
        </div>
      </li>
    ));
  const renderItems = () => {
    if (props.items.length !== 0) {
      return mapItems(props.items);
    }
    if (props.workspace.items.length !== undefined) {
      props.dispatch(setItems(props.workspace.items));
      return mapItems(props.workspace.items);
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
  items: workspace.items
});

export default connect(mapStateToProps)(ProjectWorkspaceList);
