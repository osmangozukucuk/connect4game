import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const [gameHistory, setGameHistory] = useState(JSON.parse(localStorage.getItem("gameHistory")) || []);

  useEffect(() => {
    const handleStorageChange = () => {
      setGameHistory(JSON.parse(localStorage.getItem("gameHistory")) || []);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const renderWinner = (winner) => {
    if (winner === "red") {
      return "Computer";
    } else if (winner === "yellow") {
      return localStorage.getItem("username") || "";
    } else {
      return "";
    }
  };

  const renderWinner2 = (winner) => {
    if (winner === "yellow") {
      return "Computer";
    } else if (winner === "red") {
      return localStorage.getItem("username") || "";
    } else {
      return "";
    }
  };

  const renderGameHistory = () => {
    return gameHistory.slice(0, 10).map((game, index) => (
      <div key={index}>
        <p>Game {index + 1}</p>
        <p>Winner: {renderWinner2(game.winner)}</p>
        <p>Loser: {renderWinner(game.winner)}</p>
        <p>Game Name: {game.gameName}</p>
        <hr />
      </div>
    ));
  };

  return (
    <div>
      <h2>Game History</h2>
      {renderGameHistory()}
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default History;
