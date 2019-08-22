import React from "react";
import CardItem from "./CardItem";
import AddCardItem from "../containers/AddCardItem";
import { connect } from "react-redux";

const ProjectWorkspaceItem = props => {
  console.log(props.workspace.items.cards);

  const renderCards = () => {
    const renderItem = [...props.workspace.items].filter(
      item => item.id === props.item.id
    );
    console.log(renderItem);
  };
  return (
    <li className="wsp-list-item">
      <div className="wsp-title">{props.item.objective}</div>
      {renderCards()}
      <CardItem />
      <AddCardItem item={props.item} />
    </li>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace
});
export default connect(mapStateToProps)(ProjectWorkspaceItem);
