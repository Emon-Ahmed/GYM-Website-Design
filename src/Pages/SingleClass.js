import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import SubHeader from "../Components/SubHeader";
import { useDispatch } from "react-redux";
import { addClass } from "../Redux/user/action";

export default function SingleClass() {
  let { classId } = useParams();
  const state = useSelector((state) => state);
  const { classes, auth } = state;

  const navigate = useNavigate();
  const SingleClass = classes.classes?.find((item) => item.key == classId);
  const dispatch = useDispatch();

  const handleClass = async () => {
    const data = { ...SingleClass, email: auth.user.email };
    await dispatch(addClass(data));
    navigate("/dashboard/order");
  };

  return (
    <div>
      <SubHeader PageName="OUR CLASSES"></SubHeader>
      <div className="container">
        <div className="d-flex my-5 py-5">
          <div className="photo">
            <img className="w-75 h-100" src={SingleClass?.photo} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-center">{SingleClass?.name}</h1>
            <p className="text-center">{SingleClass?.description}</p>
            <button className="text-center btn btn-warning" onClick={handleClass}>
              Purchase
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
