import React from "react";
import BgTile from "./BgTile";

const BgList = props => {
  const renderBgs = () => {
    if (props.bgs.length > 0) {
      return props.bgs.map(bg => {
        return (
          <BgTile
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
