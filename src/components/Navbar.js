import React from "react";
import "./navbar.css";
export default function Navbar({ light, english }) {
  console.log(english);
  return (
    <nav
      className={
        light
          ? "navbar navbar sticky-top navbar-expand-lg dark1"
          : "navbar navbar-expand-lg sticky-top navbar-light light1"
      }
    >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        {english ? (
          <ul className="navbar-nav">
            <li className="nav-item pr-2 pl-5 active">
              <a
                className={light ? "nav-link dark1 a1" : "nav-link a1"}
                href="#About"
              >
                About <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item pr-2">
              <a
                className={light ? "nav-link dark1 a2" : "nav-link a2"}
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item pr-2">
              <a
                className={light ? "nav-link dark1 a3" : "nav-link a3"}
                href="#Cantact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item pr-2">
              <a
                className={light ? "nav-link dark1 a4" : "nav-link a4"}
                href="#Hireme"
              >
                Hire Me !
              </a>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item pr-2 pl-5 active">
              <a
                className={light ? "nav-link dark1 a1" : "nav-link a1"}
                href="#About"
              >
                À propos <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item pr-2">
              <a
                className={light ? "nav-link dark1 a2" : "nav-link a2"}
                href="#Projects"
              >
                Projets
              </a>
            </li>
            <li className="nav-item pr-2">
              <a
                className={light ? "nav-link dark1 a3" : "nav-link a3"}
                href="#Cantact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item pr-2">
              <a
                className={light ? "nav-link dark1 a4" : "nav-link a4"}
                href="#Hireme"
              >
                Embauche!
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
