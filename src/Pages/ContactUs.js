import React from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import { useSelector } from "react-redux";

export default function ContactUs() {
  const { user } = useSelector((state) => state.auth);
  console.log("data", user);
  return (
    <div>
      <SubHeader PageName="CONTACT US"></SubHeader>
      <div className="my-5">
        <AboutUs SectionName="CONTACT US"></AboutUs>
      </div>
      <Footer></Footer>
    </div>
  );
}
