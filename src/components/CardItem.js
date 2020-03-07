import React from "react";

const CardItem = props => {
  console.log(props.item, props.workspace);
  return <div className="card">{props.objective}</div>;
};

export default CardItem;
