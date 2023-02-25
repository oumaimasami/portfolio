import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import git from "../images/git.png";
export default function Footer() {
  return (
    <div className="footer">
      {" "}
      <div className="row mt-3 pt-3 justify-content-center">
        <a href="https://www.facebook.com/oumaima.samiii" target="_blank">
          <FacebookIcon
            className="mx-2 icon"
            style={{ fontSize: "40px", color: "#3b5998" }}
          />
        </a>
        <a href="https://www.instagram.com/oumaimasami_/" target="_blank">
          <InstagramIcon
            className="mx-2 icon"
            style={{ fontSize: "40px", color: "#E1306C" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/oumaima-sami-568504187/"
          target="_blank"
        >
          <LinkedInIcon
            className="mx-2 icon"
            style={{ fontSize: "40px", color: "#0077B5" }}
          />
        </a>
        <a href="https://github.com/oumaimasami" target="_blank">
          <img className="mx-2 git" src={git} />
        </a>
      </div>
      <h6 className="text-center mt-5">© Copyyright Oumaimasami 2022</h6>
    </div>
  );
}
