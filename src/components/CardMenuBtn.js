import React from "react";

const CardMenuBtn = props => {
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
          <span className="card-menu-btn-text">...</span>
        </label>
      </div>
    </div>
  );
};

export default CardMenuBtn;
