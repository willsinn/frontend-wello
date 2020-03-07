import React from "react";
import BoardItem from "./BoardItem";
import { connect } from "react-redux";

const SidebarList = (props, { dispatch }) => {
  const renderItems = () => {
    if (props.boards.length > 0) {
      return props.boards.map(board => (
        <li className="sidebar-li">
          <BoardItem
            key={board.id}
            board={board}
            sidebar={props.sidebar}
            closeSidebar={props.closeSidebar}
          />
        </li>
      ));
    }
  };
  return (
    <div className="sidebar-wrapper">
      <ul className="sidebar-ul">{renderItems()}</ul>
    </div>
  );
};
const mapStateToProps = ({ boardsReducer: boards }) => ({
  boards: boards.boards
});
export default connect(mapStateToProps)(SidebarList);
