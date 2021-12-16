import React, { useEffect } from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../Redux/auth/action";

export default function Register() {

  return (
    <div>
      <SubHeader PageName="ACCOUNT"></SubHeader>
      <div className="container account d-flex py-5 my-5">
        <div className="login w-50 mx-2">
          <div className="header-text text-black mx-auto">
            <h1>Login</h1>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
        <div className="register w-50 mx-2">
          <div className="header-text text-black mx-auto">
            <h1>Register</h1>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
