// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Word from "./Word";
import Number from "./Components/Number";
import StyledWord from "./Components/StyledWord";

function App() {
  return (
 
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:number" element={<Number />} />
          <Route path="/:word" element={<p><Word/> </p>} />
          <Route path="/:word/:backgroundColor/:textColor" element={<StyledWord />} />
        </Routes>
      </div>

  );
}

export default App;
