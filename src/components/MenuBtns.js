import React, { useState } from "react";

const MenuBtns = props => {
  const handleClick = () => {};
  return (
    <div className="render-highlight">
      <div className="card-menu-wrap">
        <input onClick={handleClick} type="checkbox" id="btnControl" />
        <label className="card-menu-btn" htmlFor="btnControl">
          <span className="btn-text">...</span>
        </label>
      </div>
    </div>
  );
};

export default MenuBtns;
