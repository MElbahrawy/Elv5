import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import MainAd from "../components/MainAd";

export default function Home() {
  return (
    <>
      <Hero />
      <MainAd />
      <Slider />
      <Categories />
    </>
  );
}
