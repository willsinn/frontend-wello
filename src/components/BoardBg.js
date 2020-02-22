import React from "react";

const BoardBg = props => {
  return (
    <div className="bg-tile">
      <button className="bg-btn" style={{ background: `${props.solid}` }} />
    </div>
  );
};

export default BoardBg;
