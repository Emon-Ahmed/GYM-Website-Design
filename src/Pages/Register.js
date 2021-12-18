import React, { useState, useEffect } from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Components/Footer";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import initializeFirebase from "../Firebase/InitializeApp";
import { userLoggedIn } from "../Redux/auth/action";
initializeFirebase();

const auth = getAuth();
const provider = new GoogleAuthProvider();

export default function Register() {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [emailRegData, setEmailReg] = useState("");
  const [passwordRegData, setPasswordReg] = useState("");

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(userLoggedIn());
        navigate('/register')
      })
      .catch((error) => {});
  };

  const googleLog = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      navigate(from)
      console.log(user);
    });
  };

  const userLog = () => {
    signInWithEmailAndPassword(auth, emailLog, passwordLog).then(
      (userCredential) => {
        const user = userCredential.user;
        navigate(from)
        console.log(user);
      }
    );
  };

  const userReg = () => {
    createUserWithEmailAndPassword(auth, emailRegData, passwordRegData).then(
      (userCredential) => {
        const user = userCredential.user;
        navigate(from)
        console.log(user);
      }
    );
  };

  const emailLogInput = (e) => {
    const email = e.target.value;
    setEmailLog(email);
  };
  const passwordLogInput = (e) => {
    const password = e.target.value;
    setPasswordLog(password);
  };

  const emailRegInput = (e) => {
    const email = e.target.value;
    setEmailReg(email);
  };
  const passwordRegInput = (e) => {
    const password = e.target.value;
    setPasswordReg(password);
  };

  return (
    <div>
      <SubHeader PageName="ACCOUNT"></SubHeader>
      <div className="container account d-flex py-5 my-5">
        <div className="login w-50 mx-2">
          <div className="header-text text-black mx-auto">
            <h1>Login</h1>
          </div>
          <div>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                name="email"
                onBlur={emailLogInput}
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                name="password"
                onBlur={passwordLogInput}
                type="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>

            <div className="d-flex">
              <Button onClick={userLog} variant="primary" type="submit">
                Login
              </Button>
              <Button className="mx-2" onClick={googleLog} type="submit">
                <span>
                  <AiOutlineGoogle />
                </span>
                <span>Google</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="register w-50 mx-2">
          <div className="header-text text-black mx-auto">
            <h1>Register</h1>
          </div>
          <>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                name="emailReg"
                onBlur={emailRegInput}
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                name="passwordReg"
                onBlur={passwordRegInput}
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>

            <>
              <Button onClick={userReg} type="submit">
                Register
              </Button>
            </>
          </>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
