import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "";
import "./assets/style/ganaral.css";
import StarBackground from "./components/Background/star";
import Homepage from "./pages/homepage";
import Navbar from "./components/Header/navbar";
import Knowledge from "./pages/knowledge";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="homepage-main">
          <StarBackground />
          <Navbar />
          <div className="relative">
            <span className="text-orange-500">test</span>
          </div>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
