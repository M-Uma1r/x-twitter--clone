import React from "react";
import "./following.css";

export default function Following() {
  return (
    <div>
      <div className="following">
        <button className="following-btn-1">For you</button>
        <button className="following-btn-2">
          Following
          <div className="under">
            <h1 className="fw-bolder text-light">Welcome to X</h1>
            <p>This is the best place to see what’s happening in your world. Find some people and topics to follow now.</p>
            <button className="btn btn-primary rounded-pill fw-bold">Let's go!</button>
          </div>
        </button>
      </div>
    </div>
  );
}
