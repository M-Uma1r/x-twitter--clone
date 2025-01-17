import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./SignUpPasssword.css";
import "./Modal.css";

export default function SignUpmodal() {
  const [userName, setUserName] = useState([""]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [email, setEmail] = useState(["Ali@gmail.com"]);
  const [phone, setPhone] = useState(["03239988877"]);
  const [useEmail, setUseEmail] = useState(false);
  const [modal, setModal] = useState(false);
  const [showError, setShowError] = useState(false); // New state for error visibility
  const navigate = useNavigate();


  function error() {
    if (newName === "" && newEmail === "" && newPhone === "") {
      setShowError(true); // Use state to show the error
    } else {
      setShowError(false); // Hide error if inputs are filled
    }
  }

  function ChangetoEmail(e) {
    e.preventDefault();
    setUseEmail(true);
  }

  function ChangetoPhone(e) {
    e.preventDefault();
    setUseEmail(false);
  }

  function setData() {
    setUserName((prevUserName) => [...prevUserName, newName]);
    setEmail((prevEmail) => [...prevEmail, newEmail]);
    setPhone((prevPhone) => [...prevPhone, newPhone]);
    console.log(userName);
    console.log(email);
    console.log(phone);
  }

  function closer() {
    setModal(false);
  }

  function output() {
    error();
    if (!showError) {
      // Only set data if there's no error
      setData();
      navigate("/password")
    }
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
          <h2 className="title text-light mb-4">Create Your Account</h2>
          <input
            className="input d-flex"
            type="text"
            placeholder="Name"
            id="name"
            required
            onChange={(e) => setNewName(e.target.value)}
          />
          {useEmail ? (
            <input
              className="input d-flex"
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={(e) => setNewEmail(e.target.value)}
            />
          ) : (
            <input
              className="input d-flex"
              type="tel"
              placeholder="Phone"
              id="phone"
              required
              onChange={(e) => setNewPhone(e.target.value)}
            />
          )}
          {useEmail ? (
            <a href="#" className="link d-flex" onClick={ChangetoPhone}>
              Use phone instead
            </a>
          ) : (
            <a href="#" className="link d-flex" onClick={ChangetoEmail}>
              Use email instead
            </a>
          )}
          <h1 className="dob title text-light">Date of birth</h1>
          <p className="title text-grey">
            This will not be shown publicly. Confirm your own age, even if this
          </p>
          <p className="title text-grey">
            account is for a business, a pet, or something else.
          </p>
          <div className="select-container">
            <select className="title rounded" name="Month" id="Month" required>
              <option value="">Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select className="title rounded" name="Day" id="Day" required>
              <option value="Day">Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select className="title rounded" name="Year" id="Year" required>
              <option value="">Year</option>
              <option value="1904">1904</option>
              <option value="1905">1905</option>
              <option value="1906">1906</option>
              <option value="1907">1907</option>
              <option value="1908">1908</option>
              <option value="1909">1909</option>
              <option value="1910">1910</option>
              <option value="1911">1911</option>
              <option value="1912">1912</option>
              <option value="1913">1913</option>
              <option value="1914">1914</option>
              <option value="1915">1915</option>
              <option value="1916">1916</option>
              <option value="1917">1917</option>
              <option value="1918">1918</option>
              <option value="1919">1919</option>
              <option value="1920">1920</option>
              <option value="1921">1921</option>
              <option value="1922">1922</option>
              <option value="1923">1923</option>
              <option value="1924">1924</option>
              <option value="1925">1925</option>
              <option value="1926">1926</option>
              <option value="1927">1927</option>
              <option value="1928">1928</option>
              <option value="1929">1929</option>
              <option value="1930">1930</option>
              <option value="1931">1931</option>
              <option value="1932">1932</option>
              <option value="1933">1933</option>
              <option value="1934">1934</option>
              <option value="1935">1935</option>
              <option value="1936">1936</option>
              <option value="1937">1937</option>
              <option value="1938">1938</option>
              <option value="1939">1939</option>
              <option value="1940">1940</option>
              <option value="1941">1941</option>
              <option value="1942">1942</option>
              <option value="1943">1943</option>
              <option value="1944">1944</option>
              <option value="1945">1945</option>
              <option value="1946">1946</option>
              <option value="1947">1947</option>
              <option value="1948">1948</option>
              <option value="1949">1949</option>
              <option value="1950">1950</option>
              <option value="1951">1951</option>
              <option value="1952">1952</option>
              <option value="1953">1953</option>
              <option value="1954">1954</option>
              <option value="1955">1955</option>
              <option value="1956">1956</option>
              <option value="1957">1957</option>
              <option value="1958">1958</option>
              <option value="1959">1959</option>
              <option value="1960">1960</option>
              <option value="1961">1961</option>
              <option value="1962">1962</option>
              <option value="1963">1963</option>
              <option value="1964">1964</option>
              <option value="1965">1965</option>
              <option value="1966">1966</option>
              <option value="1967">1967</option>
              <option value="1968">1968</option>
              <option value="1969">1969</option>
              <option value="1970">1970</option>
              <option value="1971">1971</option>
              <option value="1972">1972</option>
              <option value="1973">1973</option>
              <option value="1974">1974</option>
              <option value="1975">1975</option>
              <option value="1976">1976</option>
              <option value="1977">1977</option>
              <option value="1978">1978</option>
              <option value="1979">1979</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
            </select>
          </div>
          {showError && (
            <div className="error1 rounded" style={{ display: "flex" }}>
              <h5 className="title text-light m-auto">
                You must fill all inputs!
              </h5>
            </div>
          )}
          <button className="next btn btn-light rounded-pill" type="submit" onClick={output}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
