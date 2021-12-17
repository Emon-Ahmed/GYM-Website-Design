import React from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import { Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <SubHeader PageName="DASHBOARD"></SubHeader>
      <div className="container my-5 d-flex">
        <div className="bg-dark w-25">
          <Nav className="flex-column">
            <Nav.Link className="py-2 border border-light border-bottom-2" as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link className="py-2 border border-light border-bottom-2" as={Link} to="/dashboard/order">Order</Nav.Link>
            <Nav.Link className="py-2 border border-light border-bottom-2" as={Link} to="/dashboard/allorder">All Order</Nav.Link>
            <Nav.Link className="py-2 border border-light border-bottom-2" as={Link} to="/dashboard/details">Account Details</Nav.Link>
            <Nav.Link className="py-2 border border-light border-bottom-2" as={Link} to="/dashboard/alldetails">All Account Details</Nav.Link>
            <Nav.Link className="py-2 border border-light border-bottom-2" as={Link} to="/dashboard/makeadmin">Make Admin</Nav.Link>
            <Nav.Link className="py-2 border border-light border-bottom-2 bg-danger" as={Link} to="/">Logout</Nav.Link>
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
