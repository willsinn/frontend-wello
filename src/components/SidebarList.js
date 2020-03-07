import React from "react";
import ProjectListItem from "./ProjectListItem";
import { connect } from "react-redux";

const SidebarList = (props, { dispatch }) => {
  const renderItems = () => {
    if (props.boards.length > 0) {
      return props.boards.map(board => (
        <li
          key={board.id}
          className="sidebar-li"
          style={{ background: `${board.background}` }}
        >
          <ProjectListItem key={board.id} board={board} />
        </li>
      ));
    }
  };
  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-ul" onMouseLeave={e => props.close(e)}>
        {renderItems()}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ boardsReducer: boards }) => ({
  boards: boards.boards
});
export default connect(mapStateToProps)(SidebarList);
