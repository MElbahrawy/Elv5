import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import Navs from "./components/Navs";
import Hero from "./components/Hero";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Navs />
            <Hero />
        </div>
    );
}
