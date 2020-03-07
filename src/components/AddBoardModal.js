import React from "react";
import NewBoardForm from "./NewBoardForm";

const AddBoardModal = props => {
  return (
    <div
      className="add-board-modal"
      style={props.modal ? { display: "block" } : { display: "none" }}
    >
      <NewBoardForm modal={props.modal} closeModal={props.closeModal} />
    </div>
  );
};

export default AddBoardModal;
