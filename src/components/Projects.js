import React from "react";
import "./projects.css";
import image1 from "../images/proj1 (1).png";
import image2 from "../images/proj2.png";
import image3 from "../images/proj3.png";

export default function Projects({ light, english }) {
  return (
    <div className="container projects" id="Projects">
      {english ? (
        <h1 className="pl-5 ml-2 mt-2">My Projects</h1>
      ) : (
        <h1 className="pl-5 ml-2 mt-2">Mes Projets</h1>
      )}
      <div className=" project my-5 py-4 row">
        <figure className=" proj-image col-lg-6 col-md-10 col-sm-10">
          <img className="proj-image1" src={image1} alt="." />
        </figure>
        <div
          className={
            light
              ? "col-lg-6 col-md-12 col-sm-12 mb-5 proj-info darkinfo"
              : "col-lg-6 col-md-12 col-sm-12 mb-5 proj-info lightinfo"
          }
        >
          {english ? (
            <h3 className="text-center">
              MERN Project - End of studies project
            </h3>
          ) : (
            <h3 className="text-center">MERN Projet - Projet fin d'études</h3>
          )}
          {english ? (
            <p className="proj-descp my-5">
              - Authentification , reset password using mail verification .{" "}
              <br />- Consult the content of the platform, watch media and
              search. <br />
              - Allow users to edit their personnel informations and manage
              "favorites" , "watch later" listes. <br /> - Allow the
              administrator to manage users and medias.
            </p>
          ) : (
            <p className="proj-descp my-5">
              - Authentification , réinitialisation du mot de passe en utilisant
              la vérification par mail . <br />- Consulter le contenu de la
              plateforme, regarder les médias et faire des recherches. <br />
              - Permettre aux utilisateurs d'éditer leurs informations
              personnelles et de gérer les listes de "favoris", "à voir plus
              tard". <br /> - Permet à l'administrateur de gérer les
              utilisateurs et les médias.
            </p>
          )}
        </div>
      </div>
      <div className=" project my-5 py-4 row">
        <div
          className={
            light
              ? "col-lg-6 col-md-12 col-sm-12 mb-5 proj-info darkinfo"
              : "col-lg-6 col-md-12 col-sm-12 mb-5 proj-info lightinfo"
          }
        >
          {english ? (
            <h3 className="text-center">
              React Native Project - End of study project
            </h3>
          ) : (
            <h3 className="text-center">
              React Native Projet - Projet fin d'études
            </h3>
          )}
          {english ? (
            <p className="proj-descp my-5">
              - Authentification , reset password using mail verification .{" "}
              <br />- Consult the content of the platform, watch media and
              search. <br />
              - Allow users to edit their personnel informations and manage
              "favorites" , "watch later" listes. <br /> - Allow the
              administrator to manage users and medias.
            </p>
          ) : (
            <p className="proj-descp my-5">
              - Authentification , réinitialisation du mot de passe en utilisant
              la vérification par mail . <br />- Consulter le contenu de la
              plateforme, regarder les médias et faire des recherches. <br />
              - Permettre aux utilisateurs d'éditer leurs informations
              personnelles et de gérer les listes de "favoris", "à voir plus
              tard". <br /> - Permet à l'administrateur de gérer les
              utilisateurs et les médias.
            </p>
          )}
        </div>
        <figure className="col-lg-6 col-md-10 col-sm-10 proj-image">
          <img className="proj-image1" src={image2} alt="." />
        </figure>
      </div>
      <div className=" project my-5 py-4 row">
        <figure className="col-lg-6 col-md-10 col-sm-10 proj-image">
          <img className="proj-image1" src={image3} alt="." />
        </figure>
        <div
          className={
            light
              ? "col-lg-6 col-md-12 col-sm-12 mb-5 proj-info darkinfo"
              : "col-lg-6 col-md-12 col-sm-12 mb-5 proj-info lightinfo"
          }
        >
          {english ? (
            <h3 className="text-center">
              ReactJS Project - Charity App Prototype
            </h3>
          ) : (
            <h3 className="text-center">
              ReactJS Projet - Prototype application de charité
            </h3>
          )}
          {english ? (
            <p className="proj-descp my-5">
              - Authentification interface. <br />
              - Allow users to consult children who need help.
              <br />
              - Events and upcoming event calendar interface.
              <br />
              - Consult news of the charity association. <br />- Sponsor
              interface
            </p>
          ) : (
            <p className="proj-descp my-5">
              - Interface d'authentification. <br />
              - Permet aux utilisateurs de consulter les enfants qui ont en
              besion d'aide.
              <br />
              - Interface de calendrier des événements et des événements à
              venir.
              <br />
              - Consultez les actualités de l'association caritative.
              <br />- Interface de parrainage.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
