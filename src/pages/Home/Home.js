import React from "react";
import Hero from "../../components/Home/Hero";
import Slider from "../../components/Home/Slider";
import Categories from "../../components/Home/Categories";
import MainAdv from "../../components/Home/MainAdv";
import TopCompanies from "../../components/Home/TopCompanies";
import SecondaryAdv from "../../components/Home/SecondaryAdv";

export default function Home() {
  return (
    <>
      <Hero />
      <MainAdv />
      <Slider />
      <Categories />
      <SecondaryAdv />
      <TopCompanies />
    </>
  );
}
