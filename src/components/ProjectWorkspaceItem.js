import React from "react";
import CardItem from "./CardItem";

const ProjectWorkspaceItem = props => {
  const renderCards = () => {
    return props.cards.map(card => <CardItem card={card} />);
  };
  console.log(props.cards.length);
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
