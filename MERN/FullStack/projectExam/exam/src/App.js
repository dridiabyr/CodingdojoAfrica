
import AddStore from "./components/Adding/AddStore";
import Home from "./components/Home/Home";
import {Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route  path="" element={<Home/>} />
        <Route  path="/store/add" element={<AddStore/>} />
      </Routes>
    </div>
  );
}

export default App;
