import React, { useState } from "react";
import { connect } from "react-redux";
import { postWorkspaceItem } from "../actions/workspace";

const initialFullname = { fullname: "" };
const initialTeam = { team: "" };

const NewBoardForm = (props, { dispatch }) => {
  const [fullname, setFullname] = useState(initialFullname);
  const [team, setTeam] = useState(initialTeam);

  const handleChange = e => {
    if (e.target.name === "fullname") {
      e.persist(e.target.value);
      setFullname(e.target.value);
    }
    if (e.target.name === "team") {
      e.persist(e.target.value);
      setTeam(e.target.value);
    }
  };
  console.log(fullname);
  return (
    <form className="board-form">
      <input
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        type="text"
        name="fullname"
        onChange={handleChange}
        className="new-board-input"
        placeholder="Add board title"
        data-test-id="create-board-full-name"
        value={fullname.value}
      />
      <input
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        type="text"
        name="team"
        onChange={e => handleChange(e)}
        className="new-board-input"
        placeholder="add team name"
        data-test-id="create-board-title-input"
        value={team.value}
      />
      <button type="submit" className="new-board-input">
        Create
      </button>
    </form>
  );
};

export default NewBoardForm;
