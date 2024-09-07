import React, { useState } from "react";
import "./rightbar.css";

export default function Rightbar() {
  const [inputStyle, setInputstyle] = useState({});

  function focus() {
    setInputstyle({
      border: "1px solid rgb(52, 182, 253)",
      color: "white",
    });
  }

  function blur() {
    setInputstyle({});
  }

  return (
    <div className="right">
      <div className="searchbox">
        <i className="search fa-solid fa-magnifying-glass"></i>
        <input
          style={inputStyle} 
          className="searchbar"
          type="text"
          placeholder="Search"
          onClick={focus}
          onBlur={blur}
        />
      </div>
      <div className="box1">
        <h4 className="fw-bolder">Subscribe to Premium</h4>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="btn btn-primary rounded-pill w-50">Subscribe</button>
      </div>
      <div className="box2">
        <h4 className="mx-3 fw-bolder">What's happening</h4>
        <div className="innerbox">
          <img
            className="innerimg rounded d-inline"
            loading="lazy"
            width="75"
            height="65"
            alt=""
            src="https://pbs.twimg.com/semantic_core_img/1808533826286559232/zQ70R1to?format=jpg&name=240x240"
          />
          <div className="text-container">
            <p className="righttitle title-1 fw-bolder d-inline mx-2">
              Esports world cup 2024 
            </p>
            <p className="righttext h6 fw-light d-inline">Esports . Live</p>
          </div>
        </div>
        <div className="innerbox">
          <p className="text-grey mx-2 h6 fw-light">
            Trending in United States
          </p>
          <p className="righttitle fw-bolder d-inline mx-2">Ungrateful</p>
          <p className="righttext-lower">7,633 posts</p>
          <i className="fa-solid fa-ellipsis text-grey right-ellipsis"></i>
        </div>
        <div className="innerbox">
          <p className="text-grey mx-2 h6 fw-light">Politics . Trending</p>
          <p className="righttitle fw-bolder d-inline mx-2">Ivanka</p>
          <p className="righttext-lower">42.9k posts</p>
          <i className="fa-solid fa-ellipsis text-grey right-ellipsis"></i>
        </div>
        <div className="innerbox">
          <p className="text-grey mx-2 h6 fw-light">Politics . Trending</p>
          <p className="righttitle fw-bolder d-inline mx-2">The DNC</p>
          <p className="righttext-lower">908k posts</p>
          <i className="fa-solid fa-ellipsis text-grey right-ellipsis"></i>
        </div>
        <div className="innerbox">
          <p className="text-grey mx-2 h6 fw-light">Politics . Trending</p>
          <p className="righttitle fw-bolder d-inline mx-2">Hillary</p>
          <p className="righttext-lower">300k posts</p>
          <i className="fa-solid fa-ellipsis text-grey right-ellipsis"></i>
        </div>
        <div className="innerbox">
          <p className="righttitle d-inline mx-2 text-postblue">Show more</p>
        </div>
      </div>
      <div className="box3">
        <h4 className="mx-3 fw-bolder">Who to follow</h4>
        <div className="box3-innerbox">
          <img
            className="rightbar-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKkRTfVYnEoRFxb__kU8dINGVTI-T2Sj01i-Jc8-wOqP-wibTPwd6Jbl-4LXO_BVmeT8&usqp=CAU"
            alt="Profile"
          />
          <div className="text-container">
            <p className="righttext follow-text text-light fw-bolder mx-2">
              NASA
            </p>
            <p className="text-grey follow-user1">@NASA</p>
          </div>
          <button className="follow-btn btn btn-light rounded-pill">
            Follow
          </button>
        </div>
        <div className="box3-innerbox">
          <img
            className="rightbar-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKkRTfVYnEoRFxb__kU8dINGVTI-T2Sj01i-Jc8-wOqP-wibTPwd6Jbl-4LXO_BVmeT8&usqp=CAU"
            alt="Profile"
          />
          <div className="text-container">
            <p className="righttext follow-text text-light fw-bolder mx-2">
              NBA
            </p>
            <p className="text-grey follow-user2">@NBA</p>
          </div>
          <button className="follow-btn btn btn-light rounded-pill">
            Follow
          </button>
        </div>
        <div className="box3-innerbox">
          <img
            className="rightbar-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKkRTfVYnEoRFxb__kU8dINGVTI-T2Sj01i-Jc8-wOqP-wibTPwd6Jbl-4LXO_BVmeT8&usqp=CAU"
            alt="Profile"
          />
          <div className="text-container">
            <p className="righttext follow-text text-light fw-bolder mx-2">X</p>
            <p className="text-grey follow-user3">@X</p>
          </div>
          <button className="follow-btn btn btn-light rounded-pill">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
