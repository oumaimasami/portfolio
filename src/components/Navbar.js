import React from "react";
import "./navbar.css";

export default function Navbar({ light }) {
  return (
    <nav
      className={
        light
          ? "navbar navbar-expand-lg navbar-light bg-light dark"
          : "navbar navbar-expand-lg navbar-light bg-light"
      }
    >
      <div className="collapse navbar-collapse mr-5" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item pr-2 pl-5 active">
            <a
              className={light ? "nav-link dark a1" : "nav-link  a1"}
              href="#About"
            >
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item pr-2">
            <a
              className={light ? "nav-link dark a2" : "nav-link  a2"}
              href="#Projects"
            >
              Projects
            </a>
          </li>
          <li className="nav-item pr-2">
            <a
              className={light ? "nav-link dark a3" : "nav-link  a3"}
              href="#Cantact"
            >
              Cantact
            </a>
          </li>
          <li className="nav-item pr-2">
            <a
              className={light ? "nav-link dark a4" : "nav-link  a4"}
              href="#HireMe"
            >
              Hire Me !
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
