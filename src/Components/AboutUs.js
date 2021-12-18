import React from "react";
import { Container } from "react-bootstrap";
import AboutUsImg from "../Image/about-us-img.png";

export default function AboutUs({ SectionName }) {
  return (
    <Container>
      <div className="py-5">
        <div className="d-flex justify-content-between">
          <div className="about-us-img w-50 mr-3">
            <img className="w-100" src={AboutUsImg} alt="About Us" />
          </div>
          <div className="about-us-text w-50">
            <h1>{SectionName}</h1>
            <h3 className="text-yellow">WE ARE HERE TO DREAM!</h3>
            <h3 className="free-space">OUR TEAM IS HERE SURVE YOU.</h3>
            <p>
              Gym & Fitness is a dynamic and diverse gym with a variety of group
              classes for every fitness level and different interests, guided by
              the trainers who are to answer the gym members needs at any time.
              Trainers at PLANET Gym & Fitness meet the highest standards
              expertise in all training programs.
            </p>
            <p>
              We aim to give a system in which everyone is respected and to
              provide a unique and enjoyable environment in which everyone can
              feel comfortable. PLANET Gym.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
