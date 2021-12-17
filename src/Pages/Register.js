import React, { useEffect } from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../Redux/auth/action";
import { Link } from "react-router-dom";

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
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
              </Form.Floating>

            <Link to="/dashboard">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Link>
          </Form>
        </div>
        <div className="register w-50 mx-2">
          <div className="header-text text-black mx-auto">
            <h1>Register</h1>
          </div>
          <Form>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
              </Form.Floating>

            <Link to="/dashboard">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Link>
          </Form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
