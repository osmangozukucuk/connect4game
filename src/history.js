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

  const renderGameHistory = () => {
    const lastTenGames = gameHistory.slice(-10); // Get the last 10 games

    return lastTenGames.map((game, index) => (
      <div key={index}>
        <p>Game {index + 1}</p>
        <p>Player: {game.playerName}</p>
        <p>Game Name: {game.gameName}</p>
        <p>Winner: {game.winnerName}</p>
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
