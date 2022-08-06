import React from "react";
import "./header.css";
import Typed from "react-typed";
import image from "../images/img.jpg";
import Navbar from "./Navbar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import { useState } from "react";

export default function Header() {
  const [light, setlight] = useState(false);

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-end m-4">
        {light ? (
          <img className="sun" src={sun} alt="." />
        ) : (
          <img className="moon" src={moon} alt="." />
        )}
      </div>
      <div className="container row center">
        <img className="round-image" src={image} alt="." />
        <Typed
          className="col-12 mt-5 pt-4 typed-text"
          strings={[
            "I'm a Full Stack Developer.",
            "I'm a Business Intelligence Student.",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <div className="row mt-3 pt-3 justify-content-center">
          <a href="https://www.facebook.com/oumaima.samiii">
            <FacebookIcon
              className="mx-2"
              style={{ fontSize: "40px", color: "#3b5998" }}
            />
          </a>
          <a href="https://www.instagram.com/oumaimasami_/">
            <InstagramIcon
              className="mx-2"
              style={{ fontSize: "40px", color: "#E1306C" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/oumaima-sami-568504187/">
            <LinkedInIcon
              className="mx-2"
              style={{ fontSize: "40px", color: "#0077B5" }}
            />
          </a>
          <a href="https://github.com/oumaimasami">
            <GitHubIcon
              className="mx-2"
              style={{ fontSize: "35px", color: "#333333" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
