import React from "react";
import CardItem from "./CardItem";
import AddCardItem from "../containers/AddCardItem";

const ProjectWorkspaceItem = props => {
  return (
    <li className="wsp-list-item">
      <div className="wsp-title">{props.item.objective}</div>
      <CardItem />
      <AddCardItem item={props.item} />
    </li>
  );
};
export default ProjectWorkspaceItem;
