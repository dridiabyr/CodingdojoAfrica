import AddStore from "./components/Adding/AddStore";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import StoreDetails from "./components/StoreDetails";
import EditStore from "./components/Editing/EditStore";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/store/add" element={<AddStore />} />
        <Route exact path="/store-details/:id" component={<StoreDetails />} />
        <Route exact path="/store/edit/:id" component={<EditStore />} />
      </Routes>
    </div>
  );
}

export default App;
