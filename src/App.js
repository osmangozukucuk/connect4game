// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./GameCretion/StartPage";
import ConnectFour from "./GameScreen/ConnectFour";
import HistoryPage from "./ListOfLastGames/history";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/ConnectFour" element={<ConnectFour />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
