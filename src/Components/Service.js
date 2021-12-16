import React from "react";
import { Container } from "react-bootstrap";
import ServiceIcon from "../Image/Group 81.png";
import ServiceIcon1 from "../Image/Group 80.png";
import ServiceIcon2 from "../Image/Group 82.png";

export default function Service() {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between my-5 pt-5 pb-3">
          <div className="service service1 mx-1 d-block text-white">
            <img src={ServiceIcon1} alt="Service" />
            <h3>PROGRESSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              deleniti enim! Assumenda deleniti modi iste!
            </p>
          </div>
          <div className="service service2 mx-2 d-block text-white">
            <img src={ServiceIcon} alt="Service" />
            <h3>PROGRESSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              deleniti enim! Assumenda deleniti modi iste!
            </p>
          </div>
          <div className="service service3 mx-1 d-block text-white">
            <img src={ServiceIcon2} alt="Service" />
            <h3>PROGRESSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              deleniti enim! Assumenda deleniti modi iste!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
