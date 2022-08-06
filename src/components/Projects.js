import React from "react";
import "./projects.css";
import image1 from "../images/proj1 (1).png";
import image2 from "../images/proj2.png";
import image3 from "../images/proj3.png";
import YouTubeIcon from "@material-ui/icons/YouTube";
export default function Projects() {
  return (
    <div className="container projects">
      <div className=" project mt-5 row">
        <img className="proj-image col-6" src={image1} alt="." />
        <div className="col-6 mb-5 proj-info">
          <h3 className="text-center">MERN Project - Projet fin d'étude</h3>
          <p className="proj-descp"></p>
          <div className="proj-button mx-2">
            <YouTubeIcon style={{ fontSize: "30px", marginRight: "10px" }} />
            Demo
          </div>
        </div>
      </div>
    </div>
  );
}
