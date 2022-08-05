import React from "react";
import "./about.css";
export default function About() {
  return (
    <div className="About row">
      <div className="col-6">
        <p className="resume m-5 ">
          Welcome to my portfolio ,check my CV and the projects I've worked on
          below , feel free to cantact me.
        </p>
        <a className="button" href="#">
          CV
        </a>
      </div>
    </div>
  );
}
