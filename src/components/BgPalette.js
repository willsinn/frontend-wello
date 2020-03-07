import React from "react";
import BgList from "./BgList";

const bgs = [
  "Lake",
  "Mountians",
  "Cityscape",
  "Beach",
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
