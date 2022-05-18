import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<h1>This is the home page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
