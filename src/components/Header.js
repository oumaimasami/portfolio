import React from "react";
import "./header.css";
import Typed from "react-typed";
import image from "../images/img.jpg";
export default function Header() {
  return (
    <div className="container row center">
      <img className="round-image" src={image} alt="." />
      <Typed
        className="col-12 typed-text"
        strings={[
          "I'm a Business Intelligence Student",
          "I'm a Full Stack Developer",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
}
