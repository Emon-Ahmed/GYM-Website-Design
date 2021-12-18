import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import Logo from "../Image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userLoggedIn } from "../Redux/auth/action";
import initializeFirebase from "../Firebase/InitializeApp";

initializeFirebase();

const auth = getAuth();

export default function SubHeader({ PageName }) {
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
                    <Button onClick={logOut}>Logout</Button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">
                    <Button>Dashboard</Button>
                  </Nav.Link>
                </>
                ) : (
                  <Nav.Link as={Link} to="/register">
                    <Button>Join Now</Button>
                  </Nav.Link>
                )}
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
