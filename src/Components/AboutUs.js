import React from "react";
import { Container } from "react-bootstrap";
import AboutUsImg from "../Image/about-us-img.png";

export default function AboutUs() {
  return (
    <Container>
      <div className="py-5">
        <div className="d-flex justify-content-between">
          <div className="about-us-img w-50 mr-3">
            <img className="w-100" src={AboutUsImg} alt="About Us" />
          </div>
          <div className="about-us-text w-50">
            <h1>ABOUT US</h1>
            <h3 className="text-yellow">WE ARE HERE TO DREAM!</h3>
            <h3 className="free-space">OUR TEAM IS HERE SURVE YOU.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              ullam soluta, accusamus unde quo natus veniam veritatis fugit
              cumque magnam quidem dignissimos maiores eaque eos numquam rem!
              Assumenda, nulla minus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              ullam soluta, accusamus unde quo natus veniam veritatis fugit
              cumque magnam quidem dignissimos maiores eaque eos numquam rem!
              Assumenda, nulla minus.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
