import React, { useState } from "react";
import NewBoardForm from "./NewBoardForm";

const AddBoardModal = props => {
  const [background, setBackground] = useState("lightblue");
  const handleChangeBg = e => {
    if (e) {
      setBackground(e.target.value);
    }
  };
  console.log(background);
  return (
    <div
      className="add-board-modal"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content" style={{ background: `${background}` }}>
        <NewBoardForm
          active={props.active}
          closeModal={props.closeModal}
          handleChangeBg={handleChangeBg}
        />
        <button className="modal close-btn" onClick={e => props.closeModal(e)}>
          <span>x</span>
        </button>
      </div>
    </div>
  );
};

export default AddBoardModal;
