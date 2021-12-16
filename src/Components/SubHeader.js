import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Image/logo.png";

export default function SubHeader({ PageName }) {
  return (
    <div>
      <div className="header-section">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
            <Nav.Link as={Link} to="/">
              <img style={{ maxHeight: "100px" }} src={Logo} alt="Logo" />
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0 align-items-center"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/class">
                  Our Classes
                </Nav.Link>
                <Nav.Link as={Link} to="/pricing">
                  Pricing
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <Button>Join Now</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container d-flex justify-content-between align-items-center py-5">
          <div className="header-text mx-auto">
            <h1>{PageName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
