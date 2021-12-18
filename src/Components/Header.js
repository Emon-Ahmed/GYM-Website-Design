import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Image/logo.png";
import VideIcon from "../Image/BackGroud.png";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userLoggedIn } from "../Redux/auth/action";
import initializeFirebase from "../Firebase/InitializeApp";

initializeFirebase();

const auth = getAuth();

export default function Header() {
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
                  Service
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                {user?.email ? (
                  <>
                    <Nav.Link>
                      <Button className="btn-warning" onClick={logOut}>Logout</Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/dashboard">
                      <Button className="btn-warning">Dashboard</Button>
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/register">
                    <Button className="btn-warning">Join Now</Button>
                  </Nav.Link>
                )}
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
            Gym & Fitness is an ultra-modern unisex fitness center with the best amenities and training equipment. We offer a wide range of classes and exercising programs, tailored to improve stamina and fitness goals of each gym member.
            </p>
            <Link className="header-btn" to="/register">
              <Button className="btn-warning">JOIN US</Button>
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
