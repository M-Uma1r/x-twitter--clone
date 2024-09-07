import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpPasssword.css";

export default function SignUpPasswordModal() {
  const [password, setPassword] = useState([""]);
  const [NewPassword, setNewPassword] = useState([""]);
  const [NewConfirmPassword, setNewConfirmPassword] = useState([""]);
  const [modal, setModal] = useState(false);

  function SetPwd() {
    if (NewPassword === NewConfirmPassword) {
      setPassword(NewPassword);
      setNewPassword("");
      setNewConfirmPassword("");
      document.getElementsByClassName("error")[0].style.display = "none";
    }
     else {
      document.getElementsByClassName("error")[0].style.display = "flex";
    }
  }

  function closer() {
    setModal(false);
  }

  return (
    <div className="modal-container">
      <div className="modal-items">
        <div className="modal-header">
          <p className="close text-light ">
            <Link to="/" className="text-light" onClick={closer}>
              &times;
            </Link>
          </p>
          <div className="signup-logo">
            <img
              style={{ height: 50 }}
              className="my-3"
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
              alt="X logo"
            />
          </div>
        </div>
        <div className="modal-content">
          <h2 className="title text-light mb-4">Set Password</h2>
          <input
            className="input d-flex"
            type="Password"
            placeholder="Password"
            required
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            className="input d-flex"
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setNewConfirmPassword(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <p className="error ">Passwords do not match</p>
          <button
            className="btn modal-button btn-light rounded-pill"
            onClick={SetPwd}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
