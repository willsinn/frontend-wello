import React from "react";

const BoardBg = props => {
  return (
    <div className="bg-tile">
      <button
        className="bg-btn"
        onClick={e => {
          props.handleChangeBg(e);
        }}
        style={{ background: `${props.solid}` }}
        value={props.solid}
      />
    </div>
  );
};

export default BoardBg;
