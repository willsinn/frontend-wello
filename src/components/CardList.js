import React from "react";
import CardItem from "./CardItem";
import AddBoardItem from "../containers/AddBoardItem";
import { setItems } from "../actions/workspace";
import { connect } from "react-redux";

const CardList = props => {
  const renderItems = () => {
    if (props.workspace.cards.length > 0) {
      return props.workspace.cards.map(card => {
        return <CardItem card={card} workspace={props.workspace} />;
      });
    }
  };
  console.log(props.workspace);
  return (
    <div className="boards-list">
      {renderItems()}
      <AddBoardItem workspace={props.workspace} />
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace
});

export default connect(mapStateToProps)(CardList);
