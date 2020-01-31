import React from "react";
import NewBoardForm from "./NewBoardForm";

const AddBoardModal = props => {
  return (
    <div
      className="add-board-modal"
      style={props.active ? { display: "block" } : { display: "none" }}
      onClick={e => props.closeModal(e)}
    >
      <div className="modal-content" onClick>
        <button className="modal close-btn" onClick={e => props.closeModal(e)}>
          <span>x</span>
        </button>
        <NewBoardForm active={props.active} closeModal={props.closeModal} />
      </div>
    </div>
  );
};

export default AddBoardModal;
