import React from "react";
import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import Beach from "../images/beach.jpg";

const BoardBg = props => {
  const background = props.bg;
  console.log(background);
  const renderBg = () => ({});
  return (
    <div className="bg-tile">
      <button
        className="bg-btn"
        onClick={e => props.handleChangeBg(e)}
        style={{ backgroundImage: `url(${Lake})` }}
        value={props.bg}
      />
    </div>
  );
};

export default BoardBg;
