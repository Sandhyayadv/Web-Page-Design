import React from "react";
import AirPods from "./Images/AirPods.jpeg";
import HomePod from "./Images/HomePod.jpeg";
import AppleIcon from "./Images/AppleIcon.png";
import macBook from "./Images/macBook.jpeg";
import IPadPro from "./Images/IPadPro.jpeg";
import Watch from "./Images/Watch.jpg";
import m2 from "./Images/m2.png";
import IPad from "./Images/IPad.jpg";

const FlexBox = () => {
  return (
    <>
      <div className="container-1">
        <div className="content-1" id="box-1">
          <h1>MacBook Pro</h1>
          <p>Supercharged by M2 Pro and M2 Max. </p>
          <ul className="anchor-1">
            <li id="list-1"> Learn more {">"} </li>
            <li id="list-2"> Buy {">"} </li>
          </ul>
          <img id="mac-book" alt="/" src={macBook} />
        </div>
        <div className="content-1" id="box-2">
          <ul id="icon-watch">
            <li>
              <img id="icon" alt="/" src={AppleIcon} />{" "}
            </li>
            <li>
              <h1>WATCH</h1>
            </li>
          </ul>
          <p id="ultra">ULTRA</p>
          <p>Adventure awaits.</p>
          <ul className="anchor-1">
            <li id="list-1"> Learn more {">"} </li>
            <li id="list-2">Buy {">"}</li>
          </ul>
          <img id="watch" alt="" src={Watch} />
        </div>
      </div>

      <div className="container-2">
        <div className="content-2" id="box-3">
          <h1>iPad Pro</h1>
          <ul id="ipad-icon">
            <li>
              <p>Supercharged by</p>
            </li>
            <li>
              <img id="ipad" alt="/" src={m2} />{" "}
            </li>
          </ul>
          <ul className="anchor-1">
            <li id="list-1"> Learn more {">"} </li>
            <li id="list-2">Buy {">"}</li>
          </ul>
          <img id="ipad-pro" alt="/" src={IPadPro} />
        </div>

        <div className="content-2" id="box-4">
          <h1>AirPods Pro</h1>
          <p>Rebuilt from the sound up.</p>

          <ul className="anchor-1">
            <li id="list-1"> Learn more {">"} </li>
            <li id="list-2">Buy {">"}</li>
          </ul>
          <img id="airpods-pro" alt="/" src={AirPods} />
        </div>
      </div>

      <div className="container-3">
        <div className="content-3" id="box-5">
          <h1>iPad </h1>
          <p>Lovable.Drawable.Magical</p>
          <ul className="anchor-1">
            <li id="list-1"> Learn more {">"} </li>
            <li id="list-2">Buy {">"}</li>
          </ul>
          <img id="i-pad" alt="" src={IPad} />
        </div>
        <div className="content-3" id="box-6">
          <h1>HomePod</h1>
          <p>Profound sound</p>
          <ul className="anchor-1">
            <li id="list-1"> Learn more {">"} </li>
            <li id="list-2">Buy {">"}</li>
          </ul>
          <img id="home-pod" alt="/" src={HomePod} />
        </div>
      </div>

      <div className="slide-images">
        <div className="img-container"></div>
      </div>
    </>
  );
};

export default FlexBox;
