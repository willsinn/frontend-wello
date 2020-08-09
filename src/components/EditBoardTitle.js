import React, { useState } from "react";

const EditBoardTitle = ({ currTitle }) => {
  const [title, setTitle] = useState(currTitle);
  const handleChange = (e) => {
    e.persist();
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    debugger;
  };
  return (
    <form className="edit-title form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className="edit-title input"
        value={title}
      />
    </form>
  );
};
export default EditBoardTitle;
