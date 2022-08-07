import React from "react";
import "./hireme.css";
export default function HireMe() {
  return (
    <div className="container hire mt-5" id="HireMe">
      <form className=" text-center">
        <div className="row form-group mt-5 mb-3">
          <input
            type="email"
            className="form-control mt-3"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="btn HireButton py-3">Hire me !</div>
      </form>
    </div>
  );
}
