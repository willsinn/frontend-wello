import React from "react";
import BoardItemCard from "./BoardItemCard";
import AddCardMessage from "../containers/AddCardMessage";

const BoardItemDeck = props => {
  const mapItems = () =>
    props.items.map(item => (
      <div className="board-item" key={item.id}>
        <div className="wsp-title">
          <BoardItemCard item={item} workspace={props.workspace} />
          <AddCardMessage key={item.id} item={item} />
        </div>
      </div>
    ));

  return <div className="card">{mapItems()}</div>;
};

export default BoardItemDeck;
