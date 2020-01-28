import React from "react";
import BoardItemDeck from "./BoardItemDeck";
import AddBoardItem from "../containers/AddBoardItem";
import { setItems } from "../actions/workspace";
import { connect } from "react-redux";

const BoardItemList = props => {
  const renderItems = () => {
    if (props.items.length !== 0) {
      return <BoardItemDeck items={props.items} workspace={props.workspace} />;
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

export default connect(mapStateToProps)(BoardItemList);
