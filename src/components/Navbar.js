import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse mr-5" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item pr-2 pl-5 active">
            <a className="nav-link  a1" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link a2" href="#About">
              About
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link  a3" href="#Products">
              Products
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link  a4" href="#Cantact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
