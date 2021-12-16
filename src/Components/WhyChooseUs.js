import React from "react";
import { Container } from "react-bootstrap";
import WhyChooseUs0 from "../Image/Group 87.png";
import WhyChooseUs1 from "../Image/Group 88.png";
import WhyChooseUs2 from "../Image/gift-2.png";

export default function WhyChooseUs() {
  return (
    <div>
      <div className="text-center d-block mt-5 pt-5 pb-1">
        <h1>
          <span className="text-yellow">WHY</span> CHOOSE US
        </h1>
      </div>
      <Container>
        <div className="d-flex justify-content-between mt-4 mb-5 pb-5">
          <div className="box mx-2 d-block text-black text-center p-4">
            <img src={WhyChooseUs0} className="p-4" alt="Service" />
            <h3>PROGRESSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              deleniti enim! Assumenda deleniti modi iste!
            </p>
          </div>
          <div className="box mx-2 d-block text-black text-center p-4">
            <img src={WhyChooseUs1} className="p-4" alt="Service" />
            <h3>PROGRESSION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              deleniti enim! Assumenda deleniti modi iste!
            </p>
          </div>
          <div className="box mx-2 d-block text-black text-center p-4">
            <img src={WhyChooseUs2} className="p-4 mt-4" alt="Service" />
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
