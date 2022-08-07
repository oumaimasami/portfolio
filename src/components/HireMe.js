import React from "react";
import "./hireme.css";
import image from "../images/1.png";
export default function HireMe() {
  return (
    <div className="container hire mt-5" id="HireMe">
      <div className="row">
        <div className="col-4 ">
          <img className="hire-image" src={image} alt="." />
        </div>
        <form className=" col-8 text-center">
          <div className="row form-group mt-5 pb-4">
            <input
              type="email"
              className="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="btn HireButton py-2">Hire me !</div>
        </form>
      </div>
    </div>
  );
}
