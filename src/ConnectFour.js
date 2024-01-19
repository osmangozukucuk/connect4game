import React, { useState, useEffect } from "react";
import "./App.css";

const ROWS = 6;
const COLUMNS = 7;

const initialBoard = Array.from({ length: ROWS }, () =>
  Array(COLUMNS).fill(null)
);

const ConnectFour = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [winner, setWinner] = useState(null);

  const dropDisc = (column) => {
    if (winner || board[0][column]) return;

    const newBoard = [...board];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][column]) {
        newBoard[row][column] = currentPlayer;
        break;
      }
    }

    setBoard(newBoard);
    checkWinner(newBoard);
    switchPlayer();
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
  };

  const checkWinner = (board) => {
    // Check for a winner horizontally, vertically, and diagonally
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        if (board[row][col]) {
          // Check horizontally
          if (col <= COLUMNS - 4) {
            if (
              board[row][col] === board[row][col + 1] &&
              board[row][col] === board[row][col + 2] &&
              board[row][col] === board[row][col + 3]
            ) {
              setWinner(currentPlayer);
              return;
            }
          }
          // Check vertically
          if (row <= ROWS - 4) {
            if (
              board[row][col] === board[row + 1][col] &&
              board[row][col] === board[row + 2][col] &&
              board[row][col] === board[row + 3][col]
            ) {
              setWinner(currentPlayer);
              return;
            }
          }
          // Check diagonally (from top-left to bottom-right)
          if (col <= COLUMNS - 4 && row <= ROWS - 4) {
            if (
              board[row][col] === board[row + 1][col + 1] &&
              board[row][col] === board[row + 2][col + 2] &&
              board[row][col] === board[row + 3][col + 3]
            ) {
              setWinner(currentPlayer);
              return;
            }
          }
          // Check diagonally (from top-right to bottom-left)
          if (col >= 3 && row <= ROWS - 4) {
            if (
              board[row][col] === board[row + 1][col - 1] &&
              board[row][col] === board[row + 2][col - 2] &&
              board[row][col] === board[row + 3][col - 3]
            ) {
              setWinner(currentPlayer);
              return;
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    if (currentPlayer === "yellow") {
      const delay = setTimeout(() => {
        computerMove();
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [currentPlayer, board]);

  useEffect(() => {
    checkWinner(board);
  }, [board, currentPlayer]);

  const computerMove = () => {
    const validMoves = [];
    for (let col = 0; col < COLUMNS; col++) {
      if (!board[0][col]) {
        validMoves.push(col);
      }
    }

    if (validMoves.length > 0) {
      const randomColumn = validMoves[Math.floor(Math.random() * validMoves.length)];
      dropDisc(randomColumn);
    }
  };

  const renderMessage = () => {
    if (winner) {
      return <p>{winner === "red" ? "You win!" : "You lose!"}</p>;
    } else {
      return <p>{currentPlayer === "red" ? "Your turn" : "Computer's turn"}</p>;
    }
  };

  return (
    <div className="container">
      <h2>Connect Four</h2>
      {renderMessage()}
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              onClick={() => currentPlayer === "red" && dropDisc(colIndex)}
              style={{ backgroundColor: cell }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ConnectFour;
