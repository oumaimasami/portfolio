import React from "react";
import "./about.css";
import image from "../images/data.gif";
export default function About() {
  return (
    <div className="container">
      <div className="About row mt-5">
        <div className="col-6">
          <p className="resume m-5 ">
            Welcome to my portfolio ,check my CV and the projects I've worked on
            below , feel free to cantact me.
          </p>
          <a className="button" href="#">
            CV
          </a>
        </div>
        <div className="col-6">
          <img className="img-info" src={image} alt="."></img>
        </div>
      </div>
    </div>
  );
}
