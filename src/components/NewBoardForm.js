import React, { useState } from "react";
import BoardColorPalette from "./BoardColorPalette";
import { connect } from "react-redux";
import { postNewProject } from "../actions/projects";

const initialTitle = { title: "" };
const initialTeam = { team: "" };

const NewBoardForm = (props, { dispatch }) => {
  const [title, setTitle] = useState(initialTitle);
  const [team, setTeam] = useState(initialTeam);

  const handleChange = e => {
    if (e.target.name === "title") {
      e.persist(e.target.value);
      setTitle(e.target.value);
    }
    if (e.target.name === "team") {
      e.persist(e.target.value);
      setTeam(e.target.value);
    }
  };
  const resetForm = e => {
    setTitle(initialTitle);
    props.closeModal(e);
  };

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      props.dispatch(postNewProject({ title: title }));
      resetForm(e);
    }
  };
  return (
    <form className="board-form" onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        type="text"
        name="title"
        onChange={handleChange}
        className="new-board input"
        placeholder="Add board title"
        data-test-id="create-board-full-name"
        value={title.value}
      />
      <input
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        type="text"
        name="team"
        onChange={handleChange}
        className="new-board input"
        placeholder="add team name"
        data-test-id="create-board-title-input"
        value={team.value}
      />
      <BoardColorPalette />
      <button type="submit" className="submit-new-board-btn">
        Create
      </button>
    </form>
  );
};

export default connect()(NewBoardForm);