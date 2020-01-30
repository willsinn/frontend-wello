import React from "react";
import NewBoardForm from "./NewBoardForm";

const AddNewBoard = props => {
  return (
    <div
      className="add-board-modal"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content">
        <NewBoardForm />
      </div>
    </div>
  );
};

export default AddNewBoard;
