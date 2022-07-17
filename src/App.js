import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "";
import "./assets/style/ganaral.css";
import StarBackground from "./components/Background/star";
import Homepage from "./pages/homepage";
import Navbar from "./components/Header/navbar";
import Knowledge from "./pages/knowledge";
import About from "./pages/about";

function App() {
  const [numberOfFilter, setNumberOfFilter] = useState([]);
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const axios = require("axios");
  const [dataPost, setDataPost] = useState([]);

  // useEffect(() => {
  //   let tmpNumber = number.map((num) => {
  //     return (
  //       <p>
  //         {num} {num % 2 === 0 ? "true" : "false"}
  //       </p>
  //     );
  //   });
  //   setNumberOfFilter(tmpNumber);
  // }, [number]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        setDataPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <div id="homepage-main">
          <StarBackground />
          <Navbar />
          <div className="relative flex items-center justify-center">
            
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
