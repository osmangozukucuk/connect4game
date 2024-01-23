import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ConnectFour.css";


const ROWS = 6;
const COLUMNS = 7;

const initialBoard = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null));


const ConnectFour = () => {
  const [GameName, setGameName] = useState(localStorage.getItem("GameName") || "");
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [winner, setWinner] = useState(null);
  const [isTie, setIsTie] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const userColor = localStorage.getItem("userColor") || "blue";
    const boardColor = localStorage.getItem("boardColor") || "gray";
    const yellowColor = localStorage.getItem("yellowcolor") || "yellow";

    
    document.documentElement.style.setProperty("--board-color", boardColor);
    document.documentElement.style.setProperty("--cell-color-red", userColor);
    document.documentElement.style.setProperty("--cell-color-yellow", yellowColor);
  }, []);

  useEffect(() => {
    checkWinner(board);
  }, [board, currentPlayer]);

  useEffect(() => {
    if (isTie) {
      const delay = setTimeout(() => {
        window.location.reload();
      }, 100);
      return () => clearTimeout(delay);
    }
  }, [isTie]);

  useEffect(() => {
    if (currentPlayer === "yellow" && !isTie) {
      const delay = setTimeout(() => {
        computerMove();
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [currentPlayer, board, isTie]);

  const dropDisc = (column) => {
    if (winner || board[0][column] || isTie) return;

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
    checkTie(newBoard);
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
  };

  const checkWinner = (currentBoard) => {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        if (currentBoard[row][col]) {
          if (col <= COLUMNS - 4) {
            if (
              currentBoard[row][col] === currentBoard[row][col + 1] &&
              currentBoard[row][col] === currentBoard[row][col + 2] &&
              currentBoard[row][col] === currentBoard[row][col + 3]
            ) {
              setWinner(currentPlayer);
              localStorage.setItem("winner", currentPlayer);
              localStorage.setItem("gameName", GameName);
              return;
            }
          }
          if (row <= ROWS - 4) {
            if (
              currentBoard[row][col] === currentBoard[row + 1][col] &&
              currentBoard[row][col] === currentBoard[row + 2][col] &&
              currentBoard[row][col] === currentBoard[row + 3][col]
            ) {
              setWinner(currentPlayer);
              localStorage.setItem("winner", currentPlayer);
              localStorage.setItem("gameName", GameName);
              return;
            }
          }
          if (col <= COLUMNS - 4 && row <= ROWS - 4) {
            if (
              currentBoard[row][col] === currentBoard[row + 1][col + 1] &&
              currentBoard[row][col] === currentBoard[row + 2][col + 2] &&
              currentBoard[row][col] === currentBoard[row + 3][col + 3]
            ) {
              setWinner(currentPlayer);
              localStorage.setItem("winner", currentPlayer);
              localStorage.setItem("gameName", GameName);
              return;
            }
          }
          if (col >= 3 && row <= ROWS - 4) {
            if (
              currentBoard[row][col] === currentBoard[row + 1][col - 1] &&
              currentBoard[row][col] === currentBoard[row + 2][col - 2] &&
              currentBoard[row][col] === currentBoard[row + 3][col - 3]
            ) {
              setWinner(currentPlayer);
              localStorage.setItem("winner", currentPlayer);
              localStorage.setItem("gameName", GameName);
              return;
            }
          }
        }
      }
    }
  };

  const checkTie = (currentBoard) => {
    const isTie = currentBoard.every((row) => row.every((cell) => cell));
    if (isTie) {
      setIsTie(true);
      localStorage.setItem("tie", "true");
    }
  };

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

  const handleLinkClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };
  
  useEffect(() => {
    if (winner) {
      setGameOver(true);
  
      const playerName = localStorage.getItem("username") || "Player";
      const gameName = GameName || "Connect Four";
      const winnerName = winner === "red" ? playerName : "Computer";
  
      const gameHistory = JSON.parse(localStorage.getItem("gameHistory")) || [];
  
      // Check if the same game is already in the history
      const isSameGameInHistory = gameHistory.some(
        (game) => game.playerName === playerName && game.gameName === gameName
      );
  
      if (!isSameGameInHistory) {
        const newGame = { playerName, gameName, winnerName };
        gameHistory.push(newGame);
        localStorage.setItem("gameHistory", JSON.stringify(gameHistory));
      }
    }
  }, [winner]);
  
  const renderMessage = () => {
    if (gameOver) {
      return (
        <p>
          {winner
            ? winner === "red"
              ? "You lose!"
              : "You win!"
            : "It's a tie!"}{" "}
          Game Over!
        </p>
      );
    } else {
      return (
        <p>
          {currentPlayer === "red"
            ? `Your turn, ${localStorage.getItem("username") || "Player"}`
            : "Computer's turn"}
        </p>
      );
    }
  };
  return (
    <div className="container">
      <h2>{GameName || "Connect Four"}</h2>
      <Link to="/" onClick={handleLinkClick}>
        Go to Home
      </Link>
      {renderMessage()}
      <div className="arka">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell === "red" ? "red-cell" : cell === "yellow" ? "yellow-cell" : ""}`}
                onClick={() => currentPlayer === "red" && dropDisc(colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectFour;
