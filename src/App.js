import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Companies from "./pages/Companies";
import Technicians from "./pages/Technicians";

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
      </Routes>
      <Footer />
    </div>
  );
}
