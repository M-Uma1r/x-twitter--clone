import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUplogo from "./SignUplogo";
import "./SignUp.css";
import SignUpmodal from "./SignUpmodal";
import SignInmodal from "./SignInmodal";
import SignUpPasswordModal from "./SignUpPasswordModal";

export default function SignUp() {
  return (
    <div className="d-flex align-items-center ">
      <div className="logo">
        <SignUplogo />
      </div>
      <div className="details text-white ms-3">
        <p className="h1 ">Happening now</p> <br /> <br />
        <h1 className="h2">Join today.</h1> <br />
        <button className="button1 btn btn-light rounded-pill my-2 d-block">
          <i
            class="fa-brands fa-google"
            style={{ marginRight: "15px", fontSize: "20px" }}
          ></i>
          <p className="p1">Sign up with Google</p>
        </button>
        <button className="button1 btn btn-light rounded-pill ">
          <i
            class="fa-brands fa-apple"
            style={{ marginRight: "20px", fontSize: "25px" }}
          ></i>
          <p className="p1">Sign up with Apple</p>
        </button>
        <br />
        <div className="box"> </div>
        <p className="or">or</p>
        <div className="box"></div>
        <p className="small">
          By signing up, you agree to the <a href="">Terms of Service</a> and
        </p>
        <p className="small">
          <a href="">Privacy Policy</a>, including <a href="">Cookie Use.</a>
        </p>
        <br />
        <Link to="/Signup">
          <button className="button2 btn btn-primary rounded-pill">
            Create account
          </button>
        </Link>
        <h5>Already have an account?</h5>
        <Link to="/signin">
          <button className="button3 text-primary rounded-pill">
            <p className="p1">Sign In</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
