import React, { useState } from "react";
import NewBoardForm from "./NewBoardForm";

const AddBoardModal = props => {
  const [background, setBackground] = useState("lightblue");
  return (
    <div
      className="add-board-modal"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content" style={{ background: `${background}` }}>
        <NewBoardForm active={props.active} closeModal={props.closeModal} />
        <button className="modal close-btn" onClick={e => props.closeModal(e)}>
          <span>x</span>
        </button>
      </div>
    </div>
  );
};

export default AddBoardModal;
