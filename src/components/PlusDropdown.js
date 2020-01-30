import React, { useState } from "react";
import AddBoardModal from "./AddBoardModal";

const PlusDropdown = props => {
  const [active, setActive] = useState(false);
  return (
    <div className="new-board right-modal">
      <AddBoardModal active={active} />
      <div className="modal-header title">
        <div className="modal-header label">Create</div>
        <div className="modal-header close">
          <button>
            <span onClick={e => props.close(e)}>×</span>
          </button>
        </div>
      </div>
      <div className="modal add-board">
        <div className="add-board title">
          <div className="main-icon" />
          <div>Create Board...</div>
        </div>
        <div
          className="add-board content"
          style={{ color: "black" }}
          onClick={e => setActive(true)}
        >
          <span>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlusDropdown;
