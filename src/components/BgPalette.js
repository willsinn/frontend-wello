import React from "react";
import BgList from "./BgList";

const solids = ["blue", "pink", "yellow"];
const BgPalette = props => {
  return (
    <div>
      <BgList solids={solids} />
    </div>
  );
};

export default BgPalette;
