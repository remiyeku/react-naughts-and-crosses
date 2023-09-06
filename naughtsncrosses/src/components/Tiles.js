import React from "react";
import "./tiles.css";

function Tiles({ onClick, value }) {
  return (
    <div className="tile-container">
      <button className="tiles" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Tiles;
