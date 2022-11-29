import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Error from "./components/pages/Error";

import axios from "axios";

function App() {
  const [login,setLogin]=useState(null)
  const [email,setEmail]=useState(null)
  const req = async () => {
    try {
      const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
        headers: {
          authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxpeHgiLCJpYXQiOjE2Njk3MjIwMDgsImV4cCI6MTY3MDMyNjgwOH0.9WuCGRMbpQLbfQC89hjOy8dEjxXDshZGs5EsSRyWzyQ",
        },
      });
      setLogin(data.success);
      setEmail(data.user.email);
      console.log(data);
    } catch (error) {
        setLogin(error.response.data.success);
    }
  };console.log(login);
  useEffect(()=>{
    req()
  },[])
  return (
    <div className="App">
      <Headers login={login} email={email}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={!login?<Login />:<Home/>} />
        <Route path="/SingUp" element={!login?<SingUp />:<Home/>} />
        <Route path="/profile" element={login?<Profile />:<Home/>} />
        <Route path="/orders" element={login?<Orders />:<Home/>} />
        <Route path="/settings/chanegProfile" element={login?<ChanegProfile />:<Error/>} />
        <Route path="/address" element={login?<Address />:<Home/>} />
        <Route path="/chekout" element={login?<Chekout />:<Home/>} />
        <Route path="/settings/Changepassword" element={login?<Changepassword />:<Error/>} />
        <Route path="/settings/uploadavatar" element={login?<UploadAvatar />:<Error/>} />
       
        <Route path="*" element={<Error />} />
        
      </Routes>
    </div>
  );
}

export default App;
