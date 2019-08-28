import React, { useState } from "react";

const MenuBtns = props => {
  const handleClick = e => {
    if (e) {
      props.handleRender(e);
    }
  };
  return (
    <div className="card-menu-wrap">
      <div className="card-menu">
        <input onClick={handleClick} type="checkbox" id="btnControl" />
        <label className="card-menu-btn" htmlFor="btnControl">
          <span className="btn-text">...</span>
        </label>
      </div>
    </div>
  );
};

export default MenuBtns;
