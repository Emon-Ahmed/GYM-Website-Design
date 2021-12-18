import React from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

export default function Pricing() {
  return (
    <div>
      <SubHeader PageName="Service"></SubHeader>
      <Container>
        <div className="d-flex justify-content-between my-5 pt-5 pb-3">
          <div className="service service1 mx-1 d-block text-white">
            <h3>PROGRESSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              deleniti enim! Assumenda deleniti modi iste!
            </p>
          </div>
          <div className="service service2 mx-2 d-block text-white">
            <h3>PROGRESSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              deleniti enim! Assumenda deleniti modi iste!
            </p>
          </div>
          <div className="service service3 mx-1 d-block text-white">
            <h3>PROGRESSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              deleniti enim! Assumenda deleniti modi iste!
            </p>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}
