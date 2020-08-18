import React, { useState } from "react";
import BgPalette from "../components/BgPalette";
import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import City from "../images/city.jpeg";
import Iceland from "../images/iceland.jpg";
import Meadow from "../images/meadow.jpg";
import Waterfall from "../images/waterfall.jpeg";
import Beach from "../images/beach.jpg";
import Autumn from "../images/autumn.jpg";
import { connect } from "react-redux";
import { postNewBoard } from "../actions/boards";

const initialTitle = "";
const initialTeam = "";
const initialBackground = "iceland";

const AddBoardForm = ({ user, modal, closeModal, dispatch }) => {
  const [title, setTitle] = useState(initialTitle);
  const [team, setTeam] = useState(initialTeam);
  const [background, setBackground] = useState(initialBackground);

  const handleChange = (e) => {
    if (e.target.name === "title") {
      e.persist(e.target.value);
      setTitle(e.target.value);
    }
    if (e.target.name === "team") {
      e.persist(e.target.value);
      setTeam(e.target.value);
    }
  };
  const handleChangeBg = (e) => {
    if (e) {
      setBackground(e.target.value);
    }
  };
  const resetForm = (e) => {
    setTitle(initialTitle);
    setTeam(initialTeam);
    setBackground(initialBackground);
    closeModal(e);
    e.target.firstElementChild.value = "";
    e.target.elements[1].value = "";
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(postNewBoard({ board: { title, background, team }, user }));
      resetForm(e);
    }
  };
  const selectBg = () => {
    switch (background) {
      case "lake":
        return { backgroundImage: `url(${Lake})` };
      case "mountians":
        return { backgroundImage: `url(${Mountians})` };
      case "cityscape":
        return { backgroundImage: `url(${Cityscape})` };
      case "beach":
        return { backgroundImage: `url(${Beach})` };
      case "autumn":
        return { backgroundImage: `url(${Autumn})` };
      case "waterfall":
        return { backgroundImage: `url(${Waterfall})` };
      case "city":
        return { backgroundImage: `url(${City})` };
      case "meadow":
        return { backgroundImage: `url(${Meadow})` };
      default:
        return { backgroundImage: `url(${Iceland})` };
    }
  };
  return (
    <div
      className="add-board-modal"
      style={modal ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content" style={selectBg()}>
        <form className="board-form" onSubmit={(e) => handleSubmit(e)}>
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
              className="disabled-submit-new-board-btn"
              disabled
            >
              Create Board
            </button>
          ) : (
            <button type="submit" className="submit-new-board-btn">
              Create Board
            </button>
          )}
        </form>
        <button className="modal close-btn" onClick={(e) => closeModal(e)}>
          <span>x</span>
        </button>
        <BgPalette background={background} handleChangeBg={handleChangeBg} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(AddBoardForm);
