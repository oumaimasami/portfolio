import React from "react";
import "./hireme.css";
export default function HireMe() {
  return (
    <div className="container d-flex hire" id="HireMe">
      <form className="justify-content-center text-center">
        <div className="row form-group mt-5 mb-3">
          <label className="mx-1" for="exampleFormControlInput1 pt-2">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="btn HireButton">Hire me !</div>
      </form>
    </div>
  );
}
