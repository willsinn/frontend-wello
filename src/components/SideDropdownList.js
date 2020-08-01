import React, { useState } from "react";
import BoardItem from "./BoardItem";
import SearchBoardForm from "./SearchBoardForm";
import { connect } from "react-redux";

const SideDropdownList = ({ boards, sidelist, openModal, closeSidelist }) => {
  const [personal, setPersonal] = useState(true);
  const [starred, setStarred] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [highlight, setHighlight] = useState("");
  const highlightButton = {
    border: "2px solid #3b00ff",
    padding: "5px 4px 5px 5px",
  };
  const renderItems = (type, arr) => {
    if (boards.length > 0) {
      return arr.map((board) => (
        <li className="sidelist-li" key={`side-${type}-${board.id}`}>
          <BoardItem
            board={board}
            closeSidelist={closeSidelist}
            itemContext={"side"}
          />
        </li>
      ));
    }
  };
  const renderSearchResults = (arr) => {
    setFiltered([...arr]);
  };
  const handleActionClick = (e, callbackAction) => {
    if (e) {
      closeSidelist();
      callbackAction();
    }
  };
  const handleExpandClick = (e, type) => {
    if (e) {
      if (type === "starred") {
        setStarred(!starred);
      } else {
        setPersonal(!personal);
      }
      setHighlight(type);
    }
  };
  const renderPersonal = () => {
    return (
      <div className="sidelist-control">
        <div>
          <i className="fa fa-user side-icon" aria-hidden="true"></i>
          Personal Boards
        </div>
        <button
          className="sidelist-control-btn"
          onClick={(e) => handleExpandClick(e, "personal")}
          style={highlight === "personal" ? highlightButton : null}
        >
          <div className="side-ctrl-btn-wrap">
            {personal ? (
              <span className="side-ctrl-btn-txt">-</span>
            ) : (
              <span className="side-ctrl-btn-txt">+</span>
            )}
          </div>
        </button>
        {personal ? (
          <>
            {boards.length > 0 ? (
              <ul className="sidelist-ul">{renderItems("personal", boards)}</ul>
            ) : (
              <div className="elm-container">
                <div className="empty-list-message">
                  A compilation of boards created by you.
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
    );
  };
  const renderStarred = () => {
    const starredBoards = boards.filter((board) => board.starred === true);
    return (
      <div className="sidelist-control" style={{ marginTop: "40px" }}>
        <div>
          <i className="fa fa-star-o side-icon" aria-hidden="true"></i>
          Starred Boards
        </div>
        <button
          className="sidelist-control-btn"
          onClick={(e) => handleExpandClick(e, "starred")}
          style={highlight === "starred" ? highlightButton : null}
        >
          <div className="side-ctrl-btn-wrap">
            {starred ? (
              <span className="side-ctrl-btn-txt">-</span>
            ) : (
              <span className="side-ctrl-btn-txt">+</span>
            )}
          </div>
        </button>
        {starred ? (
          <>
            {starredBoards.length > 0 ? (
              <ul className="sidelist-ul">
                {renderItems("starred", starredBoards)}
              </ul>
            ) : (
              <div className="elm-container">
                <div className="empty-list-message">
                  Star your most important boards to keep them right at your
                  fingertips.
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
    );
  };
  console.log(filtered, "side");
  return (
    <div className="sidelist-wrapper">
      <SearchBoardForm renderSearchResults={renderSearchResults} />
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
      {filtered.length > 0 ? (
        <ul className="sidelist-ul">{renderItems("search", filtered)}</ul>
      ) : (
        <>
          {renderStarred()}
          {renderPersonal()}
        </>
      )}
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
