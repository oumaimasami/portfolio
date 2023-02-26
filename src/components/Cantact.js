import React from "react";
import "./cantact.css";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import PhoneSharpIcon from "@material-ui/icons/PhoneSharp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
export default function Cantact() {
  return (
    <div className="container mb-5 pb-5">
      <div className=" row contact" id="Cantact">
        <form className="col-lg-6 col-sm-12 col-md-12 card form1 my-5">
          <div className="form-group mt-5 mb-3">
            <label className="mx-1" for="exampleFormControlInput1 pt-2">
              Email
            </label>
            <input
              type="email"
              className="form-control col-10"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group my-2">
            <label className="mx-1" for="exampleFormControlSelect1">
              Type of project you need me for :
            </label>
            <select
              className="form-control col-10"
              id="exampleFormControlSelect1"
            >
              <option>Freelance</option>
              <option>Frontend (React JS, React Native)</option>
              <option>Backend (NodeJS,ExpressJS)</option>
              <option>Help :) </option>
            </select>
          </div>

          <div className="form-group my-4">
            <label className="mx-1" for="exampleFormControlTextarea1">
              Ask me a question :)
            </label>
            <textarea
              className="form-control col-10"
              id="exampleFormControlTextarea1"
              placeholder="Message .."
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn button-contact">
            Send Message
          </button>
        </form>
        <div className="card informations col-lg-4 col-sm-12 col-md-12  my-2 pl-2">
          <h2 className="mt-5 mx-5 ">Contact me</h2>
          <div className="row">
            <PersonPinIcon
              style={{ fontSize: "55px" }}
              className="ml-4 mt-5 col-2"
            />
            <div className="text-cantact col-7 mt-2 pt-5">
              <span className="bold">Adress : </span> beb souika TUNIS 1006
            </div>
          </div>
          <div className="row">
            <EmailSharpIcon
              style={{ fontSize: "42px" }}
              className="ml-4 mt-4 pt-3 col-2"
            />
            <div className="text-cantact col-6 mt-4 pt-3">
              <span className="bold">Email : </span>samioumaima433@gmail.com
            </div>
          </div>
          <div className="row">
            <PhoneSharpIcon
              style={{ fontSize: "42px" }}
              className="ml-4 mt-4 pt-3 col-2"
            />
            <div className="text-cantact col-7 mt-4 pt-3">
              <span className="bold">Phone : </span> +216 90442724
            </div>
          </div>
          <div className="row justify-content-center cantact-end">
            <a href="https://www.facebook.com/oumaima.samiii" target="_blank">
              <FacebookIcon
                className="mx-2"
                style={{ fontSize: "40px", color: "white" }}
              />
            </a>
            <a href="https://www.instagram.com/oumaimasami_/" target="_blank">
              <InstagramIcon
                className="mx-2"
                style={{ fontSize: "40px", color: "white" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/oumaima-sami-568504187/"
              target="_blank"
            >
              <LinkedInIcon
                className="mx-2"
                style={{ fontSize: "40px", color: "white" }}
              />
            </a>
            <a href="https://github.com/oumaimasami" target="_blank">
              <GitHubIcon
                className="mx-2"
                style={{ fontSize: "40px", color: "white" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
