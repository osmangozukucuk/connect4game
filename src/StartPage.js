import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  // State for color inputs
  const [userColor, setUserColor] = useState(
    localStorage.getItem("userColor") || "#ffffff"
  );
  const [boardColor, setBoardColor] = useState(
    localStorage.getItem("boardColor") || "#000000"
  );

  // Update local storage when color inputs change
  useEffect(() => {
    localStorage.setItem("userColor", userColor);
  }, [userColor]);

  useEffect(() => {
    localStorage.setItem("boardColor", boardColor);
  }, [boardColor]);

  return (
    <div>
      <h1>StartPage Page</h1>

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

      <Link to="/ConnectFour">Go to game</Link>
      <p></p>
      <Link to="/history">Go to history</Link>
    </div>
  );
};

export default StartPage;
