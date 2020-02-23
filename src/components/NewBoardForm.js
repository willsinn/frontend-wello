import React, { useState } from "react";
import BgPalette from "./BgPalette";
import { connect } from "react-redux";
import { postNewBoard } from "../actions/boards";

const initialTitle = "";
const initialTeam = "";
const initialBackground = "lightblue";

const NewBoardForm = (props, { dispatch }) => {
  const [title, setTitle] = useState(initialTitle);
  const [team, setTeam] = useState(initialTeam);
  const [background, setBackground] = useState(initialBackground);

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
  const handleChangeBg = e => {
    if (e) {
      setBackground(e.target.value);
    }
  };
  const resetForm = e => {
    setTitle(initialTitle);
    setTitle(initialTeam);
    setTitle(initialBackground);
    props.closeModal(e);
  };

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      console.log(title, background);
      props.dispatch(postNewBoard({ title, background, team }));
      resetForm(e);
    }
  };
  return (
    <div className="modal-content" style={{ background: `${background}` }}>
      <form className="board-form" onSubmit={e => handleSubmit(e)}>
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
        {title.length === undefined || title.length === 0 ? (
          <button
            type="submit"
            className="disabled submit-new-board-btn"
            disabled
          >
            Create Board
          </button>
        ) : (
          <button
            type="submit"
            style={{ background: "green", transition: ".5s" }}
            className="submit-new-board-btn"
          >
            Create Board
          </button>
        )}
      </form>
      <BgPalette handleChangeBg={handleChangeBg} />
    </div>
  );
};

export default connect()(NewBoardForm);
