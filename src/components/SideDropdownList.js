import React, { useState } from "react";
import BoardItem from "./BoardItem";
import SearchBoardForm from "./SearchBoardForm";
import { connect } from "react-redux";

const SideDropdownList = ({ boards, sidelist, openModal, closeSidelist }) => {
  const [personal, setPersonal] = useState(false);
  const [starred, setStarred] = useState(true);
  const [searching, setSearching] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [highlight, setHighlight] = useState("");
  const highlightButton = {
    border: "2px solid #026aa7",
    padding: "5px 4px 5px 5px",
  };
  const showBoards = boards.filter((b) => !b.archived);
  const starredBoards = showBoards.filter((board) => board.starred);
  const renderItems = (type, arr) => {
    return arr.map((board) => (
      <li className="sidelist-li" key={`side-${type}-${board.id}`}>
        <BoardItem
          board={board}
          closeSidelist={closeSidelist}
          itemContext={"side"}
        />
      </li>
    ));
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
            {showBoards.length > 0 ? (
              <ul className="sidelist-ul">
                {renderItems("personal", showBoards)}
              </ul>
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
    return (
      <div className="sidelist-control">
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
            {boards.length > 0 ? (
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
  const filterMatches = (searchVal) => {
    if (searchVal === "") setSearching(false);
    if (searchVal) setSearching(true);
    const searchMatches = [];
    showBoards.forEach((board) => {
      const str = board.title;
      [...str].forEach((char, i) => {
        if (searchVal.length === 1 && char === searchVal) {
          const isDuplicate = searchMatches.filter((m) => m.id === board.id);
          if (isDuplicate.length === 0) {
            searchMatches.push(board);
          }
        }
        if (searchVal.length > 1) {
          const check = str.substring(i, i + searchVal.length);
          if (check === searchVal) {
            const isDuplicate = searchMatches.filter((m) => m.id === board.id);
            if (isDuplicate.length === 0) {
              searchMatches.push(board);
            }
          }
        }
      });
    });
    setFiltered(searchMatches);
  };
  console.log(filtered, "side");
  return (
    <div className="sidelist-wrapper">
      <div className="search-cont">
        <SearchBoardForm filterMatches={filterMatches} />
      </div>
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
      <hr />
      {searching ? (
        <div className="sidelist-control">
          <ul className="sidelist-ul">{renderItems("search", filtered)}</ul>
        </div>
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
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  boards: state.boardsReducer.boards,
});
export default connect(mapStateToProps)(SideDropdownList);
