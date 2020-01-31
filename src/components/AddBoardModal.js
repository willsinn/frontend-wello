import React from "react";
import NewBoardForm from "./NewBoardForm";

const AddNewBoard = props => {
  console.log(props.active);
  return (
    <div
      className="add-board-modal"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content">
        <NewBoardForm active={props.active} closeModal={props.closeModal} />
      </div>
    </div>
  );
};

export default AddNewBoard;
