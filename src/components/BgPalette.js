import React from "react";
import BgList from "./BgList";

const solids = [
  "blue",
  "pink",
  "yellow",
  "green",
  "gray",
  "purple",
  "red",
  "white",
  "brown"
];
const BgPalette = props => {
  return (
    <div className="board-bg-palette">
      <BgList solids={solids} handleChangeBg={props.handleChangeBg} />
    </div>
  );
};

export default BgPalette;
