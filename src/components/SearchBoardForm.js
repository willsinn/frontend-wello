import React, { useState } from "react";
import { connect } from "react-redux";

const SearchBoardForm = ({ boards, renderSearchResults }) => {
  const [input, setInput] = useState("");

  const filterMatches = (searchVal) => {
    const searchMatches = [];
    boards.forEach((board) => {
      const str = board.title;
      [...str].forEach((char, i) => {
        if (searchVal.length === 1 && char === searchVal) {
          const isDuplicate = searchMatches.filter((m) => m.id === board.id);
          if (isDuplicate.length === 0) {
            searchMatches.push(board);
          }
        }
        if (searchVal.length > 1) {
          const check = str.substring(i, i + searchVal.length + 1);
          if (check === searchVal) {
            const isDuplicate = searchMatches.filter((m) => m.id === board.id);
            if (isDuplicate.length === 0) {
              searchMatches.push(board);
            }
          }
        }
      });
    });
    renderSearchResults([...searchMatches]);
  };
  const handleChange = (e) => {
    if (e) {
      e.persist(e);
      setInput(e.target.value);
      const sVal = e.target.value;
      filterMatches(sVal);
    }
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
  };

  return (
    <form className="search-board-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search-board-input"
        value={input}
        onChange={(e) => handleChange(e)}
        style={{ width: "190px", marginRight: "26px" }}
      />
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    boards: state.boardsReducer.boards,
  };
};
export default connect(mapStateToProps)(SearchBoardForm);
