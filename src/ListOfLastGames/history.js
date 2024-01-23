import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./history.css";



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

  const handleClearHistory = () => {
    localStorage.removeItem("gameHistory");
    alert("Game history and winner messages have been cleared!");
    setGameHistory([]); // Clear the state as well

    // Optional: You might also want to force an update by toggling a dummy state
    setForceUpdate((prev) => !prev);
  };
  const renderGameHistory = () => {
    const lastTenGames = gameHistory.slice(-5); // Get the last 5 games
  
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Game</th>
              <th>Game Name</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {lastTenGames.map((game, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{game.gameName}</td>
                <td>{game.winnerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <div>
      <h2 className="gamestext">Last 5 Games</h2>
      {renderGameHistory()}
      <button onClick={() => handleClearHistory()}>Clear History and Winner Messages</button>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default History;
