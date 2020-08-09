import React, { useState } from "react";
import { connect } from "react-redux";

const SearchBoardForm = ({ boards, filterMatches }) => {
  const [input, setInput] = useState("");

  // const filterMatches = (searchVal) => {
  //   const searchMatches = [];
  //   boards.forEach((board) => {
  //     const str = board.title;
  //     [...str].forEach((char, i) => {
  //       if (searchVal.length === 1 && char === searchVal) {
  //         const isDuplicate = searchMatches.filter((m) => m.id === board.id);
  //         if (isDuplicate.length === 0) {
  //           searchMatches.push(board);
  //         }
  //       }
  //       if (searchVal.length > 1) {
  //         const check = str.substring(i, i + searchVal.length + 1);
  //         if (check === searchVal) {
  //           const isDuplicate = searchMatches.filter((m) => m.id === board.id);
  //           if (isDuplicate.length === 0) {
  //             searchMatches.push(board);
  //           }
  //         }
  //       }
  //     });
  //   });
  //   renderSearchResults([...searchMatches]);
  // };

  const handleChange = (e) => {
    if (e) {
      e.persist(e);
      setInput(e.target.value);
      filterMatches(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
  };
  console.log(input);
  return (
    <form
      className="search-board-form"
      onSubmit={handleSubmit}
      style={{ marginTop: "8px" }}
    >
      <input
        type="text"
        name="search-board-input"
        placeholder="Find boards by name..."
        value={input}
        onChange={(e) => handleChange(e)}
        style={{
          backgroundColor: "#fafbfc",
          border: "none",
          boxShadow: "inset 0 0 0 2px #dfe1e6",
          color: "#172b4d",
          boxSizing: "border-box",
          borderRadius: "3px",
          display: "block",
          lineHeight: "20px",
          marginBottom: "12px",
          padding: "8px 12px",
          width: "200px",
          marginRight: "26px",
          height: "30px",
        }}
      />
    </form>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     boards: state.boardsReducer.boards,
//   };
// };
export default connect()(SearchBoardForm);
