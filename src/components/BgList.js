import React from "react";
import BoardBg from "./BoardBg";

const BgList = props => {
  const renderBgs = () => {
    if (props.solids.length > 0) {
      return props.solids.map(solid => {
        return <BoardBg solid={solid} />;
      });
    }
  };
  return <div>{renderBgs()}</div>;
};

export default BgList;
