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
  const handleActionClick = (e, callbackAction) => {
    if (e) {
      closeSidelist();
      callbackAction();
    }
  };
  return (
    <div className="sidelist-wrapper">
      <div className="dropdown-title-close">
        <button>
          <span
            className="dropdown-title-close-btn"
            onClick={(e) => closeSidelist(e)}
          >
            ×
          </span>
        </button>
      </div>
      <ul className="sidelist-ul">{renderItems()}</ul>
      <ul className="center-col">
        <li className="option-item" style={{ width: "91.5%" }}>
          <button
            className="option-title js-member-activity active"
            onClick={(e) => handleActionClick(e, () => openModal())}
          >
            <span style={{ textDecoration: "underline" }}>
              Create new board...
            </span>
          </button>
        </li>
        <li className="option-item" style={{ width: "91.5%" }}>
          <button
            className="option-title js-member-activity active"
            onClick={(e) => handleActionClick(e)}
          >
            <span style={{ textDecoration: "underline" }}>
              See archived boards...
            </span>
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
