import React, { useState } from "react";
import AddBoardModal from "./AddBoardModal";

const PlusDropdown = props => {
  const [active, setActive] = useState(false);
  const closeModal = e => {
    setActive(false);
    props.closeRightnav(e);
  };
  return (
    <div className="new-board right-modal">
      <AddBoardModal active={active} closeModal={closeModal} />
      <div className="modal-header title">
        <div className="modal-header label">Create</div>
        <div className="modal-header close">
          <button>
            <span onClick={e => props.closeRightnav(e)}>×</span>
          </button>
        </div>
      </div>
      <div className="create-board">
        <button className="create-board-btn" onClick={e => setActive(true)}>
          <div style={{ display: "flex" }}>
            <span className="icon main-icon" />
            <span> Create Board...</span>
          </div>
          <span>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </span>
        </button>
      </div>
    </div>
  );
};

export default PlusDropdown;
