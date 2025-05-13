'use client'

import Square from "@/component/square";
import { useState, useEffect } from "react";

export default function Home() {
  const [board, setBoard] = useState(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
  const [turn, setTurn] = useState("X");

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
        alert("The winner is: " + board[a]);
        return;
      }
    }
  
    isDraw();
  };

  const isDraw = () => {
    if (board.every(cell => cell !== "_")) {
      alert("It's a draw!");
    }
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
    </div>
  );
}
