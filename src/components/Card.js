import React from "react";
import EditingForm from "./EditingForm";

const Card = props => {
  console.log(props.card);
  return <div className="card">{props.card.subject}</div>;
};
export default Card;
