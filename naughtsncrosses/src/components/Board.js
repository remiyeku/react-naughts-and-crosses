import React from "react";
import { useState } from "react";
import Tiles from "./Tiles";
import "./board.css";

function Board() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [xturn, setXturn] = useState(true);

  let handleClick = (i) => {
    if (determineWinner(tiles) || tiles[i]) {
      return;
    }

    const updatedTiles = [...tiles];
    updatedTiles[i] = xturn ? "X" : "O";
    setTiles(updatedTiles);
    setXturn(!xturn);
  };

  let winner = determineWinner(tiles);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (tiles.every((tile) => tile !== null)) {
    status = "Tie!";
  } else {
    status = "Next player: " + (xturn ? "X" : "O");
  }

  let handleRestart = () => {
    setXturn(true);
    setTiles(Array(9).fill(null));
  };

  let renderSquare = (i) => {
    return <Tiles value={tiles[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div className="game">
      <div className="game-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="game-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="game-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">{status}</div>
      <div>
        <button className="reset" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}

function determineWinner(tiles) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
      return tiles[a];
    }
  }
  return null;
}

export default Board;
