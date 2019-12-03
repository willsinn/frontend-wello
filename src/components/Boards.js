import React from "react";
import WorkspaceItem from "./WorkspaceItem";
import AddCard from "../containers/AddCard";
import WorkspaceControl from "./WorkspaceControl";
import { setItems } from "../actions/workspace";
import { connect } from "react-redux";

const WorkspaceList = props => {
  const mapItems = array =>
    array.map(item => (
      <li
        key={`project${item.id}${props.workspace.id}`}
        className="wsp-list-item"
      >
        <WorkspaceItem item={item} workspace={props.workspace} />
        <WorkspaceControl item={item} workspace={props.workspace} />
      </li>
    ));

  const renderItems = () => {
    if (props.items.length !== 0) {
      const items = props.items;
      return mapItems(items);
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
            <AddCard workspace={props.workspace} />
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

export default connect(mapStateToProps)(WorkspaceList);