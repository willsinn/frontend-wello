import React, { useState } from "react";
import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import Beach from "../images/beach.jpg";

const BoardBg = props => {
  return (
    <div className="bg-tile">
      {(() => {
        switch (props.bg) {
          case "lake":
            return (
              <button
                className="bg-btn"
                onClick={e => props.handleChangeBg(e)}
                style={{ backgroundImage: `url(${Lake})` }}
                value={props.bg}
              />
            );
          case "mountians":
            return (
              <button
                className="bg-btn"
                onClick={e => props.handleChangeBg(e)}
                style={{ backgroundImage: `url(${Mountians})` }}
                value={props.bg}
              />
            );
          case "cityscape":
            return (
              <button
                className="bg-btn"
                onClick={e => props.handleChangeBg(e)}
                style={{ backgroundImage: `url(${Cityscape})` }}
                value={props.bg}
              />
            );
          case "beach":
            return (
              <button
                className="bg-btn"
                onClick={e => props.handleChangeBg(e)}
                style={{ backgroundImage: `url(${Beach})` }}
                value={props.bg}
              />
            );
          default:
            return <button />;
        }
      })()}
    </div>
  );
};

export default BoardBg;
