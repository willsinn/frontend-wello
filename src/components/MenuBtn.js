import React from "react";

const MenuBtn = props => {
  return (
    <div className="card-menu-wrap">
      <input
        onClick={e => props.renderOptions(e, props.card)}
        type="checkbox"
        id="btnControl"
      />
      <label className="card-menu-btn" for="btnControl">
        <span className="btn-text">...</span>
      </label>
    </div>
  );
};

export default MenuBtn;
