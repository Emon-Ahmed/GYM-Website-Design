import React from "react";
import SubHeader from "../Components/SubHeader";
import Footer from '../Components/Footer'
import { VscArrowRight } from "react-icons/vsc";

export default function Class() {
  return (
    <div>
      <SubHeader PageName="OUR CLASSES"></SubHeader>
      <div className="my-5 container d-flex justify-content-between my-4 align-items-center">
        <div className="program program1 mx-1 align-items-center">
          <h3 className="d-flex align-items-center justify-content-center">
            <span>Yoga Training Session </span>
            <span className="d-inline-block ps-4">
              <VscArrowRight />
            </span>
          </h3>
        </div>
        <div className="program program1 mx-1 align-items-center">
          <h3 className="d-flex align-items-center justify-content-center">
            <span>Yoga Training Session </span>
            <span className="d-inline-block ps-4">
              <VscArrowRight />
            </span>
          </h3>
        </div>
        <div className="program program2 mx-1 align-items-center">
          <h3>
            Cardio Traning Session
            <span className="d-inline-block ps-4">
              <VscArrowRight />
            </span>
          </h3>
        </div>
      </div>
      <div className="my-5 container d-flex justify-content-between my-4 align-items-center">
        <div className="program program1 mx-1 align-items-center">
          <h3 className="d-flex align-items-center justify-content-center">
            <span>Yoga Training Session </span>
            <span className="d-inline-block ps-4">
              <VscArrowRight />
            </span>
          </h3>
        </div>
        <div className="program program1 mx-1 align-items-center">
          <h3 className="d-flex align-items-center justify-content-center">
            <span>Yoga Training Session </span>
            <span className="d-inline-block ps-4">
              <VscArrowRight />
            </span>
          </h3>
        </div>
        <div className="program program2 mx-1 align-items-center">
          <h3>
            Cardio Traning Session
            <span className="d-inline-block ps-4">
              <VscArrowRight />
            </span>
          </h3>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
