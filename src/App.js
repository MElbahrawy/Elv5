import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Companies from "./pages/Companies";
import Technicians from "./pages/Technicians";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/technicians" element={<Technicians />} />
        <Route path="/Posts" element={<Posts />} />
      </Routes>
      <Footer />
    </div>
  );
}
