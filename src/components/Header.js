import React from "react";
import "./header.css";
import Typed from "react-typed";
import image from "../images/ouma.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
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
        <div className="row mt-3 pt-3 justify-content-center">
          <a
            href="https://www.facebook.com/oumaima.samiii"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon
              className="mx-2 icon"
              style={{ fontSize: "40px", color: "#3b5998" }}
            />
          </a>
          <a
            href="https://www.instagram.com/oumaimasami_/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon
              className="mx-2 icon"
              style={{ fontSize: "40px", color: "#E1306C" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/oumaima-sami-568504187/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              className="mx-2 icon"
              style={{ fontSize: "40px", color: "#0077B5" }}
            />
          </a>
          <a
            href="https://github.com/oumaimasami"
            target="_blank"
            rel="noreferrer"
          >
            <img className="mx-2 git" src={git} alt="..." />
          </a>
        </div>
      </div>
    </div>
  );
}
