import React from "react";
import ProjectWorkspaceCard from "./ProjectWorkspaceCard";
import { connect } from "react-redux";

const ProjectWorkspaceList = props => {
  console.log(props.items);
  const renderCards = () => {
    if (props.items.length > 0) {
      return [...props.items].map(item => <ProjectWorkspaceCard item={item} />);
    }
  };
  return <ul className="workspace-list">{renderCards()}</ul>;
};
const mapStateToProps = ({ workspaceReducer: workspace }) => ({
  items: workspace.workspace.items
});
export default connect(mapStateToProps)(ProjectWorkspaceList);
