import React from "react";
import "./projects.css";
import image1 from "../images/proj1 (1).png";
import image2 from "../images/proj2.png";
import image3 from "../images/proj3.png";
import YouTubeIcon from "@material-ui/icons/YouTube";
export default function Projects() {
  return (
    <div className="container projects">
      <div className=" project my-5 row">
        <img className="proj-image col-6" src={image1} alt="." />
        <div className="col-6 mb-5 proj-info">
          <h3 className="text-center">MERN Project - Projet fin d'études</h3>
          <p className="proj-descp my-5">
            - Authentification , reset password using mail verification . <br />
            - Consult the content of the platform, watch media and search.{" "}
            <br />
            - Allow users to edit their personnel informations and manage
            "favorites" , "watch later" listes. <br /> - Allow the administrator
            to manage users and medias.
          </p>
          <div className="proj-button mx-2">
            <YouTubeIcon style={{ fontSize: "30px", marginRight: "10px" }} />
            Demo
          </div>
        </div>
      </div>
      <div className=" project my-5 row">
        <div className="col-6 mb-5 proj-info">
          <h3 className="text-center">
            React Native Project - Projet fin d'étude
          </h3>
          <p className="proj-descp my-5">
            - Authentification , reset password using mail verification . <br />
            - Consult the content of the platform, watch media and search.{" "}
            <br />
            - Allow users to edit their personnel informations and manage
            "favorites" , "watch later" listes. <br /> - Allow the administrator
            to manage users and medias.
          </p>
          <div className="proj-button mx-2">
            <YouTubeIcon style={{ fontSize: "30px", marginRight: "10px" }} />
            Demo
          </div>
        </div>
        <img className="proj-image col-6" src={image2} alt="." />
      </div>
      <div className=" project my-5 row">
        <img className="proj-image col-6" src={image3} alt="." />
        <div className="col-6 mb-5 proj-info">
          <h3 className="text-center">
            ReactJS Project - Charity App Prototype
          </h3>
          <p className="proj-descp my-5">
            - Authentification interface. <br />
            - Allow users to consult children in need and help them.
            <br />
            - Events and upcoming event calendar interface.
            <br />
            - Consult news of the charity association. <br />- Sponsor interface
          </p>
          <div className="proj-button mx-2">
            <YouTubeIcon style={{ fontSize: "30px", marginRight: "10px" }} />
            Demo
          </div>
        </div>
      </div>
    </div>
  );
}
