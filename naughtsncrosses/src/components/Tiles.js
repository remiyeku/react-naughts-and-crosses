import React from "react";
import "./tiles.css";

function Tiles({ onClick, value }) {
  return (
    <button className="tiles" onClick={onClick}>
      {value}
    </button>
  );
}

export default Tiles;
