import React from "react";
import BoardItemCard from "./BoardItemCard";
import CardsList from "./CardsList";
import AddCardMessage from "../containers/AddCardMessage";
import AddCard from "../containers/AddCard";
import WorkspaceControl from "./WorkspaceControl";
import { setItems } from "../actions/workspace";
import { connect } from "react-redux";

const BoardItemDeck = props => {
  const mapItems = array =>
    array.map(item => (
      <div className="board-item" key={item.id}>
        <BoardItemCard item={item} workspace={props.workspace} />
        <CardsList key={`one${item.id}`} item={item} />
        <AddCardMessage key={item.id} item={item} />
      </div>
    ));

  const renderItems = () => {
    if (props.items.length !== 0) {
      const items = props.items;
      return mapItems(items);
    }
    console.log(props);
    if (props.workspace.items.length !== undefined) {
      props.dispatch(setItems(props.workspace.items));
      return mapItems(props.workspace.items);
    }
  };

  return (
    <div className="boards-list">
      {renderItems()}
      <div className="wsp-list-item">
        <div className="wsp-title">
          <AddCard workspace={props.workspace} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  workspace: workspace.workspace,
  items: workspace.items
});

export default connect(mapStateToProps)(BoardItemDeck);
