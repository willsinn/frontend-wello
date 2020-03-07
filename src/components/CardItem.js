import React from "react";

const CardItem = props => {
  console.log(props.card, props.workspace);
  return <div className="card">{props.card.goal}</div>;
};

export default CardItem;
