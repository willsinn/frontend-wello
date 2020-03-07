import React from "react";
import BgList from "./BgList";

const bgs = [
  "iceland",
  "lake",
  "mountians",
  "cityscape",
  "beach",
  "autumn",
  "waterfall",
  "city",
  "meadow"
];
const BgPalette = props => {
  return (
    <div className="board-bg-palette">
      <BgList bgs={bgs} handleChangeBg={props.handleChangeBg} />
    </div>
  );
};

export default BgPalette;
