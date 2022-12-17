import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Product from "./components/pages/Product";
import SingUp from "./components/pages/SingUp";
import Orders from "./components/pages/Orders";

import Profile from "./components/pages/Profile";
import ChanegProfile from "./components/pages/ChanegProfile";
import Changepassword from "./components/pages/Changepassword";
import Address from "./components/pages/Address";
import Chekout from "./components/pages/Chekout";
import UploadAvatar from "./components/pages/UploadAvatar";
import NotFound from "./components/pages/NotFound";
import OneOrder from "./components/pages/OneOrder";
// import axios from "axios";
// import GetProfile from "./components/pages/GetProfile";

function App() {
  const login = useSelector((state) => state.chekLogin);

  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={!login ? <Login /> : <Home />}
          login={login}
        />
        <Route path="/SingUp" element={!login ? <SingUp /> : <Home />} />
        <Route path="/profile" element={login ? <Profile /> : <Home />} />
        <Route path="/orders" element={login ? <Orders /> : <Home />} />
        <Route
          path="/oneorder/:orderId"
          element={login ? <OneOrder /> : <Home />}
        />
        <Route
          path="/settings/chanegProfile"
          element={login ? <ChanegProfile /> : <NotFound />}
        />
        <Route path="/address" element={login ? <Address /> : <Home />} />
        <Route path="/chekout" element={login ? <Chekout /> : <Home />} />
        <Route
          path="/settings/Changepassword"
          element={login ? <Changepassword /> : <NotFound />}
        />
        <Route
          path="/settings/uploadavatar"
          element={login ? <UploadAvatar /> : <NotFound />}
        />

        <Route path="*" element={<NotFound />} />
        {/* <Route path="/getprofile" element={<GetProfile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
