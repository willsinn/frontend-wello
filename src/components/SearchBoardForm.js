import React, { useState } from "react";
import { connect } from "react-redux";

const SearchBoardForm = ({ boards, renderSearchResults }) => {
  const [input, setInput] = useState("");

  const filterMatches = (searchVal) => {
    const searchMatches = [];
    boards.forEach((board) => {
      const str = board.title;
      [...str].forEach((char) => {
        if (char === searchVal) {
          const isDuplicate = searchMatches.filter((m) => m.id === board.id);
          if (isDuplicate.length === 0) {
            searchMatches.push(board);
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
    <div className="editing-checklist-item">
      <form className="" style={{ height: "54px" }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          value={input}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    boards: state.boardsReducer.boards,
  };
};
export default connect(mapStateToProps)(SearchBoardForm);
