import React from "react";
import { Container } from "react-bootstrap";
import ServiceIcon from "../Image/Group 81.png";
import ServiceIcon1 from "../Image/Group 80.png";
import ServiceIcon2 from "../Image/Group 82.png";

export default function Service() {
  return (
    <div>
      <Container>
        <div className="display-grid justify-content-between my-5 pt-5 pb-3">
          <div className="service m-1 service1 text-white">
            <div>
              <img src={ServiceIcon1} alt="Service" />
              <h3>PROGRESSION</h3>
              <p>
                We aim to give a system in which everyone is respected and to
                provide a unique and enjoyable environment.
              </p>
            </div>
          </div>
          <div className="service m-1 service2 text-white">
            <div>
              <img src={ServiceIcon} alt="Service" />
              <h3>IMPROVE</h3>
              <p>
                You would like to improve your fitness level, to surpass your
                professional athlete goals
              </p>
            </div>
          </div>
          <div className="service m-1 service3 text-white">
            <div>
              <img src={ServiceIcon2} alt="Service" />
              <h3>FOCUS</h3>
              <p>
                Find us on the street opposite to SC BIG Fashion at two-level
                venue - 1.000 m2 wide space.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
