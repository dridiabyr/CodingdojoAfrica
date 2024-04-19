import logo from "./logo.svg";
import "./App.css";
import ProductForm from "./components/productForm";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import Details from "./views/Details";
import Update from "./views/update";

function App() {
  return (
    <div className="App">
      <ProductForm />
      <Routes>
        <Route path="/products" element={<Main />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/people/:id/edit" element={<Update />} />
        ...
      </Routes>
    </div>
  );
}

export default App;
