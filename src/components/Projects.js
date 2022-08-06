import React from "react";
import "./projects.css";
import image1 from "../images/proj1 (1).png";
import image2 from "../images/proj2.png";
import image3 from "../images/proj3.png";

export default function Projects() {
  return (
    <div className="container projects">
      <div className=" project">
        <img className="proj-image mt-5" src={image1} alt="." />
        <p className="proj-descp text-center mt-3">
          MERN Project - Projet fin d'étude
        </p>
        <div className="row justify-content-center mb-5">
          <div className="proj-button mx-2"> demo </div>
          <div className="proj-button mx-2"> code </div>
        </div>
      </div>
    </div>
  );
}
