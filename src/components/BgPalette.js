import React from "react";
import BgList from "./BgList";
import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import Beach from "../images/beach.jpg";

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
