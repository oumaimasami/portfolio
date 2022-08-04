import React from "react";
import "./header.css";
import image from "../images/img.jpg";
export default function Header() {
  return (
    <div className="container ">
      <img className="round-image" src={image} alt="." />
    </div>
  );
}
