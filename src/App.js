// App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import ProblemSolving from "./components/ProblemSolving";
import DailyFortune from "./components/DailyFortune";

function App() {
  // 콘솔 경고 제거
  console.warn = function no_console() {};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/problem" element={<ProblemSolving />} />
        <Route path="/fortune" element={<DailyFortune />} />
      </Routes>
    </Router>
  );
}

export default App;
