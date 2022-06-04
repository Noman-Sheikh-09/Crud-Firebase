import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import LandingPage from "../modules/landingPage/LandingPage";
import Footer from "../components/footer/Footer";
import Login from "../modules/login/Login";
import Signup from "../modules/signup/Signup";
import Home from "../modules/home/Home";
import PrivateRouting from "./PrivateRouting";
import { useSelector } from "react-redux";
import PublicRouting from "./PublicRouting";
export default function Routing() {
  const isLoginUser = useSelector((state) => state.AuthReducers.isLoginUser);
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<PublicRouting isLoginUser={isLoginUser}>
          <Login />
          </PublicRouting>} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route
          path="/"
          element={
            <PrivateRouting isLoginUser={isLoginUser}>
              <Home />
            </PrivateRouting>
          } 
        />
      </Routes>


    </BrowserRouter>
  );
}
