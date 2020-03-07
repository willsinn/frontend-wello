import React from "react";
import CardItem from "./CardItem";
import AddBoardItem from "../containers/AddBoardItem";
import { setItems } from "../actions/workspace";
import { connect } from "react-redux";

const CardList = props => {
  const renderItems = () => {
    if (props.workspace.cards.length > 0) {
      return props.workspace.cards.map(card => {
        return (
          <div
            className="card-item-wrap"
            key={`board-${props.workspace.id}-${card.id}`}
          >
            <CardItem card={card} workspace={props.workspace} />
          </div>
        );
      });
    }
  };
  return (
    <div className="board-content-wrap">
      <div className="board-content">
        <div className="board-cards">
          {renderItems()}
          <div className="card-item-wrap">
            <AddBoardItem workspace={props.workspace} />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace
});

export default connect(mapStateToProps)(CardList);
