import React from "react";
import AboutUs from "../Components/AboutUs.js";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Service from "../Components/Service";
import TraningProgram from "../Components/TraningProgram.js";
import WhyChooseUs from "../Components/WhyChooseUs.js";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Service></Service>
      <AboutUs SectionName="ABOUT US"></AboutUs>
      <TraningProgram></TraningProgram>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </>
  );
}
