import React, { useState } from "react";

const SearchBoardForm = ({ filterMatches }) => {
  const [input, setInput] = useState("");

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
  return (
    <div className="search-cont">
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
    </div>
  );
};

export default SearchBoardForm;
