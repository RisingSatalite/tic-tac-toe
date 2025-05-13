'use client'

import Square from "@/component/square";
import { useState, useEffect } from "react";

export default function Home() {
  const [board, setBoard] = useState(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null); // null | "X" | "O" | "Draw"

  useEffect(() => {
    calculateWinner();
  }, [board]);  

  const addSymbol = (index) => {
    if (board[index] === "_") {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2], // rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // cols
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonals
      [2, 4, 6],
    ];
  
    for (let [a, b, c] of lines) {
      if (board[a] !== "_" && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  
    isDraw();
  };
  
  const isDraw = () => {
    if (board.every(cell => cell !== "_")) {
      setWinner("Draw");
    }
  };

  const reset = () => {
    setBoard(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    setWinner(null);
    setTurn("X"); // or randomly choose
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-[500px] aspect-square">
      {board.map((item, index) => (
        <Square
          key={index}
          number={index}
          onClickFunction={() => addSymbol(index)}
          prop={item}
        />
      ))}
      {winner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold white-text">
              {winner === "Draw" ? "It's a Draw!" : `Player ${winner} Wins!`}
            </h2>
            <button
              onClick={reset}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}