import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Image/logo.png";
import VideIcon from "../Image/BackGroud.png";


export default function Header() {

  return (
    <>
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
          <div className="header-text">
            <h1>
              THE BEST FITNESS <br /> STUDIO IN TOWN
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga{" "}
              <br /> esse porro eaque nobis quas architecto optio hic itaque
              aliquam <br />
              maxime? architecto optio hic itaque aliquam maxime?
            </p>
            <Link to="/register">
              {" "}
              <Button>JOIN US</Button>{" "}
            </Link>
          </div>
          <div className="header-video">
            <img src={VideIcon} className="header-img" alt="Video Icon" />
          </div>
        </div>
      </div>
    </>
  );
}
