import React from "react";
import "./about.css";
import Candle from "./Candle";
export default function About({ english }) {
  return (
    <div className="container">
      <div className="About row mt-5" id="About">
        <div className="col-lg-6 col-sm-12 col-md-12">
          {english ? (
            <p className="resume m-5 ">
              Welcome to my portfolio ,check my CV and the projects I've worked
              on below , feel free to cantact me.
            </p>
          ) : (
            <p className="resume m-5 ">
              Bienvenue dans ma portfolio, Consultez mon CV et les projets sur
              lesquels j'ai travaillé ci-dessous, n'hésitez pas à me contacter.
            </p>
          )}
          <a
            className="button"
            href="https://drive.google.com/file/d/1MXyTP_y1NV816L2lrKxKU6LZZgxoz6A2/view?usp=share_link"
            target="_blank"
          >
            CV
          </a>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12">
          <Candle />
        </div>
      </div>
    </div>
  );
}
