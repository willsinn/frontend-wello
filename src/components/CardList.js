import React from "react";
import CardItem from "./CardItem";
import AddBoardItem from "../containers/AddBoardItem";
import { setItems } from "../actions/workspace";
import { connect } from "react-redux";

const CardList = props => {
  const renderItems = () => {
    if (props.workspace.items.length > 0) {
      return props.workspace.items.map(item => {
        return <CardItem item={item} workspace={props.workspace} />;
      });
    }
  };
  return (
    <div className="boards-list">
      {renderItems()}
      <AddBoardItem workspace={props.workspace} />
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace,
  items: workspace.items
});

export default connect(mapStateToProps)(CardList);
