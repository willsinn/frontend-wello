import React from "react";
import BoardItem from "./BoardItem";
import { connect } from "react-redux";

const SideDropdownList = ({ boards, sidelist, openModal, closeSidelist }) => {
  const renderItems = () => {
    if (boards.length > 0) {
      return boards.map((board) => (
        <li className="sidelist-li">
          <BoardItem
            key={`Sideboard-${board.id}`}
            board={board}
            sidelist={sidelist}
            closeSidelist={closeSidelist}
          />
        </li>
      ));
    }
  };
  const handleCreateClick = (e) => {
    if (e) {
      closeSidelist();
      openModal();
    }
  };
  return (
    <div className="sidelist-wrapper">
      <ul className="sidelist-ul">{renderItems()}</ul>
      <ul>
        <li className="option-item" onClick={(e) => handleCreateClick(e)}>
          <button className="option-title js-member-activity active">
            Create new board...
          </button>
        </li>
        <li className="option-item" onClick={(e) => openModal(e)}>
          <button className="option-title js-member-activity active">
            See archived boards...
          </button>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  boards: state.boardsReducer.boards,
});
export default connect(mapStateToProps)(SideDropdownList);
