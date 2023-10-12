import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Navs />
      <Home />
      <Footer />
    </div>
  );
}
