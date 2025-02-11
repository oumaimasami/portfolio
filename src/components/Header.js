import React from "react";
import "./header.css";
import Typed from "react-typed";
import image from "../images/ouma.jpg";
import git from "../images/git.png";

export default function Header({ light, english }) {
  return (
    <div className="container ">
      <div className="row center">
        <img className="round-image" src={image} alt="..." />
        {english ? (
          <Typed
            className={"col-12 mt-5 pt-4 typed-text-dark"}
            strings={[
              "I'm a Full Stack Developer.",
              "I'm a BI Master degree Student.",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        ) : (
          <Typed
            className={"col-12 mt-5 pt-4 typed-text-dark"}
            strings={[
              "je suis une développeuse full stack.",
              "Je suis une étudiante en master BI.",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        )}
        <div className="row mt-3 pt-3 justify-content-center text-center">
          <div className="col justify-content-center">
            <a
              href="https://www.facebook.com/oumaima.samiii"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook icon-page"></i>
            </a>
            <a
              href="https://www.instagram.com/oumaimasami_/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram icon-page"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/oumaima-sami-568504187/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin icon-page"></i>
            </a>
            <a
              href="https://github.com/oumaimasami"
              target="_blank"
              rel="noreferrer"
            >
              <img className="git" src={git} alt="..." />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
