import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./foryou.css";

export default function Foryou() {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate()
  const maxCharacters = 280;

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = () => {
    if (tweet.length > 0 && tweet.length <= maxCharacters) {
      setTweets([...tweets, tweet]); // Add the new tweet to the list
      setTweet(""); // Clear the input after posting
    }
  };
  function postDropDown(){
    document.getElementsByClassName("dropdown")[0].style.display = "block";  
  }
  function postDropDownClose(){
    document.getElementsByClassName("dropdown")[0].style.display = "none";  
  }

  function ToFollowing(){
    navigate("following")
  }

  return (
    <div>
      <div className="foryou">
        <button className="foryou-btn-1">
          For you
          <div className="under"></div>
        </button>
        <button className="foryou-btn-2" onClick={ToFollowing}>Following</button>
        <div className="mainbox">
          <div className="xtwitter-post-container">
            <div className="profile-picture">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKkRTfVYnEoRFxb__kU8dINGVTI-T2Sj01i-Jc8-wOqP-wibTPwd6Jbl-4LXO_BVmeT8&usqp=CAU"
                alt="Profile"
              />
            </div>
            <div className="tweet-box">
              <textarea
                className="tweet-input"
                value={tweet}
                onChange={handleTweetChange}
                placeholder="What is happening?"
                maxLength={maxCharacters}
              />
              <div className="twbtn">
                <button className="tweet-input-btn">
                  <i className="fa fa-solid fa-earth-americas"></i> Everyone can
                  reply
                </button>
              </div>
              <div className="tweet-footer">
                <div className="icons">
                  <i className="fa fa-image"></i>
                  <i className="fa fa-gif"></i>
                  <i className="fa fa-poll"></i>
                  <i className="fa fa-smile"></i>
                  <i className="fa fa-calendar"></i>
                  <i className="fa fa-location-arrow"></i>
                </div>
                <div className="tweet-actions">
                  <span
                    className={`char-counter ${
                      tweet.length > maxCharacters - 20 ? "warn" : ""
                    }`}
                  >
                    {maxCharacters - tweet.length}
                  </span>
                  <button
                    className="tweet-button"
                    onClick={handleTweetSubmit}
                    disabled={
                      tweet.length === 0 || tweet.length > maxCharacters
                    }
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          {tweets.map((tweet, index) => (
            <div key={index} className="displaypost">
              <div className="profile-picture-post">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKkRTfVYnEoRFxb__kU8dINGVTI-T2Sj01i-Jc8-wOqP-wibTPwd6Jbl-4LXO_BVmeT8&usqp=CAU"
                  alt="Profile"
                />
              </div>
              <p className="post-username p-Name">Name</p>
              <p className="post-username p-user">@userName</p>
              <p className="post-username p-user">.</p>
              <p className="post-username p-user">Date</p>
              <i class="fa-solid fa-ellipsis post-username post-ellipsis my-post" onClick={postDropDown}></i>
              <p className="disply-p d-block">{tweet}</p>
              <div className="post-icons">
                <i className="fa-regular fa-comment d-inline"></i>
                <i className="fa-solid fa-arrows-rotate"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-chart-simple"></i>
                <i className="fa-regular fa-bookmark fa-bookmark-icon"></i>
                <i class="fa-solid fa-upload"></i>
              </div>
              <div className="dropdown">
                <p className="text-danger innerbox p-2 px-3">Delete</p>
                <p className="innerbox p-2 px-3">Edit</p>
                <p className="innerbox p-2 px-3">Repost</p>
                <p className="innerbox p-2 px-3" onClick={postDropDownClose}>Close</p>
              </div>
            </div>
          ))}
          <div className="displaypost">
            <div className="profile-picture-post">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
              />
            </div>
            <p className="post-username p-Name">Hassan</p>
            <p className="post-username p-user">@Hassan</p>
            <p className="post-username p-user">.</p>
            <p className="post-username p-user">Aug 17</p>
            <i class="fa-solid fa-ellipsis post-username post-ellipsis"></i>
            <p className="disply-p d-block">JavaScript or TypeScript</p>
            <div className="post-icons">
              <i className="fa-regular fa-comment d-inline"></i>
              <i className="fa-solid fa-arrows-rotate"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-chart-simple"></i>
              <i className="fa-regular fa-bookmark fa-bookmark-icon"></i>
              <i class="fa-solid fa-upload"></i>
            </div>
          </div>
          <div className="displaypost">
            <div className="profile-picture-post">
              <img
                src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
              />
            </div>
            <p className="post-username p-Name">Adnan </p>
            <p className="post-username p-user">@adnan</p>
            <p className="post-username p-user">.</p>
            <p className="post-username p-user">Aug 17</p>
            <i class="fa-solid fa-ellipsis post-username post-ellipsis"></i>
            <p className="disply-p d-block">
              Which database do you use the most?
              <br />
              <br />
              MongoDB <br />
              PostgreSQL <br />
              MySQL <br />
              Oracle <br />
            </p>
            <div className="post-icons">
              <i className="fa-regular fa-comment d-inline"></i>
              <i className="fa-solid fa-arrows-rotate"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-chart-simple"></i>
              <i className="fa-regular fa-bookmark fa-bookmark-icon"></i>
              <i class="fa-solid fa-upload"></i>
            </div>
          </div>
          <div className="displaypost">
            <div className="profile-picture-post">
              <img
                src="https://images.pexels.com/photos/852793/pexels-photo-852793.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
              />
            </div>
            <p className="post-username p-Name">Techie Orca</p>
            <p className="post-username p-user">@techie</p>
            <p className="post-username p-user">.</p>
            <p className="post-username p-user">Aug 15</p>
            <i class="fa-solid fa-ellipsis post-username post-ellipsis"></i>
            <p className="disply-p d-block">
              As a developer, how do you deal with stressful days at work?
            </p>
            <div className="post-icons">
              <i className="fa-regular fa-comment d-inline"></i>
              <i className="fa-solid fa-arrows-rotate"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-chart-simple"></i>
              <i className="fa-regular fa-bookmark fa-bookmark-icon"></i>
              <i class="fa-solid fa-upload"></i>
            </div>
          </div>
          <div className="displaypost">
            <div className="profile-picture-post">
              <img
                src="https://images.pexels.com/photos/4067768/pexels-photo-4067768.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
              />
            </div>
            <p className="post-username p-Name">Marcus</p>
            <p className="post-username p-user">@marcus</p>
            <p className="post-username p-user">.</p>
            <p className="post-username p-user">Aug 14</p>
            <i class="fa-solid fa-ellipsis post-username post-ellipsis"></i>
            <p className="disply-p d-block">
              What are your top 3 favourite programming languages and why?
            </p>
            <div className="post-icons">
              <i className="fa-regular fa-comment d-inline"></i>
              <i className="fa-solid fa-arrows-rotate"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-chart-simple"></i>
              <i className="fa-regular fa-bookmark fa-bookmark-icon"></i>
              <i class="fa-solid fa-upload"></i>
            </div>
          </div>
          <div className="displaypost">
            <div className="profile-picture-post">
              <img
                src="https://images.pexels.com/photos/14852630/pexels-photo-14852630.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
              />
            </div>
            <p className="post-username p-Name">Rem</p>
            <p className="post-username p-user">@rem</p>
            <p className="post-username p-user">.</p>
            <p className="post-username p-user">Aug 12</p>
            <i class="fa-solid fa-ellipsis post-username post-ellipsis"></i>
            <p className="disply-p d-block">
              what is the best way to learn programming nowadays? <br />
              a.self-taught <br />
              b.university <br />
              c.bootcamps <br />
              d.other
            </p>
            <div className="post-icons">
              <i className="fa-regular fa-comment d-inline"></i>
              <i className="fa-solid fa-arrows-rotate"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-chart-simple"></i>
              <i className="fa-regular fa-bookmark fa-bookmark-icon"></i>
              <i class="fa-solid fa-upload"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

