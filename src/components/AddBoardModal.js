import React from "react";
import NewBoardForm from "./NewBoardForm";

const AddBoardModal = props => {
  return (
    <div
      className="add-board-modal"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content" onClick={null}>
        <NewBoardForm active={props.active} closeModal={props.closeModal} />
        <button className="modal close-btn" onClick={e => props.closeModal(e)}>
          <span>x</span>
        </button>
      </div>
    </div>
  );
};

export default AddBoardModal;
