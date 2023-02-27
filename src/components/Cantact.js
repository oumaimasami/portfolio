import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./cantact.css";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import PhoneSharpIcon from "@material-ui/icons/PhoneSharp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Cantact({ english }) {
  const form = useRef();
  const notify = () => toast("message sent");
  const notifyFR = () => toast("message envoyé");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r72yvus",
        "template_6kuh8wl",
        form.current,
        "2BCE8pznkONmSs6JL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container mb-5 pb-5">
      <div className=" row contact" id="Cantact">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="col-lg-6 col-sm-12 col-md-12 card form1 my-5"
        >
          <div className="form-group mt-5 mb-3">
            <label className="mx-1" for="exampleFormControlInput1 pt-2">
              Email
            </label>
            <input
              type="email"
              className="form-control col-12"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="user_email"
            />
          </div>
          <div className="form-group my-2">
            {english ? (
              <label className="mx-1" for="exampleFormControlSelect1">
                Type of project you need me for :
              </label>
            ) : (
              <label className="mx-1" for="exampleFormControlSelect1">
                Type de projet que vous souhaitez :
              </label>
            )}
            <select
              className="form-control col-12"
              id="exampleFormControlSelect1"
              name="typeofproject"
            >
              <option>Freelance</option>
              <option>Frontend (React JS, React Native)</option>
              <option>Backend (NodeJS,ExpressJS)</option>
              <option>Help :) </option>
            </select>
          </div>

          <div className="form-group my-4">
            {english ? (
              <label className="mx-1" for="exampleFormControlTextarea1">
                Ask me a question :)
              </label>
            ) : (
              <label className="mx-1" for="exampleFormControlTextarea1">
                Posez-moi une question :)
              </label>
            )}
            <textarea
              className="form-control text-message col-12"
              id="exampleFormControlTextarea1"
              placeholder="Message .."
              rows="4"
              name="message"
            ></textarea>
          </div>
          {english ? (
            <button
              type="submit"
              className="btn button-contact"
              onClick={notify}
            >
              Send
            </button>
          ) : (
            <button
              type="submit"
              className="btn button-contact"
              onClick={notifyFR}
            >
              Envoyer
            </button>
          )}
          <ToastContainer />
        </form>
        <div className="card informations col-lg-4 col-sm-12 col-md-12  my-2 pl-2">
          {english ? (
            <h2 className="mt-5 mx-5 ">Contact me</h2>
          ) : (
            <h2 className="mt-5 mx-5 ">Contactez moi</h2>
          )}
          <div className="row">
            <PersonPinIcon
              style={{ fontSize: "55px" }}
              className="ml-4 mt-5 col-2"
            />
            <div className="text-cantact col-7 mt-2 pt-5">
              {english ? (
                <span className="bold">Adress : </span>
              ) : (
                <span className="bold">Adresse : </span>
              )}
              beb souika TUNIS 1006
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
              {english ? (
                <span className="bold">Phone : </span>
              ) : (
                <span className="bold">Téléphone : </span>
              )}
              +216 90442724
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
