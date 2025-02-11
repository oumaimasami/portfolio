import React from "react";
import "./Footer.css";
import git from "../images/git.png";
export default function Footer({ light }) {
  return (
    <div className="footer container">
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
      {light ? (
        <h6 className="text-center text-light mt-5">
          © Copyright Oumaimasami 2022
        </h6>
      ) : (
        <h6 className="text-center text-dark mt-5">
          © Copyright Oumaimasami 2025
        </h6>
      )}
    </div>
  );
}
