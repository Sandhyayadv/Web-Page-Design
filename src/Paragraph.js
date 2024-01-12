import React from "react";
import IPhone14 from "./Images/IPhone14.jpg";
import { Link } from "react-router-dom";

const Paragraph = () => {
  return (
    <>
      <div className="body-content">
        <h1 id="heading1">iPhone14 Pro</h1>
        <p id="headind3">Pro.Beyond.</p>
        <ul className="anchor-1">
          <li id="list-1">
            <Link to="/learnMore"> Learn more {">"} </Link>
          </li>
          <li id="list-2"> Buy {">"} </li>
        </ul>
        <img id="iphone14" alt="/" src={IPhone14} />
      </div>

      <div className="body-content-1">
        <h1 id="heading2">iPhone14 </h1>
        <p id="para-2">Big and bigger.</p>
        <ul className="anchor-2">
          <li id="list-1"> Learn more {">"} </li>
          <li id="list-2"> Buy {">"} </li>
        </ul>
        <img
          id="hand-2"
          alt="/"
          src="https://i.insider.com/6323394ed5916b0019abdcbf?width=1136&format=jpeg"
        />
      </div>

      <div className="container">
        <div className="content">
          <p id="para-3">A Vishal Bhardwaj film</p>
          <h1 id="fursat">FURSAT</h1>
          <p id="para-4">Shot on iPhone14 Pro</p>
          <button id="btn-1">Watch the film </button>
          <button id="btn-2">Learn more</button>
        </div>
      </div>
    </>
  );
};

export default Paragraph;
