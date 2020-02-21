import React from "react";
import BoardBg from "./BoardBg";

const BgList = props => {
  const renderBgs = () => {
    if (props.solids.length > 0) {
      return props.solids.map(solid => {
        return (
          <li>
            Hi
            <BoardBg solid={solid} />
          </li>
        );
      });
    }
  };
  return <ul>{renderBgs()}</ul>;
};

export default BgList;
