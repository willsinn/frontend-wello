import React from "react";
import AddCardMessage from "../containers/AddCardMessage";
import CardsList from "./CardsList";
import { connect } from "react-redux";

const WorkspaceItem = props => {
  // const updateCards = () => {
  //   // if (props.updatedItem.id === undefined) {
  //   console.log(props.item);
  //   return (
  //
  //
  //   // } else if (props.updatedItem.id !== undefined) {
  //   //   if (props.item.id !== props.updatedItem.id) {
  //   //     return <CardsList key={`one${props.item.id}`} item={props.item} />;
  //   //   }
  //   //   console.log(props.updatedItem, props.item);
  //   //   if (props.item.id === props.updatedItem.id) {
  //   //     return (
  //   //       <CardsList
  //   //         key={`one${props.updatedItem.id}`}
  //   //         item={props.updatedItem}
  //   //       />
  //   //     );
  //   //   }
  //   // }
  // };
  return (
    <div className="wsp-title-wrapper">
      <CardsList
        key={`one${props.item.id}`}
        item={props.item}
        cards={props.item.cards}
      />
      <AddCardMessage key={props.item.id} item={props.item} />
    </div>
  );
};

export default WorkspaceItem;
