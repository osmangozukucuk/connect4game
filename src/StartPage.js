import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  const [userColor, setUserColor] = useState(localStorage.getItem("userColor") || "#ffffff");
  const [boardColor, setBoardColor] = useState(localStorage.getItem("boardColor") || "#000000");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [GameName, setGameName] = useState(localStorage.getItem("GameName") || "");
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    localStorage.setItem("userColor", userColor);
  }, [userColor]);

  useEffect(() => {
    localStorage.setItem("boardColor", boardColor);
  }, [boardColor]);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);
  useEffect(() => {
    localStorage.setItem("GameName", GameName);
  }, [GameName]);

  const handleStartGame = () => {
    if (!username && !alertShown) {
      alert("Please enter a username before starting the game.");
      setAlertShown(true);
      return;
    }
  
    if (!GameName) {
      alert("Please fill out the additional input.");
      return;
    }
  
    // Clear the game history only if it doesn't exist
    if (!localStorage.getItem("gameHistory")) {
      localStorage.setItem("gameHistory", JSON.stringify([]));
    }
  
    window.location.href = "/ConnectFour";
  };
  

  return (
    <div className="allboard">
      <h1>GameCreation Page</h1>

      {/* User Color Input */}
      <label htmlFor="userColor">User Color:</label>
      <input
        type="color"
        id="userColor"
        value={userColor}
        onChange={(e) => setUserColor(e.target.value)}
      />

      {/* Board Color Input */}
      <label htmlFor="boardColor">Board Color:</label>
      <input
        type="color"
        id="boardColor"
        value={boardColor}
        onChange={(e) => setBoardColor(e.target.value)}
      />

      {/* Username Input */}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Additional Input */}
      <label htmlFor="GameName">Game Name:</label>
      <input
        type="text"
        id="GameName"
        value={GameName}
        onChange={(e) => setGameName(e.target.value)}
      />
      <p></p>
      {/* Link to game with onClick event */}
      
      <Link to={username && GameName ? "/ConnectFour" : "/"} onClick={handleStartGame}>
        Play game
      </Link>


      {/* Link to history page */}
      <Link to="/history">Game list page</Link></div>
  );
};

export default StartPage;
