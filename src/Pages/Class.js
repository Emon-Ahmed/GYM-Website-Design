import React, { useEffect, useState } from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import { VscArrowRight } from "react-icons/vsc";
import {  useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Class() {
  let navigate = useNavigate();

  const { classes, loading } = useSelector((state) => state.classes);

  if (loading) return <Spinner animation="border" />;
  return (
    <div>
      <SubHeader PageName="OUR CLASSES"></SubHeader>
      <div className="container">
        <div className="my-5 display-grid justify-content-between my-4 align-items-center">
          {classes?.map((item) => (
            <div
            style={{ 
              backgroundImage: `url("${item.photo}")` 
            }}
              className="program m-2 align-items-center"
              key={item.key}
            >
              <h5 className="d-flex align-items-center justify-content-center">
                <span onClick={() => navigate(`/class/${item.key}`)}>
                  {item.name}
                </span>
                <span className="d-inline-block ps-4">
                  <VscArrowRight />
                </span>
              </h5>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
