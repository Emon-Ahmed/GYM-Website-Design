import React,{useEffect} from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import { Nav } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userLoggedIn } from "../Redux/auth/action";
import initializeFirebase from "../Firebase/InitializeApp";

initializeFirebase();

const auth = getAuth();

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(userLoggedIn());
        navigate("/register");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <SubHeader PageName="DASHBOARD"></SubHeader>
      <div className="container my-5 d-flex">
        <div className="bg-dark w-25">
          <Nav className="flex-column">
            <Nav.Link className="py-3 border border-light border-bottom-2" as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link className="py-3 border border-light border-bottom-2" as={Link} to="/dashboard/order">Order</Nav.Link>
            <Nav.Link className="py-3 border border-light border-bottom-2" as={Link} to="/dashboard/details">Account Details</Nav.Link>
            <Nav.Link className="py-3 border border-light border-bottom-2 bg-danger" onClick={logOut}>Logout</Nav.Link>
          </Nav>
        </div>
        <div className="w-75 bg-light p-3">
            <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
