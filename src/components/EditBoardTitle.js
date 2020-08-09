import React, { useState } from "react";
import { connect } from "react-redux";
import { updateBoardTitle } from "../actions/workspace";

const EditBoardTitle = ({ workspace, handleCloseEdit, dispatch }) => {
  const [title, setTitle] = useState(workspace.title);
  const handleChange = (e) => {
    e.persist();
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(updateBoardTitle({ workspace: workspace, title: title }));
    handleCloseEdit();
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
export default connect()(EditBoardTitle);
