import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function TraningProgram() {
  return (
    <div className="container py-4">
      <div className="text-center d-block mt-5 pt-4">
        <h1>
          TRAINING <span className="text-yellow">PROGRAMS</span>
        </h1>
      </div>
      <div className="d-flex justify-content-between my-4 align-items-center">
        <div className="programhome program1 mx-1 align-items-center">
          <Link to="/class">
            <h3 className="d-flex align-items-center justify-content-center">
              <span>Yoga Training Session </span>
              <span className="d-inline-block ps-4">
                <VscArrowRight />
              </span>
            </h3>
          </Link>
        </div>
        <div className="programhome program2 mx-1 align-items-center">
          <Link to="/class">
            <h3>
              Cardio Traning Session
              <span className="d-inline-block ps-4">
                <VscArrowRight />
              </span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
