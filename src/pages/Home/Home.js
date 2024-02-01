import React from "react";
import Hero from "../../components/Home/Hero";
import Slider from "../../components/Home/Slider";
import Categories from "../../components/Home/Categories";
import MainAd from "../../components/Home/MainAd";
import TopCompanies from "../../components/Home/TopCompanies";

export default function Home() {
  return (
    <>
      <Hero />
      <MainAd />
      <Slider />
      <Categories />
      <TopCompanies/>
    </>
  );
}
