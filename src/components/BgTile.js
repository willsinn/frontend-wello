import React from "react";

import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import City from "../images/city.jpeg";
import Iceland from "../images/iceland.jpg";
import Meadow from "../images/meadow.jpg";
import Waterfall from "../images/waterfall.jpeg";
import Beach from "../images/beach.jpg";
import Autumn from "../images/autumn.jpg";

const BgTile = props => {
  const renderBgOption = () => {
    switch (props.bg) {
      case "lake":
        return { backgroundImage: `url(${Lake})` };
      case "mountians":
        return { backgroundImage: `url(${Mountians})` };
      case "cityscape":
        return { backgroundImage: `url(${Cityscape})` };
      case "beach":
        return { backgroundImage: `url(${Beach})` };
      case "autumn":
        return { backgroundImage: `url(${Autumn})` };
      case "waterfall":
        return { backgroundImage: `url(${Waterfall})` };
      case "city":
        return { backgroundImage: `url(${City})` };
      case "meadow":
        return { backgroundImage: `url(${Meadow})` };
      default:
        return { backgroundImage: `url(${Iceland})` };
    }
  };

  return (
    <div className="bg-tile">
      {props.bg === props.background ? (
        <button
          className="selected-background"
          onClick={e => props.handleChangeBg(e)}
          style={renderBgOption()}
          value={props.bg}
        >
          <span className="bg-check-marker">✓</span>
        </button>
      ) : (
        <button
          className="bg-btn"
          onClick={e => props.handleChangeBg(e)}
          style={renderBgOption()}
          value={props.bg}
        />
      )}
    </div>
  );
};

export default BgTile;
