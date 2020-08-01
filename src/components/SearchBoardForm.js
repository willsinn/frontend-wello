import React, { useState } from "react";
import { connect } from "react-redux";

const SearchBoardForm = ({ boards }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    e.persist(e);
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
  };
  console.log(input);
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
