import React from "react";

const EditBtn = props => {
  return (
    <div className="card-menu-wrap">
      <input
        onClick={e => props.handleEdit(e, props.card)}
        type="checkbox"
        id="btnControl"
      />
      <label className="card-menu-btn" for="btnControl">
        <span className="btn-text">...</span>
      </label>
    </div>
  );
};

export default EditBtn;
