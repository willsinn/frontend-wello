import React from "react";

const BoardBg = props => {
  return (
    <div className="bg-tile">
      <button className="bg-btn">{props.solid} </button>
    </div>
  );
};

export default BoardBg;
