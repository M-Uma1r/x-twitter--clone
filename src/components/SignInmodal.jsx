import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignInmodal.css";

export default function SignInmodal() {
  const [signIn, setSignIn] = useState("");
  const [password, setPassword] = useState("");
  const [temp, setTemp] = useState("");
  const [Error, setError] = useState(false);
  const navigate = useNavigate();

  function error() {
    // Check if either of the required fields are empty
    if (temp === "" || password === "") {
      setError(true);
    } else {
      setError(false);
    }
  }

  function SetsignIndata() {
    setSignIn(temp);
    setPassword(password);
    console.log("Sign In Data:", signIn);
    navigate("/home"); // Redirect to home or any other page after successful sign in
  }

  function output() {
    error();
    console.log("Show Error:", Error); // Debugging line
    if (!Error) {
      // Only set data if there's no error
      SetsignIndata();
    }
    else{
      error();
    }
  }

  return (
    <div className="signin-modal-container">
      <div className="signin-modal-items">
        <div className="signin-modal-header mb-5">
          <p className="close text-light d-inline ms-5 ">
            <Link to="/" className="text-light">
              &times;
            </Link>
          </p>
          <div className="signin-logo d-inline">
            <img
              style={{ height: 50 }}
              className="my-3"
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
              alt="X logo"
            />
          </div>
        </div>
        <div className="signin-modal-content">
          <h2 className="title text-light mb-5">Sign in to X</h2>
          <button className="signin-button1 btn btn-light rounded-pill my-2 mb-3 d-block">
            <i
              className="fa-brands fa-google"
              style={{ marginRight: "15px", fontSize: "20px" }}
            ></i>
            <p className="p1">Sign up with Google</p>
          </button>
          <button className="signin-button1 btn btn-light rounded-pill ">
            <i
              className="fa-brands fa-apple"
              style={{ marginRight: "20px", fontSize: "25px" }}
            ></i>
            <p className="p1">Sign up with Apple</p>
          </button>
          <br />
          <div className="signin-box1"> </div>
          <p className="signin-or text-light">or</p>
          <div className="signin-box2"></div>
          <input
            className="signin-email rounded d-block"
            type="email"
            placeholder="Phone, email or username"
            onChange={(e) => setTemp(e.target.value)}
          />{" "}
          <br />
          <input
            className="signin-email rounded d-block"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signin-modal-footer">
          {Error && (
            <div className="error1 rounded" style={{ display: "flex", color: "red" }}>
              <h5 className="title m-auto">
                You must fill all inputs!
              </h5>
            </div>
          )}
          <button className="signin-next w-50 btn btn-light rounded-pill" type="button" onClick={output}>
            Next
          </button>
          <button className="signin-fp-btn btn rounded-pill my-3 ">
            Forgot password?
          </button>
          <p className="ending-p">
            Don't have an account?
            <a className="link-to-signup" href="...">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
