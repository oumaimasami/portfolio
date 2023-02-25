import React from "react";
import "./navbar.css";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
export default function Navbar({ light }) {
  return (
    <nav
      className={
        light
          ? "navbar navbar-expand-lg navbar-light bg-light dark"
          : "navbar navbar-expand-lg navbar-light bg-light"
      }
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FormatListBulletedIcon />
      </button>
      <div class="collapse navbar-collapse mr-5" id="navbarSupportedContent">
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
              Contact
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
