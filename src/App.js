// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage";
import ConnectFour from "./ConnectFour";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/ConnectFour" element={<ConnectFour />} />
      </Routes>
    </Router>
  );
};

export default App;
