import React, { useState, useRef } from "react";
import "./hireme.css";
import emailjs from "@emailjs/browser";
import image from "../images/1.png";
import image1 from "../images/2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function HireMe({ english }) {
  const [clicked, setclicked] = useState(false);
  const notify = () => toast("thank you, i will call you soon :)");
  const notifyFR = () => toast("Merci, je vous appelle bientôt :)");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r72yvus",
        "template_0xt807n",
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
    <div className="container hire mb-5 pb-5" id="Hireme">
      <div className="row my-3 py-3 justify-content-center">
        <div className="col-lg-4 col-md-12 col-sm-12">
          {clicked ? (
            <img className="hire-image1" src={image1} alt="." />
          ) : (
            <img className="hire-image" src={image} alt="." />
          )}
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" col-lg-8 col-md-12 col-sm-12 text-center"
        >
          <div className="row pl-4 form-group mt-5 pt-5 pb-4">
            {english ? (
              <input
                type="email"
                className="form-control col-lg-11 col-md-12 col-sm-12  mt-3"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="email"
              />
            ) : (
              <input
                type="email"
                className="form-control col-lg-11 col-md-12 col-sm-12  mt-3"
                id="exampleFormControlInput1"
                placeholder="nom@exemple.com"
                name="email"
              />
            )}
          </div>
          {english ? (
            <button
              className="btn HireButton py-2"
              onClick={() => {
                setclicked(true);
                notify();
              }}
              type="submit"
            >
              Hire !
            </button>
          ) : (
            <button
              className="btn HireButton py-2"
              onClick={() => {
                setclicked(true);
                notifyFR();
              }}
              type="submit"
            >
              Embaucher !
            </button>
          )}
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
