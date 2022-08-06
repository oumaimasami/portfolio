import React from "react";
import "./projects.css";
import image1 from "../images/proj1 (1).png";
import image2 from "../images/proj2.png";
import image3 from "../images/proj3.png";

export default function Projects() {
  return (
    <div className="container projects">
      <div className=" project mt-5 row">
        <img className="proj-image col-6" src={image1} alt="." />
        <div className="col-6 mb-5 proj-info">
          <h1 className="proj-descp text-center ">
            MERN Project - Projet fin d'étude
          </h1>
          <div className="proj-button mx-2"> demo </div>
        </div>
      </div>
    </div>
  );
}
