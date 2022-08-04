import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="col-12 navbar navbar-expand-lg navbar-dark shadow-5-strong header p-0">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item pr-2 pl-5 active">
            <a className="nav-link  a1" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link a1" href="#About">
              About
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link  a1" href="#Products">
              Products
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link  a1" href="#Cantact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
