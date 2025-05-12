'use client'

import Square from "@/component/square";
import { useState } from "react";

export default function Home() {
  const [board, setBoard] = useState(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
  const [turn, setTurn] = useState("X");

  const addSymbol = (index) => {
    if (board[index] === "_") {
      const newBoard = [...board]; // copy the board
      newBoard[index] = turn;
      setBoard(newBoard); // update state
      setTurn(turn === "X" ? "O" : "X"); // toggle turn
    }
  };

  const turnChange = () => {
    if(turn == "X"){
      setTurn("O");
    }else{
      setTurn("X");
    }
  }

  const calculateWinner = () => {

  }

  const isDraw = () => {

  }

  const reset = () => {
    setBoard(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    setTurn(turn === "X" ? "O" : "X"); // toggle turn
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {Array.from({ length: Math.ceil(board.length / 3) }, (_, rowIndex) => (
          <div key={rowIndex} className="row">
            {board.slice(rowIndex * 3, rowIndex * 3 + 3).map((item, index) => (
              <Square
                key={rowIndex * 3 + index}
                number={rowIndex * 3 + index}
                onClickFunction={() => addSymbol(rowIndex * 3 + index)}
                prop={item}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
