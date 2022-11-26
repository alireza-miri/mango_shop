import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import { getData } from "./redux/action";

function App() {
 
  return (
    <div className="App">
      <Headers/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:productId" element={<Product />}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
