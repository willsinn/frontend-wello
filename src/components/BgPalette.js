import React from "react";
import BgList from "./BgList";

const bgs = [
  "lake",
  "mountians",
  "cityscape",
  "beach",
  "green",
  "gray",
  "purple",
  "red",
  "white",
  "orange"
];
const BgPalette = props => {
  return (
    <div className="board-bg-palette">
      <BgList bgs={bgs} handleChangeBg={props.handleChangeBg} />
    </div>
  );
};

export default BgPalette;
