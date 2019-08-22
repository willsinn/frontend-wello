import React from "react";
import CardItem from "./CardItem";

const ProjectWorkspaceItem = props => {
  const renderCards = () => {
    return props.item.cards.map(card => <CardItem card={card} />);
  };
  console.log(props.item.cards);
  return (
    <div className="wsp-title-wrapper">
      <div className="wsp-title">
        {props.item.objective}
        {renderCards()}
      </div>
    </div>
  );
};

export default ProjectWorkspaceItem;
