import React from "react";
import BoardItem from "./BoardItem";
import { connect } from "react-redux";

const SideDropdownList = (props, { dispatch }) => {
  const renderItems = () => {
    if (props.boards.length > 0) {
      return props.boards.map(board => (
        <li className="sidelist-li">
          <BoardItem
            key={board.id}
            board={board}
            sidelist={props.sidelist}
            closeSidelist={props.closeSidelist}
          />
        </li>
      ));
    }
  };
  return (
    <div className="sidelist-wrapper">
      <ul className="sidelist-ul">{renderItems()}</ul>
    </div>
  );
};
const mapStateToProps = ({ boardsReducer: boards }) => ({
  boards: boards.boards
});
export default connect(mapStateToProps)(SideDropdownList);
