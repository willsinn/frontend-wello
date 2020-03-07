import React from "react";
import BoardBg from "./BoardBg";

const BgList = props => {
  const renderBgs = () => {
    if (props.bgs.length > 0) {
      return props.bgs.map(bg => {
        return (
          <BoardBg
            bg={bg}
            background={props.background}
            handleChangeBg={props.handleChangeBg}
            key={`bg-data-${bg}`}
          />
        );
      });
    }
  };
  return <div className="bg-list">{renderBgs()}</div>;
};

export default BgList;
