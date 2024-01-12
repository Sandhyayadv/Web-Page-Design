import React from "react";
import appleIcon from "./apple-icon.jpeg";
import briefcase from "./Images/briefcase.jpeg";
import searchIcon from "./searchIcon.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <ul className="ul-items">
          <Link to="/">
            <img id="apple-icon" src={appleIcon} alt="/" />
          </Link>
          <Link to="/flexbox">
            {" "}
            <li id="item-1">Store</li>
          </Link>

          <li id="item-2">Mac</li>
          <li id="item-3">ipad</li>
          <li id="item-4">iphone12</li>
          <li id="item-5">Watch</li>
          <li id="item-6">AirPods</li>
          <li id="item-7">TV&Home</li>
          <li id="item-8">Entertainment</li>
          <li id="item-9">Accessories</li>
          <li id="item-10">Support</li>
          <img id="search-bar" alt="/" src={searchIcon} />

          <Link to="/briefcase">
            {" "}
            <img id="briefcase" alt="/" src={briefcase} />{" "}
          </Link>
        </ul>
      </div>
      <div className="bar1">
        <p id="para1">
          Get free delivery, specialist help, and 3- or 6-month No Cost EMI‡ on
          selected products.
        </p>
      </div>
    </>
  );
};

export default Navbar;
