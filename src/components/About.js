import React from "react";
import "./about.css";
import Candle from "./Candle";
export default function About() {
  return (
    <div className="container">
      <div className="About row mt-5" id="About">
        <div className="col-6">
          <p className="resume m-5 ">
            Welcome to my portfolio ,check my CV and the projects I've worked on
            below , feel free to cantact me.
          </p>
          <a
            className="button"
            href="https://drive.google.com/file/d/1xCmFEHzlKXygKmpSCg1m-TL3pZEoP5XK/view?usp=sharing"
          >
            CV
          </a>
        </div>
        <div className="col-6">
          <Candle />
        </div>
      </div>
    </div>
  );
}
